import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";

export default function RuntimePolicies() {
  return (
    <>
      <SEO
        title="Runtime Policies | PayReality Developers"
        description="How a policy is compiled, evaluated deterministically, versioned, and deployed -- and why a Runtime Policy differs from the governance document it came from."
        path="/developers/runtime-policies"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Runtime Policies",
          "url": `${SITE_URL}/developers/runtime-policies`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Runtime Policies"
        subtitle="A Runtime Policy is a compiled artifact, not the governance document it was derived from -- this page covers what that compilation actually does."
        currentPath="/developers/runtime-policies"
      >
        <p>
          A Delegation of Authority document tells a human what's permitted. A Runtime Policy tells a
          deterministic evaluator the same thing, in a form it can execute against an Intent in sub-millisecond
          time, with no ambiguity left for the evaluator to interpret. For the product-level explanation of why
          this exists, see{" "}
          <a href="/products/runtime-policies" style={{ color: "#a78bfa" }}>Runtime Policies</a> on the product
          side.
        </p>

        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>What compilation produces</h2>
        <CodeBlock label="policy.json (compiled, excerpt)">{`{
  "policy_key": "vendor-payment-approval-v4",
  "version": 4,
  "status": "active",
  "scope": { "action": "vendor_payment", "principal": "Finance Manager" },
  "conditions": [
    { "field": "amount", "operator": "<=", "value": 10000 },
    { "field": "currency", "operator": "==", "value": "USD" }
  ],
  "effect": "allow",
  "constraints": { "requires_dual_approval_above": 5000, "evidence_required": true }
}`}</CodeBlock>
        <p>
          This is the artifact Runtime Authority actually evaluates against -- structured conditions and a
          fixed effect (<code className="mono">allow</code>, <code className="mono">deny</code>, or{" "}
          <code className="mono">require_human_review</code>), not a paragraph a model has to interpret at
          decision time.
        </p>

        <h2 style={sectionHeadingStyle}>Runtime evaluation</h2>
        <p>
          Every field in <code className="mono">conditions</code> is checked against the Intent's actual
          content. All conditions must hold for the policy to match; the first matching policy's{" "}
          <code className="mono">effect</code> becomes the Decision, combined with whatever the{" "}
          <a href="/developers/authority-graph" style={{ color: "#a78bfa" }}>Authority Graph</a> separately
          determines about delegated authority.
        </p>

        <h2 style={sectionHeadingStyle}>Deterministic decisions</h2>
        <p>
          The same compiled policy, evaluated against the same Intent, always produces the same effect. There
          is no model call, no sampling, and no version drift inside evaluation itself -- if a decision needs
          to be explained months later, re-running the same policy version against the same Intent reproduces
          it exactly.
        </p>

        <h2 style={sectionHeadingStyle}>Policy versioning</h2>
        <p>
          Publishing a new version doesn't edit the old one in place. Every version is retained, and every
          Decision's evidence records the exact <code className="mono">version</code> that was active when it
          was evaluated -- so a policy change next quarter never silently rewrites what a decision made this
          quarter meant.
        </p>

        <h2 style={sectionHeadingStyle}>Policy deployment</h2>
        <p>
          A policy moves through <code className="mono">draft → review → compiled → active → retired</code>.
          Only an <code className="mono">active</code> policy is evaluated against live Intents; a{" "}
          <code className="mono">draft</code> can be edited freely because nothing depends on it yet, and a{" "}
          <code className="mono">retired</code> policy stops being evaluated going forward without deleting
          the history of decisions made while it was active.
        </p>

        <h2 style={sectionHeadingStyle}>Why this differs from the governance document</h2>
        <p>
          The governance document remains the source of truth for what your organization has actually
          decided; the compiled policy is PayReality's operationalization of it, not a replacement. If the two
          ever disagree, that's a signal the compiled policy needs to be corrected to match governance, not
          the other way around -- Runtime Policies attest to enforcement of your authority, they don't
          originate it.
        </p>
      </DocLayout>
    </>
  );
}
