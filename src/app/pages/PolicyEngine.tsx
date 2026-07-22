import {
  ArrowRight,
  ExternalLink,
  FileText,
  GitBranch,
  AlertCircle,
  CheckCircle2,
  Fingerprint,
  Scale,
  ShieldCheck,
  Layers,
} from "lucide-react";
import SEO from "../components/SEO";
import { PLATFORM, SITE_URL } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

const FLOW = [
  { label: "Enterprise Policy", icon: FileText, color: "#7c6fff" },
  { label: "Authority Model", icon: GitBranch, color: "#6366f1" },
  { label: "Runtime Validation", icon: AlertCircle, color: "#3b8cf8" },
  { label: "Execution", icon: CheckCircle2, color: "#22d3ee" },
  { label: "Cryptographic Evidence", icon: Fingerprint, color: "#a78bfa" },
];

const CAPABILITIES = [
  {
    icon: AlertCircle,
    title: "Runtime Policy Evaluation",
    desc: "Every AI agent intent is evaluated against published policy the moment it's formed, not on a review cadence after the fact.",
  },
  {
    icon: Scale,
    title: "Delegated Authority",
    desc: "Existing Delegation of Authority policies, approval matrices, and signing schedules become the source of truth. Nothing is rebuilt from scratch.",
  },
  {
    icon: Layers,
    title: "OPA Integration",
    desc: "Policy compiles to Open Policy Agent and Rego: inspectable, version-controlled rules, not an opaque model making a judgment call.",
  },
  {
    icon: CheckCircle2,
    title: "Runtime Validation",
    desc: "Every intent resolves to one of three outcomes: approve, escalate to human review, or reject, evaluated in sub-millisecond time.",
  },
  {
    icon: GitBranch,
    title: "Policy Compilation",
    desc: "Written policy is compiled once, signed by a human, and versioned like code, so every decision can be traced to the exact rule in force.",
  },
  {
    icon: ShieldCheck,
    title: "Deterministic Enforcement",
    desc: "The same policy and the same input always produce the same decision. No probabilistic judgment sits between an agent and a real action.",
  },
];

export default function PolicyEngine() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Policy Engine | PayReality"
        description="The Policy Engine compiles delegated authority into deterministic, machine-enforceable rules using Open Policy Agent, then evaluates every AI agent intent against them before execution."
        path="/policy-engine"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/policy-engine`,
          "name": "Policy Engine | PayReality",
          "about": { "@id": `${SITE_URL}/#software` },
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">Policy Engine</span>
          </nav>

          {/* Hero */}
          <div className="section-label mb-4">PLATFORM</div>
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
            The <span className="grad-text">Policy Engine</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            Runtime policy evaluation for delegated authority: compiled once, enforced deterministically, every time an
            AI agent acts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button onClick={openDemo} className="btn-primary px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight size={15} />
            </button>
            <a
              href={PLATFORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              View Platform
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Problem */}
          <div className="mb-20">
            <div className="section-label mb-4">THE PROBLEM</div>
            <h2
              className="mb-5"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              Written policy isn't executable policy
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              Every enterprise already operates a Delegation of Authority policy, an approval matrix, a signing
              schedule. These documents state, in advance, who or what may commit the organization, to what extent,
              and under what conditions. Nothing about them stops an AI agent from acting outside that scope, because
              nothing evaluates the policy at the moment the agent tries to act. A written rule and an enforced rule
              are not the same thing.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-20">
            <div className="section-label mb-4">THE SOLUTION</div>
            <h2
              className="mb-5"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              Policy, compiled once. Enforced everywhere.
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              The Policy Engine compiles your existing Delegation of Authority documents into versioned, deterministic
              rules using Open Policy Agent. From there, every AI agent intent is evaluated against the active policy
              automatically, before execution, and resolves to approve, escalate to human review, or reject. Your
              policy doesn't change. What changes is whether it's actually enforced.
            </p>
          </div>

          {/* Architecture overview */}
          <div className="mb-20">
            <div className="section-label mb-4">ARCHITECTURE OVERVIEW</div>
            <h2
              className="mb-8"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              A runtime between AI and your systems of record
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
          </div>

          {/* Key capabilities */}
          <div className="mb-20">
            <div className="section-label mb-4">KEY CAPABILITIES</div>
            <h2
              className="mb-8"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              Six capabilities, one deterministic runtime
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="glass-card rounded-2xl p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
                  >
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

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 sm:p-10 text-center" style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}>
            <h2
              className="mb-4"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", letterSpacing: "-0.02em", color: "#e8ecf4" }}
            >
              See the Policy Engine evaluate a real policy
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Bring an existing Delegation of Authority document. We'll show you it compiled into enforceable policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDemo} className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={15} />
              </button>
              <a href="/manifesto" className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Read the Manifesto
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
