import { ArrowRight, Mail } from "lucide-react";
import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";
import StatusBadge from "../docs/StatusBadge";

export default function CaseStudies() {
  const { openDemo, openPaperRequest } = useDemoModal();

  return (
    <>
      <SEO
        title="Case Studies | PayReality Resources"
        description="How enterprise teams put Runtime Authority into production. Coming soon."
        path="/resources/case-studies"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/resources/case-studies`,
          "name": "Case Studies | PayReality Resources",
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
            <span className="text-foreground">Case Studies</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="section-label">RESOURCES</div>
            <StatusBadge status="Coming Soon" />
          </div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            Case Studies
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            How enterprise teams put Runtime Authority into production -- the real workflow, the policy
            they started from, and what changed. None are published yet.
          </p>

          <div className="glass-card rounded-2xl p-8" style={{ border: "1px solid rgba(124,111,255,0.22)" }}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In the meantime, <a href="/solutions" style={{ color: "#a78bfa" }}>Solutions</a> covers the same
              workflows a case study would document -- payment approvals, procurement, contract signing
              authority, and more -- described generally rather than tied to a specific deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/solutions" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Explore Solutions
                <ArrowRight size={15} />
              </a>
              <button onClick={openDemo} className="btn-primary px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
              </button>
            </div>
          </div>

          <button
            onClick={() => openPaperRequest("Case Studies")}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={14} />
            Notify me when the first case study publishes
          </button>
        </div>
      </main>
    </>
  );
}
