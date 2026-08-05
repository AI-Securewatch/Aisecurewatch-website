import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";

export default function Authentication() {
  return (
    <>
      <SEO
        title="Authentication | PayReality Developers"
        description="How PayReality authenticates requests: the Operator Key, per-user roles and permissions, per-developer API keys, and agent certificates, layered together."
        path="/developers/authentication"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Authentication",
          "url": `${SITE_URL}/developers/authentication`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Authentication"
        subtitle="Four distinct credentials, each authenticating a different kind of caller: an agent, an administrator, a specific human, or a specific integration."
        currentPath="/developers/authentication"
      >
        <p>
          PayReality never checks a role directly to decide whether a request is allowed. Every
          administrative endpoint checks a specific <em>permission</em>, and a permission is granted
          by exactly one of four credentials, layered so the simplest one (a single shared key) never
          has to be replaced before a real multi-user rollout needs the others. This is a practical
          instance of a broader Zero Trust principle the runtime follows throughout: no caller, agent
          or human, is trusted by network position or prior request: every request authenticates on
          its own merits, every time.
        </p>

        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>Agent certificates</h2>
        <p>
          Every registered agent gets its own ED25519 key pair, generated client-side; only the public
          key is ever sent to PayReality. Every action an agent submits is signed over the raw request
          body with its private key, so the platform can verify a request genuinely came from that
          specific agent and hasn't been altered in transit:
        </p>
        <CodeBlock label="headers">{`X-PayReality-Key-Id: <certificate_id>
X-PayReality-Signature: <ed25519 signature over the raw request body>`}</CodeBlock>
        <p>
          If an agent is compromised or decommissioned, its certificate is rotated or revoked,
          immediately cutting off its ability to act, the same way deactivating an employee's badge
          does. Key rotation never invalidates history: decisions made under a previous certificate
          remain exactly as valid as they were, since the certificate that was active at the time is
          what's recorded, not the agent's current one.
        </p>

        <h2 style={sectionHeadingStyle}>The Operator Key</h2>
        <p>
          A single shared administrative credential, sent as{" "}
          <code className="mono">X-PayReality-Operator-Key</code>. A present, correct Operator Key is
          a full bypass on every administrative endpoint, the original and simplest way to
          authenticate as a trusted administrator. Every SDK example on this site that needs
          administrative access (registering an agent, publishing a rule) uses it.
        </p>

        <h2 style={sectionHeadingStyle}>Roles and permissions</h2>
        <p>
          For organisations with more than one person operating the platform, six fixed roles each map
          to a fixed set of permissions:
        </p>
        <div className="overflow-x-auto my-2">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-2 pr-4" style={{ color: "#e8ecf4" }}>Role</th>
                <th className="text-left py-2" style={{ color: "#e8ecf4" }}>Can</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Organisation Owner", "Everything: every permission in the system."],
                ["Governance Administrator", "Create, edit, and publish Runtime Policies; review AI-extracted authority."],
                ["Agent Administrator", "Register, suspend, rotate, and retire agents."],
                ["Reviewer", "Review AI-extracted authority; approve or reject. Cannot publish."],
                ["Auditor", "Read-only: evidence, decisions, policies, agents, assurance."],
                ["Executive", "Read-only assurance dashboards."],
              ].map(([role, can]) => (
                <tr key={role} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-2.5 pr-4 whitespace-nowrap" style={{ color: "#e8ecf4" }}>{role}</td>
                  <td className="py-2.5 text-muted-foreground">{can}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          A person authenticates by logging in and sending the resulting session token as a bearer
          token: <code className="mono">Authorization: Bearer &lt;token&gt;</code>. The token is the
          session's own identifier, not a JWT, so revoking a session is instant.
        </p>

        <h2 style={sectionHeadingStyle}>Per-developer API keys</h2>
        <p>
          For an integration that shouldn't hold full administrative power, a scoped, role-bound API
          key can be issued from Organisation Settings. It authenticates the same way a session does (
          <code className="mono">Authorization: Bearer &lt;key&gt;</code>), resolves to a role, and is
          shown exactly once at creation time.
        </p>

        <h2 style={sectionHeadingStyle}>How they layer</h2>
        <p>
          On every administrative request, the Operator Key is checked first: if present, it decides
          the outcome immediately, correct or not, exactly as it always has. Only when no Operator Key
          is sent does the platform fall back to resolving a bearer token (a session or an API key) to
          a role, then checking that role's permissions against what the endpoint requires. Existing
          integrations built against the Operator Key are never affected by the existence of the other
          three credentials.
        </p>
      </DocLayout>
    </>
  );
}
