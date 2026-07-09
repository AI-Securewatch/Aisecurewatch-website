import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import { DemoModalProvider } from "./app/context/DemoModalContext";
import AppRoutes from "./app/AppRoutes";

// Pure-JS render used by scripts/prerender.mjs at build time -- no browser,
// no native binary, so it can't fail the way a headless-Chromium build step
// can. useEffect (and therefore the client-only SEO component's DOM
// mutations) never runs here; that's fine, because prerender.mjs patches the
// <head> tags itself from a separate metadata manifest. This function only
// needs to produce the real page body (including the real <h1>), which is
// plain JSX and renders identically on the server and the client.
export function renderRoute(path: string): string {
  return renderToStaticMarkup(
    <DemoModalProvider>
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    </DemoModalProvider>
  );
}
