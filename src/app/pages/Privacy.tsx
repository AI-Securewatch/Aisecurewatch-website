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

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | PayReality"
        description="What AI Securewatch collects on the PayReality website and platform, why, and how to exercise your rights over it. No cookies, no fine print games."
        path="/privacy"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/privacy`,
          "name": "Privacy Policy | PayReality",
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">Privacy Policy</span>
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
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: August 2026</p>

          <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed" style={{ fontSize: "1.0625rem" }}>
            <p>
              This policy covers both this website (<strong style={{ color: "#e8ecf4" }}>aisecurewatch.com</strong>) and
              the PayReality platform it links to. It's written to describe what we actually do, not a template filled
              in with the strongest legal language available.
            </p>

            <h2 style={clauseHeadingStyle}>Who we are</h2>
            <p>
              PayReality is developed, owned, and operated by AI Securewatch (Pty) Ltd, a South African company.
              References to "we," "us," and "our" in this policy mean AI Securewatch (Pty) Ltd.
            </p>

            <h2 style={clauseHeadingStyle}>What we collect on this website</h2>
            <p>
              This website has no user accounts and sets no cookies. Two things happen here:
            </p>
            <ul className="flex flex-col gap-2.5 mt-1">
              {[
                "Analytics: we use Mixpanel to record page views, referring source and campaign parameters (utm_source, utm_medium, etc.), and which links you click. This is stored in your browser's localStorage and on Mixpanel's servers, as aggregate usage data, not tied to your name or email unless you separately give those to us.",
                "Contact and demo requests: submitting the \"Book a Demo\" form or any contact link on this site opens a pre-filled email in your own email client. Nothing you type is sent to or stored on our servers; the email only sends if you personally choose to send it.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#7c6fff" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 style={clauseHeadingStyle}>What we collect on the platform</h2>
            <p>
              If your organization uses the PayReality platform, we process the data your organization puts into it
              in order to operate it: user login email addresses and assigned roles, agent public keys and
              certificates, the governance documents and policies you upload, and the Decision and Evidence records
              your usage generates. That data belongs to your organization; we process it to run the platform, not
              for any purpose beyond that.
            </p>

            <h2 style={clauseHeadingStyle}>Who else sees it</h2>
            <p>
              Mixpanel is the one third-party sub-processor described above, for website analytics only. We don't
              sell personal information, and we don't share platform data with anyone outside your organization
              except where the law requires it.
            </p>

            <h2 style={clauseHeadingStyle}>How long we keep it</h2>
            <p>
              We keep data for as long as it's needed for the purposes described above, or as long as the law
              requires us to. If your organization stops using the platform, its data is retained only as long as
              reasonably necessary before deletion, unless you ask us to delete it sooner.
            </p>

            <h2 style={clauseHeadingStyle}>Your rights</h2>
            <p>
              You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete
              it, by writing to{" "}
              <a href={mailto(LEGAL_EMAIL, "Privacy Rights Request")} style={{ color: "#a78bfa" }}>
                {LEGAL_EMAIL}
              </a>
              . This policy is intended to align with South Africa's Protection of Personal Information Act
              (POPIA).
            </p>

            <h2 style={clauseHeadingStyle}>Changes to this policy</h2>
            <p>
              If we materially change what we collect or how we use it, we'll update the date at the top of this
              page.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 mt-16" style={{ border: "1px solid rgba(124,111,255,0.22)" }}>
            <h2 className="mb-4" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8ecf4" }}>
              Related
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Terms of Service", href: "/terms" },
                { label: "Security", href: "/security" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="flex items-center justify-between gap-3 text-sm" style={{ color: "#a78bfa", textDecoration: "none" }}>
                  {l.label}
                  <ArrowRight size={14} />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Questions about this policy? Write to{" "}
              <a href={mailto(LEGAL_EMAIL, "Privacy Policy Question")} style={{ color: "#a78bfa" }}>
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
