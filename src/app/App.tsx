import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router";
import { DemoModalProvider } from "./context/DemoModalContext";
import AppRoutes from "./AppRoutes";
import { initAnalytics, page } from "./services/analytics";

// Only ever rendered from main.tsx (the real browser entry). entry-server.tsx
// renders AppRoutes directly under StaticRouter, never this component, so
// initAnalytics() here is never reached during SSR prerendering. Lives inside
// BrowserRouter (needs router context for useLocation) but outside AppRoutes,
// which stays untouched since it's shared with the SSR entry.
function AnalyticsPageTracker() {
  const location = useLocation();
  useEffect(() => {
    page(location.pathname);
  }, [location.pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <DemoModalProvider>
      <BrowserRouter>
        <AnalyticsPageTracker />
        <AppRoutes />
      </BrowserRouter>
    </DemoModalProvider>
  );
}
