import { ArrowRight, Mail } from "lucide-react";
import SEO from "../../components/SEO";
import { CONTACT_EMAIL, SITE_URL, mailto } from "../../lib/site";

const EXPERTISE = [
  "Systems engineering & distributed systems",
  "Rust — memory-safe, deterministic runtimes",
  "gRPC — low-latency service architecture",
  "Open Policy Agent & Rego policy engines",
  "AI infrastructure & runtime enforcement",
];

const RESPONSIBILITIES = [
  "Owns PayReality's entire backend and authority runtime",
  "Built the Policy Envelope engine and the core /verify evaluation endpoint",
  "Built the rule engine, audit logging, and alerting pipeline",
  "Leads the Verifiable Intent Certificate (evidence) architecture",
];

export default function NathanObiekwe() {
  return (
    <>
      <SEO
        title="Chukwudi (Nathan) Obiekwe | Co-Founder & CTO"
        description="Chukwudi 'Nathan' Obiekwe is Co-Founder & CTO of AI Securewatch. He built PayReality's deterministic authority runtime in Rust, gRPC, and Open Policy Agent."
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
            className="mb-3"
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
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            Co-Founder & CTO of{" "}
            <a href="/about" style={{ color: "#a78bfa" }}>
              AI Securewatch
            </a>
            . Lead architect of{" "}
            <a href="/" style={{ color: "#a78bfa" }}>
              PayReality's
            </a>{" "}
            authority runtime.
          </p>

          <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed mb-16">
            <p>
              Nathan is the engineer who turned PayReality's authority thesis into working, deterministic
              runtime infrastructure. He owns the entire backend: the Policy Envelope engine that wraps
              an AI agent in signed, immutable rules, the core evaluation endpoint that intercepts an
              agent's intended action, and the audit and alerting pipeline that records what happened.
            </p>
            <p>
              He reached out to{" "}
              <a href="/leadership/sean-chihwendu" style={{ color: "#a78bfa" }}>
                Sean Chihwendu
              </a>{" "}
              on LinkedIn in 2024 after seeing Sean's post about building a fraud-detection tool, drawn
              to the technical challenge underneath it: most of the industry was checking whether an AI
              agent was behaving using another, probabilistic AI model, which is not a reliable way to
              guard a consequential action. Nathan's approach is the opposite — enforcement has to be
              deterministic, meaning the same policy and the same input always produce the same
              decision, with no dependence on a model's judgment at the moment it matters.
            </p>
            <p>
              That philosophy shapes every layer of the stack he has built. PayReality's core governance
              engine is written in Rust, chosen for memory safety and zero-cost abstractions — in a
              pre-execution environment, a garbage-collection pause or a memory leak is not an
              acceptable source of latency for a decision that blocks or allows a real action. Agent-to-
              runtime communication runs over gRPC for low-latency evaluation. Policy itself is compiled
              using Open Policy Agent and Rego, so that a rule like "no single purchase over a threshold
              amount" is both human-readable and machine-executable. The resulting decision trail is
              structured for cryptographic integrity, so that once a decision is made, it cannot be
              quietly altered.
            </p>
            <p>
              Nathan joined AI Securewatch in November 2025 and worked part-time while the architecture
              took shape, moving to full-time in April 2026 after the company secured its first paid
              pilot engagement. His focus today is the Verifiable Intent Certificate system — the
              evidence layer that gives every PayReality decision an independently verifiable record.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-16">
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

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/#architecture"
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              See the architecture he built
              <ArrowRight size={16} />
            </a>
            <a
              href={mailto(CONTACT_EMAIL, "Technical Inquiry: Nathan Obiekwe")}
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
