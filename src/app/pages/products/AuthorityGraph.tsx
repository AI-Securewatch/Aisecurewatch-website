import {
  ArrowRight,
  ExternalLink,
  Network,
  Users,
  Layers,
  Scale,
  FileSearch,
  GitBranch,
} from "lucide-react";
import SEO from "../../components/SEO";
import { PLATFORM, SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

const CAPABILITIES = [
  { icon: FileSearch, title: "Governance ingestion", desc: "Existing Delegation of Authority documents, approval matrices, and signing schedules are read directly -- as source documents, not as a template to fill in from scratch." },
  { icon: GitBranch, title: "Delegated authority", desc: "Who may act on whose behalf, and how far that delegation extends, is modeled explicitly, including chains of delegation rather than a single flat permission." },
  { icon: Layers, title: "Role hierarchy", desc: "Reporting lines and organizational structure become part of the graph, so authority evaluation reflects how the organization is actually structured, not a simplified approximation of it." },
  { icon: Scale, title: "Approval limits", desc: "Monetary thresholds, transaction types, and category-specific limits are captured as constraints on delegation, not as a separate system that has to be kept in sync." },
  { icon: Users, title: "Organizational modeling", desc: "Business units, cost centers, and principal-to-agent relationships are represented as first-class entities the runtime can evaluate against." },
  { icon: Network, title: "Machine-readable authority", desc: "The output is a graph a deterministic runtime can query in sub-millisecond time -- the same governance structure, in a form software can actually evaluate." },
];

export default function AuthorityGraph() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Authority Graph | PayReality"
        description="The Authority Graph models a Delegation of Authority, role hierarchy, and approval limits as a machine-readable structure Runtime Authority evaluates against."
        path="/products/authority-graph"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/products/authority-graph`,
          "name": "Authority Graph | PayReality",
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
            <span className="text-foreground">Authority Graph</span>
          </nav>

          <div className="section-label mb-4">PRODUCT</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            <span className="grad-text">Authority Graph</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 680 }}>
            Your organization's delegated authority, modeled as a structure a runtime can evaluate -- not
            rebuilt, just made machine-readable.
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
              Authority exists in documents. Runtimes need it in structure.
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              A Delegation of Authority policy is written for humans to read and interpret. It answers "who can
              approve what" in prose, cross-referenced against an org chart that lives somewhere else, and an
              approval matrix that lives somewhere else again. None of that is queryable by a system that needs
              an answer in milliseconds, for an actor -- an AI agent -- that has no judgment to apply to an
              ambiguous case.
            </p>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">THE SOLUTION</div>
            <h2 className="mb-5" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              One graph: principals, delegates, limits, and roles
            </h2>
            <p className="text-muted-foreground leading-relaxed" style={{ maxWidth: 680 }}>
              The Authority Graph ingests your existing governance documents and organizational data and produces
              a single structure connecting who holds authority, who it's been delegated to, what constraints
              apply, and where that sits in the org's role hierarchy. Runtime Authority queries this graph on
              every intent; it is the "who is allowed to delegate what, to whom" half of every decision, alongside
              the "under what conditions" half supplied by{" "}
              <a href="/products/runtime-policies" style={{ color: "#a78bfa" }}>Runtime Policies</a>. For the
              schema-level detail -- what a delegation record actually contains -- see{" "}
              <a href="/developers/authority-graph" style={{ color: "#a78bfa" }}>Authority Graph</a> in the
              Developers section.
            </p>
          </div>

          <div className="mb-20">
            <div className="section-label mb-4">CAPABILITIES</div>
            <h2 className="mb-8" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}>
              What the graph actually models
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
              Bring your Delegation of Authority document
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We'll show you it modeled as a graph Runtime Authority can evaluate against, in the same session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDemo} className="btn-primary px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={15} />
              </button>
              <a href="/products/runtime-authority" className="btn-ghost px-8 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                See Runtime Authority
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
