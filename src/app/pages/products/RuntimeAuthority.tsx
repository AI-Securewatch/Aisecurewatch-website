import {
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Clock,
  GitBranch,
  ScrollText,
  CheckCircle2,
  Fingerprint,
  Ban,
  UserCheck,
} from "lucide-react";
import SEO from "../../components/SEO";
import { PLATFORM, SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

const LIFECYCLE = [
  { label: "Signed Intent", icon: Fingerprint, color: "#7c6fff" },
  { label: "Authority Graph Evaluation", icon: GitBranch, color: "#6366f1" },
  { label: "Runtime Policy Evaluation", icon: ScrollText, color: "#3b8cf8" },
  { label: "Decision", icon: ShieldAlert, color: "#22d3ee" },
  { label: "Evidence", icon: CheckCircle2, color: "#a78bfa" },
];

const OUTCOMES = [
  { icon: CheckCircle2, title: "Allow", color: "#22c55e", desc: "The intent falls within delegated authority, approval limits, and active policy. Execution proceeds without a human in the loop." },
  { icon: Ban, title: "Deny", color: "#ef4444", desc: "The intent falls outside authority or violates a constraint. Execution is blocked before it happens, not flagged after." },
  { icon: UserCheck, title: "Human Review", color: "#f59e0b", desc: "The intent is inside a defined escalation boundary. A named accountable reviewer resolves it; the resolution is itself recorded." },
];

const BENEFITS = [
  { icon: ShieldAlert, title: "Deterministic, fail-closed", desc: "The same intent, evaluated against the same policy, produces the same decision. When evaluation cannot complete, the default is deny, not allow." },
  { icon: GitBranch, title: "Your governance, not a new one", desc: "Delegation of Authority, approval matrices, and role hierarchies you already operate become the evaluated policy. Nothing is invented on your behalf." },
  { icon: Clock, title: "Before execution, not after", desc: "Evaluation happens at the moment the agent forms an intent, ahead of any real-world effect, not as a downstream audit of what already happened." },
  { icon: Fingerprint, title: "Every decision is evidence", desc: "Allow, Deny, and Human Review all produce a signed record. There is no path from agent intent to action that bypasses evaluation or leaves nothing behind." },
];

export default function RuntimeAuthority() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Runtime Authority | PayReality"
        description="Runtime Authority evaluates AI agent actions against delegated authority before execution, producing a deterministic Allow, Deny, or Human Review decision."
        path="/products/runtime-authority"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/products/runtime-authority`,
          "name": "Runtime Authority | PayReality",
          "about": { "@id": `${SITE_URL}/#software` },
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/platform" className="hover:text-foreground transition-colors">Platform</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">Runtime Authority</span>
          </nav>

          <div className="section-label mb-4">FLAGSHIP PRODUCT</div>
          <h1
            className="mb-6"
            style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}
          >
            <span className="grad-text">Runtime Authority</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 680 }}>
            The infrastructure layer that determines whether an autonomous AI agent is authorized to perform a
            real-world action, evaluated before that action executes.
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

          {/* The problem */}
          <div className="mb-20">
            <div className="section-label mb-4">THE PROBLEM</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              AI agents are moving from generating information to taking actions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4" style={{ maxWidth: 680 }}>
              An agent that drafts an email carries limited downside if it's wrong. An agent that initiates a
              payment, submits a procurement order, modifies a contract, updates an ERP record, changes
              infrastructure configuration, or makes a healthcare-adjacent recommendation carries the same
              consequences a human employee acting outside their authority would carry, except it can act at
              machine speed, at machine scale, and without the institutional friction that normally slows a person
              down long enough for someone to notice.
            </p>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              Enterprises already have governance structures built for exactly this problem: Delegation of
              Authority, approval limits, separation of duties, role hierarchies, accountability models. None of
              them were written with a machine actor in mind, and none of them are currently enforced at the
              moment an AI agent decides to act.
            </p>
          </div>

          {/* Why runtime authorization matters */}
          <div className="mb-20">
            <div className="section-label mb-4">WHY RUNTIME AUTHORIZATION MATTERS</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              A policy that isn't evaluated at the moment of action isn't enforced
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              Logging, monitoring, and after-the-fact review tell you what an agent did. They do not stop it from
              doing the wrong thing first. Runtime authorization moves the check to before execution: the agent's
              intent is evaluated against the organization's actual authority structure, and the action only
              proceeds if that structure permits it. This is the same principle every mature access-control system
              already applies to people and services, extended to autonomous agents, at the speed they operate.
            </p>
          </div>

          {/* How it works */}
          <div className="mb-20">
            <div className="section-label mb-4">HOW IT WORKS</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Every intent passes through the same deterministic path
            </h2>
            <div className="glass-card rounded-2xl p-6 sm:p-8" style={{ borderColor: "rgba(124,111,255,0.2)" }}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 justify-center">
                {LIFECYCLE.map((step, i) => (
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
                    {i < LIFECYCLE.length - 1 && (
                      <div className="hidden sm:block w-6 h-px flex-shrink-0" style={{ background: "rgba(124,111,255,0.25)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6" style={{ maxWidth: 680 }}>
              An agent submits a cryptographically signed intent. Runtime Authority evaluates it against the{" "}
              <a href="/products/authority-graph" style={{ color: "#a78bfa" }}>Authority Graph</a> (who this agent
              is acting on behalf of, and what that principal is entitled to delegate) and the active{" "}
              <a href="/products/runtime-policies" style={{ color: "#a78bfa" }}>Runtime Policies</a> compiled from
              your governance documents. Evaluation is sub-millisecond and deterministic: no model makes a
              judgment call at this stage. For the exact request and response shape, see{" "}
              <a href="/developers/runtime-api" style={{ color: "#a78bfa" }}>Runtime API</a> in the Developers section.
            </p>
          </div>

          {/* Decision lifecycle */}
          <div className="mb-20">
            <div className="section-label mb-4">DECISION LIFECYCLE</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Three outcomes. No fourth path.
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {OUTCOMES.map((o) => (
                <div key={o.title} className="glass-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${o.color}18`, border: `1px solid ${o.color}35` }}>
                    <o.icon size={18} style={{ color: o.color }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}>
                    {o.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise benefits */}
          <div className="mb-20">
            <div className="section-label mb-4">ENTERPRISE BENEFITS</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              What changes for the organization operating it
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {BENEFITS.map((b) => (
                <div key={b.title} className="glass-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}>
                    <b.icon size={18} style={{ color: "#7c6fff" }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}>
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          {/* Related Products */}
          <div className="mb-20">
            <div className="section-label mb-4">RELATED PRODUCTS</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Authority Graph", href: "/products/authority-graph" },
                { label: "Runtime Policies", href: "/products/runtime-policies" },
                { label: "Evidence Portal", href: "/products/evidence-portal" },
                { label: "Authorization Receipts", href: "/products/authorization-receipts" },
              ].map((p) => (
                <a key={p.href} href={p.href} className="glass-card rounded-xl p-5 flex items-center justify-between gap-3 group" style={{ textDecoration: "none" }}>
                  <span className="text-sm font-medium" style={{ fontFamily: "'Onest', system-ui, sans-serif", color: "#e8ecf4" }}>{p.label}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform flex-shrink-0" style={{ color: "#7c6fff" }} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center" style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}>
            <h2 className="mb-4" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", letterSpacing: "-0.02em", color: "#e8ecf4" }}>
              See Runtime Authority evaluate a real intent
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Bring an existing approval policy. We'll show you the decision, in real time, before anything executes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDemo} className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={15} />
              </button>
              <a href="/platform" className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Explore the Platform
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
