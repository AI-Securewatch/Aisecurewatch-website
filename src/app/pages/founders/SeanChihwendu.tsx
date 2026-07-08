import { ArrowRight, Mail } from "lucide-react";
import SEO from "../../components/SEO";
import { CONTACT_EMAIL, SITE_URL, mailto } from "../../lib/site";

const EXPERTISE = [
  "Enterprise AI Authority Infrastructure",
  "Delegated authority & approval frameworks",
  "Procurement & tender management",
  "Enterprise governance and risk",
  "Go-to-market for regulated buyers",
];

const SPEAKING_TOPICS = [
  "Why authority, not governance, is the open infrastructure category in enterprise AI",
  "What procurement and treasury teams already know that AI platform teams don't",
  "Delegated authority as a design pattern for autonomous systems",
  "Deterministic policy enforcement vs. probabilistic AI guardrails",
];

const sectionHeadingStyle = {
  fontFamily: "'Onest', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "1.35rem",
  letterSpacing: "-0.02em",
  color: "#e8ecf4",
} as const;

export default function SeanChihwendu() {
  return (
    <>
      <SEO
        title="Sean Chihwendu | Founder & CEO, AI Securewatch"
        description="Sean Chihwendu founded AI Securewatch to build Enterprise AI Authority Infrastructure: the runtime that enforces delegated authority against autonomous AI."
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
            className="mb-6"
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
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            Founder & CEO of{" "}
            <a href="/about" style={{ color: "#a78bfa" }}>
              AI Securewatch
            </a>
            . Defining Enterprise AI Authority Infrastructure as the control layer autonomous AI
            requires before it can execute business actions.
          </p>

          <div className="flex flex-col gap-16">
            {/* Current role */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>Current role</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sean is Founder & CEO of AI Securewatch, the company that develops, owns, and operates{" "}
                <a href="/" style={{ color: "#a78bfa" }}>
                  PayReality
                </a>
                . He is responsible for the company's product direction, enterprise engagement, and
                capital strategy, and works directly with the risk, procurement, and audit leaders who
                PayReality is built for.
              </p>
            </section>

            {/* What he is building */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>What he is building</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sean leads the development of PayReality: a deterministic runtime that compiles an
                enterprise's existing delegated authority policy into machine-enforceable rules, and
                evaluates every action an autonomous AI agent attempts to execute against that policy
                before it runs. Every decision resolves to one of three outcomes: approve, reject, or
                route to human review, and produces cryptographically verifiable evidence of what was
                authorized and what happened.
              </p>
            </section>

            {/* Why the category exists */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>Why the category exists</h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Enterprise governance, delegated authority, and approval frameworks are mature,
                  well-understood disciplines inside large organizations. None of them were built with a
                  mechanism for enforcing themselves against a system that can act on its own. As
                  autonomous AI moves from producing recommendations to directly executing business
                  actions, that absence stops being a theoretical gap and becomes an operating risk.
                </p>
                <p>
                  Sean's premise is that this is not a missing feature inside existing AI governance or
                  AI security tooling. It is a distinct infrastructure layer that does not yet exist at
                  the enterprise level, in the same way identity and access management did not exist
                  before enterprises needed to authenticate machines as well as people.{" "}
                  <a href="/why-we-exist" style={{ color: "#a78bfa" }}>
                    Enterprise AI Authority Infrastructure
                  </a>{" "}
                  is his name for that layer.
                </p>
              </div>
            </section>

            {/* Why he founded AI Securewatch */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>Why he founded AI Securewatch</h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Sean's path to this problem started in procurement and tender management, not
                  software. He spent years watching a specific, recurring failure: an organization
                  approves a payment or a purchase under a clearly written policy, and still has no
                  reliable way to confirm that what actually happened matched what was authorized. The
                  policy existed. The enforcement did not.
                </p>
                <p>
                  In 2024, he began working on the problem directly, validating it with procurement and
                  audit professionals while teaching himself to build the technical solution. He met his
                  future co-founder,{" "}
                  <a href="/leadership/nathan-obiekwe" style={{ color: "#a78bfa" }}>
                    Nathan Obiekwe
                  </a>
                  , after posting about an early fraud-detection tool; what began as a remote
                  collaboration became AI Securewatch.
                </p>
                <p>
                  The company's first working system targeted payment execution specifically: the
                  environment where an unauthorized action has the most immediate, measurable cost, and
                  therefore the fastest environment in which to prove the model. Payments were the
                  proving ground, not the destination.
                </p>
              </div>
            </section>

            {/* Professional background */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>Professional background</h2>
              <p className="text-muted-foreground leading-relaxed">
                Before founding AI Securewatch, Sean built his domain expertise in procurement and
                tender management, working closely with the approval, compliance, and audit functions
                that any delegated authority framework depends on. He has worked on PayReality full-time
                since January 2026, leading the company's vision, enterprise sales, and fundraising, and
                shaping product decisions directly from conversations with the risk and audit teams who
                will operate the platform.
              </p>
            </section>

            {/* Vision */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>Vision for Enterprise AI Authority Infrastructure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sean views delegated authority as a universal enterprise problem, not a payments problem
                or a procurement problem. His long-term view is that Enterprise AI Authority
                Infrastructure becomes standard architecture underneath any consequential action an
                autonomous AI system takes, from procurement and claims to treasury and HR, the same way
                identity and access management became standard architecture underneath every human
                action inside an enterprise system.{" "}
                <a href="/why-we-exist" style={{ color: "#a78bfa" }}>
                  Read the full case for why this category exists →
                </a>
              </p>
            </section>

            {/* Expertise */}
            <section>
              <h2 className="mb-6" style={sectionHeadingStyle}>Areas of expertise</h2>
              <div className="grid md:grid-cols-2 gap-5">
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
            </section>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-16">
            <a
              href="/resources/the-missing-iam-layer-for-ai-authority"
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              Read Sean's research
              <ArrowRight size={16} />
            </a>
            <a
              href="/resources"
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              All resources
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
