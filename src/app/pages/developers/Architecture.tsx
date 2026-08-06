import { Bot, Fingerprint, ShieldCheck, GitBranch, ScrollText, Cpu, FileCheck2, Database, Building2 } from "lucide-react";
import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";

const CHAIN = [
  { icon: Bot, color: "#3b8cf8", title: "Agent", desc: "An autonomous AI agent, registered with its own cryptographic identity, forms an intention to take a real-world action." },
  { icon: Fingerprint, color: "#7c6fff", title: "Intent", desc: "That action is expressed as a signed Intent: a structured, cryptographically signed request naming the resource, amount, and counterpart involved. Nothing has happened yet." },
  { icon: ShieldCheck, color: "#6366f1", title: "Runtime Authority", desc: "The Intent's signature is verified, then it's handed to evaluation. This is the orchestrating layer, not a single check: it's what queries the two components below." },
  { icon: GitBranch, color: "#22c55e", title: "Authority Graph", desc: "Answers \"is this agent's principal entitled to delegate this kind of action, and to this extent?\" (modeled from the organization's actual governance documents)." },
  { icon: ScrollText, color: "#22d3ee", title: "Runtime Policies", desc: "Answers \"under what conditions is this specific action permitted?\" (compiled, versioned rules evaluated against the Intent's actual content)." },
  { icon: Cpu, color: "#a78bfa", title: "Decision Engine", desc: "Combines both answers deterministically into exactly one outcome: Allow, Deny, or Human Review. The same Intent, Graph, and Policy always produce the same Decision." },
  { icon: FileCheck2, color: "#f59e0b", title: "Authorization Receipt", desc: "The Decision is recorded as signed evidence the moment it's made. Today this is the Evidence Portal's record; the planned evolution is a portable, independently verifiable artifact, see Authorization Receipts." },
  { icon: Database, color: "#f472b6", title: "Evidence Portal", desc: "Where that record is searched, investigated, audited, and exported: the human-facing layer over every decision the runtime has made." },
  { icon: Building2, color: "#94a3b8", title: "Enterprise System", desc: "Only on an Allow does execution proceed to the actual system of record: the payment rail, ERP, or infrastructure API the agent was trying to reach in the first place." },
];

export default function Architecture() {
  return (
    <>
      <SEO
        title="Architecture | PayReality Developers"
        description="From a signed intent to a decision and its evidence: Runtime Authority, the Authority Graph, Runtime Policies, the Decision Engine, and the Evidence Portal."
        path="/developers/architecture"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Architecture",
          "url": `${SITE_URL}/developers/architecture`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Architecture"
        subtitle="Nine components, one deterministic path, from an agent's signed intent to a decision your enterprise system can act on."
        currentPath="/developers/architecture"
      >
        <p className="-mt-2">
          An agent can reason about what to do next. It shouldn't be the one deciding whether it's
          authorized to do it. Everything below exists to answer that second question,
          deterministically, in the moment between an agent forming an intent and an enterprise
          system acting on it, without ever asking the agent itself.
        </p>

        <div className="flex flex-col gap-0 mb-4">
          {CHAIN.map((c, i) => (
            <div key={c.title} className="flex gap-4 sm:gap-5">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${c.color}18`, border: `1px solid ${c.color}35` }}
                >
                  <c.icon size={18} style={{ color: c.color }} />
                </div>
                {i < CHAIN.length - 1 && <div className="w-px flex-1 my-1" style={{ background: "rgba(124,111,255,0.2)" }} />}
              </div>
              <div className="pb-8">
                <h3 style={{ ...sectionHeadingStyle, marginTop: "0.4rem", fontSize: "1.1rem" }}>{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed mt-1.5" style={{ fontSize: "1.0625rem" }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={sectionHeadingStyle}>Why this is a chain, not a single check</h2>
        <p>
          A simpler design would run one function ("is this allowed?") against one rule set. Runtime
          Authority deliberately keeps the Authority Graph and Runtime Policies as separate components
          evaluated together, because they answer separate questions your organization already keeps separate:
          who is entitled to delegate authority (an org-chart and Delegation of Authority question) versus
          under what conditions a specific action is permitted (a policy question). Collapsing them would mean
          rebuilding your governance structure from scratch instead of modeling the one you already have.
        </p>

        <h2 style={sectionHeadingStyle}>What's live today vs. planned</h2>
        <p>
          Agent, Intent, Runtime Authority, Authority Graph, Runtime Policies, the Decision Engine, and the
          Evidence Portal are the live system: every Intent submitted today passes through exactly this path.
          Authorization Receipts, as a portable artifact independent of the Evidence Portal's database, are{" "}
          <strong style={{ color: "#e8ecf4" }}>planned architecture</strong>, not yet shipped, see{" "}
          <a href="/developers/authorization-receipts" style={{ color: "#a78bfa" }}>Authorization Receipts</a>{" "}
          for exactly what exists today and what's still direction.
        </p>
      </DocLayout>
    </>
  );
}
