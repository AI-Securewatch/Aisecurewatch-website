import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { LEGAL_EMAIL, SITE_URL, mailto } from "../lib/site";

const clauseHeadingStyle = {
  fontFamily: "'Onest', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "1.35rem",
  letterSpacing: "-0.02em",
  color: "#e8ecf4",
  marginTop: "2.5rem",
  marginBottom: "0.75rem",
} as const;

export default function Security() {
  return (
    <>
      <SEO
        title="Security | PayReality"
        description="What PayReality actually does to secure agent intents, decisions, and evidence, and just as importantly, what it doesn't do yet. No certifications claimed."
        path="/security"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/security`,
          "name": "Security | PayReality",
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">Security</span>
          </nav>

          <div className="section-label mb-4">LEGAL</div>
          <h1
            className="mb-4"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            Security
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: August 2026</p>

          <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed" style={{ fontSize: "1.0625rem" }}>
            <p>
              PayReality is early-stage. This page describes what's actually implemented today, in both the
              website and the platform, and states plainly where the current limits are. We don't hold any
              third-party security certification (SOC 2, ISO 27001, or otherwise), and we won't imply that we do.
            </p>

            <h2 style={clauseHeadingStyle}>Encryption in transit</h2>
            <p>
              This website, the PayReality platform, and its API are all served over TLS. Certificates are issued
              and managed by our hosting providers; nothing is served over plain HTTP in production.
            </p>

            <h2 style={clauseHeadingStyle}>Signed intents</h2>
            <p>
              Every action an AI agent submits to the platform is signed with an Ed25519 key generated on the
              agent's own side. The private key is never transmitted to us; only the public key is registered.
              We verify the signature against that registered key before evaluating the request. A timestamp
              window plus a uniqueness constraint on each request's nonce prevent a captured request from being
              replayed later.
            </p>

            <h2 style={clauseHeadingStyle}>Certificate rotation</h2>
            <p>
              An agent's signing certificate can be rotated or revoked at any time. Rotating immediately
              invalidates the old certificate for new requests. Because we never hold an agent's private key, a
              rotation generates a genuinely new keypair on the agent's side. We can flag an agent for rotation,
              but can't rotate its key for it. Decisions and Evidence already recorded stay valid and explainable
              against whichever certificate was actually active when they were created.
            </p>

            <h2 style={clauseHeadingStyle}>Signed evidence</h2>
            <p>
              Every Decision and its Evidence record is independently signed, separately from the intent that
              produced it. Each signature is checked against the specific signing key that was active at the time
              it was made, not just whichever key happens to be active now, so rotating the evidence signing key
              doesn't invalidate verification of anything signed under a previous one.
            </p>

            <h2 style={clauseHeadingStyle}>Access control</h2>
            <p>
              The platform enforces role-based permissions server-side (not just hidden in the interface), across
              six roles (Owner, Governance Administrator, Agent Administrator, Reviewer, Auditor, Executive), each
              with a fixed set of allowed actions.
            </p>

            <h2 style={clauseHeadingStyle}>Current limitations</h2>
            <p>We'd rather state these plainly than let you assume otherwise:</p>
            <ul className="flex flex-col gap-2.5 mt-1">
              {[
                "At this stage, a single shared operator credential can act with full administrative authority across an organization, on top of the role-based permissions described above. It is not yet a scoped, per-user credential. Narrowing this is ongoing work.",
                "We don't currently implement encryption at rest beyond whatever our database hosting provider applies by default. There's no PayReality-specific at-rest encryption layer today.",
                "We don't hold SOC 2, ISO 27001, or any other formal third-party security certification.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#f59e0b" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 style={clauseHeadingStyle}>Reporting a security issue</h2>
            <p>
              If you find a security issue, please tell us directly at{" "}
              <a href={mailto(LEGAL_EMAIL, "Security Report")} style={{ color: "#a78bfa" }}>
                {LEGAL_EMAIL}
              </a>{" "}
              rather than disclosing it publicly. We'll respond directly.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 mt-16" style={{ border: "1px solid rgba(124,111,255,0.22)" }}>
            <h2 className="mb-4" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8ecf4" }}>
              Related
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="flex items-center justify-between gap-3 text-sm" style={{ color: "#a78bfa", textDecoration: "none" }}>
                  {l.label}
                  <ArrowRight size={14} />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Questions about our security practices? Write to{" "}
              <a href={mailto(LEGAL_EMAIL, "Security Question")} style={{ color: "#a78bfa" }}>
                {LEGAL_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
