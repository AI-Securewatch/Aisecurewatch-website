import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";

export default function AuthorityGraph() {
  return (
    <>
      <SEO
        title="Authority Graph | PayReality Developers"
        description="What the Authority Graph represents: delegated authority, roles, resources, approval limits, relationships, versioning, and machine-readable governance."
        path="/developers/authority-graph"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Authority Graph",
          "url": `${SITE_URL}/developers/authority-graph`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Authority Graph"
        subtitle="The structure Runtime Authority queries to answer one question: is this principal entitled to delegate this action, and to what extent?"
        currentPath="/developers/authority-graph"
      >
        <p>
          The Authority Graph is not a permissions table. It's a connected structure of{" "}
          <strong style={{ color: "#e8ecf4" }}>principals</strong> (who holds authority),{" "}
          <strong style={{ color: "#e8ecf4" }}>delegates</strong> (who it's been extended to, including AI
          agents), <strong style={{ color: "#e8ecf4" }}>resources</strong> (what's being acted on), and the{" "}
          <strong style={{ color: "#e8ecf4" }}>constraints</strong> attached to each delegation, modeled
          this way because a flat table can't represent "the Finance Manager may delegate payment approval up
          to $10,000 to a specific agent, who may act on the AP Vendor Payments resource only." For the
          product-level explanation of why this exists, see{" "}
          <a href="/products/authority-graph" style={{ color: "#a78bfa" }}>Authority Graph</a> on the product side.
        </p>

        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>What a delegation looks like</h2>
        <CodeBlock label="authority_graph.json (excerpt)">{`{
  "principal": { "id": "prin_fin_mgr", "role": "Finance Manager" },
  "delegate": { "id": "agt_8f2b1c", "type": "agent" },
  "resource": { "type": "vendor_payment", "scope": "AP-EMEA" },
  "constraints": {
    "approval_limit": { "amount": 10000, "currency": "USD" },
    "expires": "2027-01-01T00:00:00Z",
    "requires_dual_approval_above": { "amount": 5000, "currency": "USD" }
  },
  "version": 4
}`}</CodeBlock>

        <h2 style={sectionHeadingStyle}>Roles and role hierarchy</h2>
        <p>
          Principals sit inside your existing role hierarchy, not a parallel one PayReality invents.
          Delegation can flow along that hierarchy (a Finance Director's authority can be sub-delegated by a
          Finance Manager reporting to them) exactly as your org chart already permits, or explicitly blocked
          from doing so where separation of duties requires it.
        </p>

        <h2 style={sectionHeadingStyle}>Resources</h2>
        <p>
          A resource is whatever the delegated authority is scoped to: a payment type, a procurement
          category, an infrastructure system, a contract class. Scoping a delegation to a specific resource is
          what stops "may approve vendor payments up to $10,000" from being read as "may approve anything up
          to $10,000."
        </p>

        <h2 style={sectionHeadingStyle}>Approval limits</h2>
        <p>
          Limits are constraints on a specific delegation, not a global ceiling: two different agents acting
          for two different principals can carry two different limits on the same resource type,
          because that's how your actual approval matrix already works.
        </p>

        <h2 style={sectionHeadingStyle}>Relationships and versioning</h2>
        <p>
          Every delegation carries a <code className="mono">version</code>. Editing who can delegate what
          doesn't overwrite history: a decision made under <code className="mono">version: 3</code> remains
          explainable against exactly that version, even after <code className="mono">version: 4</code>{" "}
          publishes. This matters because a Decision's evidence needs to reference the authority state that
          was actually active at evaluation time, not whatever the graph looks like when someone checks later.
        </p>

        <h2 style={sectionHeadingStyle}>How governance becomes machine-readable</h2>
        <p>
          The AI Authority Builder reads governance documents you already have (a Delegation of Authority
          policy, an approval matrix, a signing schedule) and proposes the graph structure above as
          candidates for human review. Nothing is published automatically: a person confirms the extracted
          principals, delegations, and limits actually match the source document before the graph goes live.
        </p>
      </DocLayout>
    </>
  );
}
