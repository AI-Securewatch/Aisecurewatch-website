import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import CodeBlock from "../docs/CodeBlock";

const STEPS = [
  { n: 1, title: "Create an organization", body: "Everything below (agents, policies, evidence) is scoped to one organization. This is done once, from Organisation Settings, not the API." },
  { n: 2, title: "Register an agent", body: "Give the agent an identity and a Principal it acts on behalf of. It starts registered, not active." },
  { n: 3, title: "Upload governance", body: "Bring an existing Delegation of Authority document, approval matrix, or signing schedule: the AI Authority Builder reads it directly." },
  { n: 4, title: "Generate the Authority Graph", body: "The uploaded governance is modeled as a graph: principals, delegates, limits, and role hierarchy, ready for the runtime to query." },
  { n: 5, title: "Publish Runtime Policies", body: "Draft, review, and compile the conditions under which an action is permitted. A policy has to be active before any Intent can be evaluated against it." },
  { n: 6, title: "Connect the Runtime API", body: "Point your agent at the Intent API, or install the SDK (see SDKs for the one-call version of steps 6 and 7 together)." },
  { n: 7, title: "Execute your first Intent", body: "Submit a signed action. It's evaluated against the Authority Graph and active Runtime Policies in sub-millisecond time." },
  { n: 8, title: "Receive your Authorization Receipt", body: "The decision (Allow, Deny, or Human Review) comes back immediately, along with the signed evidence record for it." },
];

export default function GettingStarted() {
  return (
    <>
      <SEO
        title="Getting Started | PayReality Developers"
        description="The eight steps from creating an organization to your first signed decision: register an agent, upload governance, publish policy, and execute an Intent."
        path="/developers/getting-started"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Getting Started",
          "url": `${SITE_URL}/developers/getting-started`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Getting Started"
        subtitle="Eight steps from an empty organization to a signed decision on a real agent action."
        currentPath="/developers/getting-started"
      >
        <div className="flex flex-col gap-0 -mt-2">
          {STEPS.map((s, i) => (
            <div key={s.n} className="flex gap-4 sm:gap-5">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mono text-sm"
                  style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)", color: "#a78bfa" }}
                >
                  {s.n}
                </div>
                {i < STEPS.length - 1 && <div className="w-px flex-1 my-1" style={{ background: "rgba(124,111,255,0.2)" }} />}
              </div>
              <div className="pb-8">
                <h3 style={{ ...sectionHeadingStyle, marginTop: "0.25rem", fontSize: "1.15rem" }}>{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mt-1.5" style={{ fontSize: "1.0625rem" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 style={sectionHeadingStyle}>Steps 2, 6, and 7, with the SDK</h2>
        <p>
          Registering an agent, connecting to the Runtime API, and submitting a signed Intent collapse into a
          handful of calls once the SDK is handling signing for you:
        </p>
        <CodeBlock label="quickstart.py">{`from payreality import Agent

# Step 2: register
agent = Agent(api_key="your-operator-key")
identity = agent.register(name="AP Automation Agent", principal="Finance Manager")

# Steps 6 + 7: connect and execute an Intent
decision = agent.authorize(
    resource="Vendor Payment",
    amount=8500,
    currency="USD",
    vendor="Acme Supplies",
)

print(decision.outcome)      # ALLOW, DENY, or HUMAN_REVIEW
print(decision.evidence_id)  # step 8: the signed evidence record for this decision`}</CodeBlock>
        <p>
          Steps 1, 3, 4, and 5 (creating the organization, uploading governance, generating the Authority
          Graph, and publishing Runtime Policies) happen in the platform UI today, not through this SDK call.
          See <a href="/developers/authority-graph" style={{ color: "#a78bfa" }}>Authority Graph</a> and{" "}
          <a href="/developers/runtime-policies" style={{ color: "#a78bfa" }}>Runtime Policies</a> for what each
          one actually produces.
        </p>

        <h2 style={sectionHeadingStyle}>Where to go next</h2>
        <p>
          For the full request and response shape of step 7, see{" "}
          <a href="/developers/runtime-api" style={{ color: "#a78bfa" }}>Runtime API</a>. For what step 8's
          receipt actually contains, see{" "}
          <a href="/developers/authorization-receipts" style={{ color: "#a78bfa" }}>Authorization Receipts</a>.
          For the whole path end to end, see{" "}
          <a href="/developers/architecture" style={{ color: "#a78bfa" }}>Architecture</a>.
        </p>
      </DocLayout>
    </>
  );
}
