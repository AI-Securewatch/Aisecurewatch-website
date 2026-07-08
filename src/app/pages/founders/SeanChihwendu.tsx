import { ArrowRight, Mail } from "lucide-react";
import SEO from "../../components/SEO";
import { CONTACT_EMAIL, SITE_URL, mailto } from "../../lib/site";

const EXPERTISE = [
  "Procurement & tender management",
  "Delegated authority frameworks",
  "Enterprise AI Authority Infrastructure",
  "Go-to-market for regulated buyers",
  "Fundraising & investor relations",
];

const SPEAKING_TOPICS = [
  "Why delegated authority — not AI governance — is the real infrastructure gap",
  "What procurement teams already know that AI teams don't",
  "Building enterprise trust into autonomous, agentic systems",
  "Deterministic authority vs. probabilistic AI guardrails",
];

export default function SeanChihwendu() {
  return (
    <>
      <SEO
        title="Sean Chihwendu | Founder & CEO, AI Securewatch"
        description="Sean Chihwendu is Founder & CEO of AI Securewatch, developer of PayReality. His background in procurement led him to build Enterprise AI Authority Infrastructure."
        path="/leadership/sean-chihwendu"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "url": `${SITE_URL}/leadership/sean-chihwendu`,
          "mainEntity": { "@id": `${SITE_URL}/#person-sean` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <a href="/leadership" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
            ← Leadership
          </a>

          <div className="section-label mb-4">FOUNDER & CEO</div>
          <h1
            className="mb-3"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            Sean Chihwendu
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            Founder & CEO of{" "}
            <a href="/about" style={{ color: "#a78bfa" }}>
              AI Securewatch
            </a>
            , developer of{" "}
            <a href="/" style={{ color: "#a78bfa" }}>
              PayReality
            </a>
            . Leads vision, sales, and fundraising.
          </p>

          <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed mb-16">
            <p>
              Sean's path to PayReality did not start in software. It started in procurement and
              tender management, where he spent years watching a specific, recurring problem play out:
              organizations approve a payment or a purchase under a clearly written policy, and still
              have no reliable way to confirm that what actually happened matched what was authorized.
              The policy existed. The enforcement did not.
            </p>
            <p>
              That observation became the founding insight behind PayReality. In 2024, Sean began
              working on the problem directly — teaching himself to code and validating it with
              procurement and audit professionals — while pursuing early ventures, including CyberSafe
              Consulting. He met his future co-founder,{" "}
              <a href="/leadership/nathan-obiekwe" style={{ color: "#a78bfa" }}>
                Nathan Obiekwe
              </a>
              , on LinkedIn after posting about an early fraud-detection tool; Nathan reached out to
              help on the technical side, and what began as a remote collaboration became PayReality.
            </p>
            <p>
              The first version of that work targeted payment execution specifically — the environment
              where an unauthorized action has the most immediate, measurable cost, and therefore the
              easiest place to prove the model works. Payments were the proving ground, not the
              destination. Sean's long-term focus is broader: he views delegated authority as a
              universal enterprise problem, and PayReality's architecture as infrastructure that belongs
              underneath any consequential action an autonomous AI system takes — procurement, claims,
              treasury, HR, and beyond.
            </p>
            <p>
              Sean has worked on PayReality full-time since January 2026, leading the company's vision,
              sales, and fundraising, and contributing directly to product decisions based on
              conversations with the enterprise risk, procurement, and audit teams who will ultimately
              use it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-16">
            <div className="glass-card rounded-2xl p-7">
              <div className="mono text-xs mb-4" style={{ color: "#7c6fff", letterSpacing: "0.1em" }}>
                AREAS OF EXPERTISE
              </div>
              <ul className="flex flex-col gap-2.5">
                {EXPERTISE.map((e) => (
                  <li key={e} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#7c6fff" }} />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-7">
              <div className="mono text-xs mb-4" style={{ color: "#a78bfa", letterSpacing: "0.1em" }}>
                AVAILABLE TO SPEAK ON
              </div>
              <ul className="flex flex-col gap-2.5">
                {SPEAKING_TOPICS.map((t) => (
                  <li key={t} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#a78bfa" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/resources/the-missing-iam-layer-for-ai-authority"
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              Read Sean's research
              <ArrowRight size={16} />
            </a>
            <a
              href={mailto(CONTACT_EMAIL, "Speaking Inquiry: Sean Chihwendu")}
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              Contact Sean
              <Mail size={16} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
