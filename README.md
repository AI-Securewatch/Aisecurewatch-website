# PayReality

Marketing site for PayReality, the delegated authority infrastructure product by AI Securewatch. A multi-page React app: home/narrative, company pages (About, Why We Exist, Leadership, Careers, Contact), long-form content (Manifesto, Resources), product landing pages (Policy Engine, Insurance Portal), and developer documentation (`/docs/*`).

## Stack

- React + TypeScript, built with Vite
- react-router for client-side routing, plus a build-time prerender pass for SEO
- Tailwind CSS v4
- lucide-react icons
- shadcn/ui primitives under `src/app/components/ui` (available but not currently used by the pages themselves)

## Running locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

```
npm run build
```

Builds the SPA to `dist/`, then runs `scripts/prerender.mjs` to generate a static, crawlable HTML snapshot of every route (see `scripts/route-meta.mjs` for the route/metadata list it prerenders from).

## Structure

- `src/app/AppRoutes.tsx`: the route table — one entry per page, mapping a path to a page component.
- `src/app/pages/*.tsx`: one component per top-level page (`Home.tsx`, `About.tsx`, `Manifesto.tsx`, `PolicyEngine.tsx`, `InsurancePortal.tsx`, etc.), each with its own copy, section arrays (e.g. `MODULES`, `CAPABILITIES`, `TIMELINE`), and layout — this is the file to edit for a copy change on a specific page.
- `src/app/pages/founders/*.tsx`: individual founder bio pages, linked from `Leadership.tsx`.
- `src/app/pages/docs/*.tsx`: the developer documentation section (`Sdk.tsx`, `Authentication.tsx`, `AgentRegistration.tsx`, `IntegrationExamples.tsx`), sharing a `DocLayout.tsx` shell and a `CodeBlock.tsx` component; `docsNav.ts` centralizes the doc-page list (label/path/description) so the docs hub and each page's cross-links stay in sync.
- `src/app/lib/site.ts`: the one cross-page source of truth for nav links, footer columns, contact emails, and the platform/API/site base URLs (`PLATFORM`, `API_URL`, `SITE_URL`). Update a URL, email, or footer link here rather than per-page.
- `src/app/components/`: shared chrome — `Layout.tsx` (nav + footer wrapper), `SiteNav.tsx`, `SiteFooter.tsx`, `SEO.tsx` (per-page title/description/canonical/OG/JSON-LD, instantiated with props by each page).
- `src/app/components/ui/`: shadcn/ui component library, available but not currently used by the pages directly.
- `src/styles/`: Tailwind config, theme tokens, fonts.
- `scripts/prerender.mjs` / `scripts/route-meta.mjs`: the build-time static-HTML generation pass for SEO/crawlability.

**Note:** the platform's module count (currently ten: Command Center, Authority Modelling Studio, Intent API, Authority Engine, Human Review Console, Authority Simulation, Agent Lifecycle Management, Assurance Dashboard, Evidence Vault, Developer SDK) is repeated across `Home.tsx`, `Manifesto.tsx`, and `site.ts`'s footer — there's no single shared constant for it, so a future module addition needs updating in all three places by hand.

## No backend

There's no server or database. Two flows are wired without one:

- **Request Enterprise Demo / Request Research Paper**: opens an in-page modal (`DemoModalContext`); submitting builds a `mailto:` link to open the visitor's email client with a pre-filled message, then shows a confirmation screen either way (so it still feels like it worked if no mail client is configured).
- **Launch Platform / Launch module**: links out to the live product demo at `https://payreality.aisecurewatch.com` (the `PLATFORM` constant in `site.ts`). That demo is a separate deployment (not this repo); module cards link to the demo's home page rather than deep-linking to a specific module.

The `/docs/*` pages also link out to a live, auto-generated API reference at `https://api.aisecurewatch.com/docs` (the `API_URL` constant) — also not part of this repo.

Contact addresses (`CONTACT_EMAIL`, `CAREERS_EMAIL`, `LEGAL_EMAIL`, `NATHAN_EMAIL`) are constants near the top of `src/app/lib/site.ts`, update them there if they change.
