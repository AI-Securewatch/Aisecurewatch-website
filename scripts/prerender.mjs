// Runs after `vite build` and `vite build --ssr src/entry-server.tsx`. Pure
// Node -- no browser, no native binary -- so it can't fail the way a
// headless-Chromium build step can (see git history: the first attempt at
// this used Playwright and broke every Vercel deploy because the build
// container was missing libnspr4.so with no root access to install it).
//
// For each real route, renders the actual page tree via react-dom/server
// (src/entry-server.tsx) to get real body HTML (including the real <h1>),
// then patches the <head> tags from scripts/route-meta.mjs, since the
// client-only SEO component sets those via a useEffect that never runs
// server-side. Writes the result over dist/<route>/index.html so any
// crawler that doesn't execute JavaScript still sees full content. Real
// users are unaffected: React still mounts via createRoot().render() on
// top of this markup exactly as before.
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { ROUTE_META } from "./route-meta.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SSR_ENTRY = path.join(ROOT, "dist-ssr", "entry-server.js");

const ROUTES = Object.keys(ROUTE_META);

function outputPathFor(route) {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
}

function replaceTag(html, regex, replacement) {
  if (!regex.test(html)) throw new Error(`Template pattern not found: ${regex}`);
  return html.replace(regex, replacement);
}

function patchHead(template, route, meta) {
  const url = `https://aisecurewatch.com${route === "/" ? "/" : route}`;
  let html = template;

  html = replaceTag(html, /<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${meta.description}" />`
  );
  html = replaceTag(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  html = replaceTag(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${meta.title}" />`);
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${meta.description}" />`
  );
  if (meta.type) {
    html = replaceTag(html, /<meta property="og:type" content="[^"]*"\s*\/>/, `<meta property="og:type" content="${meta.type}" />`);
  }
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${meta.title}" />`);
  html = replaceTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${meta.description}" />`
  );

  if (meta.jsonLd) {
    const script = `<script type="application/ld+json" id="page-jsonld">${JSON.stringify(meta.jsonLd)}</script>\n    `;
    html = html.replace("</head>", `${script}</head>`);
  }

  return html;
}

async function main() {
  const { renderRoute } = await import(pathToFileURL(SSR_ENTRY).href);
  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

  for (const route of ROUTES) {
    const bodyHtml = renderRoute(route);
    const meta = ROUTE_META[route];

    let html = patchHead(template, route, meta);
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

    const outFile = outputPathFor(route);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    console.log("prerendered", route, "->", path.relative(ROOT, outFile));
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
