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

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | PayReality"
        description="The terms governing use of the PayReality website, demo, and platform, including what's shipped today versus planned, and where liability sits."
        path="/terms"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": `${SITE_URL}/terms`,
          "name": "Terms of Service | PayReality",
          "isPartOf": { "@id": `${SITE_URL}/#website` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">Terms of Service</span>
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
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: August 2026</p>

          <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed" style={{ fontSize: "1.0625rem" }}>
            <p>
              These terms govern your use of this website (<strong style={{ color: "#e8ecf4" }}>aisecurewatch.com</strong>),
              the PayReality demo, and the PayReality platform, all operated by AI Securewatch (Pty) Ltd
              ("AI Securewatch," "we," "us"). By using any of them, you agree to these terms.
            </p>

            <h2 style={clauseHeadingStyle}>The service</h2>
            <p>
              PayReality is Enterprise AI Authority Infrastructure: it evaluates whether an AI agent's requested
              action is within its delegated authority, before that action executes. Some capabilities described on
              this site are marked "Coming Soon," "Planned," or "Roadmap" -- those are not currently available, carry
              no availability date or warranty, and using this site does not entitle you to them.
            </p>

            <h2 style={clauseHeadingStyle}>Acceptable use</h2>
            <p>
              You agree not to misuse the website, demo, or platform: no attempting to access data that isn't yours,
              no interfering with the service's operation, and no using it for an unlawful purpose. If your
              organization operates the platform, you're responsible for the governance data, policies, and agent
              credentials your organization puts into it.
            </p>

            <h2 style={clauseHeadingStyle}>Intellectual property</h2>
            <p>
              AI Securewatch owns the PayReality name, software, website content, and branding. You retain
              ownership of the governance documents, policies, and other data your organization uploads to the
              platform -- using the platform doesn't transfer that ownership to us.
            </p>

            <h2 style={clauseHeadingStyle}>Disclaimers</h2>
            <p>
              The website, demo, and platform are provided "as is," without warranty of any kind, express or
              implied, including merchantability or fitness for a particular purpose. PayReality automates
              evaluation of delegated authority against the policy you give it -- it is not a substitute for your
              organization's own legal, compliance, or risk judgment, and using it does not itself constitute
              compliance with any regulation.
            </p>

            <h2 style={clauseHeadingStyle}>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, AI Securewatch is not liable for any indirect, incidental, or
              consequential damages arising from your use of the website, demo, or platform, and our total
              liability for any claim is limited to the amount you paid us, if any, in the twelve months before the
              claim arose.
            </p>

            <h2 style={clauseHeadingStyle}>Termination</h2>
            <p>
              We may suspend or terminate access to the demo or platform for conduct that violates these terms.
              You may stop using any of our services at any time.
            </p>

            <h2 style={clauseHeadingStyle}>Governing law</h2>
            <p>
              These terms are governed by the laws of South Africa, and the courts of South Africa have exclusive
              jurisdiction over any dispute arising from them.
            </p>

            <h2 style={clauseHeadingStyle}>Changes to these terms</h2>
            <p>
              If we materially change these terms, we'll update the date at the top of this page.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 mt-16" style={{ border: "1px solid rgba(124,111,255,0.22)" }}>
            <h2 className="mb-4" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8ecf4" }}>
              Related
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Security", href: "/security" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="flex items-center justify-between gap-3 text-sm" style={{ color: "#a78bfa", textDecoration: "none" }}>
                  {l.label}
                  <ArrowRight size={14} />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Questions about these terms? Write to{" "}
              <a href={mailto(LEGAL_EMAIL, "Terms of Service Question")} style={{ color: "#a78bfa" }}>
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
