export const SITE_URL = "https://aisecurewatch.com";
export const PLATFORM = "https://payreality.aisecurewatch.com";
export const API_URL = "https://api.aisecurewatch.com";

export const CONTACT_EMAIL = "sean@aisecurewatch.com";
export const CAREERS_EMAIL = "sean@aisecurewatch.com";
export const LEGAL_EMAIL = "sean@aisecurewatch.com";
export const NATHAN_EMAIL = "nathan@aisecurewatch.com";

export function mailto(to: string, subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${to}?${params.toString()}`;
}

// Flat links render directly in the nav bar. Grouped links render as a
// dropdown panel (SiteNav.tsx) -- this is additive to the existing nav
// component, not a replacement of it: a link with no `groups` is unchanged
// from before this file's IA update.
export const NAV_LINKS = [
  { label: "Platform", href: "/platform" },
  {
    label: "Products",
    groups: [
      { label: "Overview", href: "/products", desc: "Start here -- how the five products fit together" },
      { label: "Runtime Authority", href: "/products/runtime-authority", desc: "The flagship pre-execution authorization runtime" },
      { label: "Authority Graph", href: "/products/authority-graph", desc: "Delegated authority, modeled and machine-readable" },
      { label: "Runtime Policies", href: "/products/runtime-policies", desc: "Deterministic policy compilation and enforcement" },
      { label: "Evidence Portal", href: "/products/evidence-portal", desc: "Search, audit, and export every decision" },
      { label: "Authorization Receipts", href: "/products/authorization-receipts", desc: "Portable, independently verifiable evidence", badge: "Coming Soon" },
    ],
  },
  {
    label: "Solutions",
    groups: [
      { label: "Financial Services", href: "/solutions/financial-services", desc: "Payment approvals, treasury, credit, claims, servicing" },
      { label: "Procurement", href: "/solutions/procurement", desc: "Purchase orders, onboarding, invoices, vendor risk" },
      { label: "Healthcare", href: "/solutions/healthcare", desc: "Administrative and operational authorization" },
      { label: "Manufacturing", href: "/solutions/manufacturing", desc: "Production, maintenance, quality, supply chain" },
      { label: "Public Sector", href: "/solutions/public-sector", desc: "Benefits, budget authority, procurement thresholds" },
      { label: "Enterprise IT", href: "/solutions/enterprise-it", desc: "Change approval, access, incident escalation" },
      { label: "Legal and Contracts", href: "/solutions/legal-and-contracts", desc: "Signing authority, NDAs, settlement limits" },
      { label: "Insurance and Risk", href: "/insurance-portal", desc: "Underwriting and assurance for insurers covering AI deployments" },
    ],
  },
  {
    label: "Developers",
    groups: [
      { label: "Overview", href: "/developers", desc: "Start here -- the full Developers index" },
      { label: "Getting Started", href: "/developers/getting-started", desc: "From empty organization to first decision" },
      { label: "Architecture", href: "/developers/architecture", desc: "Agent to Intent to Decision to Evidence" },
      { label: "Runtime API", href: "/developers/runtime-api", desc: "POST /v1/intents and its three outcomes" },
      { label: "Authentication", href: "/developers/authentication", desc: "Keys, certificates, and signing" },
      { label: "SDKs", href: "/developers/sdks", desc: "Python today, and the language roadmap" },
      { label: "Integration Guides", href: "/developers/integration-guides", desc: "Agent frameworks and enterprise systems" },
      { label: "API Reference", href: "/developers/api-reference", desc: "Endpoints, schemas, and status codes" },
    ],
  },
  {
    label: "Resources",
    groups: [
      { label: "Resources", href: "/resources", desc: "Articles and technical writing" },
      { label: "The Enterprise Authority Manifesto", href: "/manifesto", desc: "" },
      { label: "Demo Center", href: "/demo", desc: "" },
    ],
  },
  {
    label: "Company",
    groups: [
      { label: "About", href: "/about", desc: "Why PayReality exists, and who built it" },
      { label: "Why We Exist", href: "/why-we-exist", desc: "The one-idea case for the category" },
      { label: "Leadership", href: "/leadership", desc: "Sean Chihwendu and Nathan Obiekwe" },
      { label: "Careers", href: "/careers", desc: "A small, founder-built team" },
      { label: "Contact", href: "/contact", desc: "Sales, leadership, and careers" },
    ],
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Products",
    links: [
      { label: "Products Overview", href: "/products" },
      { label: "Runtime Authority", href: "/products/runtime-authority" },
      { label: "Authority Graph", href: "/products/authority-graph" },
      { label: "Runtime Policies", href: "/products/runtime-policies" },
      { label: "Evidence Portal", href: "/products/evidence-portal" },
      { label: "Authorization Receipts", href: "/products/authorization-receipts" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Financial Services", href: "/solutions/financial-services" },
      { label: "Procurement", href: "/solutions/procurement" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Manufacturing", href: "/solutions/manufacturing" },
      { label: "Public Sector", href: "/solutions/public-sector" },
      { label: "Enterprise IT", href: "/solutions/enterprise-it" },
      { label: "Legal and Contracts", href: "/solutions/legal-and-contracts" },
      { label: "Insurance and Risk", href: "/insurance-portal" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "Agents", href: `${PLATFORM}/agents`, external: true },
      { label: "Governance", href: `${PLATFORM}/governance`, external: true },
      { label: "Decisions", href: `${PLATFORM}/decisions`, external: true },
      { label: "Assurance", href: `${PLATFORM}/assurance`, external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why We Exist", href: "/why-we-exist" },
      { label: "Leadership", href: "/leadership" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Book a Demo", action: "demo" as const },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "The Enterprise Authority Manifesto", href: "/manifesto" },
      { label: "The Missing IAM Layer for AI Authority", href: "/resources/the-missing-iam-layer-for-ai-authority" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Glossary", href: "/resources/glossary" },
      { label: "Demo Center", href: "/demo" },
    ],
  },
  {
    heading: "Developer",
    links: [
      { label: "Developers Overview", href: "/developers" },
      { label: "Getting Started", href: "/developers/getting-started" },
      { label: "Architecture", href: "/developers/architecture" },
      { label: "Runtime API", href: "/developers/runtime-api" },
      { label: "SDKs", href: "/developers/sdks" },
      { label: "Integration Guides", href: "/developers/integration-guides" },
      { label: "API Reference (Live)", href: `${API_URL}/docs`, external: true },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security", href: "/security" },
];
