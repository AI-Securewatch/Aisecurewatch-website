# PayReality

Marketing site for PayReality, the delegated authority infrastructure product by AI Securewatch. A single-page React app: hero, problem/solution narrative, the nine-module platform overview, architecture diagram, research, industries, and footer.

## Stack

- React + TypeScript, built with Vite
- Tailwind CSS v4
- lucide-react icons
- shadcn/ui primitives under `src/app/components/ui` (available but not currently used by the page itself)

## Running locally

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

```
npm run build
```

Outputs a production build to `dist/`.

## Structure

- `src/app/App.tsx` — the entire page (all sections, copy, and the demo/paper-request modal logic). This is the file to edit for almost any content or behavior change.
- `src/app/components/ui/` — shadcn/ui component library, unused by `App.tsx` directly but available for future pages.
- `src/styles/` — Tailwind config, theme tokens, fonts.

## No backend

There's no server or database. Two flows are wired without one:

- **Request Enterprise Demo / Request Research Paper** — opens an in-page modal; submitting builds a `mailto:` link to open the visitor's email client with a pre-filled message, then shows a confirmation screen either way (so it still feels like it worked if no mail client is configured).
- **Launch Platform / Launch module** — links out to the live product demo at `https://pay-reality-demo.vercel.app`. That demo is a separate deployment (not this repo); its module cards link to the demo's home page rather than deep-linking to a specific module, because that deployment has no SPA fallback route configured for direct path access yet.

Contact addresses (`CONTACT_EMAIL`, `CAREERS_EMAIL`, `LEGAL_EMAIL`) are constants near the top of `App.tsx` — update them there if they change.
