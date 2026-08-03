import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

const FAQ_LINKS: Record<string, string> = {
  "Platform": "/platform",
  "Evidence Portal": "/products/evidence-portal",
  "Authorization Receipts": "/products/authorization-receipts",
  "SDKs": "/developers/sdks",
  "Solutions": "/solutions",
};

function renderAnswer(text: string) {
  return text.split(/\{\{(.+?)\}\}/g).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    const href = FAQ_LINKS[part];
    return href ? (
      <a key={i} href={href} style={{ color: "#a78bfa" }}>{part}</a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    );
  });
}

const FAQS = [
  {
    q: "What is Runtime Authority?",
    a: "The capability of determining whether an autonomous AI agent has delegated authority to perform a specific action, evaluated immediately before that action executes. Not a policy on file, not a log entry after the fact -- a decision, made at the moment it matters. See {{Platform}} for the full picture.",
  },
  {
    q: "How is this different from IAM or access control?",
    a: "Identity and access management answers who someone (or something) is, and what systems it can reach. It doesn't evaluate whether a specific action, right now, is actually within that identity's delegated authority. Runtime Authority sits on top of identity, not in place of it -- it answers the second question, not the first.",
  },
  {
    q: "Does PayReality use an AI model to decide whether an action is authorized?",
    a: "No. Evaluation is deterministic: the same policy and the same input always produce the same decision. Runtime Policies compile into rules an engine evaluates, not a judgment call a model makes. We deliberately don't use one AI model to judge whether another AI model's action is authorized.",
  },
  {
    q: "Does this replace human review and approval?",
    a: "No -- it routes to it. Human Review is one of the three possible outcomes of every evaluation (alongside Allow and Deny), for exactly the actions your policy says need a person. What changes is that the routing decision itself is enforced automatically, not left to whether anyone remembered to check.",
  },
  {
    q: "Do we have to rebuild our existing approval matrices and Delegation of Authority documents?",
    a: "No. The Authority Graph and Runtime Policies are built from the governance you already have -- your existing Delegation of Authority policy, approval matrix, and risk frameworks -- compiled into a form a runtime can evaluate. Nothing about your actual governance changes.",
  },
  {
    q: "What happens if an agent's signing key is compromised?",
    a: "Its certificate is rotated or revoked, which immediately cuts off its ability to sign new Intents -- the same way disabling a compromised employee credential does. Rotation never invalidates historical decisions: what was evaluated under the previous key remains exactly as valid as it was.",
  },
  {
    q: "Are Authorization Receipts available today?",
    a: "Not yet. What's live today is signed evidence in the {{Evidence Portal}}. {{Authorization Receipts}} -- a portable, independently verifiable evolution of that evidence -- are planned architecture, not a shipped capability. See {{Authorization Receipts}} for exactly what exists now versus what's direction.",
  },
  {
    q: "What language is the SDK available in?",
    a: "Python, today. Node.js, Go, Java, .NET, and Rust are on the roadmap, not yet started. See {{SDKs}} for the current state.",
  },
  {
    q: "Does using PayReality mean we're compliant with [a specific regulation]?",
    a: "No, and we wouldn't want you to read it that way. Runtime Authority operationalizes the governance your organization has already defined and produces evidence of how it was enforced -- that's useful input to a compliance program, not a substitute for your own legal or compliance sign-off, and not a claimed certification of any kind.",
  },
  {
    q: "Who is PayReality for?",
    a: "Enterprises deploying AI agents that take real-world actions -- payments, procurement, contracts, ERP changes, infrastructure changes -- where an unauthorized action has real consequences. See {{Solutions}} for how this applies across specific industries.",
  },
];

export default function Faq() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="FAQ | PayReality Resources"
        description="Direct answers to the questions CTOs, CISOs, and compliance leaders ask most about Runtime Authority, deterministic evaluation, and delegated authority."
        path="/resources/faq"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "url": `${SITE_URL}/resources/faq`,
          "mainEntity": FAQS.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/\{\{(.+?)\}\}/g, "$1") },
          })),
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/resources" className="hover:text-foreground transition-colors">Resources</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">FAQ</span>
          </nav>

          <div className="section-label mb-4">RESOURCES</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-14" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            The questions we hear most from the people who have to evaluate, deploy, or answer for
            Runtime Authority.
          </p>

          <div className="flex flex-col gap-4 mb-16">
            {FAQS.map((f) => (
              <div key={f.q} className="glass-card rounded-2xl p-7">
                <h2
                  className="mb-3"
                  style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#e8ecf4", letterSpacing: "-0.01em" }}
                >
                  {f.q}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{renderAnswer(f.a)}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8 text-center" style={{ border: "1px solid rgba(124,111,255,0.25)" }}>
            <p className="text-muted-foreground mb-6">Question not answered here?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={openDemo} className="btn-primary px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={15} />
              </button>
              <a href="/resources/glossary" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                See the Glossary
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
