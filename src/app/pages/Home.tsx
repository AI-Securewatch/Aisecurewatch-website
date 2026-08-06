import {
  ArrowRight,
  ExternalLink,
  Shield,
  FileText,
  Scale,
  Layers,
  Lock,
  ChevronRight,
  Archive,
  Users,
  Code2,
  Building2,
  Bot,
  Brain,
  Send,
} from "lucide-react";
import { PLATFORM } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

const EXISTING_FRAMEWORKS = [
  { label: "Delegation of Authority", icon: Scale },
  { label: "Approval Matrices", icon: Users },
  { label: "Procurement Policy", icon: FileText },
  { label: "Risk Frameworks", icon: Shield },
  { label: "Internal Controls", icon: Lock },
  { label: "Audit Processes", icon: Archive },
];

// The recurring flow: this exact box-and-connector pattern already appears
// on every Solutions page and on the Products overview, so reusing it here
// (rather than inventing a new diagram style) is what makes it read as one
// consistent architectural concept across the site, not a homepage-only
// graphic.
const AUTHORITY_FLOW = [
  { label: "AI Agent", icon: Bot, color: "#3b8cf8" },
  { label: "Reasons", icon: Brain, color: "#22d3ee" },
  { label: "Requests Execution", icon: Send, color: "#6366f1" },
  { label: "Runtime Authority", icon: Shield, color: "#7c6fff" },
  { label: "Enterprise System", icon: Building2, color: "#a78bfa" },
];

// The four pathways every visitor should be able to name after reading this
// page, matching the site's own top-level information architecture
// (Platform, Products, Developers, Solutions), rather than re-explaining any
// of the four here. There's no dedicated "/products" index page yet (each
// product page stands alone), so Products points at the flagship until one
// exists.
const PATHWAYS = [
  { label: "Platform", desc: "Learn the Runtime Authority architecture: how the Authority Graph, Runtime Policies, and Evidence Portal fit together.", href: "/platform", icon: Layers, color: "#7c6fff" },
  { label: "Products", desc: "Explore the components: Runtime Authority, the Authority Graph, Runtime Policies, the Evidence Portal, and Authorization Receipts.", href: "/products", icon: Code2, color: "#3b8cf8" },
  { label: "Developers", desc: "Integrate Runtime Authority: register an agent, submit a signed intent, and get a decision and evidence back.", href: "/developers", icon: Building2, color: "#22d3ee" },
  { label: "Solutions", desc: "See how Runtime Authority applies to your industry's own delegated authority and approval workflows.", href: "/solutions", icon: Scale, color: "#a78bfa" },
];

export default function Home() {
  const { openDemo } = useDemoModal();

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
            className="mb-4"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            <span className="grad-text">Runtime Authority</span>
          </h1>

          {/* Category line */}
          <p
            className="mx-auto mb-8"
            style={{
              maxWidth: 620,
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
              letterSpacing: "-0.01em",
              color: "#e8ecf4",
            }}
          >
            The Enterprise AI Authority Infrastructure
          </p>

          {/* Sub headline */}
          <p
            className="mx-auto mb-12 text-muted-foreground leading-relaxed"
            style={{ maxWidth: 620, fontSize: "1.125rem", fontWeight: 400 }}
          >
            As AI becomes part of the workforce, organizations need a way to
            preserve the authority they already hold. Runtime Authority
            enforces it: checking whether an AI system is authorized to
            execute a specific action, before it happens, against delegation
            your organization has already granted.
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

      {/* ── 01 / The Shift (AI moving from assistance to execution) ── */}
      <section className="pt-8 pb-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="section-label mb-4">01 / THE SHIFT</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              AI is moving from assistance,
              <br />
              to execution, to workforce
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Organizations are increasingly comfortable with AI executing real-world actions on
              its own. The next step is AI operating as a standing part of the workforce, not a
              tool invoked occasionally. What hasn't kept pace is who decides whether any of that
              activity is allowed.
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
                { era: "Execution", desc: "AI initiates and executes business actions directly against enterprise systems.", done: true },
                { era: "Workforce", desc: "AI operates as a standing participant in the business, initiating actions continuously, not on request.", highlight: true },
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
                          color: step.highlight ? "#a78bfa" : "#6b7280",
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
                        background: step.highlight ? "#7c6fff" : "#1a1d2e",
                        borderColor: step.highlight ? "#7c6fff" : "rgba(255,255,255,0.12)",
                        boxShadow: step.highlight ? "0 0 20px rgba(124,111,255,0.6)" : "none",
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

      {/* ── 02 / Governance was built for people ── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="section-label mb-4">02 / GOVERNANCE, TODAY</div>
          <h2
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "-0.025em",
              color: "#e8ecf4",
            }}
          >
            Existing governance was
            <br />
            <span className="grad-text">built for people.</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every enterprise already operates delegation of authority, approval matrices,
            procurement policy, and risk frameworks. They were written for a person to read,
            interpret, and follow. Nothing about them is evaluated at the moment an agent, rather
            than a person, decides to act.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
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
        </div>
      </section>

      {/* ── 03 / AI reasons; it does not authorize itself ── */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ background: "rgba(13,16,32,0.6)" }}>
        <div className="absolute inset-0 pointer-events-none dot-grid opacity-40" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="section-label mb-4">03 / THE DISTINCTION</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              AI reasons.
              <br />
              <span className="grad-text">It doesn't authorize itself.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              AI can reason, analyze, recommend, negotiate, and plan. None of that means it should
              decide whether a specific action is within its authority. That decision has to come
              from the organization, the same way it already does for every person who acts on the
              organization's behalf.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-7">
              <div className="mono text-xs mb-4" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>WHAT AI DOES</div>
              <div className="flex flex-col gap-2.5">
                {["Reasons", "Analyzes", "Recommends", "Negotiates", "Plans"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#6b7280" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="glass-card rounded-2xl p-7"
              style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}
            >
              <div className="mono text-xs mb-4" style={{ color: "#a78bfa", letterSpacing: "0.1em" }}>WHAT ONLY THE ORGANIZATION DECIDES</div>
              <div className="text-sm text-foreground leading-relaxed">
                Whether this specific action, right now, is within the authority that's actually
                been delegated to this agent.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 / Runtime Authority fills the gap ── */}
      <section id="runtime-authority" className="py-32 px-6 relative" style={{ background: "rgba(124,111,255,0.025)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
            style={{ background: "radial-gradient(ellipse, rgba(124,111,255,0.08) 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="section-label mb-4">04 / RUNTIME AUTHORITY</div>
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
              determine whether an AI is actually authorized to execute a given action. Identity
              asks who you are. Authority asks what you're allowed to do. Runtime Authority is the
              infrastructure that fills that gap.
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

          <div className="max-w-2xl mx-auto text-center mt-16">
            <div className="mono text-xs mb-3" style={{ color: "#6b7280", letterSpacing: "0.12em" }}>
              RUNTIME AUTHORITY, DEFINED
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Runtime Authority is the capability of determining whether an autonomous system has
              delegated authority to perform a specific action, immediately before execution. Not a
              policy on file. Not a log entry after the fact. A decision, made at the moment it matters.
            </p>
          </div>

          {/* Recurring flow: AI Agent -> Reasons -> Requests Execution -> Runtime Authority -> Enterprise System */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="glass-card rounded-2xl p-6 sm:p-8" style={{ borderColor: "rgba(124,111,255,0.2)" }}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 justify-center">
                {AUTHORITY_FLOW.map((step, i) => (
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
                    {i < AUTHORITY_FLOW.length - 1 && (
                      <div className="hidden sm:block w-6 h-px flex-shrink-0" style={{ background: "rgba(124,111,255,0.25)" }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 / PayReality: the Enterprise AI Authority Infrastructure ── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">05 / PAYREALITY</div>
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
                people. PayReality, the Enterprise AI Authority Infrastructure, compiles them into
                rules Runtime Authority can enforce, without asking you to rebuild any of them.
              </p>
              <a
                href="/products/runtime-authority"
                className="btn-ghost px-6 py-3 rounded-xl text-sm flex items-center gap-2 inline-flex"
              >
                See how it works
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {EXISTING_FRAMEWORKS.slice(0, 4).map((f) => (
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
                  ↓ Runtime Authority compiles these into enforceable rules
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore the Platform ── */}
      <section className="py-32 px-6 relative" style={{ background: "rgba(13,16,32,0.6)" }}>
        <div className="absolute inset-0 pointer-events-none dot-grid opacity-40" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="section-label mb-4">06 / EXPLORE THE PLATFORM</div>
            <h2
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              Four ways into the same runtime
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {PATHWAYS.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="glass-card rounded-2xl p-7 flex flex-col group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${p.color}18`, border: `1px solid ${p.color}35` }}
                >
                  <p.icon size={19} style={{ color: p.color }} />
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4", letterSpacing: "-0.015em" }}
                >
                  {p.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: p.color }}>
                  Explore {p.label}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
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
          <div className="section-label mb-6">07 / GET STARTED</div>
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
            Identity proved who the agent is. PayReality enforces what your organization
            already authorized it to do, before it does it.
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
          <a
            href="/demo"
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Or watch the 7-minute demo
            <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
