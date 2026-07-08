import { Shield } from "lucide-react";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

export default function SiteFooter() {
  const { openDemo } = useDemoModal();

  return (
    <footer id="resources" className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div id="company" className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7c6fff, #3b8cf8)" }}
              >
                <Shield size={16} className="text-white" />
              </div>
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
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The enterprise authority layer for autonomous AI. Deterministic, pre-execution authorization with verifiable evidence.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              The flagship platform developed by{" "}
              <a href="/about" style={{ color: "#a78bfa" }}>
                AI Securewatch
              </a>
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div
                className="mb-5 mono text-xs"
                style={{ color: "#6b7280", letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                {col.heading}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"action" in l && l.action === "demo" ? (
                      <button
                        onClick={openDemo}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                      >
                        {l.label}
                      </button>
                    ) : (
                      <a
                        href={l.href}
                        target={"external" in l && l.external ? "_blank" : undefined}
                        rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 AI Securewatch. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
