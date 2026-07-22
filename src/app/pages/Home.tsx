import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Cpu,
  Shield,
  FileText,
  Activity,
  Users,
  Archive,
  BarChart3,
  Scale,
  Layers,
  Lock,
  ChevronRight,
  AlertCircle,
  Building2,
  Database,
  Network,
  CheckCircle2,
  Send,
  Mail,
  GitBranch,
  FileSignature,
  Fingerprint,
} from "lucide-react";
import { PLATFORM } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

const MODULES = [
  {
    name: "Command Center",
    slug: "command-center",
    icon: Activity,
    desc: "A live view of every authority decision across every AI agent and business system: approved, rejected, or escalated.",
    accent: "#7c6fff",
  },
  {
    name: "Policy Studio",
    slug: "policy-studio",
    icon: FileText,
    desc: "Upload Delegation of Authority documents and compile them into versioned, deterministic rules using Open Policy Agent.",
    accent: "#22d3ee",
  },
  {
    name: "Intent API",
    slug: "intent-api",
    icon: Send,
    desc: "The interface AI agents call to submit an intended action for authorization before a single side effect occurs.",
    accent: "#3b8cf8",
  },
  {
    name: "Authority Engine",
    slug: "authority-engine",
    icon: Shield,
    desc: "The deterministic runtime that evaluates each intent against published policy and returns a binding decision.",
    accent: "#a78bfa",
  },
  {
    name: "Human Review Console",
    slug: "human-review-console",
    icon: Users,
    desc: "A structured queue for the intents your policy routes to a person, with full context and a binding resolution.",
    accent: "#34d399",
  },
  {
    name: "Simulation Sandbox",
    slug: "simulation-sandbox",
    icon: Layers,
    desc: "Run a new or edited policy against historical and synthetic intents to see its effect before you publish it.",
    accent: "#60a5fa",
  },
  {
    name: "Evidence Vault",
    slug: "evidence-vault",
    icon: Archive,
    desc: "An immutable, cryptographically signed record of every decision, the policy version behind it, and the intent that triggered it.",
    accent: "#fb923c",
  },
  {
    name: "Assurance Dashboard",
    slug: "assurance-dashboard",
    icon: BarChart3,
    desc: "Audit-ready reporting on authority outcomes, override rates, and policy coverage across the organization.",
    accent: "#2dd4bf",
  },
  {
    name: "Agent Directory",
    slug: "agent-directory",
    icon: Cpu,
    desc: "The record of which AI systems are permitted to submit intents, and under which policy scope.",
    accent: "#6366f1",
  },
];

const HOW_IT_WORKS = [
  { step: "01", label: "Policy", sub: "Enterprise uploads existing Delegation of Authority policies", icon: FileText, color: "#7c6fff" },
  { step: "02", label: "Compile", sub: "Policies are compiled into deterministic rules using Open Policy Agent", icon: GitBranch, color: "#6366f1" },
  { step: "03", label: "Review", sub: "A human reviews and signs the compiled policy", icon: FileSignature, color: "#3b8cf8" },
  { step: "04", label: "Publish", sub: "The signed policy is published to the runtime", icon: CheckCircle2, color: "#22d3ee" },
  { step: "05", label: "Intent", sub: "An AI agent submits an intent before it executes an action", icon: Send, color: "#2dd4bf" },
  { step: "06", label: "Authority Engine", sub: "PayReality evaluates the intent against published policy", icon: Shield, color: "#a78bfa" },
  { step: "07", label: "Decision", sub: "Approve · Reject · Human Review", icon: AlertCircle, color: "#f59e0b" },
  { step: "08", label: "Evidence Vault", sub: "Immutable, verifiable evidence of the decision is stored", icon: Fingerprint, color: "#fb923c" },
];

const EVIDENCE_ARTIFACTS = [
  {
    tag: "Signed",
    title: "Every decision is signed",
    excerpt:
      "Each Approve, Reject, or Human Review outcome is cryptographically signed at the moment it's made. It is not reconstructed afterward from application logs.",
    meta: "Per-decision",
  },
  {
    tag: "Traceable",
    title: "Policy version provenance",
    excerpt:
      "Every decision record links to the exact signed policy version that was in force at evaluation time, so you can always answer why an outcome happened.",
    meta: "Per-policy version",
  },
  {
    tag: "Immutable",
    title: "Tamper-evident by design",
    excerpt:
      "Decision records cannot be edited or deleted after the fact. The Evidence Vault is an append-only ledger, not an editable log table.",
    meta: "Append-only",
  },
  {
    tag: "Exportable",
    title: "Built for auditors and regulators",
    excerpt:
      "Evidence exports to the format your audit, risk, and compliance teams already use, with no bespoke tooling required to prove authorization.",
    meta: "Audit-ready",
  },
];

const USE_CASES = [
  { name: "Procurement", icon: Layers },
  { name: "Insurance Claims", icon: Shield },
  { name: "Finance", icon: BarChart3 },
  { name: "ERP", icon: Database },
  { name: "HR", icon: Users },
  { name: "Customer Operations", icon: Network },
  { name: "Manufacturing", icon: Building2 },
];

const PERSONAS = [
  {
    role: "Chief Information Officers",
    desc: "Get a definitive, auditable answer to whether an AI agent was authorized before it acted, not a best guess after the fact.",
  },
  {
    role: "Chief Information Security Officers",
    desc: "Extend existing access controls to cover what AI agents are allowed to execute, not just what data they can reach.",
  },
  {
    role: "Enterprise & Chief Architects",
    desc: "Deploy a runtime authority layer between AI agents and systems of record without re-architecting what already works.",
  },
  {
    role: "Chief Risk Officers",
    desc: "Apply the delegated authority discipline your organization already uses for people to every autonomous AI action.",
  },
  {
    role: "Heads of AI & Automation",
    desc: "Move AI from recommending actions to executing them, backed by a runtime that enforces authorization at every step.",
  },
  {
    role: "Internal Audit & Compliance",
    desc: "Produce cryptographically verifiable evidence for every AI decision, ready for regulator, auditor, or board review.",
  },
];

const EXISTING_FRAMEWORKS = [
  { label: "Delegation of Authority", icon: Scale },
  { label: "Approval Matrices", icon: Users },
  { label: "Procurement Policy", icon: FileText },
  { label: "Risk Frameworks", icon: Shield },
  { label: "Internal Controls", icon: Lock },
  { label: "Audit Processes", icon: Archive },
];

export default function Home() {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const { openDemo, openPaperRequest } = useDemoModal();

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="orb-a pulse-soft absolute"
            style={{
              top: "5%",
              left: "15%",
              width: 640,
              height: 640,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124,111,255,0.22) 0%, transparent 70%)",
            }}
          />
          <div
            className="orb-b pulse-soft absolute"
            style={{
              top: "20%",
              right: "5%",
              width: 480,
              height: 480,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,140,248,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="orb-c absolute"
            style={{
              bottom: "10%",
              left: "40%",
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="dot-grid absolute inset-0 opacity-100" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card border">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#7c6fff", boxShadow: "0 0 8px #7c6fff" }}
            />
            <span className="mono text-xs" style={{ color: "#a78bfa", letterSpacing: "0.08em" }}>
              ENTERPRISE AI AUTHORITY INFRASTRUCTURE
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-8"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            The Authority Layer
            <br />
            for{" "}
            <span className="grad-text">Autonomous AI</span>
          </h1>

          {/* Sub headline */}
          <p
            className="mx-auto mb-12 text-muted-foreground leading-relaxed"
            style={{ maxWidth: 620, fontSize: "1.125rem", fontWeight: 400 }}
          >
            Organizations already know how to delegate authority to people.
            They have no infrastructure to delegate it safely to AI. PayReality
            determines whether an AI system is actually authorized to execute a
            business action, before it executes it.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              className="btn-primary px-8 py-4 rounded-xl text-base flex items-center gap-3"
              onClick={openDemo}
            >
              Book a Demo
              <ArrowRight size={16} />
            </button>
            <a
              href={PLATFORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-8 py-4 rounded-xl text-base flex items-center gap-3"
            >
              View Platform
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-3 gap-px max-w-2xl mx-auto">
            {[
              { val: "Pre-execution", label: "Authority decisions" },
              { val: "Deterministic", label: "Approve · Reject · Review" },
              { val: "Cryptographic", label: "Verifiable evidence" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-4 text-center">
                <div
                  className="grad-text mb-1"
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.val}
                </div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground mono">scroll</span>
          <div className="w-px h-8 relative overflow-hidden">
            <div
              className="scroll-dot w-px h-4 rounded-full absolute top-0 left-0"
              style={{ background: "linear-gradient(to bottom, #7c6fff, transparent)" }}
            />
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="section-label mb-4">01 / THE PROBLEM</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              AI is moving from
              <br />
              recommendation to execution
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              As soon as AI begins executing business actions on its own, enterprises need
              infrastructure that can answer one question: is this AI actually authorized
              to do this?
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(124,111,255,0.3), rgba(59,140,248,0.3), transparent)" }}
            />

            <div className="flex flex-col gap-0">
              {[
                { era: "Assistant", desc: "AI answers questions at human request. Humans decide and act.", done: true },
                { era: "Recommendation", desc: "AI proposes an action. A human still approves before anything happens.", done: true },
                { era: "Execution", desc: "AI initiates and executes business actions directly against enterprise systems.", active: true },
                { era: "The Authority Layer", desc: "The infrastructure that determines whether that execution was actually authorized.", highlight: true },
              ].map((step, i) => (
                <div
                  key={step.era}
                  className={`relative flex items-center gap-8 py-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className={`inline-block px-4 py-3 rounded-xl glass-card ${step.highlight ? "border-[rgba(124,111,255,0.3)]" : ""}`}
                      style={step.highlight ? { boxShadow: "0 0 32px rgba(124,111,255,0.12)" } : {}}
                    >
                      <div
                        style={{
                          fontFamily: "'Onest', system-ui, sans-serif",
                          fontWeight: step.highlight ? 700 : 600,
                          fontSize: step.highlight ? "1.1rem" : "1rem",
                          color: step.highlight ? "#a78bfa" : step.active ? "#e8ecf4" : "#6b7280",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        {step.era}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1 max-w-xs">{step.desc}</div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-4 h-4 rounded-full border-2"
                      style={{
                        background: step.highlight ? "#7c6fff" : step.active ? "#3b8cf8" : "#1a1d2e",
                        borderColor: step.highlight ? "#7c6fff" : step.active ? "#3b8cf8" : "rgba(255,255,255,0.12)",
                        boxShadow: step.highlight ? "0 0 20px rgba(124,111,255,0.6)" : step.active ? "0 0 12px rgba(59,140,248,0.4)" : "none",
                      }}
                    />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Delegated Authority Gap ── */}
      <section className="py-32 px-6 relative" style={{ background: "rgba(124,111,255,0.025)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{ background: "radial-gradient(ellipse, rgba(124,111,255,0.08) 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="section-label mb-4">02 / WHY EXISTING INFRASTRUCTURE FAILS</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              Governance exists. Enforcement doesn't.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Organizations have governance committees, IAM, and policy frameworks. None of them
              determine whether an AI is actually authorized to execute a given action.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-center">
            {/* Identity block */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(59,140,248,0.12)", border: "1px solid rgba(59,140,248,0.25)" }}
              >
                <Lock size={24} style={{ color: "#3b8cf8" }} />
              </div>
              <div className="mono text-xs mb-3" style={{ color: "#3b8cf8", letterSpacing: "0.1em" }}>GOVERNANCE & IAM</div>
              <div
                className="mb-3"
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#e8ecf4" }}
              >
                "Who is this, and what's the policy?"
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                Authenticates the system and documents the rule. Neither one evaluates a specific action against it.
              </div>
              <div className="mt-6 px-3 py-1.5 rounded-full inline-block" style={{ background: "rgba(59,140,248,0.1)", border: "1px solid rgba(59,140,248,0.2)" }}>
                <span className="mono text-xs" style={{ color: "#3b8cf8" }}>ALREADY IN PLACE</span>
              </div>
            </div>

            {/* Gap indicator */}
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-full h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(239,68,68,0.4), transparent)" }}
              />
              <div
                className="px-6 py-4 rounded-2xl text-center w-full"
                style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
              >
                <div
                  className="mono text-xs mb-2"
                  style={{ color: "#f87171", letterSpacing: "0.1em" }}
                >
                  THE GAP
                </div>
                <div
                  style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fca5a5" }}
                >
                  Policy ≠ Enforcement
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  A written policy does not stop an AI agent from executing an unauthorized action
                </div>
              </div>
              <div
                className="w-full h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(239,68,68,0.4), transparent)" }}
              />
            </div>

            {/* Authority block */}
            <div
              className="glass-card rounded-2xl p-8 text-center"
              style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}
              >
                <Shield size={24} style={{ color: "#7c6fff" }} />
              </div>
              <div className="mono text-xs mb-3" style={{ color: "#7c6fff", letterSpacing: "0.1em" }}>AUTHORITY RUNTIME (PAYREALITY)</div>
              <div
                className="mb-3"
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#e8ecf4" }}
              >
                "Is this action authorized, right now?"
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                Evaluates the specific intent against published policy and returns a binding decision before execution.
              </div>
              <div className="mt-6 px-3 py-1.5 rounded-full inline-block" style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.25)" }}>
                <span className="mono text-xs" style={{ color: "#a78bfa" }}>THE MISSING LAYER</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
            <div>
              <h3
                className="mb-6"
                style={{
                  fontFamily: "'Onest', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.025em",
                  color: "#e8ecf4",
                }}
              >
                Your policies
                <br />
                already exist.
                <br />
                <span className="grad-text">We make them enforceable.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every enterprise already operates approval matrices, spending limits, delegation of
                authority policies, procurement policies, and risk frameworks. These were written for
                people. PayReality compiles them into rules an AI runtime can enforce, without asking
                you to rebuild any of them.
              </p>
              <a
                href="/#how-it-works"
                className="btn-ghost px-6 py-3 rounded-xl text-sm flex items-center gap-2 inline-flex"
              >
                See how it works
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {EXISTING_FRAMEWORKS.map((f) => (
                <div key={f.label} className="glass-card rounded-xl p-5 flex items-center gap-4 group cursor-default">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
                  >
                    <f.icon size={18} style={{ color: "#7c6fff" }} />
                  </div>
                  <span className="text-sm font-medium text-foreground leading-tight">{f.label}</span>
                </div>
              ))}
              <div
                className="col-span-2 rounded-xl p-5 text-center"
                style={{ background: "linear-gradient(135deg, rgba(124,111,255,0.08), rgba(59,140,248,0.08))", border: "1px solid rgba(124,111,255,0.2)" }}
              >
                <div
                  style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#a78bfa" }}
                >
                  ↓ PayReality compiles these into enforceable rules
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How PayReality Works ── */}
      <section id="how-it-works" className="py-32 px-6 relative" style={{ background: "rgba(13,16,32,0.6)" }}>
        <div className="absolute inset-0 pointer-events-none dot-grid opacity-40" />
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="section-label mb-4">03 / HOW PAYREALITY WORKS</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              A deterministic runtime,
              <br />
              not a review process
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Policy is compiled once and signed by a human. From there, every AI intent is evaluated
              against it automatically, before execution.
            </p>
          </div>

          <div className="flex flex-col items-center">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center w-full max-w-sm">
                <div
                  className="glass-card rounded-2xl p-5 w-full flex items-center gap-5"
                  style={{
                    borderColor: `${step.color}28`,
                    boxShadow: `0 0 24px ${step.color}0a`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${step.color}18`, border: `1px solid ${step.color}30` }}
                  >
                    <step.icon size={20} style={{ color: step.color }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Onest', system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#e8ecf4",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.label}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{step.sub}</div>
                  </div>
                  <div className="ml-auto mono text-xs text-muted-foreground">{step.step}</div>
                </div>
                {i < HOW_IT_WORKS.length - 1 && <div className="arch-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Preview ── */}
      <section id="platform" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="section-label mb-4">04 / THE PLATFORM</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              Nine modules. One authority runtime.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Every component of PayReality works together to compile policy, evaluate intent, and
              record evidence for autonomous AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((mod, i) => (
              <a
                key={mod.slug}
                href={PLATFORM}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-7 flex flex-col group cursor-pointer"
                onMouseEnter={() => setHoveredModule(i)}
                onMouseLeave={() => setHoveredModule(null)}
                style={{
                  boxShadow: hoveredModule === i ? `0 0 32px ${mod.accent}18` : "none",
                  borderColor: hoveredModule === i ? `${mod.accent}30` : "rgba(255,255,255,0.07)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${mod.accent}18`,
                      border: `1px solid ${mod.accent}30`,
                      transition: "background 0.25s",
                    }}
                  >
                    <mod.icon size={20} style={{ color: mod.accent }} />
                  </div>
                  <div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: mod.accent }}
                  >
                    <ExternalLink size={14} />
                  </div>
                </div>

                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#e8ecf4",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {mod.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{mod.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium transition-colors group-hover:opacity-100" style={{ color: mod.accent }}>
                  Launch module
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section id="architecture" className="py-32 px-6" style={{ background: "rgba(13,16,32,0.5)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="section-label mb-4">05 / ARCHITECTURE</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              A runtime between AI and
              <br />
              your systems of record
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A policy compiler, a deterministic evaluation engine, and an evidence vault, sitting
              between every AI agent and the enterprise systems it acts on.
            </p>
          </div>

          {/* Architecture diagram */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Left: Sources */}
            <div className="flex flex-col gap-3">
              <div className="mono text-xs text-center mb-2" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>POLICY & IDENTITY SOURCES</div>
              {["Delegation of Authority Policy", "Approval Matrices", "Enterprise IAM Context", "Risk Frameworks"].map((name) => (
                <div key={name} className="glass-card rounded-xl px-4 py-3 text-sm text-center text-muted-foreground">
                  {name}
                </div>
              ))}
            </div>

            {/* Center: PayReality */}
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-full rounded-2xl p-8 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,111,255,0.12), rgba(59,140,248,0.12))",
                  border: "1px solid rgba(124,111,255,0.3)",
                  boxShadow: "0 0 48px rgba(124,111,255,0.12)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #7c6fff, #3b8cf8)" }}
                >
                  <Shield size={28} className="text-white" />
                </div>
                <div
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#e8ecf4",
                  }}
                >
                  PayReality
                </div>
                <div className="mono text-xs mt-2" style={{ color: "#a78bfa" }}>
                  AUTHORITY RUNTIME
                </div>
                <div className="text-xs text-muted-foreground mt-3 leading-relaxed mb-4">
                  Policy Compiler · OPA-based deterministic evaluation · Human sign-off · Evidence Vault
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Policy Compiler", "OPA", "Deterministic Evaluation", "Evidence Vault"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full mono"
                      style={{ fontSize: "10px", background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.25)", color: "#a78bfa" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Targets */}
            <div className="flex flex-col gap-3">
              <div className="mono text-xs text-center mb-2" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>SYSTEMS OF RECORD</div>
              {["ERP · SAP · Oracle", "Procurement & Finance", "CRM · Customer Ops", "HR & Manufacturing Systems"].map((name) => (
                <div key={name} className="glass-card rounded-xl px-4 py-3 text-sm text-center text-muted-foreground">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Built For ── */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mb-4">06 / BUILT FOR</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              Built for the people
              <br />
              accountable for AI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERSONAS.map((p) => (
              <div key={p.role} className="glass-card rounded-2xl p-7">
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#a78bfa",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.role}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Evidence ── */}
      <section id="evidence" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <div className="section-label mb-4">07 / EVIDENCE</div>
              <h2
                style={{
                  fontFamily: "'Onest', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  letterSpacing: "-0.025em",
                  color: "#e8ecf4",
                }}
              >
                Provable authority,
                <br />
                not just a log line
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md">
                Every Approve, Reject, or Human Review decision generates cryptographically verifiable
                evidence automatically, not on request.
              </p>
            </div>
            <button
              onClick={() => openPaperRequest("Evidence Vault Technical Overview")}
              className="btn-ghost px-5 py-2.5 rounded-xl text-sm flex-shrink-0 inline-flex items-center gap-2"
            >
              Request technical overview
              <Mail size={14} />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {EVIDENCE_ARTIFACTS.map((r, i) => (
              <button
                key={r.title}
                onClick={() => openPaperRequest(r.title)}
                type="button"
                className="glass-card rounded-2xl p-8 group cursor-pointer flex flex-col text-left w-full"
                style={i === 0 ? { border: "1px solid rgba(124,111,255,0.22)", boxShadow: "0 0 24px rgba(124,111,255,0.06)" } : {}}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="px-3 py-1 rounded-full mono text-xs"
                    style={{
                      background: "rgba(124,111,255,0.1)",
                      border: "1px solid rgba(124,111,255,0.2)",
                      color: "#a78bfa",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {r.tag}
                  </span>
                  <span className="mono text-xs text-muted-foreground">{r.meta}</span>
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    color: "#e8ecf4",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.3,
                  }}
                >
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-sm" style={{ color: "#7c6fff" }}>
                  Request details
                  <Mail size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise Use Cases ── */}
      <section id="use-cases" className="py-32 px-6" style={{ background: "rgba(13,16,32,0.5)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mb-4">08 / ENTERPRISE USE CASES</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              Wherever AI executes,
              <br />
              authority has to travel with it
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {USE_CASES.map((ind) => (
              <div
                key={ind.name}
                className="glass-card rounded-xl p-5 text-center group cursor-default flex flex-col items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.18)" }}
                >
                  <ind.icon size={18} style={{ color: "#7c6fff" }} />
                </div>
                <span className="text-xs text-muted-foreground leading-tight text-center">{ind.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Insurance is not PayReality's primary customer — it's an ecosystem partner. The cryptographic evidence
              generated by every runtime decision strengthens underwriting, claims validation, and risk assessment
              for insurers covering autonomous AI deployments.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, rgba(124,111,255,0.12) 0%, transparent 65%)" }}
          />
          <div className="dot-grid absolute inset-0 opacity-30" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <div className="section-label mb-6">09 / GET STARTED</div>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
              lineHeight: 1.08,
            }}
          >
            Every AI action
            <br />
            <span className="grad-text">needs authority.</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-lg leading-relaxed max-w-xl mx-auto">
            Identity proved who the agent is. PayReality proves what it's authorized to do,
            before it does it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              className="btn-primary px-10 py-4 rounded-xl text-base flex items-center gap-3"
              onClick={openDemo}
            >
              Book a Demo
              <ArrowRight size={16} />
            </button>
            <a
              href={PLATFORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-10 py-4 rounded-xl text-base flex items-center gap-3"
            >
              View Platform
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
