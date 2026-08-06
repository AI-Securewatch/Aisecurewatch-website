import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";
import StatusBadge from "../docs/StatusBadge";

const EVENTS = [
  { name: "IntentReceived", desc: "An Intent was received and passed signature verification, before evaluation." },
  { name: "DecisionCompleted", desc: "Evaluation finished with an Allow or Deny outcome." },
  { name: "HumanReviewRequested", desc: "Evaluation resolved to Human Review and is now pending." },
  { name: "ReceiptIssued", desc: "A signed evidence record (planned: an Authorization Receipt) was issued for a decision." },
  { name: "PolicyPublished", desc: "A Runtime Policy moved to active and is now being evaluated against Intents." },
  { name: "AuthorityGraphUpdated", desc: "A new version of the Authority Graph was published." },
];

export default function Webhooks() {
  return (
    <>
      <SEO
        title="Webhooks | PayReality Developers"
        description="Planned Runtime Authority webhook events: IntentReceived, DecisionCompleted, HumanReviewRequested, ReceiptIssued, PolicyPublished, and AuthorityGraphUpdated."
        path="/developers/webhooks"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Webhooks",
          "url": `${SITE_URL}/developers/webhooks`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Webhooks"
        subtitle="Enterprise event notifications for Runtime Authority: the planned shape, not a live subscription API yet."
        currentPath="/developers/webhooks"
      >
        <div className="flex items-center gap-3 -mt-2 mb-2">
          <StatusBadge status="Planned" />
          <span className="text-sm text-muted-foreground">
            Today, decisions are retrieved by polling <code className="mono">GET /v1/decisions/{"{id}"}</code>{" "}
            (see <a href="/developers/runtime-api" style={{ color: "#a78bfa" }}>Runtime API</a>).
          </span>
        </div>

        <p>
          Rather than requiring every integration to poll for state changes, the planned webhook system
          notifies your enterprise system directly when something happens inside Runtime Authority. The six
          events below are the planned taxonomy: two of them, <code className="mono">PolicyPublished</code>{" "}
          and <code className="mono">AuthorityGraphUpdated</code>, are distinct from the rest because they
          signal that governance itself changed, which means enforcement changed with it, not just that one
          more decision was made.
        </p>

        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>Event taxonomy</h2>
        <div className="grid sm:grid-cols-2 gap-3 my-2">
          {EVENTS.map((e) => (
            <div key={e.name} className="rounded-xl p-4" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <div className="mono text-sm mb-1.5" style={{ color: "#a78bfa" }}>{e.name}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{e.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={sectionHeadingStyle}>Planned payload shape</h2>
        <CodeBlock label="DecisionCompleted (planned shape)">{`{
  "event": "DecisionCompleted",
  "event_id": "evt_4c91a2",
  "occurred_at": "2026-08-03T09:14:02.118Z",
  "data": {
    "decision_id": "dec_3a91f0",
    "outcome": "ALLOW",
    "agent_id": "agt_8f2b1c",
    "evidence_id": "ev_7c02d4"
  }
}`}</CodeBlock>
        <CodeBlock label="HumanReviewRequested (planned shape)">{`{
  "event": "HumanReviewRequested",
  "event_id": "evt_4c91a3",
  "occurred_at": "2026-08-03T09:14:02.077Z",
  "data": {
    "decision_id": "dec_3a91f2",
    "agent_id": "agt_8f2b1c",
    "reason": "requires_dual_approval"
  }
}`}</CodeBlock>

        <h2 style={sectionHeadingStyle}>Why polling works today regardless</h2>
        <p>
          Nothing about the current Runtime API depends on webhooks existing: <code className="mono">ALLOW</code>{" "}
          and <code className="mono">DENY</code> are terminal in the same response you already receive, and
          Human Review can be tracked by polling the decision until its status resolves. Webhooks remove the
          need to poll; they don't unlock a capability that's otherwise unavailable.
        </p>
      </DocLayout>
    </>
  );
}
