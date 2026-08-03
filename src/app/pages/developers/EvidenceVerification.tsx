import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";
import StatusBadge from "../docs/StatusBadge";

export default function EvidenceVerification() {
  return (
    <>
      <SEO
        title="Evidence Verification | PayReality Developers"
        description="How to verify a Decision's signature and export it for audit today, and the planned roadmap for offline, portable verification."
        path="/developers/evidence-verification"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Evidence Verification",
          "url": `${SITE_URL}/developers/evidence-verification`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Evidence Verification"
        subtitle="Verifying a signature and exporting evidence today, both live; offline verification independent of PayReality's systems, planned."
        currentPath="/developers/evidence-verification"
      >
        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>Signature verification (live)</h2>
        <p>
          Every Decision produces a signed Evidence record. Verifying its signature today is an API call, and
          also a one-click action in the{" "}
          <a href="/products/evidence-portal" style={{ color: "#a78bfa" }}>Evidence Portal</a>'s UI:
        </p>
        <CodeBlock label="cURL">{`curl -X POST https://api.aisecurewatch.com/v1/evidence/{evidence_id}/verify \\
  -H "Authorization: Bearer <token>"`}</CodeBlock>
        <CodeBlock label="response">{`{ "valid": true }`}</CodeBlock>
        <p>
          A tampered or corrupted record returns <code className="mono">{`{ "valid": false }`}</code> rather
          than an error -- verification is a check, not an operation that can fail for unrelated reasons.
        </p>

        <h2 style={sectionHeadingStyle}>Evidence export (live)</h2>
        <p>
          Search and export evidence from the Evidence Portal scoped to exactly what a specific review needs
          -- by agent, outcome, policy, or time range -- rather than granting an auditor broad access to the
          underlying platform.
        </p>

        <h2 style={sectionHeadingStyle}>Audit workflows (live)</h2>
        <p>
          Every field an audit typically needs -- the agent, the Principal it acted for, the policy version
          evaluated, the outcome, and the timestamp -- is present on the record itself and searchable in the
          portal, so an audit doesn't require reconstructing context from application logs elsewhere.
        </p>

        <h2 style={sectionHeadingStyle}>
          Evidence bundles and offline verification <StatusBadge status="Roadmap" />
        </h2>
        <p>
          Today, verifying a record means calling PayReality's own <code className="mono">/verify</code>{" "}
          endpoint -- accurate, but it means the verifier is trusting PayReality's systems to be reachable and
          honest at the moment they check. The planned evolution is an exportable bundle -- a receipt plus its
          Merkle inclusion proof plus enough of the key-transparency record to verify entirely offline,
          without a network call back to PayReality at all. See{" "}
          <a href="/developers/authorization-receipts" style={{ color: "#a78bfa" }}>Authorization Receipts</a>{" "}
          for the receipt format this depends on, and a{" "}
          <strong style={{ color: "#e8ecf4" }}>verification SDK</strong> is the natural companion to that --
          also planned, not started.
        </p>
      </DocLayout>
    </>
  );
}
