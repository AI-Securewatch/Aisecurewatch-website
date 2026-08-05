import { useEffect, useRef, useState } from "react";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import { NAV_LINKS, PLATFORM } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

type NavLink = (typeof NAV_LINKS)[number];

// Type guard: distinguishes a flat link ({label, href}) from a grouped one
// ({label, groups: [...]}) without widening every NAV_LINKS consumer to
// handle both shapes; only this file needs to branch on it.
function hasGroups(link: NavLink): link is NavLink & { groups: NonNullable<Extract<NavLink, { groups: unknown }>["groups"]> } {
  return "groups" in link && Array.isArray((link as { groups?: unknown }).groups);
}

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const { openDemo } = useDemoModal();

  // Close an open desktop dropdown on outside click. The dropdown has no
  // backdrop of its own (it's a small panel, not a modal), so this is the
  // only thing that closes it besides picking a link or re-toggling it.
  useEffect(() => {
    if (!openDropdown) return;
    function onClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [openDropdown]);

  // Escape closes whichever dropdown/menu is open and returns focus to its
  // trigger, so keyboard users are never left with an open panel and no way
  // to dismiss it short of tabbing all the way through its links.
  useEffect(() => {
    if (!openDropdown && !mobileOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (openDropdown) {
        const trigger = dropdownTriggerRefs.current[openDropdown];
        setOpenDropdown(null);
        trigger?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openDropdown, mobileOpen]);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img src="/payreality-logo.png" alt="" className="w-8 h-8 rounded-lg" />
            <div>
              <span
                style={{
                  fontFamily: "'Onest', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#e8ecf4",
                  letterSpacing: "-0.02em",
                }}
              >
                PayReality
              </span>
              <span
                className="ml-2 text-xs text-muted-foreground"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px" }}
              >
                by AI Securewatch
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) =>
              hasGroups(l) ? (
                <div key={l.label} className="relative">
                  <button
                    ref={(el) => { dropdownTriggerRefs.current[l.label] = el; }}
                    onClick={() => setOpenDropdown(openDropdown === l.label ? null : l.label)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    style={{ fontWeight: 450 }}
                    aria-expanded={openDropdown === l.label}
                  >
                    {l.label}
                    <ChevronDown size={13} style={{ transform: openDropdown === l.label ? "rotate(180deg)" : undefined, transition: "transform 0.15s" }} />
                  </button>
                  {openDropdown === l.label && (
                    <div
                      className="glass-card themed-scroll absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl p-2 z-50"
                      style={{
                        width: 320,
                        // .glass-card's default background is ~3% opacity.
                        // That's fine for a card sitting on a calm dark
                        // background, but not enough to fully obscure page
                        // content (hero headlines, body text) behind a
                        // popover menu: it ghosts through and reads as the
                        // menu and the page "overlapping". Near-opaque
                        // override here only.
                        background: "rgba(9,10,18,0.98)",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
                        // Solutions has 8 groups; on shorter viewports (or
                        // with a browser toolbar eating vertical space) that
                        // content is taller than the space actually left
                        // below the nav, and it had no way to reach the
                        // items that got cut off. Cap the height relative to
                        // the viewport and let the panel scroll internally.
                        maxHeight: "calc(100vh - 96px)",
                        overflowY: "auto",
                      }}
                    >
                      {l.groups.map((g) => (
                        <a
                          key={g.label}
                          href={g.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                        >
                          <div>
                            <div className="text-sm text-foreground" style={{ fontWeight: 500 }}>
                              {g.label}
                            </div>
                            {g.desc && <div className="text-xs text-muted-foreground mt-0.5">{g.desc}</div>}
                          </div>
                          {"badge" in g && g.badge && (
                            <span
                              className="mono flex-shrink-0 text-[10px] px-2 py-0.5 rounded-full"
                              style={{ background: "rgba(124,111,255,0.12)", color: "#a78bfa", border: "1px solid rgba(124,111,255,0.25)" }}
                            >
                              {g.badge}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  style={{ fontWeight: 450 }}
                >
                  {l.label}
                </a>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PLATFORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-4 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              View Platform
              <ExternalLink size={13} />
            </a>
            <button className="btn-primary px-4 py-2 rounded-lg text-sm" onClick={openDemo}>
              Book a Demo
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-border"
          style={{
            // This sits inside <nav>, which is position: fixed, so when
            // it opens it overlays page content below rather than pushing
            // it down. It has no background of its own, so it was showing
            // whatever page content sat underneath through .glass-nav's
            // 75%-opacity backdrop. Same near-opaque override as the
            // desktop dropdown panels, for the same reason.
            background: "rgba(9,10,18,0.98)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) =>
              hasGroups(l) ? (
                <div key={l.label}>
                  <button
                    onClick={() => setMobileGroupOpen(mobileGroupOpen === l.label ? null : l.label)}
                    className="w-full flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {l.label}
                    <ChevronDown size={14} style={{ transform: mobileGroupOpen === l.label ? "rotate(180deg)" : undefined, transition: "transform 0.15s" }} />
                  </button>
                  {mobileGroupOpen === l.label && (
                    <div className="flex flex-col gap-1 pl-4 pb-2">
                      {l.groups.map((g) => (
                        <a
                          key={g.label}
                          href={g.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                        >
                          {g.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              )
            )}
            <div className="flex flex-col gap-3 pt-3">
              <a
                href={PLATFORM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-4 py-2.5 rounded-lg text-sm text-center flex items-center justify-center gap-2"
              >
                View Platform <ExternalLink size={13} />
              </a>
              <button className="btn-primary px-4 py-2.5 rounded-lg text-sm text-center" onClick={openDemo}>
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
