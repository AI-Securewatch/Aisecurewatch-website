export interface DocPageMeta {
  label: string;
  path: string;
  desc: string;
}

// The hub page (Overview.tsx, at /developers) and every doc page's footer
// cross-link both read from this one list, so adding a doc page never means
// updating two separate hardcoded link lists that can drift apart.
export const DOCS_PAGES: DocPageMeta[] = [
  {
    label: "Getting Started",
    path: "/developers/getting-started",
    desc: "Create an organization, register an agent, and get your first Authorization Receipt back.",
  },
  {
    label: "Architecture",
    path: "/developers/architecture",
    desc: "The full path from an agent's signed intent to a decision and its evidence, component by component.",
  },
  {
    label: "Runtime API",
    path: "/developers/runtime-api",
    desc: "The Intent API: POST /v1/intents, its three possible outcomes, and the request/response lifecycle.",
  },
  {
    label: "Authentication",
    path: "/developers/authentication",
    desc: "The Operator Key, per-user roles and permissions, per-developer API keys, and agent certificates.",
  },
  {
    label: "Authority Graph",
    path: "/developers/authority-graph",
    desc: "Delegated authority, roles, resources, and approval limits, and how governance becomes machine-readable.",
  },
  {
    label: "Runtime Policies",
    path: "/developers/runtime-policies",
    desc: "How a policy is compiled, versioned, and deployed, and why that differs from the governance document it came from.",
  },
  {
    label: "Authorization Receipts",
    path: "/developers/authorization-receipts",
    desc: "Why logs aren't enough, the receipt lifecycle, and the planned architecture for independent verification.",
  },
  {
    label: "Evidence Verification",
    path: "/developers/evidence-verification",
    desc: "Signature verification, evidence export, and audit workflows against the Evidence Portal today.",
  },
  {
    label: "SDKs",
    path: "/developers/sdks",
    desc: "The Python SDK, and the language roadmap for Node.js, Go, Java, .NET, and Rust.",
  },
  {
    label: "Webhooks",
    path: "/developers/webhooks",
    desc: "Enterprise events -- IntentReceived, DecisionCompleted, ReceiptIssued, and more -- with real payloads.",
  },
  {
    label: "Integration Examples",
    path: "/developers/integration-examples",
    desc: "Rotating keys, sending a heartbeat, and retiring an agent, with real SDK code for each.",
  },
  {
    label: "Integration Guides",
    path: "/developers/integration-guides",
    desc: "Connecting Runtime Authority to agent frameworks, model providers, and enterprise systems.",
  },
  {
    label: "Agent Registration",
    path: "/developers/agent-registration",
    desc: "The full agent lifecycle: registered, active, suspended, retired, or revoked.",
  },
  {
    label: "API Reference",
    path: "/developers/api-reference",
    desc: "Endpoints, schemas, headers, status codes, errors, and versioning.",
  },
];
