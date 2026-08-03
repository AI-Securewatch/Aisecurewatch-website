import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import DocLayout, { sectionHeadingStyle } from "../docs/DocLayout";
import StatusBadge from "../docs/StatusBadge";

const GROUPS = [
  {
    heading: "Agent frameworks and protocols",
    note: "Any Python process can call the SDK's authorize() before taking an action -- these frameworks are all Python-native, so the integration pattern works today even without a dedicated connector.",
    items: [
      { name: "OpenAI Agents SDK", status: "Early Access" as const },
      { name: "Anthropic Claude (tool use / Agent SDK)", status: "Early Access" as const },
      { name: "LangGraph", status: "Early Access" as const },
      { name: "CrewAI", status: "Early Access" as const },
      { name: "AutoGen", status: "Early Access" as const },
      { name: "MCP (Model Context Protocol)", status: "Early Access" as const },
    ],
  },
  {
    heading: "Cloud AI platforms",
    note: "These require a dedicated connector to bridge the platform's own agent runtime to the Intent API -- not yet built.",
    items: [
      { name: "Microsoft Copilot", status: "Coming Soon" as const },
      { name: "Azure AI Foundry", status: "Coming Soon" as const },
      { name: "AWS Bedrock", status: "Coming Soon" as const },
      { name: "Google Vertex AI", status: "Coming Soon" as const },
    ],
  },
  {
    heading: "Enterprise systems",
    note: "The system of record an agent's action ultimately reaches, after a decision allows it -- connector work not yet started.",
    items: [
      { name: "SAP", status: "Coming Soon" as const },
      { name: "Oracle", status: "Coming Soon" as const },
      { name: "Microsoft Dynamics", status: "Coming Soon" as const },
      { name: "ServiceNow", status: "Coming Soon" as const },
    ],
  },
  {
    heading: "DevOps",
    note: "",
    items: [{ name: "GitHub Actions", status: "Coming Soon" as const }],
  },
];

export default function IntegrationGuides() {
  return (
    <>
      <SEO
        title="Integration Guides | PayReality Developers"
        description="How Runtime Authority connects to agent frameworks, cloud platforms, and enterprise systems: what's usable today via the SDK, versus a planned connector."
        path="/developers/integration-guides"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Integration Guides",
          "url": `${SITE_URL}/developers/integration-guides`,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <DocLayout
        eyebrow="DEVELOPERS"
        title="Integration Guides"
        subtitle="Where Runtime Authority connects to the rest of your stack -- and an honest split between what works today and what's a dedicated connector we haven't built yet."
        currentPath="/developers/integration-guides"
      >
        <p>
          None of the entries below are a fabricated "it just works" integration. Agent frameworks that are
          Python-native can call the SDK directly today, using the exact same{" "}
          <code className="mono">agent.authorize(...)</code> call shown throughout these docs. Cloud platforms
          and enterprise systems that would need a dedicated connector are marked accordingly.
        </p>

        {GROUPS.map((g) => (
          <div key={g.heading} className="mt-2">
            <h2 style={sectionHeadingStyle}>{g.heading}</h2>
            {g.note && <p className="text-sm text-muted-foreground mb-3">{g.note}</p>}
            <div className="grid sm:grid-cols-2 gap-3 my-2">
              {g.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl px-4 py-3 flex items-center justify-between gap-3"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-sm" style={{ color: "#e8ecf4" }}>{item.name}</span>
                  <StatusBadge status={item.status} />
                </div>
              ))}
            </div>
          </div>
        ))}

        <h2 style={sectionHeadingStyle}>What "Early Access" means here</h2>
        <p>
          There's no PayReality-published package for any of the frameworks above -- "Early Access" means the
          existing Python SDK already gives you what you need to wire it in yourself (call{" "}
          <code className="mono">authorize()</code> at the point your agent would otherwise act), not that a
          named integration package exists. See{" "}
          <a href="/developers/sdks" style={{ color: "#a78bfa" }}>SDKs</a> and{" "}
          <a href="/developers/integration-examples" style={{ color: "#a78bfa" }}>Integration Examples</a> for
          the calls involved.
        </p>
      </DocLayout>
    </>
  );
}
