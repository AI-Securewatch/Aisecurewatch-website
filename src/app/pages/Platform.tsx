import {
  ArrowRight,
  ExternalLink,
  GitBranch,
  ScrollText,
  ShieldAlert,
  Fingerprint,
  Database,
  Link2,
  CheckCircle2,
} from "lucide-react";
import SEO from "../components/SEO";
import { PLATFORM, SITE_URL } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

const LAYERS = [
  {
    icon: GitBranch,
    color: "#6366f1",
    title: "Authority Graph",
    desc: "Who holds authority, who it's delegated to, and what constraints apply, modeled from your existing governance documents.",
    href: "/products/authority-graph",
  },
  {
    icon: ScrollText,
    color: "#3b8cf8",
    title: "Runtime Policies",
    desc: "Deterministic rules, compiled once from your policy, versioned like code, evaluated against every intent.",
    href: "/products/runtime-policies",
  },
];

const OUTPUTS = [
  {
    icon: ShieldAlert,
    color: "#22d3ee",
    title: "Authorization Decision",
    desc: "Allow, Deny, or Human Review: deterministic, sub-millisecond, produced before execution.",
  },
  {
    icon: Database,
    color: "#a78bfa",
    title: "Evidence Portal",
    desc: "Every decision becomes signed, searchable evidence: investigated, audited, and exported today.",
    href: "/products/evidence-portal",
  },
  {
    icon: Fingerprint,
    color: "#7c6fff",
    title: "Authorization Receipt",
    desc: "The planned evolution of that evidence into a portable, self-contained artifact.",
    href: "/products/authorization-receipts",
    badge: "Coming Soon",
  },
  {
    icon: Link2,
    color: "#22c55e",
    title: "Verification",
    desc: "Confirmed independently (by an auditor, insurer, or regulator) without depending on PayReality's live systems.",
    badge: "Coming Soon",
  },
];

export default function PlatformPage() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Platform | PayReality"
        description="How Runtime Authority, the Authority Graph, Runtime Policies, the Evidence Portal, and Authorization Receipts form one deterministic authorization runtime."
        path="/platform"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/platform`,
          "name": "Platform | PayReality",
          "about": { "@id": `${SITE_URL}/#software` },
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">Platform</span>
          </nav>

          <div className="section-label mb-4">PLATFORM</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4", maxWidth: 800 }}>
            One runtime. <span className="grad-text">Every AI agent action, evaluated before it executes.</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontSize: "1.125rem", maxWidth: 700 }}>
            Runtime Authority is not a single feature. It's the runtime that connects your delegated authority,
            your policy, and every AI agent's intent into one deterministic decision, with evidence behind it.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ maxWidth: 700 }}>
            This page is the architecture: how the pieces evaluate an intent, together. For the individual
            products this runtime is built from, and a quick way into any one of them on its own, see{" "}
            <a href="/products" style={{ color: "#a78bfa" }}>Products</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-24">
            <button onClick={openDemo} className="btn-primary px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight size={15} />
            </button>
            <a href={PLATFORM} target="_blank" rel="noopener noreferrer" className="btn-ghost px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              View Platform
              <ExternalLink size={15} />
            </a>
          </div>

          {/* How the pieces fit together */}
          <div className="mb-24">
            <div className="section-label mb-4">HOW IT FITS TOGETHER</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Two inputs, one decision, two layers of evidence
            </h2>

            {/* Inputs */}
            <p className="text-xs mono uppercase tracking-widest text-muted-foreground mb-4">What Runtime Authority evaluates against</p>
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {LAYERS.map((l) => (
                <a key={l.title} href={l.href} className="glass-card rounded-2xl p-6 block hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${l.color}18`, border: `1px solid ${l.color}35` }}>
                    <l.icon size={18} style={{ color: l.color }} />
                  </div>
                  <h3 className="mb-2 flex items-center gap-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}>
                    {l.title}
                    <ArrowRight size={13} className="text-muted-foreground" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
                </a>
              ))}
            </div>

            {/* Arrow down to the runtime */}
            <div className="flex justify-center mb-10">
              <div className="w-px h-10" style={{ background: "rgba(124,111,255,0.25)" }} />
            </div>

            {/* Runtime Authority, the evaluation itself */}
            <a
              href="/products/runtime-authority"
              className="glass-card rounded-2xl p-6 sm:p-8 block hover:bg-white/5 transition-colors mb-10"
              style={{ borderColor: "rgba(124,111,255,0.35)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(124,111,255,0.15)", border: "1px solid rgba(124,111,255,0.35)" }}>
                  <CheckCircle2 size={20} style={{ color: "#7c6fff" }} />
                </div>
                <div>
                  <h3 className="mb-1 flex items-center gap-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8ecf4" }}>
                    Runtime Authority evaluates
                    <ArrowRight size={14} className="text-muted-foreground" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The signed intent, the Authority Graph, and the active Runtime Policy set are evaluated
                    together, deterministically, in sub-millisecond time.
                  </p>
                </div>
              </div>
            </a>

            {/* Arrow down to outputs */}
            <div className="flex justify-center mb-10">
              <div className="w-px h-10" style={{ background: "rgba(124,111,255,0.25)" }} />
            </div>

            {/* Outputs */}
            <p className="text-xs mono uppercase tracking-widest text-muted-foreground mb-4">What comes out of the decision</p>
            <div className="grid md:grid-cols-2 gap-5">
              {OUTPUTS.map((o) => {
                const content = (
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${o.color}18`, border: `1px solid ${o.color}35` }}>
                        <o.icon size={18} style={{ color: o.color }} />
                      </div>
                      {o.badge && (
                        <span className="mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(124,111,255,0.12)", color: "#a78bfa", border: "1px solid rgba(124,111,255,0.25)" }}>
                          {o.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}>
                      {o.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                  </>
                );
                return o.href ? (
                  <a key={o.title} href={o.href} className="glass-card rounded-2xl p-6 block hover:bg-white/5 transition-colors">
                    {content}
                  </a>
                ) : (
                  <div key={o.title} className="glass-card rounded-2xl p-6">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why layered this way */}
          <div className="mb-24">
            <div className="section-label mb-4">WHY IT'S LAYERED THIS WAY</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Authority and policy stay separate because they answer different questions
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 700 }}>
              The Authority Graph answers "who is entitled to delegate what, to whom." Runtime Policies answer
              "under what conditions is a given action permitted." Runtime Authority doesn't collapse these into
              one system, because your organization doesn't either: your org chart and your approval matrix are
              already two different documents, maintained by different people, on different cadences. The
              runtime respects that separation and evaluates both, together, for every intent.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4" style={{ maxWidth: 700 }}>
              Runtime Authority sits independently between your AI systems and your enterprise systems. It
              evaluates the signed intent an agent sends, whatever produced it: it isn't tied to a specific
              LLM, agent framework, or orchestration platform.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4" style={{ maxWidth: 700 }}>
              None of this replaces your organization's governance. It enforces the authority your
              organization already delegates, at the one moment an AI agent's intent becomes a real
              action, the same moment that matters whether that agent is assisting, executing, or
              operating as a standing part of the workforce.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center" style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}>
            <h2 className="mb-4" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", letterSpacing: "-0.02em", color: "#e8ecf4" }}>
              See the full runtime evaluate a real decision
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              From signed intent to decision to evidence, in one session, against your own governance documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDemo} className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={15} />
              </button>
              <a href="/products/runtime-authority" className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Start with Runtime Authority
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
