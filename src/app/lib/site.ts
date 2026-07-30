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

export const NAV_LINKS = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Platform", href: "/#platform" },
  { label: "Demo", href: "/demo" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Evidence", href: "/#evidence" },
  { label: "Company", href: "/about" },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
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
      { label: "Demo Center", href: "/demo" },
      { label: "The Enterprise Authority Manifesto", href: "/manifesto" },
      { label: "The Missing IAM Layer for AI Authority", href: "/resources/the-missing-iam-layer-for-ai-authority" },
      { label: "Policy Engine", href: "/policy-engine" },
      { label: "Insurance Portal", href: "/insurance-portal" },
      { label: "Evidence", href: "/#evidence" },
    ],
  },
  {
    heading: "Developer",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Developer SDK", href: "/docs/sdk" },
      { label: "Integration Examples", href: "/docs/integration-examples" },
      { label: "Authentication", href: "/docs/authentication" },
      { label: "Agent Registration", href: "/docs/agent-registration" },
      { label: "API Reference", href: `${API_URL}/docs`, external: true },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: mailto(LEGAL_EMAIL, "Privacy Policy Request") },
  { label: "Terms of Service", href: mailto(LEGAL_EMAIL, "Terms of Service Request") },
  { label: "Security", href: mailto(LEGAL_EMAIL, "Security Documentation Request") },
];
