import { ArrowRight, Mail } from "lucide-react";
import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";
import StatusBadge from "../docs/StatusBadge";

export default function Whitepapers() {
  const { openPaperRequest } = useDemoModal();

  return (
    <>
      <SEO
        title="Whitepapers | PayReality Resources"
        description="Technical deep dives into PayReality's policy compiler, authority runtime, and evidence architecture. Coming soon."
        path="/resources/whitepapers"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/resources/whitepapers`,
          "name": "Whitepapers | PayReality Resources",
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
            <span className="text-foreground">Whitepapers</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="section-label">RESOURCES</div>
            <StatusBadge status="Coming Soon" />
          </div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            Whitepapers
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            Technical deep dives into the policy compiler, the deterministic authority runtime, and the
            evidence architecture behind Runtime Authority. Nothing is published here yet.
          </p>

          <div className="glass-card rounded-2xl p-8" style={{ border: "1px solid rgba(124,111,255,0.22)" }}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In the meantime, the technical detail a whitepaper would normally cover already exists in
              two places: the product pages explain what each component does, and the Developers section
              explains exactly how it works, down to the request and response shapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/products" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                View Products
                <ArrowRight size={15} />
              </a>
              <a href="/developers/architecture" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Read the Architecture
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <button
            onClick={() => openPaperRequest("Whitepapers")}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={14} />
            Notify me when the first whitepaper publishes
          </button>
        </div>
      </main>
    </>
  );
}
