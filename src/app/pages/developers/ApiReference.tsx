import SEO from "../../components/SEO";
import { API_URL, SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";

const ENDPOINTS = [
  { method: "POST", path: "/v1/agents", desc: "Register a new agent identity." },
  { method: "POST", path: "/v1/agents/{id}/activate", desc: "Activate a registered agent." },
  { method: "POST", path: "/v1/agents/{id}/rotate-keys", desc: "Rotate an agent's signing certificate." },
  { method: "POST", path: "/v1/agents/{id}/retire", desc: "Permanently retire an agent." },
  { method: "POST", path: "/v1/intents", desc: "Submit a signed Intent for evaluation." },
  { method: "GET", path: "/v1/decisions/{id}", desc: "Retrieve a decision, including Human Review resolution once resolved." },
  { method: "POST", path: "/v1/decisions/{id}/resolve", desc: "Resolve a decision pending Human Review." },
  { method: "GET", path: "/v1/evidence", desc: "List evidence records." },
  { method: "POST", path: "/v1/evidence/{id}/verify", desc: "Verify an evidence record's signature." },
  { method: "GET", path: "/v1/principals", desc: "List principals in the Authority Graph." },
];

export default function ApiReference() {
  return (
    <>
      <SEO
        title="API Reference | PayReality Developers"
        description="Endpoints, schemas, headers, authentication, status codes, errors, and versioning for the PayReality Runtime API."
        path="/developers/api-reference"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "API Reference",
          "url": `${SITE_URL}/developers/api-reference`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="API Reference"
        subtitle="The endpoint map, request conventions, and error model. For the live, always-current version of this reference, see the link at the bottom."
        currentPath="/developers/api-reference"
      >
        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>Endpoints</h2>
        <div className="overflow-x-auto my-2">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <tbody>
              {ENDPOINTS.map((e) => (
                <tr key={e.path + e.method} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-2.5 pr-3 mono whitespace-nowrap" style={{ color: e.method === "GET" ? "#22d3ee" : "#7c6fff", fontSize: "0.8rem" }}>
                    {e.method}
                  </td>
                  <td className="py-2.5 pr-4 mono whitespace-nowrap" style={{ color: "#e8ecf4" }}>{e.path}</td>
                  <td className="py-2.5 text-muted-foreground">{e.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={sectionHeadingStyle}>Headers</h2>
        <p>Every request needs exactly one of the four credentials covered in <a href="/developers/authentication" style={{ color: "#a78bfa" }}>Authentication</a>:</p>
        <CodeBlock label="one of">{`X-PayReality-Operator-Key: <operator_key>
Authorization: Bearer <session_token_or_api_key>
X-PayReality-Key-Id: <certificate_id>              # + X-PayReality-Signature, for agent-signed calls`}</CodeBlock>

        <h2 style={sectionHeadingStyle}>Schemas</h2>
        <p>
          Request and response bodies are JSON. The Intent, Decision, Agent, and Evidence shapes are covered
          with full examples on their own pages: <a href="/developers/runtime-api" style={{ color: "#a78bfa" }}>Runtime API</a>,{" "}
          <a href="/developers/agent-registration" style={{ color: "#a78bfa" }}>Agent Registration</a>, and{" "}
          <a href="/developers/evidence-verification" style={{ color: "#a78bfa" }}>Evidence Verification</a>.
        </p>

        <h2 style={sectionHeadingStyle}>Status codes</h2>
        <div className="overflow-x-auto my-2">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-2 pr-4" style={{ color: "#e8ecf4" }}>Code</th>
                <th className="text-left py-2" style={{ color: "#e8ecf4" }}>Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["200", "Request succeeded. For /v1/intents, this includes Deny and Human Review -- the platform successfully evaluated the request."],
                ["401", "Missing, invalid, or unverifiable signature/credential."],
                ["403", "Authenticated, but the credential's role lacks the required permission."],
                ["404", "The referenced resource (agent, decision, evidence record) doesn't exist."],
                ["422", "The request body failed validation before evaluation was attempted."],
                ["429", "Rate limited."],
                ["5xx", "The platform failed to complete evaluation. Safe to retry with backoff."],
              ].map(([code, meaning]) => (
                <tr key={code} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-2.5 pr-4 mono whitespace-nowrap" style={{ color: "#e8ecf4" }}>{code}</td>
                  <td className="py-2.5 text-muted-foreground">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={sectionHeadingStyle}>Errors</h2>
        <CodeBlock label="error response shape">{`{
  "error": {
    "code": "invalid_signature",
    "message": "Signature verification failed for the provided key_id."
  }
}`}</CodeBlock>
        <p>
          <code className="mono">error.code</code> is stable and intended to be matched on in code;{" "}
          <code className="mono">error.message</code> is for humans and may change wording between releases.
        </p>

        <h2 style={sectionHeadingStyle}>Pagination</h2>
        <p>
          List endpoints (<code className="mono">/v1/evidence</code>, <code className="mono">/v1/principals</code>)
          accept <code className="mono">limit</code> and <code className="mono">offset</code> query
          parameters; responses include a <code className="mono">total</code> count alongside the page of
          results.
        </p>

        <h2 style={sectionHeadingStyle}>Versioning</h2>
        <p>
          The <code className="mono">/v1</code> prefix is the API version. A breaking change ships as{" "}
          <code className="mono">/v2</code>, not a silent change to <code className="mono">/v1</code> --
          existing integrations are never broken by a new version shipping alongside them.
        </p>

        <p className="mt-2">
          For the live, interactive, always-current reference generated directly from the running platform,
          see{" "}
          <a href={`${API_URL}/docs`} target="_blank" rel="noopener noreferrer" style={{ color: "#a78bfa" }}>
            {API_URL}/docs
          </a>.
        </p>
      </DocLayout>
    </>
  );
}
