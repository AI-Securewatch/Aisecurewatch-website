export interface DocPageMeta {
  label: string;
  path: string;
  desc: string;
}

// The hub page (Documentation.tsx) and every doc page's footer cross-link
// both read from this one list, so adding a doc page never means updating
// two separate hardcoded link lists that can drift apart.
export const DOCS_PAGES: DocPageMeta[] = [
  {
    label: "SDK Documentation",
    path: "/docs/sdk",
    desc: "How the Python SDK wraps the API: signing, retries, the credential store, and what api_key actually is.",
  },
  {
    label: "Integration Examples",
    path: "/docs/integration-examples",
    desc: "Rotating keys, sending a heartbeat, and retiring an agent, with real code for each.",
  },
  {
    label: "Authentication",
    path: "/docs/authentication",
    desc: "The Operator Key, per-user roles and permissions, and per-developer API keys, and how they layer together.",
  },
  {
    label: "Agent Registration",
    path: "/docs/agent-registration",
    desc: "The full agent lifecycle: registered, active, suspended, retired, or revoked, and what each state can and can't do.",
  },
];
