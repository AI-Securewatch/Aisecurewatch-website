import { ArrowRight, Bell, FileText, Newspaper, Radio, ScrollText, BookOpen, Building2 } from "lucide-react";
import SEO from "../components/SEO";
import { SITE_URL } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

const PLACEHOLDER_CATEGORIES = [
  { icon: BookOpen, title: "Research", desc: "Original research on delegated authority, AI execution risk, and runtime enforcement." },
  { icon: FileText, title: "Whitepapers", desc: "Technical deep dives into PayReality's policy compiler, authority runtime, and evidence architecture." },
  { icon: Building2, title: "Case Studies", desc: "How enterprise teams put Enterprise AI Authority Infrastructure into production." },
  { icon: Newspaper, title: "News", desc: "Company announcements and product milestones." },
  { icon: Radio, title: "Press", desc: "Media coverage and press resources." },
];

export default function Resources() {
  const { openPaperRequest } = useDemoModal();

  return (
    <>
      <SEO
        title="Resources | AI Securewatch"
        description="Insights, research, and technical writing on Enterprise AI Authority Infrastructure, delegated authority, and deterministic AI execution, from AI Securewatch."
        path="/resources"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": `${SITE_URL}/resources`,
          "name": "Resources | AI Securewatch",
          "about": { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-4">RESOURCES</div>
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
            The canonical home for
            <br />
            <span className="grad-text">our thinking</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            Insights, research, and technical writing on Enterprise AI Authority Infrastructure,
            delegated authority, and runtime enforcement, from{" "}
            <a href="/about" style={{ color: "#a78bfa" }}>
              AI Securewatch
            </a>
            . Read the case for the category in{" "}
            <a href="/why-we-exist" style={{ color: "#a78bfa" }}>
              Why We Exist
            </a>
            .
          </p>

          {/* Insights */}
          <div className="mb-20">
            <div className="flex items-baseline justify-between mb-5">
              <h2
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#e8ecf4", letterSpacing: "-0.02em" }}
              >
                Insights
              </h2>
              <span className="mono text-xs" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>
                LIVE
              </span>
            </div>
            <a
              href="/resources/the-missing-iam-layer-for-ai-authority"
              className="glass-card rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6 group"
              style={{ border: "1px solid rgba(124,111,255,0.22)", boxShadow: "0 0 24px rgba(124,111,255,0.06)", textDecoration: "none" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}
              >
                <ScrollText size={24} style={{ color: "#7c6fff" }} />
              </div>
              <div className="flex-1">
                <span
                  className="px-3 py-1 rounded-full mono text-xs inline-block mb-3"
                  style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)", color: "#a78bfa", letterSpacing: "0.08em" }}
                >
                  Insight
                </span>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#e8ecf4", letterSpacing: "-0.015em" }}
                >
                  The Missing IAM Layer for AI Authority
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Enterprise IAM answers who an identity is. It was never built to answer whether a
                  specific action, by an autonomous agent, was actually authorized. Here's why that gap
                  is now one of the most consequential open questions in enterprise computing.
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  By{" "}
                  <a href="/leadership/sean-chihwendu" style={{ color: "#a78bfa" }} onClick={(e) => e.stopPropagation()}>
                    Sean Chihwendu
                  </a>
                  , Founder & CEO
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium flex-shrink-0" style={{ color: "#7c6fff" }}>
                Read insight
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Placeholder categories */}
          <div>
            <div className="flex items-baseline justify-between mb-5">
              <h2
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#e8ecf4", letterSpacing: "-0.02em" }}
              >
                More from AI Securewatch
              </h2>
              <span className="mono text-xs" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>
                COMING SOON
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PLACEHOLDER_CATEGORIES.map((c) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => openPaperRequest(`${c.title} Updates`)}
                  className="glass-card rounded-2xl p-7 flex flex-col text-left w-full cursor-pointer"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <c.icon size={19} style={{ color: "#6b7280" }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium" style={{ color: "#7c6fff" }}>
                    <Bell size={13} />
                    Notify me when this launches
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Cross-links */}
          <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-4">
            <a href="/leadership" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Meet the people behind this research
              <ArrowRight size={16} />
            </a>
            <a href="/about" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              About AI Securewatch
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
