import { ArrowRight, ArrowUpRight, BookOpen, Code2, KeyRound, ScrollText, Bot } from "lucide-react";
import SEO from "../components/SEO";
import { API_URL, SITE_URL } from "../lib/site";
import { DOCS_PAGES } from "./docs/docsNav";

const ICONS: Record<string, typeof Code2> = {
  "/docs/sdk": Code2,
  "/docs/integration-examples": ScrollText,
  "/docs/authentication": KeyRound,
  "/docs/agent-registration": Bot,
};

export default function Documentation() {
  return (
    <>
      <SEO
        title="Documentation | PayReality"
        description="Developer documentation for PayReality: the Python SDK, integration examples, authentication, agent registration, and the live API reference."
        path="/docs"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": `${SITE_URL}/docs`,
          "name": "Documentation | PayReality",
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-4">DOCUMENTATION</div>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            Build on
            <br />
            <span className="grad-text">Runtime Authority</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            Everything a developer needs to register an agent, submit a signed action, and get a
            signed Evidence record back.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {DOCS_PAGES.map((doc) => {
              const Icon = ICONS[doc.path] ?? BookOpen;
              return (
                <a
                  key={doc.path}
                  href={doc.path}
                  className="glass-card rounded-2xl p-7 flex flex-col group"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}
                  >
                    <Icon size={19} style={{ color: "#7c6fff" }} />
                  </div>
                  <h2
                    className="mb-2"
                    style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4", letterSpacing: "-0.015em" }}
                  >
                    {doc.label}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{doc.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: "#7c6fff" }}>
                    Read
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

          <a
            href={`${API_URL}/docs`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-7 flex items-center justify-between gap-6"
            style={{ border: "1px solid rgba(124,111,255,0.22)", textDecoration: "none" }}
          >
            <div>
              <span
                className="px-3 py-1 rounded-full mono text-xs inline-block mb-3"
                style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)", color: "#a78bfa", letterSpacing: "0.08em" }}
              >
                LIVE
              </span>
              <h2
                className="mb-1"
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4" }}
              >
                API Reference
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The full, interactive API reference, generated directly from the running platform, not
                a static mirror that can drift out of date.
              </p>
            </div>
            <ArrowUpRight size={22} className="flex-shrink-0" style={{ color: "#7c6fff" }} />
          </a>

          <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-4">
            <a href="/resources" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Resources and research
              <ArrowRight size={16} />
            </a>
            <a href="/contact" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Talk to us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
