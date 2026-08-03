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
    description: "AI Securewatch develops, owns, and operates PayReality: Enterprise AI Authority Infrastructure, built on the belief that AI execution must be deterministic.",
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
    description: "Enterprise IAM answers who an identity is, not whether a specific AI action was actually authorized. Here's the infrastructure gap that leaves behind.",
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
  "/resources/whitepapers": {
    title: "Whitepapers | PayReality Resources",
    description: "Technical deep dives into PayReality's policy compiler, authority runtime, and evidence architecture. Coming soon.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/resources/whitepapers`,
      "name": "Whitepapers | PayReality Resources",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/resources/rfcs": {
    title: "RFCs | PayReality Resources",
    description: "How PayReality's own architecture decisions get made, and the RFCs that resulted from that process. Published RFCs are coming soon.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/resources/rfcs`,
      "name": "RFCs | PayReality Resources",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/resources/case-studies": {
    title: "Case Studies | PayReality Resources",
    description: "How enterprise teams put Runtime Authority into production. Coming soon.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/resources/case-studies`,
      "name": "Case Studies | PayReality Resources",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/resources/faq": {
    title: "FAQ | PayReality Resources",
    description: "Direct answers to the questions CTOs, CISOs, and compliance leaders ask most about Runtime Authority, deterministic evaluation, and delegated authority.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "url": `${SITE_URL}/resources/faq`,
      "name": "FAQ | PayReality Resources",
    },
  },
  "/resources/glossary": {
    title: "Glossary | PayReality Resources",
    description: "Every term used on the PayReality site -- Runtime Authority, Authority Graph, Runtime Policies, Evidence Portal, and Authorization Receipts -- defined once.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "url": `${SITE_URL}/resources/glossary`,
      "name": "PayReality Glossary",
    },
  },
  "/resources/research": {
    title: "Research | PayReality Resources",
    description: "Original research on delegated authority, AI execution risk, and runtime enforcement. Coming soon.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/resources/research`,
      "name": "Research | PayReality Resources",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/manifesto": {
    title: "The Enterprise Authority Manifesto | AI Securewatch",
    description: "Why every autonomous enterprise will require authority infrastructure. The founding manifesto for Enterprise Authority Infrastructure, from AI Securewatch.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "The Enterprise Authority Manifesto",
          "description": "Why every autonomous enterprise will require authority infrastructure.",
          "url": `${SITE_URL}/manifesto`,
          "author": { "@id": `${SITE_URL}/#person-sean` },
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
          "mainEntityOfPage": `${SITE_URL}/manifesto`,
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
            { "@type": "ListItem", "position": 2, "name": "Resources", "item": `${SITE_URL}/resources` },
            { "@type": "ListItem", "position": 3, "name": "The Enterprise Authority Manifesto", "item": `${SITE_URL}/manifesto` },
          ],
        },
      ],
    },
  },
  "/demo": {
    title: "Executive Product Demonstrations | PayReality",
    description: "Watch PayReality operate: governance becomes Runtime Policies, agents receive identities, and every decision is evaluated and evidenced before execution.",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "url": `${SITE_URL}/demo`,
          "name": "Executive Product Demonstrations | PayReality",
          "about": { "@id": `${SITE_URL}/#software` },
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        },
        {
          "@type": "VideoObject",
          "name": "PayReality Executive Demo",
          "description": "An end-to-end demonstration of PayReality's Runtime Authority: AI Authority Builder, Runtime Policies, Agent Identity, the Runtime Decision Engine, cryptographic evidence, and the human review workflow.",
          "thumbnailUrl": "https://img.youtube.com/vi/DooDB4F2cqc/maxresdefault.jpg",
          "embedUrl": "https://www.youtube.com/embed/DooDB4F2cqc",
          "contentUrl": "https://youtu.be/DooDB4F2cqc",
          "duration": "PT7M",
          "publisher": { "@id": `${SITE_URL}/#organization` },
        },
      ],
    },
  },
  // "/policy-engine" intentionally has no entry -- it's a client-side
  // <Navigate> redirect to "/products/runtime-policies" now, not a real
  // page, so there's nothing here for prerender.mjs to render statically.
  // The existing SPA-fallback rewrite (same one NotFound relies on) serves
  // it, and React Router resolves the redirect on the client.
  "/platform": {
    title: "Platform | PayReality",
    description: "How Runtime Authority, the Authority Graph, Runtime Policies, the Evidence Portal, and Authorization Receipts form one deterministic authorization runtime.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/platform`,
      "name": "Platform | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/products": {
    title: "Products | PayReality",
    description: "Runtime Authority, the Authority Graph, Runtime Policies, the Evidence Portal, and Authorization Receipts -- five components of one authorization runtime.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "url": `${SITE_URL}/products`,
      "name": "Products | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/products/runtime-authority": {
    title: "Runtime Authority | PayReality",
    description: "Runtime Authority evaluates AI agent actions against delegated authority before execution, producing a deterministic Allow, Deny, or Human Review decision.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/products/runtime-authority`,
      "name": "Runtime Authority | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/products/authority-graph": {
    title: "Authority Graph | PayReality",
    description: "The Authority Graph models a Delegation of Authority, role hierarchy, and approval limits as a machine-readable structure Runtime Authority evaluates against.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/products/authority-graph`,
      "name": "Authority Graph | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/products/runtime-policies": {
    title: "Runtime Policies | PayReality",
    description: "Runtime Policies compile delegated authority into deterministic, enforceable rules, versioned and evaluated against every agent intent before execution.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/products/runtime-policies`,
      "name": "Runtime Policies | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/products/evidence-portal": {
    title: "Evidence Portal | PayReality",
    description: "The Evidence Portal is the evidence layer for Runtime Authority: search, investigate, audit, and export every authorization decision, signed and verifiable.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/products/evidence-portal`,
      "name": "Evidence Portal | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/products/authorization-receipts": {
    title: "Authorization Receipts (Coming Soon) | PayReality",
    description: "Authorization Receipts are the planned evolution of Runtime Authority's evidence: a portable, verifiable artifact for regulators, insurers, and customers.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/products/authorization-receipts`,
      "name": "Authorization Receipts | PayReality",
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/insurance-portal": {
    title: "Insurance Portal | PayReality",
    description: "How PayReality's cryptographic evidence supports underwriting, claims, and continuous risk assurance for insurers covering autonomous AI deployments.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/insurance-portal`,
      "name": "Insurance Portal | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
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
  // "/docs" and its four sub-pages intentionally have no entries -- they're
  // client-side <Navigate> redirects to their /developers/* successors now,
  // not real pages, so there's nothing here for prerender.mjs to render
  // statically. The existing SPA-fallback rewrite serves them.
  "/developers": {
    title: "Developers | PayReality",
    description: "Everything a developer needs to integrate Runtime Authority: register an agent, submit a signed action, and get a signed decision and evidence back.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "url": `${SITE_URL}/developers`,
      "name": "Developers | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/getting-started": {
    title: "Getting Started | PayReality Developers",
    description: "The eight steps from creating an organization to your first signed decision: register an agent, upload governance, publish policy, and execute an Intent.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Getting Started",
      "url": `${SITE_URL}/developers/getting-started`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/architecture": {
    title: "Architecture | PayReality Developers",
    description: "From a signed intent to a decision and its evidence: Runtime Authority, the Authority Graph, Runtime Policies, the Decision Engine, and the Evidence Portal.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Architecture",
      "url": `${SITE_URL}/developers/architecture`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/runtime-api": {
    title: "Runtime API | PayReality Developers",
    description: "The Intent API: POST /v1/intents, its three possible outcomes -- Allow, Deny, and Human Review -- and the request and response lifecycle.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Runtime API",
      "url": `${SITE_URL}/developers/runtime-api`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/authentication": {
    title: "Authentication | PayReality Developers",
    description: "How PayReality authenticates requests: the Operator Key, per-user roles and permissions, per-developer API keys, and agent certificates, layered together.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Authentication",
      "url": `${SITE_URL}/developers/authentication`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/authority-graph": {
    title: "Authority Graph | PayReality Developers",
    description: "What the Authority Graph represents: delegated authority, roles, resources, approval limits, relationships, versioning, and machine-readable governance.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Authority Graph",
      "url": `${SITE_URL}/developers/authority-graph`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/runtime-policies": {
    title: "Runtime Policies | PayReality Developers",
    description: "How a policy is compiled, evaluated deterministically, versioned, and deployed -- and why a Runtime Policy differs from the governance document it came from.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Runtime Policies",
      "url": `${SITE_URL}/developers/runtime-policies`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/authorization-receipts": {
    title: "Authorization Receipts | PayReality Developers",
    description: "Why signed database records aren't enough, the planned Authorization Receipt lifecycle, and the four receipt shapes: Allow, Deny, Human Review, and Resolution.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Authorization Receipts",
      "url": `${SITE_URL}/developers/authorization-receipts`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/evidence-verification": {
    title: "Evidence Verification | PayReality Developers",
    description: "How to verify a Decision's signature and export it for audit today, and the planned roadmap for offline, portable verification.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Evidence Verification",
      "url": `${SITE_URL}/developers/evidence-verification`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/sdks": {
    title: "SDKs | PayReality Developers",
    description: "How the PayReality Python SDK wraps the Intent API: signing, retries, the local credential store, and what api_key authenticates. Plus the language roadmap.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "SDKs",
      "url": `${SITE_URL}/developers/sdks`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/webhooks": {
    title: "Webhooks | PayReality Developers",
    description: "Planned Runtime Authority webhook events: IntentReceived, DecisionCompleted, HumanReviewRequested, ReceiptIssued, PolicyPublished, and AuthorityGraphUpdated.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Webhooks",
      "url": `${SITE_URL}/developers/webhooks`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/integration-examples": {
    title: "Integration Examples | PayReality Developers",
    description: "Worked examples for the full agent lifecycle: registering, rotating keys, sending a heartbeat, and retiring an agent, with the PayReality Python SDK.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Integration Examples",
      "url": `${SITE_URL}/developers/integration-examples`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/integration-guides": {
    title: "Integration Guides | PayReality Developers",
    description: "How Runtime Authority connects to agent frameworks, cloud platforms, and enterprise systems: what's usable today via the SDK, versus a planned connector.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Integration Guides",
      "url": `${SITE_URL}/developers/integration-guides`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/agent-registration": {
    title: "Agent Registration | PayReality Developers",
    description: "The full PayReality agent lifecycle: registered, active, suspended, retired, or revoked, what each state can and can't do, and how to register one.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Agent Registration",
      "url": `${SITE_URL}/developers/agent-registration`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/developers/api-reference": {
    title: "API Reference | PayReality Developers",
    description: "Endpoints, schemas, headers, authentication, status codes, errors, and versioning for the PayReality Runtime API.",
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "API Reference",
      "url": `${SITE_URL}/developers/api-reference`,
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/solutions": {
    title: "Solutions | PayReality",
    description: "Runtime Authority applied to governance and authorization problems in financial services, procurement, healthcare, manufacturing, public sector, and legal.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "url": `${SITE_URL}/solutions`,
      "name": "Solutions | PayReality",
      "about": { "@id": `${SITE_URL}/#software` },
    },
  },
  "/solutions/financial-services": {
    title: "Financial Services | PayReality Solutions",
    description: "How Runtime Authority evaluates AI agent actions in financial services against delegated authority, before payment, treasury, or credit actions execute.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/solutions/financial-services`,
      "name": "Financial Services | PayReality Solutions",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/solutions/procurement": {
    title: "Procurement | PayReality Solutions",
    description: "How Runtime Authority evaluates AI agent actions in procurement against delegated spend authority, before purchase orders, onboarding, or invoices execute.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/solutions/procurement`,
      "name": "Procurement | PayReality Solutions",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/solutions/healthcare": {
    title: "Healthcare | PayReality Solutions",
    description: "How Runtime Authority evaluates AI agent actions in healthcare workflows against delegated authority, before prior authorizations or referrals execute.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/solutions/healthcare`,
      "name": "Healthcare | PayReality Solutions",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/solutions/manufacturing": {
    title: "Manufacturing | PayReality Solutions",
    description: "How Runtime Authority evaluates AI agent actions on the plant floor against delegated authority, before production changes, sign-offs, or holds execute.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/solutions/manufacturing`,
      "name": "Manufacturing | PayReality Solutions",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/solutions/public-sector": {
    title: "Public Sector | PayReality Solutions",
    description: "How Runtime Authority evaluates AI agent actions in public sector budget and procurement workflows against delegated authority, before disbursements execute.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/solutions/public-sector`,
      "name": "Public Sector | PayReality Solutions",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/solutions/enterprise-it": {
    title: "Enterprise IT | PayReality Solutions",
    description: "How Runtime Authority evaluates AI agent actions in enterprise IT against delegated change, access, or spend authority, before infrastructure changes execute.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/solutions/enterprise-it`,
      "name": "Enterprise IT | PayReality Solutions",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
  "/solutions/legal-and-contracts": {
    title: "Legal and Contracts | PayReality Solutions",
    description: "How Runtime Authority evaluates AI agent actions in legal workflows against delegated signing authority, before contracts, NDAs, or amendments execute.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": `${SITE_URL}/solutions/legal-and-contracts`,
      "name": "Legal and Contracts | PayReality Solutions",
      "about": { "@id": `${SITE_URL}/#software` },
      "isPartOf": { "@id": `${SITE_URL}/#website` },
    },
  },
};
