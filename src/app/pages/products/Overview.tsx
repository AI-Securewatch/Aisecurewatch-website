import {
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  GitBranch,
  ScrollText,
  Database,
  Fingerprint,
  Bot,
  Building2,
  FileCheck2,
} from "lucide-react";
import SEO from "../../components/SEO";
import { PLATFORM, SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

const PRODUCTS = [
  { icon: ShieldAlert, color: "#7c6fff", title: "Runtime Authority", desc: "The flagship product: evaluates every AI agent's signed intent and returns a binding decision before execution.", href: "/products/runtime-authority" },
  { icon: GitBranch, color: "#22c55e", title: "Authority Graph", desc: "Models who holds delegated authority, and who it's been extended to, from your existing governance documents.", href: "/products/authority-graph" },
  { icon: ScrollText, color: "#3b8cf8", title: "Runtime Policies", desc: "Compiles delegated authority into deterministic, versioned rules a runtime can evaluate.", href: "/products/runtime-policies" },
  { icon: Database, color: "#a78bfa", title: "Evidence Portal", desc: "The enterprise evidence layer: every decision, signed, searchable, audited, and exportable.", href: "/products/evidence-portal" },
  { icon: Fingerprint, color: "#f59e0b", title: "Authorization Receipts", desc: "The planned evolution of that evidence into a portable, independently verifiable artifact.", href: "/products/authorization-receipts", badge: "Coming Soon" },
];

const FLOW_EXAMPLE = [
  { label: "Agent submits signed Intent", icon: Bot, color: "#3b8cf8" },
  { label: "Authority Graph checked", icon: GitBranch, color: "#22c55e" },
  { label: "Runtime Policy evaluated", icon: ScrollText, color: "#7c6fff" },
  { label: "Decision: Allow / Deny / Human Review", icon: ShieldAlert, color: "#22d3ee" },
  { label: "Evidence recorded", icon: FileCheck2, color: "#a78bfa" },
  { label: "Enterprise system acts (on Allow)", icon: Building2, color: "#94a3b8" },
];

export default function ProductsOverview() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Products | PayReality"
        description="Runtime Authority, the Authority Graph, Runtime Policies, the Evidence Portal, and Authorization Receipts -- five components of one authorization runtime."
        path="/products"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": `${SITE_URL}/products`,
          "name": "Products | PayReality",
          "about": { "@id": `${SITE_URL}/#software` },
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">Products</span>
          </nav>

          {/* Hero */}
          <div className="section-label mb-4">PRODUCTS</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4", maxWidth: 800 }}>
            One runtime, <span className="grad-text">five components</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 680 }}>
            Runtime Authority is not a bundle of separate tools. It's one deterministic runtime, and each
            product below is a component of it -- built to be understood individually, but only
            meaningful together.
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

          {/* Platform overview */}
          <div className="mb-20">
            <div className="section-label mb-4">THE PLATFORM</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Every product answers a different part of one question
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              "Is this AI agent authorized to take this specific action, right now?" isn't answered by a
              single check. It requires knowing who holds delegated authority (the Authority Graph),
              what conditions apply to a given action (Runtime Policies), a deterministic way to combine
              both into one outcome (Runtime Authority), and a record of what was decided and why (the
              Evidence Portal, evolving toward Authorization Receipts). See{" "}
              <a href="/platform" style={{ color: "#a78bfa" }}>Platform</a> for how these fit together
              architecturally.
            </p>
          </div>

          {/* How the products work together */}
          <div className="mb-20">
            <div className="section-label mb-4">HOW THEY WORK TOGETHER</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Not five tools. One chain.
            </h2>
            <div className="glass-card rounded-2xl p-6 sm:p-8" style={{ borderColor: "rgba(124,111,255,0.2)" }}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 justify-center">
                {PRODUCTS.map((p, i) => (
                  <div key={p.title} className="flex items-center gap-3 sm:gap-0">
                    <a
                      href={p.href}
                      className="rounded-xl p-4 flex sm:flex-col items-center text-center gap-3 sm:gap-2 hover:bg-white/5 transition-colors"
                      style={{ width: "100%", minWidth: 130, background: `${p.color}12`, border: `1px solid ${p.color}30`, textDecoration: "none" }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}20` }}>
                        <p.icon size={16} style={{ color: p.color }} />
                      </div>
                      <div className="text-xs text-foreground leading-snug">{p.title}</div>
                    </a>
                    {i < PRODUCTS.length - 1 && (
                      <div className="hidden sm:block w-6 h-px flex-shrink-0" style={{ background: "rgba(124,111,255,0.25)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Five product cards */}
          <div className="mb-20">
            <div className="section-label mb-4">THE FIVE PRODUCTS</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Explore each component
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {PRODUCTS.map((p) => (
                <a key={p.title} href={p.href} className="glass-card rounded-2xl p-7 flex flex-col group" style={{ textDecoration: "none" }}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${p.color}18`, border: `1px solid ${p.color}35` }}>
                      <p.icon size={19} style={{ color: p.color }} />
                    </div>
                    {p.badge && (
                      <span className="mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(124,111,255,0.12)", color: "#a78bfa", border: "1px solid rgba(124,111,255,0.25)" }}>
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4", letterSpacing: "-0.015em" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: p.color }}>
                    Explore {p.title}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Example authorization flow */}
          <div className="mb-20">
            <div className="section-label mb-4">EXAMPLE AUTHORIZATION FLOW</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              One intent, evaluated end to end
            </h2>
            <div className="flex flex-col gap-0">
              {FLOW_EXAMPLE.map((step, i) => (
                <div key={step.label} className="flex gap-4 sm:gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${step.color}18`, border: `1px solid ${step.color}35` }}>
                      <step.icon size={17} style={{ color: step.color }} />
                    </div>
                    {i < FLOW_EXAMPLE.length - 1 && <div className="w-px flex-1 my-1" style={{ background: "rgba(124,111,255,0.2)" }} />}
                  </div>
                  <div className="pb-6 pt-2">
                    <p className="text-sm" style={{ color: "#e8ecf4", fontWeight: 500 }}>{step.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-2" style={{ maxWidth: 680 }}>
              For the full request and response detail behind this flow, see{" "}
              <a href="/developers/runtime-api" style={{ color: "#a78bfa" }}>Runtime API</a> in the
              Developers section, or <a href="/developers/architecture" style={{ color: "#a78bfa" }}>Architecture</a>{" "}
              for how each component fits together.
            </p>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center" style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}>
            <h2 className="mb-4" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", letterSpacing: "-0.02em", color: "#e8ecf4" }}>
              Start with the flagship product
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Runtime Authority is where every intent is actually evaluated -- the best place to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products/runtime-authority" className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Explore Runtime Authority
                <ArrowRight size={15} />
              </a>
              <a href="/developers" className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Read the Developer Docs
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
