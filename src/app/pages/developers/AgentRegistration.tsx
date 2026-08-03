import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";

export default function AgentRegistration() {
  return (
    <>
      <SEO
        title="Agent Registration | PayReality Developers"
        description="The full PayReality agent lifecycle: registered, active, suspended, retired, or revoked, what each state can and can't do, and how to register one."
        path="/developers/agent-registration"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Agent Registration",
          "url": `${SITE_URL}/developers/agent-registration`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Agent Registration"
        subtitle="Every agent is a full enterprise identity with a lifecycle, managed the same way an enterprise manages a human workforce identity."
        currentPath="/developers/agent-registration"
      >
        <p>
          Registering an agent doesn't just create a database row: it provisions an identity with a
          real state machine, so an agent can be suspended, reactivated, rotated, retired, or revoked,
          with every transition producing a signed, immutable audit record.
        </p>

        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>The state machine</h2>
        <CodeBlock>{`registered -> active -> suspended -> active -> retired
                                          \\-> revoked
registered ---------------------------------> retired
registered ---------------------------------> revoked`}</CodeBlock>
        <div className="overflow-x-auto my-2">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-2 pr-4" style={{ color: "#e8ecf4" }}>State</th>
                <th className="text-left py-2 pr-4" style={{ color: "#e8ecf4" }}>Meaning</th>
                <th className="text-left py-2" style={{ color: "#e8ecf4" }}>Can sign actions?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["registered", "Exists, not yet operational.", "No"],
                ["active", "Fully operational.", "Yes"],
                ["suspended", "Temporary lock.", "No, but reviewable"],
                ["revoked", "Certificate permanently revoked. Terminal.", "No, ever"],
                ["retired", "Permanently removed from operational use. Terminal.", "No, ever"],
              ].map(([state, meaning, can]) => (
                <tr key={state} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td className="py-2.5 pr-4 mono" style={{ color: "#e8ecf4" }}>{state}</td>
                  <td className="py-2.5 pr-4 text-muted-foreground">{meaning}</td>
                  <td className="py-2.5 text-muted-foreground">{can}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Revoking and retiring are both reachable from <code className="mono">registered</code>,{" "}
          <code className="mono">active</code>, or <code className="mono">suspended</code>: a
          compromised key doesn't wait for the agent to be active first.
        </p>

        <h2 style={sectionHeadingStyle}>Registering directly against the API</h2>
        <CodeBlock label="cURL">{`curl -X POST https://api.aisecurewatch.com/v1/agents \\
  -H "X-PayReality-Operator-Key: your-operator-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "AP Automation Agent",
    "acting_for_principal_id": "<principal_id>",
    "public_key": "ed25519:base64:<your-agents-public-key>"
  }'`}</CodeBlock>
        <p>
          A newly created agent starts <code className="mono">registered</code>, not{" "}
          <code className="mono">active</code>: an account is provisioned, then a separate step
          enables it, the same two-step flow a real enterprise identity system uses, with room for a
          human approval gate between the two if you want one.
        </p>
        <CodeBlock label="cURL">{`curl -X POST https://api.aisecurewatch.com/v1/agents/{agent_id}/activate \\
  -H "X-PayReality-Operator-Key: your-operator-key"`}</CodeBlock>
        <p>
          The Python SDK's <code className="mono">register()</code> chains this activation call
          automatically, so it hands back a ready-to-use, active identity in one call. See{" "}
          <a href="/developers/sdks" style={{ color: "#a78bfa" }}>SDKs</a>.
        </p>

        <h2 style={sectionHeadingStyle}>What happens in each non-active state</h2>
        <p>
          A <code className="mono">revoked</code> or <code className="mono">retired</code> agent's
          actions are rejected before anything is recorded: these are terminal states with no
          standing to act at all. A <code className="mono">suspended</code> agent's action is
          recorded and immediately sent to Human Review rather than evaluated against any rule,
          since suspension is temporary and reviewable: what was attempted while suspended is
          preserved, not silently dropped.
        </p>

        <h2 style={sectionHeadingStyle}>Ownership vs. Principal</h2>
        <p>
          <code className="mono">owner</code>, <code className="mono">business_unit</code>, and{" "}
          <code className="mono">environment</code> are organisational labels for who's responsible
          for an agent (e.g. "Finance Team"). They're separate from{" "}
          <code className="mono">acting_for_principal_id</code>, the Principal an agent's actions are
          evaluated under for policy purposes (e.g. "Finance Manager"). Transferring ownership changes
          who's responsible for an agent; it never silently changes whose authority it acts under.
        </p>
      </DocLayout>
    </>
  );
}
