import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  ExternalLink,
  Menu,
  X,
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

const PLATFORM = "https://pay-reality-demo.vercel.app";

const CONTACT_EMAIL = "sean@aisecurewatch.com";
const CAREERS_EMAIL = "sean@aisecurewatch.com";
const LEGAL_EMAIL = "sean@aisecurewatch.com";

function mailto(to: string, subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${to}?${params.toString()}`;
}

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platform", href: "#platform" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Architecture", href: "#architecture" },
  { label: "Evidence", href: "#evidence" },
  { label: "Company", href: "#company" },
];

const MODULES = [
  {
    name: "Command Center",
    slug: "command-center",
    icon: Activity,
    desc: "A live view of every authority decision — approved, rejected, or escalated — across every AI agent and business system.",
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
      "Each Approve, Reject, or Human Review outcome is cryptographically signed at the moment it's made — not reconstructed afterward from application logs.",
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
      "Evidence exports to the format your audit, risk, and compliance teams already use — no bespoke tooling required to prove authorization.",
    meta: "Audit-ready",
  },
];

const USE_CASES = [
  { name: "Procurement", icon: Layers },
  { name: "Insurance", icon: Shield },
  { name: "Claims", icon: AlertCircle },
  { name: "Finance", icon: BarChart3 },
  { name: "ERP", icon: Database },
  { name: "HR", icon: Users },
  { name: "Customer Operations", icon: Network },
  { name: "Manufacturing", icon: Building2 },
];

const PERSONAS = [
  {
    role: "Chief Information Officers",
    desc: "Get a definitive, auditable answer to whether an AI agent was authorized before it acted — not a best guess after the fact.",
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

const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: MODULES.slice(0, 5).map((m) => ({
      label: m.name,
      href: PLATFORM,
      external: true,
    })),
  },
  {
    heading: "Use Cases",
    links: ["Procurement", "Insurance", "Claims", "Finance", "ERP"].map(
      (label) => ({ label, href: "#use-cases" })
    ),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: mailto(CONTACT_EMAIL, "About PayReality") },
      { label: "Evidence", href: "#evidence" },
      { label: "Careers", href: mailto(CAREERS_EMAIL, "Careers at AI Securewatch") },
      { label: "Contact", href: mailto(CONTACT_EMAIL, "Contact Inquiry: PayReality") },
      { label: "Request Demo", action: "demo" as const },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: mailto(LEGAL_EMAIL, "Privacy Policy Request") },
  { label: "Terms of Service", href: mailto(LEGAL_EMAIL, "Terms of Service Request") },
  { label: "Security", href: mailto(LEGAL_EMAIL, "Security Documentation Request") },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [paperTopic, setPaperTopic] = useState<string | null>(null);
  const [demoForm, setDemoForm] = useState({ name: "", email: "", company: "", message: "" });

  const openDemo = () => {
    setPaperTopic(null);
    setDemoSubmitted(false);
    setDemoForm({ name: "", email: "", company: "", message: "" });
    setDemoOpen(true);
    setMobileOpen(false);
  };

  const openPaperRequest = (topic: string) => {
    setPaperTopic(topic);
    setDemoSubmitted(false);
    setDemoForm({ name: "", email: "", company: "", message: "" });
    setDemoOpen(true);
    setMobileOpen(false);
  };

  const closeDemo = () => setDemoOpen(false);

  const updateDemoField =
    (field: keyof typeof demoForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDemoForm((f) => ({ ...f, [field]: e.target.value }));

  const handleDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = paperTopic
      ? `Technical Overview Request: ${paperTopic}`
      : `Demo Request: ${demoForm.company || demoForm.name}`;
    const body = [
      `Name: ${demoForm.name}`,
      `Work email: ${demoForm.email}`,
      `Company: ${demoForm.company}`,
      ...(paperTopic ? ["", `Requested: ${paperTopic}`] : []),
      "",
      demoForm.message || "No additional details provided.",
    ].join("\n");
    window.location.href = mailto(CONTACT_EMAIL, subject, body);
    setDemoSubmitted(true);
  };

  useEffect(() => {
    if (!demoOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDemo();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [demoOpen]);

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        @keyframes float-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -30px) scale(1.04); }
        }
        @keyframes float-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(24px, 20px) scale(0.96); }
        }
        @keyframes float-c {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-12px, 18px); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.4; }
        }
        @keyframes step-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .orb-a { animation: float-a 10s ease-in-out infinite; }
        .orb-b { animation: float-b 13s ease-in-out infinite; animation-delay: -5s; }
        .orb-c { animation: float-c 9s ease-in-out infinite; animation-delay: -3s; }
        .pulse-soft { animation: pulse-soft 5s ease-in-out infinite; }
        .scroll-dot { animation: scroll-indicator 2s ease-in-out infinite; }
        .grad-text {
          background: linear-gradient(135deg, #a78bfa 0%, #7c6fff 30%, #3b8cf8 70%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-card {
          background: rgba(255,255,255,0.028);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        .glass-card:hover {
          background: rgba(124,111,255,0.05);
          border-color: rgba(124,111,255,0.22);
        }
        .glass-nav {
          background: rgba(7,8,15,0.75);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .btn-primary {
          background: linear-gradient(135deg, #7c6fff, #3b8cf8);
          color: #fff;
          font-family: 'Onest', system-ui, sans-serif;
          font-weight: 600;
          letter-spacing: -0.01em;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 28px rgba(124,111,255,0.35);
        }
        .btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 0 40px rgba(124,111,255,0.5);
        }
        .btn-ghost {
          color: rgba(232,236,244,0.8);
          border: 1px solid rgba(255,255,255,0.1);
          font-family: 'Onest', system-ui, sans-serif;
          font-weight: 500;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .btn-ghost:hover {
          border-color: rgba(124,111,255,0.4);
          color: #e8ecf4;
          background: rgba(124,111,255,0.06);
        }
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 36px 36px;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7c6fff;
        }
        .arch-connector {
          width: 2px;
          height: 32px;
          background: linear-gradient(to bottom, rgba(124,111,255,0.4), rgba(59,140,248,0.4));
          margin: 0 auto;
        }
        html { scroll-behavior: smooth; }
        .form-field {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.875rem;
          color: #e8ecf4;
          font-family: 'Inter', system-ui, sans-serif;
          transition: border-color 0.2s, background 0.2s;
        }
        .form-field::placeholder { color: #6b7280; }
        .form-field:focus {
          outline: none;
          border-color: rgba(124,111,255,0.5);
          background: rgba(124,111,255,0.04);
        }
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-panel { animation: modal-in 0.2s ease-out; }
      `}</style>

      {/* ── Navigation ── */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #7c6fff, #3b8cf8)" }}
              >
                <Shield size={16} className="text-white" />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#e8ecf4",
                    letterSpacing: "-0.02em",
                  }}
                >
                  PayReality
                </span>
                <span
                  className="ml-2 text-xs text-muted-foreground"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px" }}
                >
                  by AI Securewatch
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  style={{ fontWeight: 450 }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={PLATFORM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-4 py-2 rounded-lg text-sm flex items-center gap-2"
              >
                View Platform
                <ExternalLink size={13} />
              </a>
              <button className="btn-primary px-4 py-2 rounded-lg text-sm" onClick={openDemo}>
                Book a Demo
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={PLATFORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost px-4 py-2.5 rounded-lg text-sm text-center flex items-center justify-center gap-2"
                >
                  View Platform <ExternalLink size={13} />
                </a>
                <button className="btn-primary px-4 py-2.5 rounded-lg text-sm text-center" onClick={openDemo}>
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

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
            business action — before it executes it.
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
                href="#how-it-works"
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
              A policy compiler, a deterministic evaluation engine, and an evidence vault — sitting
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
                evidence — automatically, not on request.
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
            Identity proved who the agent is. PayReality proves what it's authorized to do —
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

      {/* ── Footer ── */}
      <footer id="resources" className="border-t border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            <div id="company" className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #7c6fff, #3b8cf8)" }}
                >
                  <Shield size={16} className="text-white" />
                </div>
                <span
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#e8ecf4",
                    letterSpacing: "-0.02em",
                  }}
                >
                  PayReality
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                The enterprise authority layer for autonomous AI. Deterministic, pre-execution authorization with verifiable evidence.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                The flagship platform developed by{" "}
                <span style={{ color: "#a78bfa" }}>AI Securewatch</span>
              </p>
            </div>

            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <div
                  className="mb-5 mono text-xs"
                  style={{ color: "#6b7280", letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  {col.heading}
                </div>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {"action" in l && l.action === "demo" ? (
                        <button
                          onClick={openDemo}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                        >
                          {l.label}
                        </button>
                      ) : (
                        <a
                          href={l.href}
                          target={"external" in l && l.external ? "_blank" : undefined}
                          rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 AI Securewatch. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {LEGAL_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Book a Demo Modal ── */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(5,6,12,0.75)", backdropFilter: "blur(4px)" }}
            onClick={closeDemo}
          />
          <div
            className="modal-panel glass-card relative w-full max-w-md rounded-2xl p-8"
            style={{ background: "rgba(13,16,32,0.97)", border: "1px solid rgba(124,111,255,0.25)" }}
          >
            <button
              onClick={closeDemo}
              aria-label="Close"
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>

            {!demoSubmitted ? (
              <>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}
                >
                  {paperTopic ? (
                    <Mail size={20} style={{ color: "#7c6fff" }} />
                  ) : (
                    <Shield size={20} style={{ color: "#7c6fff" }} />
                  )}
                </div>
                <h3
                  id="demo-modal-title"
                  className="mb-2"
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#e8ecf4",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {paperTopic ? "Request Technical Overview" : "Book a Demo"}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {paperTopic
                    ? `Tell us where to send "${paperTopic}" and we'll follow up directly.`
                    : "Tell us about your organization and our team will reach out within one business day."}
                </p>

                <form onSubmit={handleDemoSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={demoForm.name}
                    onChange={updateDemoField("name")}
                    className="form-field"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work email"
                    value={demoForm.email}
                    onChange={updateDemoField("email")}
                    className="form-field"
                  />
                  <input
                    type="text"
                    required={!paperTopic}
                    placeholder={paperTopic ? "Company (optional)" : "Company"}
                    value={demoForm.company}
                    onChange={updateDemoField("company")}
                    className="form-field"
                  />
                  {!paperTopic && (
                    <textarea
                      placeholder="What would you like to see in the demo? (optional)"
                      value={demoForm.message}
                      onChange={updateDemoField("message")}
                      rows={3}
                      className="form-field"
                      style={{ resize: "none" }}
                    />
                  )}
                  <button
                    type="submit"
                    className="btn-primary px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2 mt-2"
                  >
                    Send Request
                    <Send size={14} />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    This opens your email client addressed to{" "}
                    <a
                      href={mailto(
                        CONTACT_EMAIL,
                        paperTopic ? `Technical Overview Request: ${paperTopic}` : "Demo Request"
                      )}
                      style={{ color: "#a78bfa" }}
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)" }}
                >
                  <CheckCircle2 size={26} style={{ color: "#34d399" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#e8ecf4",
                  }}
                  className="mb-2"
                >
                  Request sent
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Your email client should now be open with a pre-filled message to our team. If it didn't
                  open, email us directly at{" "}
                  <a
                    href={mailto(
                      CONTACT_EMAIL,
                      paperTopic ? `Research Paper Request: ${paperTopic}` : "Enterprise Demo Request"
                    )}
                    style={{ color: "#a78bfa" }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button onClick={closeDemo} className="btn-ghost px-6 py-2.5 rounded-xl text-sm">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
