import {
  ArrowRight,
  FileText,
  AlertCircle,
  CheckCircle2,
  Fingerprint,
  TrendingUp,
  Eye,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import SEO from "../components/SEO";
import { CONTACT_EMAIL, SITE_URL, mailto } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

const FLOW = [
  { label: "Runtime Validation", icon: AlertCircle, color: "#3b8cf8" },
  { label: "Execution", icon: CheckCircle2, color: "#22d3ee" },
  { label: "Cryptographic Evidence", icon: Fingerprint, color: "#a78bfa" },
];

const CAPABILITIES = [
  {
    icon: Fingerprint,
    title: "Runtime Authority Evidence",
    desc: "Every decision produces a cryptographically signed authority certificate: what was requested, under which policy, with what outcome, at what time.",
  },
  {
    icon: Eye,
    title: "Underwriting Visibility",
    desc: "Structured, exportable decision history that supports underwriting AI performance liability, without requiring access to the underlying agent.",
  },
  {
    icon: TrendingUp,
    title: "AI Risk Telemetry",
    desc: "Aggregate visibility into authority outcomes and override rates across an insured's autonomous AI deployment.",
  },
  {
    icon: FileCheck,
    title: "Claims Support",
    desc: "When a claim arises, an independently verifiable record of exactly what policy was active and what was decided, not a reconstruction from memory.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Assurance",
    desc: "Evidence is generated as a structural output of every decision, not assembled on request, so assurance doesn't depend on a point-in-time audit.",
  },
  {
    icon: FileText,
    title: "Verifiable Evidence",
    desc: "Cryptographic integrity that can be checked independently, by a party with no access to the system that produced the record.",
  },
];

export default function InsurancePortal() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Insurance Portal | PayReality"
        description="How PayReality's cryptographic evidence supports underwriting, claims, and continuous risk assurance for insurers covering autonomous AI deployments."
        path="/insurance-portal"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/insurance-portal`,
          "name": "Insurance Portal | PayReality",
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
            <span className="text-foreground">Insurance Portal</span>
          </nav>

          {/* Hero */}
          <div className="section-label mb-4">ECOSYSTEM</div>
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
            The <span className="grad-text">Insurance Portal</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            How PayReality's cryptographic evidence supports underwriting, claims, and continuous risk assurance for
            insurers covering autonomous AI deployments.
          </p>
          <div
            className="rounded-xl px-5 py-4 mb-10 inline-block"
            style={{ background: "rgba(124,111,255,0.06)", border: "1px solid rgba(124,111,255,0.18)" }}
          >
            <p className="text-sm text-muted-foreground" style={{ maxWidth: 560 }}>
              Insurance is not PayReality's primary customer — it's an ecosystem partner. This page exists for the
              underwriters and claims teams who rely on our evidence, not as a direct purchase path.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button onClick={openDemo} className="btn-primary px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight size={15} />
            </button>
            <a
              href={mailto(CONTACT_EMAIL, "Insurance Partner Inquiry: PayReality")}
              className="btn-ghost px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              Contact for Partnership
            </a>
          </div>

          {/* Problem */}
          <div className="mb-20">
            <div className="section-label mb-4">THE PROBLEM</div>
            <h2
              className="mb-5"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              Insurers can't price what they can't verify
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              Insurers launching AI performance liability products cannot price policies or underwrite risk without
              verifiable telemetry. Logs and application-level monitoring describe a system's own account of itself,
              produced by the system whose behavior is in question. That isn't enough to price liability or resolve a
              claim, and it constrains how far the AI liability insurance market can grow.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-20">
            <div className="section-label mb-4">THE SOLUTION</div>
            <h2
              className="mb-5"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              Evidence built for outside verification
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              Every PayReality decision generates a cryptographically signed authority certificate at the moment it's
              made: what was requested, which policy was active, and what was decided. It's structured so an insurer
              with no access to the underlying system can independently verify it's authentic, not a narrative
              assembled after the fact by the organization under review.
            </p>
          </div>

          {/* Architecture overview */}
          <div className="mb-20">
            <div className="section-label mb-4">ARCHITECTURE OVERVIEW</div>
            <h2
              className="mb-8"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              What insurers can verify
            </h2>
            <div className="glass-card rounded-2xl p-6 sm:p-8" style={{ borderColor: "rgba(124,111,255,0.2)" }}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 justify-center">
                {FLOW.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 sm:gap-0">
                    <div
                      className="rounded-xl p-4 flex sm:flex-col items-center text-center gap-3 sm:gap-2"
                      style={{ width: "100%", minWidth: 150, background: `${step.color}12`, border: `1px solid ${step.color}30` }}
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
              <p className="text-xs text-muted-foreground text-center mt-6">
                The certificate produced at the final stage is independently verifiable using a public cryptographic
                key — by an auditor, regulator, or insurer, with no access to PayReality itself.
              </p>
            </div>
          </div>

          {/* Key capabilities */}
          <div className="mb-20">
            <div className="section-label mb-4">KEY CAPABILITIES</div>
            <h2
              className="mb-8"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              Six capabilities for the insurance ecosystem
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
              Underwriting or evaluating AI liability risk?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Talk to us about what evidence looks like from the outside — as an insurer, auditor, or regulator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={mailto(CONTACT_EMAIL, "Insurance Partner Inquiry: PayReality")}
                className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2"
              >
                Contact for Partnership
                <ArrowRight size={15} />
              </a>
              <button onClick={openDemo} className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
