import { ArrowRight, Mail } from "lucide-react";
import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";
import StatusBadge from "../docs/StatusBadge";

export default function Research() {
  const { openPaperRequest } = useDemoModal();

  return (
    <>
      <SEO
        title="Research | PayReality Resources"
        description="Original research on delegated authority, AI execution risk, and runtime enforcement. Coming soon."
        path="/resources/research"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/resources/research`,
          "name": "Research | PayReality Resources",
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
            <span className="text-foreground">Research</span>
          </nav>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="section-label">RESOURCES</div>
            <StatusBadge status="Coming Soon" />
          </div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            Research
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            Original research on delegated authority, AI execution risk, and runtime enforcement --
            structured studies, not just product writing. Nothing under that heading is published yet.
          </p>

          <div className="glass-card rounded-2xl p-8" style={{ border: "1px solid rgba(124,111,255,0.22)" }}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The closest thing to research output that exists today is written analysis, not a formal
              study: <a href="/resources/the-missing-iam-layer-for-ai-authority" style={{ color: "#a78bfa" }}>The Missing IAM Layer for AI Authority</a>{" "}
              and <a href="/manifesto" style={{ color: "#a78bfa" }}>The Enterprise Authority Manifesto</a>{" "}
              both make the substantive case for the category; they're the current best answer to "what
              does PayReality think," even though neither is a research paper in the formal sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/resources/the-missing-iam-layer-for-ai-authority" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Read the Insight
                <ArrowRight size={15} />
              </a>
              <a href="/manifesto" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Read the Manifesto
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <button
            onClick={() => openPaperRequest("Research")}
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={14} />
            Notify me when original research publishes
          </button>
        </div>
      </main>
    </>
  );
}
