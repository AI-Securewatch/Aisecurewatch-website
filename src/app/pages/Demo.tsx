import {
  ArrowRight,
  ExternalLink,
  FileText,
  Shield,
  Fingerprint,
  Archive,
  Users,
  Network,
  Layers,
  Code2,
  Database,
  GitBranch,
  ScrollText,
  Mail,
} from "lucide-react";
import SEO from "../components/SEO";
import VideoCard from "../components/VideoCard";
import { PLATFORM, SITE_URL } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

const WHAT_YOU_SEE = [
  "Governance documents become Runtime Policies",
  "AI agents receive cryptographic identities",
  "Runtime Authority validates every action",
  "Decisions are evaluated before execution",
  "Evidence is cryptographically signed",
  "Human approval is required whenever authority is exceeded",
];

const CAPABILITIES = [
  { icon: FileText, title: "Runtime Governance", desc: "Translate existing enterprise governance into Runtime Policies." },
  { icon: Shield, title: "Runtime Authority", desc: "Determine whether an AI is authorized before execution." },
  { icon: Fingerprint, title: "AI Identity", desc: "Every AI agent receives its own verifiable identity." },
  { icon: Archive, title: "Cryptographic Evidence", desc: "Every decision is independently verifiable." },
  { icon: Users, title: "Human Review", desc: "Unknown or out-of-policy actions fail safely." },
  { icon: Network, title: "Enterprise APIs", desc: "Integrate with enterprise AI agents and existing business systems." },
];

const COMING_SOON = [
  { icon: Layers, title: "Technical Architecture Deep Dive" },
  { icon: Code2, title: "Runtime Authority DSL" },
  { icon: FileText, title: "AI Authority Builder" },
  { icon: Network, title: "Enterprise Integrations" },
  { icon: Database, title: "Evidence Engine" },
  { icon: GitBranch, title: "Policy Compiler" },
];

export default function Demo() {
  const { openDemo, openPaperRequest } = useDemoModal();

  return (
    <>
      <SEO
        title="Executive Product Demonstrations | PayReality"
        description="Watch PayReality operate in a real enterprise workflow: governance documents become Runtime Policies, AI agents receive cryptographic identities, and every decision is evaluated and evidenced before execution."
        path="/demo"
        jsonLd={{
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
              "description":
                "An end-to-end demonstration of PayReality's Runtime Authority: AI Authority Builder, Runtime Policies, Agent Identity, the Runtime Decision Engine, cryptographic evidence, and the human review workflow.",
              "thumbnailUrl": "https://img.youtube.com/vi/DooDB4F2cqc/maxresdefault.jpg",
              "embedUrl": "https://www.youtube.com/embed/DooDB4F2cqc",
              "contentUrl": "https://youtu.be/DooDB4F2cqc",
              "duration": "PT7M",
              "publisher": { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">Demo</span>
          </nav>

          {/* Hero */}
          <div className="section-label mb-4">DEMO CENTER</div>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            Executive Product <span className="grad-text">Demonstrations</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10" style={{ fontSize: "1.125rem", maxWidth: 640 }}>
            See PayReality operating in a real enterprise workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button onClick={openDemo} className="btn-primary px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Book a Demo
              <ArrowRight size={15} />
            </button>
            <a
              href={PLATFORM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2"
            >
              View Platform
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Featured video */}
          <div className="mb-24">
            <div className="section-label mb-4">FEATURED</div>
            <h2
              className="mb-8"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              Executive Demo
            </h2>
            <VideoCard videoId="DooDB4F2cqc" title="PayReality Executive Demo" durationLabel="7 min" className="mb-10" />

            <div className="max-w-2xl">
              <h3
                className="mb-5"
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.1rem", color: "#e8ecf4" }}
              >
                What you'll see
              </h3>
              <ol className="space-y-4">
                {WHAT_YOU_SEE.map((item, i) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      className="mono text-xs flex items-center justify-center flex-shrink-0 rounded-full"
                      style={{
                        width: 26,
                        height: 26,
                        background: "rgba(124,111,255,0.12)",
                        border: "1px solid rgba(124,111,255,0.3)",
                        color: "#a78bfa",
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed pt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Product capabilities */}
          <div className="mb-24">
            <div className="section-label mb-4">PRODUCT CAPABILITIES</div>
            <h2
              className="mb-8"
              style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.1rem)", letterSpacing: "-0.025em", color: "#e8ecf4" }}
            >
              What the demo is showing you
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="glass-card rounded-2xl p-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
                  >
                    <c.icon size={18} style={{ color: "#7c6fff" }} />
                  </div>
                  <h3 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}>
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future demonstrations */}
          <div className="mb-24">
            <div className="flex items-baseline justify-between mb-5">
              <h2
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#e8ecf4", letterSpacing: "-0.02em" }}
              >
                Future Demonstrations
              </h2>
              <span className="mono text-xs" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>
                COMING SOON
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMING_SOON.map((c) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => openPaperRequest(`${c.title} Demo`)}
                  className="glass-card rounded-2xl p-7 flex flex-col text-left w-full cursor-pointer"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <c.icon size={19} style={{ color: "#6b7280" }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#e8ecf4" }}
                  >
                    {c.title}
                  </h3>
                  <div className="mt-auto pt-5 flex items-center gap-2 text-xs font-medium" style={{ color: "#6b7280" }}>
                    <span
                      className="px-2.5 py-1 rounded-full mono"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", letterSpacing: "0.06em" }}
                    >
                      COMING SOON
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Resources CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="glass-card rounded-2xl p-8"
              style={{ border: "1px solid rgba(124,111,255,0.2)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}
              >
                <ScrollText size={20} style={{ color: "#7c6fff" }} />
              </div>
              <h3
                className="mb-2"
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4", letterSpacing: "-0.015em" }}
              >
                Read the Runtime Authority Manifesto
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Understand why enterprises need Runtime Authority.
              </p>
              <a href="/manifesto" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Read Manifesto
                <ArrowRight size={15} />
              </a>
            </div>

            <div
              className="glass-card rounded-2xl p-8"
              style={{ border: "1px solid rgba(124,111,255,0.2)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}
              >
                <Mail size={20} style={{ color: "#7c6fff" }} />
              </div>
              <h3
                className="mb-2"
                style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4", letterSpacing: "-0.015em" }}
              >
                Schedule a Live Demonstration
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Book a walkthrough with the PayReality team.
              </p>
              <a href="/contact" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
