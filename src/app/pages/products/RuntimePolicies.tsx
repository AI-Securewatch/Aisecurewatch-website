import {
  ArrowRight,
  ExternalLink,
  FileText,
  GitBranch,
  AlertCircle,
  CheckCircle2,
  Layers,
  History,
  Tag,
} from "lucide-react";
import SEO from "../../components/SEO";
import { PLATFORM, SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

const FLOW = [
  { label: "Draft", icon: FileText, color: "#7c6fff" },
  { label: "Review", icon: AlertCircle, color: "#6366f1" },
  { label: "Compiled", icon: Layers, color: "#3b8cf8" },
  { label: "Active", icon: CheckCircle2, color: "#22d3ee" },
  { label: "Retired", icon: History, color: "#a78bfa" },
];

const CAPABILITIES = [
  { icon: AlertCircle, title: "Runtime Policy Evaluation", desc: "Every AI agent intent is evaluated against published policy the moment it's formed, resolving to allow, escalate to human review, or deny, in sub-millisecond time, not on a review cadence after the fact." },
  { icon: GitBranch, title: "Deterministic Policy Compilation", desc: "Policy is authored or extracted once and compiled into deterministic rules. The same policy and the same input always produce the same decision: no probabilistic judgment sits between an agent and a real action." },
  { icon: Layers, title: "Inspectable Evaluation Engine", desc: "Compiled policy is inspectable and version-controlled, not an opaque model making a judgment call: every clause that matched a decision is traceable." },
  { icon: Tag, title: "Policy Versioning", desc: "Every compiled policy is a signed, versioned artifact. A decision made under v3 remains explainable as a v3 decision even after v4 ships." },
];

export default function RuntimePolicies() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Runtime Policies | PayReality"
        description="Runtime Policies compile delegated authority into deterministic, enforceable rules, versioned and evaluated against every agent intent before execution."
        path="/products/runtime-policies"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/products/runtime-policies`,
          "name": "Runtime Policies | PayReality",
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
            <span className="text-foreground">Runtime Policies</span>
          </nav>

          <div className="section-label mb-4">PRODUCT</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            <span className="grad-text">Runtime Policies</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            Deterministic policy, compiled once, versioned like code, and enforced every time an AI agent acts.
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

          <div className="mb-20">
            <div className="section-label mb-4">THE PROBLEM</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Written policy isn't executable policy
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              Every enterprise already operates a Delegation of Authority policy, an approval matrix, a signing
              schedule. These documents state, in advance, who or what may commit the organization, to what
              extent, and under what conditions. Nothing about them stops an AI agent from acting outside that
              scope, because nothing evaluates the policy at the moment the agent tries to act. A written rule and
              an enforced rule are not the same thing.
            </p>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">THE SOLUTION</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Policy, compiled once. Enforced everywhere.
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              Runtime Policies compiles your existing Delegation of Authority documents into versioned,
              deterministic rules. From there, every AI agent intent is evaluated against the active policy
              automatically, before execution, and resolves to allow, escalate to human review, or deny. Your
              policy doesn't change. What changes is whether it's actually enforced. For what a compiled policy
              actually looks like, see{" "}
              <a href="/developers/runtime-policies" style={{ color: "#a78bfa" }}>Runtime Policies</a> in the
              Developers section.
            </p>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">POLICY LIFECYCLE</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Every policy moves through the same states
            </h2>
            <div className="glass-card rounded-2xl p-6 sm:p-8" style={{ borderColor: "rgba(124,111,255,0.2)" }}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 justify-center">
                {FLOW.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 sm:gap-0">
                    <div
                      className="rounded-xl p-4 flex sm:flex-col items-center text-center gap-3 sm:gap-2"
                      style={{ width: "100%", minWidth: 130, background: `${step.color}12`, border: `1px solid ${step.color}30` }}
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
              A policy is drafted, reviewed by an accountable human, compiled into deterministic rules, and
              published as the active version. Retiring a policy doesn't delete it: every decision made under a
              since-retired version remains explainable against the exact version that was active when it was made.
            </p>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">KEY CAPABILITIES</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Four capabilities, one deterministic runtime
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {CAPABILITIES.map((c) => (
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

          {/* Related Products */}
          <div className="mb-20">
            <div className="section-label mb-4">RELATED PRODUCTS</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Runtime Authority", href: "/products/runtime-authority" },
                { label: "Authority Graph", href: "/products/authority-graph" },
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
              See Runtime Policies evaluate a real policy
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Bring an existing Delegation of Authority document. We'll show you it compiled into enforceable policy.
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
