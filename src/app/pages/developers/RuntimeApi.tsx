import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";

export default function RuntimeApi() {
  return (
    <>
      <SEO
        title="Runtime API | PayReality Developers"
        description="The Intent API: POST /v1/intents, its three possible outcomes -- Allow, Deny, and Human Review -- and the request and response lifecycle."
        path="/developers/runtime-api"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Runtime API",
          "url": `${SITE_URL}/developers/runtime-api`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Runtime API"
        subtitle="One endpoint an agent calls to act, and exactly three shapes the response can take."
        currentPath="/developers/runtime-api"
      >
        <p>
          Every real-world action an agent wants to take is expressed as a signed <strong style={{ color: "#e8ecf4" }}>Intent</strong>,
          submitted to a single endpoint. This page covers that endpoint directly; if you're using the Python
          SDK, <code className="mono">agent.authorize(...)</code> is this same call with signing handled for
          you -- see <a href="/developers/sdks" style={{ color: "#a78bfa" }}>SDKs</a>. For the product-level
          explanation of what this endpoint is evaluating against, see{" "}
          <a href="/products/runtime-authority" style={{ color: "#a78bfa" }}>Runtime Authority</a>.
        </p>

        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>POST /v1/intents</h2>
        <CodeBlock label="request">{`POST /v1/intents
X-PayReality-Key-Id: <certificate_id>
X-PayReality-Signature: <ed25519 signature over the raw request body>
Content-Type: application/json

{
  "agent_id": "agt_8f2b1c",
  "action": "vendor_payment",
  "amount": 8500,
  "currency": "USD",
  "counterparty": "vendor_772",
  "context": { "cost_center": "EMEA-04" },
  "requested_at": "2026-08-03T09:14:02Z",
  "nonce": "8f14e45f-ceea-4d21-8b5b-2f0e9c1a6f3a"
}`}</CodeBlock>
        <p>
          <code className="mono">nonce</code> makes each request unique even if the same action is retried;
          the signature covers the entire raw body, so nothing in it can be altered in transit without
          invalidating the signature.
        </p>

        <h2 style={sectionHeadingStyle}>The three outcomes</h2>
        <p>Every Intent resolves to exactly one of three <code className="mono">outcome</code> values. There is no fourth path, and no partial success.</p>

        <CodeBlock label="200 OK -- ALLOW">{`{
  "decision_id": "dec_3a91f0",
  "outcome": "ALLOW",
  "reason": "within_delegated_authority",
  "evidence_id": "ev_7c02d4",
  "evaluated_at": "2026-08-03T09:14:02.118Z"
}`}</CodeBlock>

        <CodeBlock label="200 OK -- DENY">{`{
  "decision_id": "dec_3a91f1",
  "outcome": "DENY",
  "reason": "exceeds_approval_limit",
  "evidence_id": "ev_7c02d5",
  "evaluated_at": "2026-08-03T09:14:02.093Z"
}`}</CodeBlock>

        <CodeBlock label="200 OK -- HUMAN_REVIEW">{`{
  "decision_id": "dec_3a91f2",
  "outcome": "HUMAN_REVIEW",
  "reason": "requires_dual_approval",
  "evidence_id": "ev_7c02d6",
  "status": "PENDING",
  "evaluated_at": "2026-08-03T09:14:02.077Z"
}`}</CodeBlock>

        <p>
          <code className="mono">reason</code> is a stable, machine-readable code naming the specific policy
          or authority-graph condition that produced the outcome -- not a free-text explanation that can
          change wording between requests.
        </p>

        <h2 style={sectionHeadingStyle}>Decision lifecycle for Human Review</h2>
        <p>
          An <code className="mono">ALLOW</code> or <code className="mono">DENY</code> is terminal the moment
          it's returned. <code className="mono">HUMAN_REVIEW</code> is not: it comes back with{" "}
          <code className="mono">status: "PENDING"</code>, and a human resolves it separately:
        </p>
        <CodeBlock label="GET /v1/decisions/{decision_id}">{`{
  "decision_id": "dec_3a91f2",
  "outcome": "HUMAN_REVIEW",
  "status": "RESOLVED",
  "resolution": {
    "resolution": "approved",
    "resolved_by": "j.matsimela@acme.example",
    "resolved_at": "2026-08-03T09:47:11Z",
    "reason": "Reviewed and approved."
  }
}`}</CodeBlock>
        <p>
          Poll <code className="mono">GET /v1/decisions/{"{decision_id}"}</code> until{" "}
          <code className="mono">status</code> flips from <code className="mono">PENDING</code> to{" "}
          <code className="mono">RESOLVED</code>, or use the webhook events covering this transition -- see{" "}
          <a href="/developers/webhooks" style={{ color: "#a78bfa" }}>Webhooks</a>.
        </p>

        <h2 style={sectionHeadingStyle}>Request flow</h2>
        <p>
          The signature is verified first, before anything else runs: an Intent that doesn't verify is
          rejected with <code className="mono">401</code> and never reaches evaluation at all, so a forged or
          corrupted request never shows up as a real <code className="mono">DENY</code> decision.
        </p>

        <h2 style={sectionHeadingStyle}>Response flow</h2>
        <p>
          A successful evaluation is always <code className="mono">200 OK</code>, whether the outcome is
          Allow, Deny, or Human Review -- the HTTP status describes whether the platform successfully
          evaluated the request, not whether the action was approved. A <code className="mono">4xx</code> or{" "}
          <code className="mono">5xx</code> means evaluation itself didn't complete; see{" "}
          <a href="/developers/api-reference" style={{ color: "#a78bfa" }}>API Reference</a> for the full
          status code and error list.
        </p>
      </DocLayout>
    </>
  );
}
