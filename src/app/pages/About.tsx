import { ArrowRight, Scale, ShieldCheck, Sparkles, Target } from "lucide-react";
import SEO from "../components/SEO";
import { SITE_URL } from "../lib/site";

const VALUES = [
  {
    icon: Target,
    title: "Determinism over probability",
    desc: "An authority decision has to be the same decision every time, given the same policy and the same input. We do not use one AI model to judge whether another AI model is behaving.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence over assertion",
    desc: "A decision is only as good as the proof behind it. Every Approve, Reject, or Human Review outcome produces a signed record — not a claim that has to be taken on trust.",
  },
  {
    icon: Sparkles,
    title: "Built by the people accountable for it",
    desc: "Every line of PayReality's code is written by a founder. No outsourced development, no contractors between the team and the product enterprises depend on.",
  },
  {
    icon: Scale,
    title: "Validated by payment, not interest",
    desc: "Discovery calls and verbal enthusiasm are not evidence that a business is needed. We build what enterprises are willing to pay for, and treat everything else as a hypothesis.",
  },
];

const TIMELINE = [
  {
    year: "2024",
    title: "The problem surfaces",
    desc: "Sean Chihwendu begins working on the problem after years in procurement and tender management, where verifying that approved payments actually reach the correct, authorized party proved to be a persistent, unsolved gap. He meets Nathan Obiekwe on LinkedIn after posting about building a fraud-detection tool; Nathan reaches out to help on the technical side and the two begin building remotely.",
  },
  {
    year: "Early iteration",
    title: "A hidden-entity discovery platform",
    desc: "The team's first product applies the underlying matching engine to entity verification, running over 40 customer discovery calls. A pilot commitment from an early prospect ultimately does not convert into a paying engagement — a formative lesson that interest and pilots are not the same thing as revenue.",
  },
  {
    year: "November 2025",
    title: "Nathan joins as CTO",
    desc: "Nathan Obiekwe joins the company to lead engineering, working part-time while building the core policy-enforcement architecture.",
  },
  {
    year: "PayReality v1",
    title: "From entity discovery to policy matching",
    desc: "The team rebuilds around a desktop matching tool that checks expenditure against policy step by step and flags irregularities. It secures the company's first paying customer — small, but proof that the underlying model has value.",
  },
  {
    year: "PayReality v2",
    title: "A deterministic API for AI-executed actions",
    desc: "The architecture generalizes into an API: AI agents submit an intended action, PayReality evaluates it against a signed policy in real time, and every decision produces a Verifiable Intent Certificate — a cryptographically signed record of what was authorized and what happened.",
  },
  {
    year: "January 2026",
    title: "Sean goes full-time",
    desc: "Sean transitions to building PayReality full-time, leading vision, sales, and fundraising.",
  },
  {
    year: "April 2026",
    title: "Nathan goes full-time",
    desc: "Following the company's first paid pilot engagement, Nathan moves to full-time, focused entirely on the authority runtime and its evidence architecture.",
  },
  {
    year: "2026",
    title: "Enterprise discovery",
    desc: "AI Securewatch enters technical discovery conversations with enterprise risk and insurance partners, and aligns its evidence architecture with the transparency requirements of the EU AI Act, in force from August 2, 2026.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About AI Securewatch | Enterprise AI Authority Infrastructure"
        description="AI Securewatch develops, owns, and operates PayReality. Learn why we built Enterprise AI Authority Infrastructure, and what we believe about deterministic AI execution."
        path="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "url": `${SITE_URL}/about`,
          "name": "About AI Securewatch",
          "mainEntity": { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-label mb-4">COMPANY</div>
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
            AI Securewatch builds the
            <br />
            <span className="grad-text">authority infrastructure for autonomous AI</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-6" style={{ fontSize: "1.125rem" }}>
            AI Securewatch (Pty) Ltd is a South African company that develops, owns, and operates{" "}
            <a href="/" style={{ color: "#a78bfa" }}>PayReality</a>, Enterprise AI Authority
            Infrastructure for autonomous AI. The team works together daily from Johannesburg, South
            Africa.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-20">
            PayReality is not a side project of AI Securewatch — it is the company's flagship
            platform, and the reason the company exists.
          </p>

          {/* Why we exist */}
          <div className="mb-24">
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              Why we exist
            </h2>
            <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed">
              <p>
                Every enterprise already knows how to delegate authority to people: procurement policy,
                treasury policy, approval matrices, governance frameworks. Autonomous AI breaks that
                model, because nothing forces an AI agent to check a policy before it acts. The gap is
                not governance — it's translating authority that already exists into a form a machine
                can actually obey, before it executes, not after.
              </p>
              <a
                href="/why-we-exist"
                className="inline-flex items-center gap-2 font-medium"
                style={{ color: "#a78bfa" }}
              >
                Read the full case for why this category exists
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-5 mb-24">
            <div className="glass-card rounded-2xl p-8">
              <div className="mono text-xs mb-3" style={{ color: "#7c6fff", letterSpacing: "0.1em" }}>
                MISSION
              </div>
              <p
                style={{
                  fontFamily: "'Onest', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "#e8ecf4",
                  lineHeight: 1.4,
                }}
              >
                Build the infrastructure that allows organizations to safely delegate authority to
                autonomous AI.
              </p>
            </div>
            <div
              className="glass-card rounded-2xl p-8"
              style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}
            >
              <div className="mono text-xs mb-3" style={{ color: "#a78bfa", letterSpacing: "0.1em" }}>
                VISION
              </div>
              <p
                style={{
                  fontFamily: "'Onest', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "#e8ecf4",
                  lineHeight: 1.4,
                }}
              >
                Become the enterprise authority layer that sits between AI reasoning and real-world
                execution.
              </p>
            </div>
          </div>

          {/* Core values */}
          <div className="mb-24">
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              What we believe
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <div key={v.title} className="glass-card rounded-2xl p-7">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
                  >
                    <v.icon size={19} style={{ color: "#7c6fff" }} />
                  </div>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Onest', system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "#e8ecf4",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership overview */}
          <div className="mb-24">
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              Leadership
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              AI Securewatch is led by{" "}
              <a href="/leadership/sean-chihwendu" style={{ color: "#a78bfa" }}>
                Sean Chihwendu
              </a>{" "}
              (Founder & CEO), who set the company's direction after years in procurement, and{" "}
              <a href="/leadership/nathan-obiekwe" style={{ color: "#a78bfa" }}>
                Chukwudi "Nathan" Obiekwe
              </a>{" "}
              (Co-Founder & CTO), who leads engineering and built PayReality's deterministic authority
              runtime.
            </p>
            <a
              href="/leadership"
              className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2"
            >
              Meet the leadership team
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Timeline */}
          <div>
            <h2
              className="mb-10"
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                letterSpacing: "-0.025em",
                color: "#e8ecf4",
              }}
            >
              Company timeline
            </h2>
            <div className="flex flex-col">
              {TIMELINE.map((t, i) => (
                <div key={t.title} className="flex gap-6 pb-10 relative">
                  {i < TIMELINE.length - 1 && (
                    <div
                      className="absolute left-[7px] top-4 bottom-0 w-px"
                      style={{ background: "linear-gradient(to bottom, rgba(124,111,255,0.35), rgba(59,140,248,0.15))" }}
                    />
                  )}
                  <div className="flex-shrink-0 pt-1.5">
                    <div
                      className="w-4 h-4 rounded-full border-2"
                      style={{ background: "#1a1d2e", borderColor: "#7c6fff", boxShadow: "0 0 10px rgba(124,111,255,0.4)" }}
                    />
                  </div>
                  <div>
                    <div className="mono text-xs mb-1.5" style={{ color: "#7c6fff", letterSpacing: "0.08em" }}>
                      {t.year.toUpperCase()}
                    </div>
                    <div
                      className="mb-2"
                      style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#e8ecf4" }}
                    >
                      {t.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
