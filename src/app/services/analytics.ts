// The ONLY file in this app that ever imports mixpanel-browser. Every call
// site elsewhere imports from this module, never from "mixpanel-browser"
// itself. Swapping providers later (PostHog, Amplitude, Azure Application
// Insights) means rewriting the functions below, not touching any page or
// component.
//
// mixpanel-browser is a genuinely large dependency (its default build added
// ~500KB minified to the entry bundle when imported statically, since
// App.tsx, unlike the lazy-loaded pages, is always in the initial
// chunk). It's imported dynamically inside initAnalytics() instead, so it
// becomes its own lazily-fetched chunk that only downloads after first
// paint, and never downloads at all when no token is configured.
//
// Silently does nothing if VITE_MIXPANEL_TOKEN is unset, or if running on
// localhost without VITE_MIXPANEL_DEBUG=true. Every exported function is
// always safe to call regardless of whether analytics is actually active.

type Mixpanel = typeof import("mixpanel-browser").default;

const TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN as string | undefined;
const DEBUG_LOCAL = import.meta.env.VITE_MIXPANEL_DEBUG === "true";

let mixpanel: Mixpanel | null = null;

function isLocalhost(): boolean {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}

// Route path -> the specific named event the master prompt asked for.
// Routes not listed here still get a generic "Page Viewed" (the
// "Automatically Track: Page Views" requirement) rather than nothing.
const PAGE_EVENTS: Record<string, string> = {
  "/": "Home Viewed",
  "/policy-engine": "Platform Page Viewed",
  "/manifesto": "Manifesto Viewed",
  "/about": "About Viewed",
  "/resources": "Blog Viewed", // closest analog: this site's Resources hub is where article/blog-style content lives
  "/contact": "Contact Viewed",
};

// Captured exactly once per browser via Mixpanel's own register_once():
// the correct primitive for "first touch, never overwritten." The
// previous version of this function was called fresh on every
// initAnalytics() (i.e. every page load), which meant `referrer` was
// recomputed from document.referrer each time and silently overwrote the
// true original acquisition referrer the moment a visitor navigated to a
// second page in the same session. register_once() fixes this: only the
// very first call's values are ever persisted.
function captureAcquisitionOnce(): void {
  if (!mixpanel) return;
  const params = new URLSearchParams(window.location.search);
  const props: Record<string, string> = {
    referrer: document.referrer || "direct",
    landing_page: window.location.pathname,
    first_touch_timestamp: new Date().toISOString(),
  };
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = params.get(key);
    if (value) props[key] = value;
  }
  mixpanel.register_once(props);
}

// Understanding Score (analytics-only, never rendered in the UI). Applied
// automatically inside track() so no call site needs to know it exists.
// Only the two website-side milestones from the requested scale apply
// here; the rest (Platform Opened onward) are scored in the platform
// repo's own analytics.ts, since Mixpanel identities aren't currently
// stitched across the two origins. See this file's own notes on that
// gap where acquisition properties are captured.
const UNDERSTANDING_POINTS: Record<string, number> = {
  "Website Opened": 5,
  "Manifesto Viewed": 10,
};

function getScoreNumber(key: string): number {
  const raw = localStorage.getItem(key);
  return raw ? Number(raw) || 0 : 0;
}

function applyUnderstandingScore(event: string): void {
  const points = UNDERSTANDING_POINTS[event];
  if (points === undefined || !mixpanel) return;
  const score = getScoreNumber("payreality_analytics_understanding_score") + points;
  const highest = Math.max(score, getScoreNumber("payreality_analytics_highest_understanding_score"));
  localStorage.setItem("payreality_analytics_understanding_score", String(score));
  localStorage.setItem("payreality_analytics_highest_understanding_score", String(highest));
  mixpanel.people.set({ understanding_score: score, highest_understanding_score: highest });
}

// One delegated listener for the whole document, instead of an onClick
// handler on every "View Platform" link and every external link across
// SiteNav/SiteFooter/Home/PolicyEngine/InsurancePortal/Demo/etc. Fires at
// most one of the two events per click, never both.
function bindLinkTracking(): void {
  document.addEventListener(
    "click",
    (e) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href.startsWith("https://payreality.aisecurewatch.com")) {
        track("Platform Button Clicked", { href, page: window.location.pathname });
        return;
      }
      const isExternal = /^https?:\/\//.test(href) && !href.startsWith(window.location.origin);
      if (isExternal) {
        track("External Link Clicked", { href, page: window.location.pathname });
      }
    },
    { capture: true }
  );
}

export async function initAnalytics(): Promise<void> {
  if (typeof window === "undefined") return; // SSR prerender guard (entry-server.tsx has no window/document)
  if (!TOKEN) return;
  if (isLocalhost() && !DEBUG_LOCAL) return;

  const { default: mp } = await import("mixpanel-browser");
  mp.init(TOKEN, {
    autocapture: false, // this file decides what gets tracked, not Mixpanel's autocapture heuristics
    persistence: "localStorage",
  });
  mixpanel = mp;

  mixpanel.register({ application: "website" });
  captureAcquisitionOnce();
  bindLinkTracking();
  track("Website Opened", { page: window.location.pathname });
}

export function track(event: string, properties?: Record<string, unknown>): void {
  if (!mixpanel) return;
  mixpanel.track(event, properties);
  applyUnderstandingScore(event);
}

// Called on every route change (see App.tsx's AnalyticsPageTracker). Fires
// the specific named event for pages the master prompt called out, or a
// generic "Page Viewed" for everything else. Both still carry the
// application/campaign super properties registered in initAnalytics.
export function page(pathname: string): void {
  const eventName = PAGE_EVENTS[pathname];
  if (eventName) {
    track(eventName, { page: pathname });
  } else {
    track("Page Viewed", { page: pathname });
  }
}
