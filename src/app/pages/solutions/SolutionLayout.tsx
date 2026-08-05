import type { LucideIcon } from "lucide-react";
import { ArrowRight, ExternalLink, Bot, ShieldAlert, Building2, FileCheck2 } from "lucide-react";
import SEO from "../../components/SEO";
import { PLATFORM, SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

export interface UseCase {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface SolutionLayoutProps {
  industryLabel: string;
  path: string;
  metaDescription: string;
  headline: React.ReactNode;
  oneLiner: string;
  problemTitle: string;
  problemBody: string[];
  useCases: UseCase[];
  whyBody: string[];
}

// The shared structure every /solutions/* page follows: hero, industry
// problem, the (identical, on purpose) Runtime Authority flow, use cases,
// why, and the same five Related Products links every time. Only the copy
// and use-case data differ per industry: this is the "no duplicate
// content between pages" requirement enforced at the code level, not just
// the writing level.
const FLOW = [
  { label: "AI Agent", icon: Bot, color: "#3b8cf8" },
  { label: "Runtime Authority", icon: ShieldAlert, color: "#7c6fff" },
  { label: "Enterprise Systems", icon: Building2, color: "#22d3ee" },
  { label: "Evidence & Authorization Receipts", icon: FileCheck2, color: "#a78bfa" },
];

const RELATED_PRODUCTS = [
  { label: "Runtime Authority", href: "/products/runtime-authority" },
  { label: "Authority Graph", href: "/products/authority-graph" },
  { label: "Runtime Policies", href: "/products/runtime-policies" },
  { label: "Evidence Portal", href: "/products/evidence-portal" },
  { label: "Authorization Receipts", href: "/products/authorization-receipts" },
];

export default function SolutionLayout({
  industryLabel,
  path,
  metaDescription,
  headline,
  oneLiner,
  problemTitle,
  problemBody,
  useCases,
  whyBody,
}: SolutionLayoutProps) {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title={`${industryLabel} | PayReality Solutions`}
        description={metaDescription}
        path={path}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}${path}`,
          "name": `${industryLabel} | PayReality Solutions`,
          "about": { "@id": `${SITE_URL}/#software` },
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/solutions" className="hover:text-foreground transition-colors">Solutions</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{industryLabel}</span>
          </nav>

          {/* Hero */}
          <div className="section-label mb-4">SOLUTIONS</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            {headline}
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 680 }}>
            {oneLiner}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button onClick={openDemo} className="btn-primary px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight size={15} />
            </button>
            <a href={PLATFORM} target="_blank" rel="noopener noreferrer" className="btn-ghost px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              View Platform
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Industry Problem */}
          <div className="mb-20">
            <div className="section-label mb-4">THE PROBLEM</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              {problemTitle}
            </h2>
            {problemBody.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0" style={{ maxWidth: 680 }}>
                {p}
              </p>
            ))}
          </div>

          {/* Runtime Authority in this industry: identical flow every page, on purpose */}
          <div className="mb-20">
            <div className="section-label mb-4">RUNTIME AUTHORITY IN {industryLabel.toUpperCase()}</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              The same runtime, evaluating your governance
            </h2>
            <div className="glass-card rounded-2xl p-6 sm:p-8" style={{ borderColor: "rgba(124,111,255,0.2)" }}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 justify-center">
                {FLOW.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 sm:gap-0">
                    <div
                      className="rounded-xl p-4 flex sm:flex-col items-center text-center gap-3 sm:gap-2"
                      style={{ width: "100%", minWidth: 140, background: `${step.color}12`, border: `1px solid ${step.color}30` }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${step.color}20` }}>
                        <step.icon size={16} style={{ color: step.color }} />
                      </div>
                      <div className="text-xs text-foreground leading-snug">{step.label}</div>
                    </div>
                    {i < FLOW.length - 1 && (
                      <div className="hidden sm:block w-6 h-px flex-shrink-0" style={{ background: "rgba(124,111,255,0.25)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6" style={{ maxWidth: 680 }}>
              Nothing about this path changes by industry: the same{" "}
              <a href="/products/runtime-authority" style={{ color: "#a78bfa" }}>Runtime Authority</a> engine
              evaluates every Intent against your own{" "}
              <a href="/products/authority-graph" style={{ color: "#a78bfa" }}>Authority Graph</a> and{" "}
              <a href="/products/runtime-policies" style={{ color: "#a78bfa" }}>Runtime Policies</a>. What
              changes is whose governance it's evaluating, and what the workflow on either side of it looks like.
            </p>
          </div>

          {/* Example Use Cases */}
          <div className="mb-20">
            <div className="section-label mb-4">EXAMPLE USE CASES</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Where this shows up in {industryLabel.toLowerCase()}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {useCases.map((c) => (
                <div key={c.title} className="glass-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}>
                    <c.icon size={18} style={{ color: "#7c6fff" }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}>
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Runtime Authority */}
          <div className="mb-20">
            <div className="section-label mb-4">WHY RUNTIME AUTHORITY</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              A governance document was never evaluated at the moment of action
            </h2>
            {whyBody.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0" style={{ maxWidth: 680 }}>
                {p}
              </p>
            ))}
          </div>

          {/* Related Products: identical five links every page, on purpose */}
          <div className="mb-20">
            <div className="section-label mb-4">RELATED PRODUCTS</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {RELATED_PRODUCTS.map((p) => (
                <a key={p.href} href={p.href} className="glass-card rounded-xl p-5 flex items-center justify-between gap-3 group" style={{ textDecoration: "none" }}>
                  <span className="text-sm font-medium" style={{ fontFamily: "'Onest', system-ui, sans-serif", color: "#e8ecf4" }}>{p.label}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform flex-shrink-0" style={{ color: "#7c6fff" }} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center" style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}>
            <h2 className="mb-4" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", letterSpacing: "-0.02em", color: "#e8ecf4" }}>
              See Runtime Authority evaluate a real {industryLabel.toLowerCase()} workflow
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Bring an existing approval policy from your organization. We'll show you the decision, in real
              time, before anything executes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDemo} className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={15} />
              </button>
              <a href="/solutions" className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                See All Solutions
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
