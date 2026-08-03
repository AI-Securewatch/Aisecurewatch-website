import {
  ArrowRight,
  ExternalLink,
  Search,
  ShieldCheck,
  FileSearch,
  Download,
  BarChart3,
  Fingerprint,
} from "lucide-react";
import SEO from "../../components/SEO";
import { PLATFORM, SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

const CAPABILITIES = [
  { icon: FileSearch, title: "Investigation", desc: "Trace any decision back to the exact intent, policy version, and Authority Graph state that produced it -- not a summary of what happened, the actual evaluation." },
  { icon: Search, title: "Search", desc: "Find decisions by agent, outcome, policy, business unit, or time range. Every field that mattered to the decision is a field you can search on." },
  { icon: ShieldCheck, title: "Audit", desc: "Every record carries a cryptographic signature verifiable in the portal, so an auditor can confirm a record hasn't been altered since it was produced." },
  { icon: BarChart3, title: "Compliance", desc: "Roll up decisions by policy, outcome, and time period into the shape a compliance review actually needs, without a separate reporting pipeline." },
  { icon: Fingerprint, title: "Evidence lifecycle", desc: "Every Allow, Deny, and Human Review outcome produces a record the moment it happens -- not a log line reconstructed later from application traces." },
  { icon: Download, title: "Reporting", desc: "Export the evidence a specific review needs, scoped to exactly what's relevant, rather than granting broad access to the underlying system." },
];

export default function EvidencePortal() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Evidence Portal | PayReality"
        description="The Evidence Portal is the evidence layer for Runtime Authority: search, investigate, audit, and export every authorization decision, signed and verifiable."
        path="/products/evidence-portal"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/products/evidence-portal`,
          "name": "Evidence Portal | PayReality",
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
            <span className="text-foreground">Evidence Portal</span>
          </nav>

          <div className="section-label mb-4">PRODUCT</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            The <span className="grad-text">Evidence Portal</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 680 }}>
            The enterprise evidence layer for Runtime Authority: every decision, signed, searchable, and
            exportable.
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
            <div className="section-label mb-4">WHAT IT IS</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Every decision Runtime Authority makes becomes a signed record
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              Allow, Deny, and Human Review outcomes are not application logs -- they're cryptographically signed
              evidence records, produced at the moment of decision, tied to the exact agent, intent, and policy
              version involved. The Evidence Portal is where that evidence is investigated, searched, audited,
              and exported, without requiring anyone to query the underlying runtime directly. For how to verify
              a record's signature and export it programmatically, see{" "}
              <a href="/developers/evidence-verification" style={{ color: "#a78bfa" }}>Evidence Verification</a>{" "}
              in the Developers section.
            </p>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">CAPABILITIES</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              Built for the people who have to answer for a decision later
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

          <div className="mb-20">
            <div className="section-label mb-4">WHERE THIS IS HEADED</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              From database records to portable receipts
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              The Evidence Portal's role is evolving from displaying database records to presenting{" "}
              <a href="/products/authorization-receipts" style={{ color: "#a78bfa" }}>Authorization Receipts</a> --
              a portable, independently verifiable artifact that doesn't require access to PayReality's systems
              to confirm. The portal itself isn't going away; what it's a window into is changing.
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
              See the Evidence Portal on a real decision
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We'll walk through a signed decision record end to end, from intent to verifiable evidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDemo} className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={15} />
              </button>
              <a href="/products/authorization-receipts" className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                See Authorization Receipts
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
