import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "./DocLayout";
import CodeBlock from "./CodeBlock";

export default function IntegrationExamples() {
  return (
    <>
      <SEO
        title="Integration Examples | PayReality"
        description="Worked examples for the full agent lifecycle: registering, rotating keys, sending a heartbeat, and retiring an agent, with the PayReality Python SDK."
        path="/docs/integration-examples"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Integration Examples",
          "url": `${SITE_URL}/docs/integration-examples`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        title="Integration Examples"
        subtitle="Every lifecycle method an integration actually needs, none of them exposing ED25519 keys, certificates, or HTTP headers to your code."
        currentPath="/docs/integration-examples"
      >
        <h2 style={{ ...sectionHeadingStyle, marginTop: 0 }}>Register once, use everywhere</h2>
        <CodeBlock label="register.py">{`from payreality import Agent

agent = Agent(api_key="your-operator-key")
identity = agent.register(name="AP Automation Agent", principal="Finance Manager")
# identity.status == "active" -- ready to sign Intents immediately`}</CodeBlock>
        <p>
          Registering an agent through the raw API leaves it in a <code className="mono">registered</code>{" "}
          state until a separate activation step runs, the same two-step provisioning a real
          enterprise identity system uses. The SDK's <code className="mono">register()</code> chains
          that activation automatically, so it still hands back a ready-to-use identity in one call:
          the "install and start using in under five minutes" experience the SDK was built for.
        </p>

        <h2 style={sectionHeadingStyle}>Rotating an agent's key</h2>
        <CodeBlock label="rotate_keys.py">{`new_identity = agent.rotate_keys()
print(new_identity.certificate_id)  # the new certificate's ID`}</CodeBlock>
        <p>
          Generates a new key pair locally, uploads only the new public key, and switches this agent
          to sign with it from this point on. The previous private key is discarded the moment this
          call returns. Every decision made before rotation stays exactly as valid as it was: rotating
          a key never invalidates history.
        </p>

        <h2 style={sectionHeadingStyle}>Heartbeat</h2>
        <CodeBlock label="heartbeat.py">{`agent.heartbeat(version="1.4.0", runtime="Azure Foundry")`}</CodeBlock>
        <p>
          Reports this agent as alive. Unlike the other lifecycle calls, a heartbeat is signed with
          the agent's own certificate, not the Operator Key: it's the agent asserting its own
          liveness, not an administrative action. All parameters are optional; call it however often
          makes sense for your deployment.
        </p>

        <h2 style={sectionHeadingStyle}>Retiring an agent</h2>
        <CodeBlock label="retire.py">{`agent.retire(reason="decommissioned, replaced by v2")`}</CodeBlock>
        <p>
          A server-side, terminal action, not a local flag: once retired, no process signing with this
          identity's key can submit Intents or heartbeats again, and historical Evidence is
          unaffected. Calling <code className="mono">authorize()</code> again on an{" "}
          <code className="mono">Agent</code> your own process just retired fails immediately, without
          a network round trip.
        </p>
      </DocLayout>
    </>
  );
}
