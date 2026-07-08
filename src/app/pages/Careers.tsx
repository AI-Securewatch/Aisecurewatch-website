import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { CAREERS_EMAIL, SITE_URL, mailto } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

export default function Careers() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Careers at AI Securewatch"
        description="AI Securewatch is building Enterprise AI Authority Infrastructure. We're looking for exceptional engineers and enterprise architects — reach out."
        path="/careers"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/careers`,
          "name": "Careers at AI Securewatch",
          "about": { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4">CAREERS</div>
          <h1
            className="mb-8"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            Help build the
            <br />
            <span className="grad-text">authority layer for AI</span>
          </h1>

          <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed mb-12" style={{ fontSize: "1.0625rem" }}>
            <p>
              AI Securewatch intends to build world-class infrastructure for autonomous AI — the
              deterministic runtime, evidence architecture, and enterprise tooling that let organizations
              delegate authority to AI with the same confidence they delegate it to people.
            </p>
            <p>
              We don't have open roles listed here today. What we do have is a small, founder-built
              engineering team and a hard, well-defined problem. If you're an exceptional engineer or
              enterprise architect who wants to work on deterministic systems, policy runtimes, or
              enterprise-grade evidence infrastructure, we want to hear from you.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 mb-12">
            <h2
              className="mb-3"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.1rem", color: "#e8ecf4" }}
            >
              What we look for
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              {[
                "Systems engineers who care about determinism, not just functionality",
                "Enterprise architects who understand delegated authority, risk, or compliance",
                "People who would rather ship something correct than something impressive",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#7c6fff" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={mailto(CAREERS_EMAIL, "Interest: Working at AI Securewatch")}
              className="btn-primary px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-3"
            >
              Get in touch
              <ArrowRight size={16} />
            </a>
            <button
              onClick={openDemo}
              className="btn-ghost px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-3"
            >
              See the platform in action
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
