import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { SITE_URL } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

export default function WhyWeExist() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Why We Exist | AI Securewatch"
        description="Enterprises already have delegated authority. The problem was never governance — it was translating existing authority into controls autonomous AI can obey."
        path="/why-we-exist"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/why-we-exist`,
          "name": "Why We Exist",
          "about": [
            { "@id": `${SITE_URL}/#organization` },
            { "@id": `${SITE_URL}/#software` },
          ],
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4">WHY WE EXIST</div>
          <h1
            className="mb-10"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.1rem, 5.5vw, 3.4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            Organizations do not have a
            <br />
            governance problem.
            <br />
            <span className="grad-text">They have an enforcement problem.</span>
          </h1>

          <div className="flex flex-col gap-7 text-muted-foreground leading-relaxed" style={{ fontSize: "1.0625rem" }}>
            <p>
              Every large enterprise already knows how to delegate authority. Procurement policy.
              Treasury policy. Approval matrices. Spending limits. Governance frameworks. Risk
              frameworks. These are not new ideas — they are some of the most mature, most
              thoroughly-documented systems inside any large organization, built over decades and
              understood by finance, legal, risk, procurement, and audit alike.
            </p>
            <p>
              These frameworks work because they were built for people. A person can be trained on a
              policy, held accountable for violating it, and audited afterward if something goes wrong.
              That is enough, because a person generally knows what they are not allowed to do before
              they try to do it.
            </p>
            <p style={{ color: "#e8ecf4", fontWeight: 500 }}>
              Autonomous AI breaks that assumption. An AI agent does not read a policy document and
              internalize it. Nothing about holding valid credentials makes an agent aware of what it is
              not allowed to do. Unless something forces a check, at the exact moment the agent acts, the
              policy simply does not apply.
            </p>
            <p>
              The instinct across the industry has been to treat this as a governance problem — write
              more policy, convene more committees, publish more principles. That instinct is
              understandable, and it is misdirected. Enterprises do not lack policy. Most already have
              more delegated authority written down than they can operationalize. What they lack is a
              way to make that policy reach the moment of execution.
            </p>
            <p>
              That is the actual gap:{" "}
              <a href="/resources/the-missing-iam-layer-for-ai-authority" style={{ color: "#a78bfa" }}>
                translation, not authorship
              </a>
              . Turning delegated authority that already exists — already written, already approved,
              already understood by the humans who operate under it — into a form a machine can evaluate
              and obey, at the moment an action is about to happen. Not earlier, in a training document
              no runtime ever reads. Not later, in an audit log that only proves something already went
              wrong.
            </p>
            <p>
              This is why we call the category Enterprise AI Authority Infrastructure, and not AI
              governance. Governance is the discipline that decides what a policy should say. Authority
              infrastructure is the runtime that enforces it once it's written. Those are not the same
              layer, and conflating them is why most tools on the market ask the wrong question. They ask
              whether an AI system is being safe, compliant, or well-behaved in general. The only
              question that actually stops an unauthorized action is narrower and comes before any of
              that: was this specific action, with these specific parameters, authorized right now?
            </p>
            <p>
              We think every enterprise that delegates real authority to autonomous AI will eventually
              need an answer to that question — the same way every enterprise that connected a computer
              to a network eventually needed identity and access management, whether or not it felt
              urgent on day one. We built{" "}
              <a href="/" style={{ color: "#a78bfa" }}>
                PayReality
              </a>{" "}
              to be that answer: a deterministic runtime, developed and operated by{" "}
              <a href="/about" style={{ color: "#a78bfa" }}>
                AI Securewatch
              </a>
              , that turns existing delegated authority into machine-enforceable control before an
              autonomous agent ever executes.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-border">
            <div className="mono text-xs mb-5" style={{ color: "#6b7280", letterSpacing: "0.12em" }}>
              WHO MADE THIS CASE
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <a href="/leadership/sean-chihwendu" className="glass-card rounded-2xl p-6" style={{ textDecoration: "none" }}>
                <div style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, color: "#e8ecf4" }}>
                  Sean Chihwendu
                </div>
                <div className="text-xs mt-1" style={{ color: "#a78bfa" }}>Founder & CEO</div>
              </a>
              <a href="/leadership/nathan-obiekwe" className="glass-card rounded-2xl p-6" style={{ textDecoration: "none" }}>
                <div style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, color: "#e8ecf4" }}>
                  Chukwudi "Nathan" Obiekwe
                </div>
                <div className="text-xs mt-1" style={{ color: "#a78bfa" }}>Co-Founder & CTO</div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openDemo}
                className="btn-primary px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-3"
              >
                Book a Demo
                <ArrowRight size={16} />
              </button>
              <a
                href="/resources"
                className="btn-ghost px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-3"
              >
                Read more research
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
