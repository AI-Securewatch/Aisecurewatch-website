import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { DOCS_PAGES } from "./docsNav";

export const sectionHeadingStyle = {
  fontFamily: "'Onest', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  letterSpacing: "-0.02em",
  color: "#e8ecf4",
  marginTop: "1rem",
} as const;

interface DocLayoutProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  currentPath: string;
  children: ReactNode;
}

export default function DocLayout({ eyebrow = "DOCUMENTATION", title, subtitle, currentPath, children }: DocLayoutProps) {
  const others = DOCS_PAGES.filter((d) => d.path !== currentPath);

  return (
    <main className="pt-40 pb-32 px-6">
      <article className="max-w-3xl mx-auto">
        <a href="/developers" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
          ← Developers
        </a>

        <div className="section-label mb-4">{eyebrow}</div>
        <h1
          className="mb-4"
          style={{
            fontFamily: "'Onest', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#e8ecf4",
          }}
        >
          {title}
        </h1>
        <p className="text-muted-foreground mb-16" style={{ fontSize: "1.1875rem", lineHeight: 1.5 }}>
          {subtitle}
        </p>

        <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed" style={{ fontSize: "1.0625rem" }}>
          {children}
        </div>

        <div className="mt-20 pt-10 border-t border-border">
          <h2 style={{ ...sectionHeadingStyle, marginTop: 0, marginBottom: "1.25rem" }}>Other documentation</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((doc) => (
              <a
                key={doc.path}
                href={doc.path}
                className="glass-card rounded-xl p-5 flex flex-col group"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="text-sm font-medium mb-1 flex items-center gap-1.5"
                  style={{ fontFamily: "'Onest', system-ui, sans-serif", color: "#e8ecf4" }}
                >
                  {doc.label}
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" style={{ color: "#7c6fff" }} />
                </span>
                <span className="text-xs text-muted-foreground leading-snug">{doc.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
