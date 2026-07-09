// Runs after `vite build`. Boots the built app, visits every real route with a
// headless browser, and overwrites each route's dist HTML with the fully
// rendered output. This exists because the app is a client-rendered SPA: the
// server-delivered HTML otherwise has an empty <body> (just <div id="root">),
// so any crawler or tool that doesn't execute JavaScript sees no H1, no page
// text, and no per-page <title>/meta/JSON-LD -- only what's static in
// index.html's <head>. Real users are unaffected either way: React still
// hydrates on top of this static markup and the app remains fully interactive.
import { chromium } from "playwright";
import { preview } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

const ROUTES = [
  "/",
  "/about",
  "/why-we-exist",
  "/leadership",
  "/leadership/sean-chihwendu",
  "/leadership/nathan-obiekwe",
  "/careers",
  "/resources",
  "/resources/the-missing-iam-layer-for-ai-authority",
  "/contact",
];

function outputPathFor(route) {
  if (route === "/") return path.join(DIST, "index.html");
  return path.join(DIST, route.replace(/^\//, ""), "index.html");
}

async function main() {
  const previewServer = await preview({
    root: ROOT,
    preview: { port: 0 },
  });
  const address = previewServer.httpServer.address();
  const base = `http://localhost:${address.port}`;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of ROUTES) {
    await page.goto(base + route, { waitUntil: "networkidle" });
    // Let the SEO component's useEffect (title/meta/JSON-LD) settle.
    await page.waitForTimeout(150);
    const html = await page.evaluate(() => "<!DOCTYPE html>\n" + document.documentElement.outerHTML);

    const outFile = outputPathFor(route);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    console.log("prerendered", route, "->", path.relative(ROOT, outFile));
  }

  await browser.close();
  await previewServer.close();
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
