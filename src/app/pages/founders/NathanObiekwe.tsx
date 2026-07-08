import { ArrowRight, Mail } from "lucide-react";
import SEO from "../../components/SEO";
import { NATHAN_EMAIL, SITE_URL, mailto } from "../../lib/site";

const EXPERTISE = [
  "Distributed systems & high-performance runtime engineering",
  "Rust: memory-safe, deterministic execution",
  "gRPC: low-latency service architecture",
  "Open Policy Agent & Rego policy compilation",
  "Enterprise AI infrastructure & runtime enforcement",
];

const RESPONSIBILITIES = [
  "Architects PayReality's deterministic authority runtime end to end",
  "Built the policy compiler and the core evaluation engine that intercepts agent intents",
  "Designed the evidence and audit pipeline behind every enforcement decision",
  "Leads the Verifiable Intent Certificate system: PayReality's cryptographic evidence layer",
];

const sectionHeadingStyle = {
  fontFamily: "'Onest', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "1.35rem",
  letterSpacing: "-0.02em",
  color: "#e8ecf4",
} as const;

export default function NathanObiekwe() {
  return (
    <>
      <SEO
        title="Chukwudi (Nathan) Obiekwe | Co-Founder & CTO"
        description="Chukwudi 'Nathan' Obiekwe is the technical architect behind PayReality's deterministic authority runtime, built in Rust, gRPC, and Open Policy Agent."
        path="/leadership/nathan-obiekwe"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "url": `${SITE_URL}/leadership/nathan-obiekwe`,
          "mainEntity": { "@id": `${SITE_URL}/#person-nathan` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <a href="/leadership" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
            ← Leadership
          </a>

          <div className="section-label mb-4">CO-FOUNDER & CTO</div>
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
            Chukwudi "Nathan" Obiekwe
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            Co-Founder & CTO of{" "}
            <a href="/about" style={{ color: "#a78bfa" }}>
              AI Securewatch
            </a>
            . The technical architect who turned{" "}
            <a href="/leadership/sean-chihwendu" style={{ color: "#a78bfa" }}>
              Sean Chihwendu's
            </a>{" "}
            authority thesis into a working, deterministic runtime.
          </p>

          <div className="flex flex-col gap-16">
            {/* Current role */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>Current role</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nathan is Co-Founder & CTO of AI Securewatch and the technical architect of{" "}
                <a href="/" style={{ color: "#a78bfa" }}>
                  PayReality's
                </a>{" "}
                authority runtime. Where Sean defines what enterprises need authority infrastructure to
                do, Nathan defines how a system enforces it, deterministically, at machine speed, under
                enterprise-grade reliability constraints. He is not a generalist software engineer; his
                work is systems engineering for a runtime that a business's execution boundary depends
                on.
              </p>
            </section>

            {/* What he leads */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>What he architects</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nathan owns PayReality's runtime end to end: the policy compiler that turns delegated
                authority rules into executable policy, the evaluation engine that intercepts an agent's
                intended action before it reaches a production system, and the evidence pipeline that
                seals every decision into a cryptographically verifiable record. This is distributed
                systems and runtime engineering applied to a single, unforgiving requirement: a decision
                that blocks or allows a real business action cannot be slow, and it cannot be wrong.
              </p>
            </section>

            {/* Why deterministic enforcement */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>Why deterministic enforcement</h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Nathan's engineering position is that most of the industry checks whether an AI agent
                  is behaving using another, probabilistic AI model, which is not a reliable way to
                  guard a consequential action. PayReality's runtime takes the opposite approach:
                  enforcement has to be deterministic, meaning the same policy and the same input always
                  produce the same decision, with no dependence on a model's judgment at the moment it
                  matters.
                </p>
                <p>
                  That philosophy shapes every layer of the stack he has built. The core runtime is
                  written in Rust, chosen for memory safety and zero-cost abstractions. In a
                  pre-execution environment, a garbage-collection pause or a memory leak is not an
                  acceptable source of latency for a decision that blocks or allows a real action.
                  Agent-to-runtime communication runs over gRPC for low-latency evaluation at the volumes
                  autonomous agents operate at. Policy itself is compiled using Open Policy Agent and
                  Rego, so a rule like "no single purchase over a threshold amount" is both
                  human-readable and machine-executable, and every decision trail is structured for
                  cryptographic integrity so it cannot be quietly altered after the fact.
                </p>
              </div>
            </section>

            {/* Professional background */}
            <section>
              <h2 className="mb-4" style={sectionHeadingStyle}>Professional background</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nathan joined AI Securewatch in November 2025, drawn to the technical challenge of
                building a deterministic enforcement layer for a problem the rest of the industry was
                solving probabilistically. He worked part-time while the runtime architecture took shape,
                moving to full-time in April 2026 after the company secured its first paid pilot
                engagement. His focus today is the Verifiable Intent Certificate system: the evidence
                layer that gives every PayReality decision an independently verifiable record.
              </p>
            </section>

            {/* Expertise / Responsibilities */}
            <section>
              <h2 className="mb-6" style={sectionHeadingStyle}>Areas of expertise</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="glass-card rounded-2xl p-7">
                  <div className="mono text-xs mb-4" style={{ color: "#3b8cf8", letterSpacing: "0.1em" }}>
                    AREAS OF EXPERTISE
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {EXPERTISE.map((e) => (
                      <li key={e} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#3b8cf8" }} />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-7">
                  <div className="mono text-xs mb-4" style={{ color: "#a78bfa", letterSpacing: "0.1em" }}>
                    RESPONSIBILITIES
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {RESPONSIBILITIES.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#a78bfa" }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-16">
            <a
              href="/#architecture"
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              See the architecture he built
              <ArrowRight size={16} />
            </a>
            <a
              href="/why-we-exist"
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              Why this runtime exists
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
              href={mailto(NATHAN_EMAIL, "Technical Inquiry: Nathan Obiekwe")}
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              Contact Nathan
              <Mail size={16} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
