import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";

const TERMS = [
  { term: "Governance", def: "The delegated authority, approval structures, separation of duties, and policies an organization already operates. Governance defines authority; Runtime Authority enforces it. Neither replaces the other." },
  { term: "Reasoning vs. Authority", def: "An AI agent can reason, analyze, recommend, negotiate, and plan. Authority to actually act has to come from the organization, not from the AI itself, no matter how well it reasoned its way there." },
  { term: "Runtime Authority", def: "The infrastructure layer that determines whether an autonomous AI agent is authorized to perform a specific action, evaluated immediately before execution. The flagship product; also the name of the overall capability.", href: "/products/runtime-authority" },
  { term: "Authority Graph", def: "The structure modeling who holds delegated authority, who it's been extended to (including AI agents), and what constraints apply, built from an organization's existing governance documents.", href: "/products/authority-graph" },
  { term: "Runtime Policies", def: "Deterministic, versioned rules compiled from delegated authority, evaluated against every Intent to determine the specific conditions under which an action is permitted.", href: "/products/runtime-policies" },
  { term: "Intent", def: "A cryptographically signed request an AI agent submits, naming the action it wants to take, before anything executes." },
  { term: "Decision", def: "The result of evaluating an Intent against the Authority Graph and Runtime Policies. Exactly one of three outcomes: Allow, Deny, or Human Review." },
  { term: "Human Review", def: "One of the three Decision outcomes: the Intent is routed to a named, accountable person to resolve, rather than approved or denied automatically." },
  { term: "Evidence Portal", def: "The enterprise evidence layer for Runtime Authority: where every signed Decision is searched, investigated, audited, and exported.", href: "/products/evidence-portal" },
  { term: "Authorization Receipt", def: "A planned evolution of Evidence Portal records: a portable, independently verifiable artifact that doesn't require access to PayReality's live systems to confirm. Not yet shipped.", href: "/products/authorization-receipts" },
  { term: "Agent", def: "An autonomous AI system registered with its own cryptographic identity, capable of submitting signed Intents on behalf of a Principal." },
  { term: "Principal", def: "The person or role an agent acts on behalf of for policy-evaluation purposes, distinct from who owns or operates the agent day to day." },
  { term: "Delegated Authority", def: "The scope of action an organization has explicitly extended to a person, role, or system: the concept every enterprise already operationalizes for people, and which Runtime Authority extends to AI agents." },
  { term: "Decision Engine", def: "The deterministic evaluation logic that combines the Authority Graph and Runtime Policies into a single Decision. The same Intent, Graph, and Policy always produce the same outcome." },
  { term: "Operator Key", def: "A shared administrative credential that authenticates trusted administrative actions on the platform, such as registering an agent or publishing a policy." },
  { term: "Certificate / Key rotation", def: "The process of replacing an agent's signing key. Rotation cuts off the old key's ability to sign new Intents immediately, without invalidating decisions made under it historically." },
  { term: "Policy compilation", def: "The process of turning authored or extracted policy into deterministic, machine-evaluable rules (using Open Policy Agent / Rego), rather than leaving a written document for a runtime to interpret." },
];

export default function Glossary() {
  return (
    <>
      <SEO
        title="Glossary | PayReality Resources"
        description="Every term used on the PayReality site (Runtime Authority, Authority Graph, Runtime Policies, Evidence Portal, and Authorization Receipts), defined once."
        path="/resources/glossary"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          "url": `${SITE_URL}/resources/glossary`,
          "name": "PayReality Glossary",
          "hasDefinedTerm": TERMS.map((t) => ({
            "@type": "DefinedTerm",
            "name": t.term,
            "description": t.def,
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
            <span className="text-foreground">Glossary</span>
          </nav>

          <div className="section-label mb-4">RESOURCES</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}>
            Glossary
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-14" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            Every term used across this site, defined once, so it means the same thing wherever you
            read it.
          </p>

          <div className="flex flex-col gap-0">
            {TERMS.map((t, i) => (
              <div key={t.term} className="py-6" style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.06)" : undefined }}>
                <h2
                  className="mb-2"
                  style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#e8ecf4", letterSpacing: "-0.01em" }}
                >
                  {t.term}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{t.def}</p>
                {t.href && (
                  <a href={t.href} className="text-xs font-medium" style={{ color: "#7c6fff" }}>
                    Learn more →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
