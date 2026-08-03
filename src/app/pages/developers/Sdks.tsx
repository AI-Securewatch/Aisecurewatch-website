import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";
import StatusBadge from "../docs/StatusBadge";

const FUTURE_SDKS = ["Node.js", "Go", "Java", ".NET", "Rust"];

export default function Sdks() {
  return (
    <>
      <SEO
        title="SDKs | PayReality Developers"
        description="How the PayReality Python SDK wraps the Intent API: signing, retries, the local credential store, and what api_key authenticates. Plus the language roadmap."
        path="/developers/sdks"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "SDKs",
          "url": `${SITE_URL}/developers/sdks`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="SDKs"
        subtitle="A Python package that wraps the Intent API, so integrating an agent never means hand-implementing ED25519 signing, certificate headers, or retry logic."
        currentPath="/developers/sdks"
      >
        <div className="flex items-center gap-3 flex-wrap -mt-2 mb-2">
          <span className="text-sm" style={{ color: "#e8ecf4", fontWeight: 600 }}>Python</span>
          <StatusBadge status="Coming First" />
        </div>

        <p>
          The PayReality SDK (<code className="mono">payreality-python</code>) is a client, not a
          platform change: it consumes the same <code className="mono">/v1/principals</code>,{" "}
          <code className="mono">/v1/agents</code>, <code className="mono">/v1/intents</code>, and{" "}
          <code className="mono">/v1/decisions</code> endpoints that exist on the API today. Nothing
          about the Runtime Authority Engine, the Compiler, OPA, or Evidence changes because the SDK
          exists; it just removes the parts a developer shouldn't have to hand-roll.
        </p>

        <h2 style={sectionHeadingStyle}>Install and register an agent</h2>
        <CodeBlock label="quickstart.py">{`from payreality import Agent

agent = Agent(api_key="your-operator-key")
identity = agent.register(name="AP Automation Agent", principal="Finance Manager")

print(identity.agent_id)         # server-assigned, never hand-picked
print(identity.certificate_id)   # the certificate this agent signs with`}</CodeBlock>
        <p>
          <code className="mono">register()</code> generates an ED25519 key pair locally, uploads
          only the public key, and returns a ready-to-use identity in one call. Registration is
          idempotent per key: calling <code className="mono">register()</code> again with the same
          private key returns the cached identity instead of creating a duplicate agent, which makes
          it safe to call on every process start rather than something you need to guard yourself.
        </p>

        <h2 style={sectionHeadingStyle}>Submitting an action</h2>
        <CodeBlock label="submit_intent.py">{`decision = agent.authorize(
    resource="Vendor Payment",
    amount=8500,
    currency="USD",
    vendor="Acme Supplies",
)

if decision.outcome == "ALLOW":
    ...  # proceed
elif decision.outcome == "HUMAN_REVIEW":
    ...  # a person will resolve this in the Review Queue`}</CodeBlock>
        <p>
          <code className="mono">authorize()</code> signs the request with the agent's own
          certificate, exactly like every signed Intent the API accepts. There are exactly three
          outcomes: <strong style={{ color: "#e8ecf4" }}>ALLOW</strong>,{" "}
          <strong style={{ color: "#e8ecf4" }}>DENY</strong>, or{" "}
          <strong style={{ color: "#e8ecf4" }}>HUMAN_REVIEW</strong>. An action the platform doesn't
          recognize is never silently allowed: it's escalated to a human, the same fail-closed
          behavior the Decision Engine applies everywhere.
        </p>

        <h2 style={sectionHeadingStyle}>What api_key actually authenticates</h2>
        <p>
          <code className="mono">Agent(api_key=...)</code> is the Operator Key: the same
          administrative credential every other mutating action on this platform uses (see{" "}
          <a href="/developers/authentication" style={{ color: "#a78bfa" }}>Authentication</a>). It's
          required for <code className="mono">register()</code>, <code className="mono">
          rotate_keys()</code>, and <code className="mono">retire()</code>, since creating, rotating,
          or retiring an agent identity is an administrative action. It is <em>not</em> required for{" "}
          <code className="mono">authorize()</code> or <code className="mono">heartbeat()</code>,
          which authenticate purely via the agent's own certificate signature, the same way a human
          employee's badge doesn't require their manager's key to walk through a door they're already
          authorized for.
        </p>

        <h2 style={sectionHeadingStyle}>Why the SDK is synchronous</h2>
        <p>
          <code className="mono">agent.authorize(...)</code> is called directly, no{" "}
          <code className="mono">await</code>. This matches the default surface most developers
          already expect from a first SDK release (Stripe, OpenAI, and Supabase all ship synchronous
          clients as their default), keeping the initial surface area matched to what most
          integrations actually need. An async client is a natural, additive future addition, not a
          redesign.
        </p>

        <h2 style={sectionHeadingStyle}>Retries and error handling</h2>
        <p>
          Connection failures, timeouts, and 5xx responses are retried automatically with capped
          exponential backoff. <code className="mono">401</code>, <code className="mono">403</code>,
          and any other <code className="mono">4xx</code> (including <code className="mono">422</code>{" "}
          validation failures) are never retried, since none of these can succeed by trying again
          unmodified. Every failure, network or HTTP, is mapped onto a typed exception before it
          reaches your code: you never see a raw HTTP client exception or a bare status code.
        </p>

        <h2 style={sectionHeadingStyle}>Language roadmap</h2>
        <p>
          Python ships first because it's what most agent frameworks in this space are already
          written in (LangGraph, CrewAI, AutoGen, the OpenAI and Anthropic SDKs). The following are
          planned, not started -- there is no partial implementation to preview yet:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-2">
          {FUTURE_SDKS.map((lang) => (
            <div
              key={lang}
              className="rounded-xl px-4 py-3 flex items-center justify-between gap-2"
              style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
            >
              <span className="text-sm" style={{ color: "#e8ecf4" }}>{lang}</span>
              <StatusBadge status="Planned" />
            </div>
          ))}
        </div>

        <p>
          For the full lifecycle methods (rotating keys, heartbeats, retiring an agent), see{" "}
          <a href="/developers/integration-examples" style={{ color: "#a78bfa" }}>Integration Examples</a>.
        </p>
      </DocLayout>
    </>
  );
}
