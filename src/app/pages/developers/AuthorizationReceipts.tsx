import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";
import StatusBadge from "../docs/StatusBadge";

export default function AuthorizationReceipts() {
  return (
    <>
      <SEO
        title="Authorization Receipts | PayReality Developers"
        description="Why signed database records aren't enough, the planned Authorization Receipt lifecycle, and the four receipt shapes: Allow, Deny, Human Review, and Resolution."
        path="/developers/authorization-receipts"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Authorization Receipts",
          "url": `${SITE_URL}/developers/authorization-receipts`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Authorization Receipts"
        subtitle="What exists today (signed evidence in the Evidence Portal) and what's planned (a portable, independently verifiable artifact), kept clearly separate on this page."
        currentPath="/developers/authorization-receipts"
      >
        <div className="flex items-center gap-3 -mt-2">
          <StatusBadge status="Planned Architecture" />
          <span className="text-sm text-muted-foreground">Everything below the first section describes direction, not a shipped API.</span>
        </div>

        <h2 style={sectionHeadingStyle}>Why a log isn't enough</h2>
        <p>
          Today, every Decision produces a signed record in the Evidence Portal. That's real evidence: it
          proves the record wasn't altered after you were shown it. It doesn't, on its own, prove you were
          shown the complete history: verifying it still means trusting that PayReality's systems remain
          available, unchanged, and cooperative. That's a reasonable model while an integration is live. It's
          weaker than what a five-year-later regulatory review, or an insurer underwriting risk without
          system access, actually needs.
        </p>

        <h2 style={sectionHeadingStyle}>Why receipts exist</h2>
        <p>
          An Authorization Receipt is designed to be a self-contained artifact: signed, chained to the receipt
          before it, and periodically committed to a public, append-only log, so a verifier who has never
          had an operational relationship with PayReality can confirm a decision happened, honestly, without
          calling PayReality's API at all.
        </p>

        <h2 style={sectionHeadingStyle}>Portable trust and independent verification</h2>
        <p>
          Two tiers are planned: <strong style={{ color: "#e8ecf4" }}>shallow verification</strong> (signature
          valid, chain intact, included in a published log root, needs nothing from the customer) and{" "}
          <strong style={{ color: "#e8ecf4" }}>deep verification</strong> (the customer discloses the actual
          intent and policy snapshot; the verifier confirms both hash-match the receipt and that replaying
          evaluation reproduces the same decision). Minimal disclosure is the default: a receipt should prove
          a decision was correct without exposing its sensitive content to every party who might one day need
          to confirm it happened.
        </p>

        <h2 style={sectionHeadingStyle}>Receipt lifecycle</h2>
        <p>
          Created and signed atomically, the instant a Decision is made. Never assembled later from logs.
          Exported as a self-contained bundle including its inclusion proof. Verified at whichever tier the
          situation calls for. Retained indefinitely by default. Never edited or deleted: a correction is a
          new, linked receipt, not a mutation of the original.
        </p>

        <h2 style={sectionHeadingStyle}>The four receipt shapes</h2>
        <p>Every receipt shares a common envelope. The fields that differ are shown below each example.</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm" style={{ color: "#e8ecf4", fontWeight: 600 }}>Allow receipt</span>
        </div>
        <CodeBlock label="receipt.allow.json (planned shape)">{`{
  "schema_version": "1.0",
  "receipt_id": "rcpt_01J9K3...",
  "receipt_type": "DECISION",
  "issuer": { "platform": "payreality", "tenant_id": "org_9f2b" },
  "issued_at": "2026-08-03T09:14:02.118Z",
  "decision": "ALLOW",
  "agent_id": "agt_8f2b1c",
  "agent_key_thumbprint": "sha256:4c1a...",
  "intent_hash": "sha256:9e3f...",
  "intent_classification": { "action_type": "payment", "risk_tier": "low" },
  "policy_snapshot_hash": "sha256:71bd...",
  "decision_engine_version": "decision-engine@2.4.1",
  "prior_receipt_hash": "sha256:0af2...",
  "signature": "ed25519:...",
  "signing_key_id": "key_2026-q3"
}`}</CodeBlock>

        <div className="flex items-center gap-2 mt-6">
          <span className="text-sm" style={{ color: "#e8ecf4", fontWeight: 600 }}>Deny receipt</span>
        </div>
        <CodeBlock label="receipt.deny.json (planned shape)">{`{
  "...": "same envelope as above",
  "decision": "DENY",
  "intent_classification": { "action_type": "payment", "risk_tier": "high" }
}`}</CodeBlock>
        <p>A Deny carries the same fields as an Allow. What differs is only <code className="mono">decision</code> and whatever the intent classification reflects: there is no separate "reason" field disclosed by default, since the reason is recoverable via deep verification against the disclosed policy snapshot.</p>

        <div className="flex items-center gap-2 mt-6">
          <span className="text-sm" style={{ color: "#e8ecf4", fontWeight: 600 }}>Human Review receipt</span>
        </div>
        <CodeBlock label="receipt.human_review.json (planned shape)">{`{
  "...": "same envelope as above",
  "decision": "HUMAN_REVIEW",
  "human_review": { "required_reason_code": "requires_dual_approval" }
}`}</CodeBlock>
        <p>
          This receipt is issued the moment escalation happens, and it's <em>not</em> later edited when a
          human resolves it: it correctly describes "a human's judgment was required," which remains true
          forever, independent of what they decided.
        </p>

        <div className="flex items-center gap-2 mt-6">
          <span className="text-sm" style={{ color: "#e8ecf4", fontWeight: 600 }}>Resolution receipt</span>
        </div>
        <CodeBlock label="receipt.resolution.json (planned shape)">{`{
  "schema_version": "1.0",
  "receipt_id": "rcpt_01J9K4...",
  "receipt_type": "RESOLUTION",
  "issuer": { "platform": "payreality", "tenant_id": "org_9f2b" },
  "issued_at": "2026-08-03T09:47:11.004Z",
  "human_review": {
    "resolved_by_role": "finance_reviewer",
    "resolution": "approved",
    "resolved_at": "2026-08-03T09:47:11Z",
    "resolution_reason_hash": "sha256:c81a...",
    "prior_receipt_id": "rcpt_01J9K3..."
  },
  "signature": "ed25519:...",
  "signing_key_id": "key_2026-q3"
}`}</CodeBlock>
        <p>
          A separate, linked receipt, issued when the human actually decides. Immutability is preserved by
          never touching the original Human Review receipt. Reviewer identity is a role reference by default,
          not a name, matching minimal disclosure; your own identity system remains where "which specific
          person" resolves.
        </p>

        <h2 style={sectionHeadingStyle}>
          Transparency log <span style={{ marginLeft: 8 }}><StatusBadge status="Planned Architecture" /></span>
        </h2>
        <p>
          A periodically published, append-only Merkle log, modeled on Certificate Transparency, not a
          blockchain, since there's one issuer and what's needed is public commitment, not decentralized
          consensus. Once a batch of receipts is committed, altering or omitting one afterward becomes
          cryptographically detectable rather than merely contractually prohibited. This is the piece that
          turns "signed" into "independently verifiable": without it, verification still means trusting
          that PayReality showed you everything.
        </p>

        <p>
          For the full design rationale behind this direction, see{" "}
          <a href="/products/authorization-receipts" style={{ color: "#a78bfa" }}>Authorization Receipts</a>{" "}
          on the product side, and <a href="/developers/evidence-verification" style={{ color: "#a78bfa" }}>Evidence Verification</a>{" "}
          for what's actually verifiable today.
        </p>
      </DocLayout>
    </>
  );
}
