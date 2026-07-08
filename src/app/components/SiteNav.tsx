import { useState } from "react";
import { ExternalLink, Menu, Shield, X } from "lucide-react";
import { NAV_LINKS, PLATFORM } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openDemo } = useDemoModal();

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #7c6fff, #3b8cf8)" }}
            >
              <Shield size={16} className="text-white" />
            </div>
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
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontWeight: 450 }}
              >
                {l.label}
              </a>
            ))}
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
        <div className="lg:hidden border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
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
