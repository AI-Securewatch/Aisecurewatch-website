import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { SITE_URL } from "../lib/site";

const LEADERS = [
  {
    name: "Sean Chihwendu",
    title: "Founder & CEO",
    slug: "sean-chihwendu",
    summary:
      "Leads vision, sales, and fundraising. Background in procurement and tender management — the experience that surfaced the delegated-authority gap PayReality closes.",
    accent: "#7c6fff",
  },
  {
    name: "Chukwudi (Nathan) Obiekwe",
    title: "Co-Founder & CTO",
    slug: "nathan-obiekwe",
    summary:
      "Owns engineering end to end. Built PayReality's deterministic authority runtime in Rust, with gRPC and Open Policy Agent, and leads its evidence architecture.",
    accent: "#3b8cf8",
  },
];

export default function Leadership() {
  return (
    <>
      <SEO
        title="Leadership | AI Securewatch"
        description="Meet the leadership team behind AI Securewatch and PayReality: Sean Chihwendu, Founder & CEO, and Chukwudi Obiekwe, Co-Founder & CTO."
        path="/leadership"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": `${SITE_URL}/leadership`,
          "name": "Leadership | AI Securewatch",
          "about": { "@id": `${SITE_URL}/#organization` },
          "mainEntity": [
            { "@id": `${SITE_URL}/#person-sean` },
            { "@id": `${SITE_URL}/#person-nathan` },
          ],
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-label mb-4">LEADERSHIP</div>
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
            Built by the people
            <br />
            <span className="grad-text">accountable for it</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            Every line of PayReality's code is written by a founder. No outsourced development, no
            contractors — just the two people who lead{" "}
            <a href="/about" style={{ color: "#a78bfa" }}>
              AI Securewatch
            </a>
            .
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {LEADERS.map((l) => (
              <a
                key={l.slug}
                href={`/leadership/${l.slug}`}
                className="glass-card rounded-2xl p-8 flex flex-col group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${l.accent}18`, border: `1px solid ${l.accent}30` }}
                >
                  <span
                    style={{
                      fontFamily: "'Onest', system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: l.accent,
                    }}
                  >
                    {l.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <h2
                  className="mb-1"
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#e8ecf4",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {l.name}
                </h2>
                <div className="mono text-xs mb-4" style={{ color: l.accent, letterSpacing: "0.08em" }}>
                  {l.title.toUpperCase()}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{l.summary}</p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: l.accent }}>
                  Read full biography
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
