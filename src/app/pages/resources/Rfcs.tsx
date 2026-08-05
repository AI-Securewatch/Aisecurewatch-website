import { ArrowRight, Mail } from "lucide-react";
import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";
import StatusBadge from "../docs/StatusBadge";

export default function Rfcs() {
  const { openPaperRequest } = useDemoModal();

  return (
    <>
      <SEO
        title="RFCs | PayReality Resources"
        description="How PayReality's own architecture decisions get made, and the RFCs that resulted from that process. Published RFCs are coming soon."
        path="/resources/rfcs"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/resources/rfcs`,
          "name": "RFCs | PayReality Resources",
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/resources" className="hover:text-foreground transition-colors">Resources</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">RFCs</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="section-label">RESOURCES</div>
            <StatusBadge status="Coming Soon" />
          </div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            RFCs
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            Architectural decisions at PayReality get written down before they get built. This page is
            where those documents will be published; none are public yet.
          </p>

          <div className="glass-card rounded-2xl p-8 mb-8" style={{ border: "1px solid rgba(124,111,255,0.22)" }}>
            <h2 className="mb-3" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#e8ecf4" }}>
              What this process actually produced
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The direction described on{" "}
              <a href="/products/authorization-receipts" style={{ color: "#a78bfa" }}>Authorization Receipts</a>{" "}
              (portable evidence, independent verification, the distinction between what's signed and what's
              publicly committed) came out of exactly this kind of internal RFC. The RFC document itself
              isn't published externally yet; what you can read today is its outcome, on the product page and
              in the{" "}
              <a href="/developers/authorization-receipts" style={{ color: "#a78bfa" }}>Developers</a>{" "}
              writeup of the same direction.
            </p>
          </div>

          <button
            onClick={() => openPaperRequest("RFCs")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={14} />
            Notify me when the first RFC publishes
          </button>

          <div className="mt-16 pt-10 border-t border-border">
            <a href="/products/authorization-receipts" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Read Authorization Receipts
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
