// Mirrors the <SEO .../> props each page passes at runtime, for the one
// piece prerendering can't get from actually rendering the component tree:
// the <head> tags, since the client SEO component sets those via a
// browser-only useEffect that never runs during a Node-side render. Kept
// separate on purpose so scripts/prerender.mjs (pure Node) never needs to
// import a .tsx file. NOTE: if you change a page's <SEO> props, update the
// matching entry here too -- there's no automatic sync between them.
const SITE_URL = "https://aisecurewatch.com";

export const ROUTE_META = {
  "/": {
    // No per-route override needed: matches index.html's static <head> exactly.
    title: "PayReality | Enterprise AI Authority Infrastructure",
    description: "Enterprise AI Authority Infrastructure. PayReality turns delegated authority into machine-enforceable authority, enforced before AI executes.",
  },
  "/about": {
    title: "About AI Securewatch | Enterprise AI Authority Infrastructure",
    description: "AI Securewatch develops, owns, and operates PayReality. Learn why we built Enterprise AI Authority Infrastructure, and what we believe about deterministic AI execution.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "url": `${SITE_URL}/about`,
      "name": "About AI Securewatch",
      "mainEntity": { "@id": `${SITE_URL}/#organization` },
    },
  },
  "/why-we-exist": {
    title: "Why We Exist | AI Securewatch",
    description: "Enterprises already have delegated authority. The problem was never governance. It was translating existing authority into controls autonomous AI can obey.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/why-we-exist`,
      "name": "Why We Exist",
      "about": [
        { "@id": `${SITE_URL}/#organization` },
        { "@id": `${SITE_URL}/#software` },
      ],
    },
  },
  "/leadership": {
    title: "Leadership | AI Securewatch",
    description: "Meet the leadership team behind AI Securewatch and PayReality: Sean Chihwendu, Founder & CEO, and Chukwudi Obiekwe, Co-Founder & CTO.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "url": `${SITE_URL}/leadership`,
      "name": "Leadership | AI Securewatch",
      "about": { "@id": `${SITE_URL}/#organization` },
      "mainEntity": [
        { "@id": `${SITE_URL}/#person-sean` },
        { "@id": `${SITE_URL}/#person-nathan` },
      ],
    },
  },
  "/leadership/sean-chihwendu": {
    title: "Sean Chihwendu | Founder & CEO, AI Securewatch",
    description: "Sean Chihwendu founded AI Securewatch to build Enterprise AI Authority Infrastructure: the runtime that enforces delegated authority against autonomous AI.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "url": `${SITE_URL}/leadership/sean-chihwendu`,
      "mainEntity": { "@id": `${SITE_URL}/#person-sean` },
    },
  },
  "/leadership/nathan-obiekwe": {
    title: "Chukwudi (Nathan) Obiekwe | Co-Founder & CTO",
    description: "Chukwudi 'Nathan' Obiekwe is the technical architect behind PayReality's deterministic authority runtime, built in Rust, gRPC, and Open Policy Agent.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "url": `${SITE_URL}/leadership/nathan-obiekwe`,
      "mainEntity": { "@id": `${SITE_URL}/#person-nathan` },
    },
  },
  "/careers": {
    title: "Careers at AI Securewatch",
    description: "AI Securewatch is building Enterprise AI Authority Infrastructure. We're looking for exceptional engineers and enterprise architects. Reach out.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/careers`,
      "name": "Careers at AI Securewatch",
      "about": { "@id": `${SITE_URL}/#organization` },
    },
  },
  "/resources": {
    title: "Resources | AI Securewatch",
    description: "Insights, research, and technical writing on Enterprise AI Authority Infrastructure, delegated authority, and deterministic AI execution, from AI Securewatch.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "url": `${SITE_URL}/resources`,
      "name": "Resources | AI Securewatch",
      "about": { "@id": `${SITE_URL}/#organization` },
    },
  },
  "/resources/the-missing-iam-layer-for-ai-authority": {
    title: "The Missing IAM Layer for AI Authority",
    description: "Enterprise IAM answers who an identity is. It was never built to ask whether a specific AI action was actually authorized. Here's the infrastructure gap that leaves.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Missing IAM Layer for AI Authority",
      "description": "Enterprises need deterministic execution boundaries for autonomous agents.",
      "url": `${SITE_URL}/resources/the-missing-iam-layer-for-ai-authority`,
      "author": { "@id": `${SITE_URL}/#person-sean` },
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
      "mainEntityOfPage": `${SITE_URL}/resources/the-missing-iam-layer-for-ai-authority`,
    },
  },
  "/contact": {
    title: "Contact AI Securewatch",
    description: "Get in touch with AI Securewatch, developer of PayReality, Enterprise AI Authority Infrastructure. Sales, leadership, and careers contacts.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "url": `${SITE_URL}/contact`,
      "about": { "@id": `${SITE_URL}/#organization` },
    },
  },
};
