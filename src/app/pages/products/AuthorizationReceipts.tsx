import {
  ArrowRight,
  Fingerprint,
  ShieldCheck,
  Building2,
  Scale,
  Link2,
  EyeOff,
} from "lucide-react";
import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

const PRINCIPLES = [
  { icon: Fingerprint, title: "Portable by construction", desc: "A receipt is a self-contained artifact, not a database row. Verifying one won't require querying PayReality's live systems." },
  { icon: ShieldCheck, title: "Cryptographic integrity", desc: "Every receipt is signed. Tampering with any field after issuance is detectable without trusting the platform that issued it." },
  { icon: Link2, title: "Independent verification", desc: "The goal is a verifier who never has an operational relationship with PayReality (an auditor, an insurer, a regulator) being able to confirm a decision happened, honestly, on their own." },
  { icon: EyeOff, title: "Minimal disclosure", desc: "A receipt should prove a decision was made correctly without necessarily exposing its sensitive content to every party who might one day need to confirm it happened." },
];

const AUDIENCES = [
  { icon: Scale, title: "Regulators", desc: "Examining a decision years after the fact, without depending on PayReality remaining operational, unchanged, or cooperative." },
  { icon: Building2, title: "Insurers", desc: "Assessing AI-operational risk from a portable artifact, without requiring operational access to a customer's PayReality tenant." },
  { icon: ShieldCheck, title: "Enterprise customers", desc: "Proving to their own auditors and boards that a specific AI-initiated action was authorized under their governance, without PayReality as a required intermediary." },
];

export default function AuthorizationReceipts() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Authorization Receipts (Coming Soon) | PayReality"
        description="Authorization Receipts are the planned evolution of Runtime Authority's evidence: a portable, verifiable artifact for regulators, insurers, and customers."
        path="/products/authorization-receipts"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/products/authorization-receipts`,
          "name": "Authorization Receipts | PayReality",
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
            <span className="text-foreground">Authorization Receipts</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="section-label">PRODUCT DIRECTION</div>
            <span
              className="mono text-[10px] px-2.5 py-1 rounded-full"
              style={{ background: "rgba(124,111,255,0.12)", color: "#a78bfa", border: "1px solid rgba(124,111,255,0.25)" }}
            >
              Coming Soon
            </span>
          </div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            <span className="grad-text">Authorization Receipts</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 680 }}>
            The next evolution of Runtime Authority's evidence: not a database record you have to trust our
            systems to keep serving correctly, but a self-contained artifact you can verify on your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button onClick={openDemo} className="btn-primary px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Talk to Us About Early Access
              <ArrowRight size={15} />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mb-20" style={{ maxWidth: 680 }}>
            This page describes direction, not a shipped capability. Runtime Authority's decision engine and the{" "}
            <a href="/products/evidence-portal" style={{ color: "#a78bfa" }}>Evidence Portal</a> are live today; Authorization
            Receipts are how that evidence evolves. For the planned receipt shapes and lifecycle, see{" "}
            <a href="/developers/authorization-receipts" style={{ color: "#a78bfa" }}>Authorization Receipts</a>{" "}
            in the Developers section.
          </p>

          <div className="mb-20">
            <div className="section-label mb-4">WHY THIS MATTERS</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              A signed database row is not a portable proof
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4" style={{ maxWidth: 680 }}>
              Today, every Runtime Authority decision produces signed evidence inside the Evidence Portal. That
              proves a record wasn't altered after you were shown it. It doesn't, by itself, prove you were shown
              the complete and honest history: verifying it still means trusting that PayReality's systems
              remain available, unchanged, and cooperative, indefinitely.
            </p>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              That's a reasonable trust model while an integration is live and the relationship is operational.
              It's a weaker one than a five-year-later regulatory review, an insurer underwriting risk without
              system access, or an enterprise proving compliance to its own auditors actually needs.
            </p>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">DESIGN PRINCIPLES</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              What we're designing toward
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="glass-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}>
                    <p.icon size={18} style={{ color: "#7c6fff" }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">WHO THIS IS FOR</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Verification without an operational relationship
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {AUDIENCES.map((a) => (
                <div key={a.title} className="glass-card rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}>
                    <a.icon size={18} style={{ color: "#7c6fff" }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}>
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">NOT IN SCOPE</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              What a receipt won't claim
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              An Authorization Receipt will prove that an action was authorized. It won't, and shouldn't, be read
              as proof that the action was actually carried out downstream: that's a distinct problem from
              authorization, and this page won't pretend otherwise.
            </p>
          </div>

          {/* Related Products */}
          <div className="mb-20">
            <div className="section-label mb-4">RELATED PRODUCTS</div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Runtime Authority", href: "/products/runtime-authority" },
                { label: "Authority Graph", href: "/products/authority-graph" },
                { label: "Runtime Policies", href: "/products/runtime-policies" },
                { label: "Evidence Portal", href: "/products/evidence-portal" },
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
              Building toward this and want early input?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              If independent verification of AI authorization decisions matters to your compliance or risk
              function, we want to hear what "verified" needs to mean for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDemo} className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Talk to Us
                <ArrowRight size={15} />
              </button>
              <a href="/products/evidence-portal" className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                See the Evidence Portal Today
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
