import { ArrowRight, ArrowUpRight, BookOpen, GitBranch, Rocket, Layers, Bot, Fingerprint, ShieldCheck, KeyRound, Code2, ScrollText, Webhook, Plug, FileCode } from "lucide-react";
import SEO from "../../components/SEO";
import { API_URL, PLATFORM, SITE_URL } from "../../lib/site";
import { DOCS_PAGES } from "../docs/docsNav";
import { useDemoModal } from "../../context/DemoModalContext";

const ICONS: Record<string, typeof Code2> = {
  "/developers/getting-started": Rocket,
  "/developers/architecture": Layers,
  "/developers/runtime-api": ShieldCheck,
  "/developers/authentication": KeyRound,
  "/developers/authority-graph": GitBranch,
  "/developers/runtime-policies": ScrollText,
  "/developers/authorization-receipts": Fingerprint,
  "/developers/evidence-verification": ShieldCheck,
  "/developers/sdks": Code2,
  "/developers/webhooks": Webhook,
  "/developers/integration-examples": ScrollText,
  "/developers/integration-guides": Plug,
  "/developers/agent-registration": Bot,
  "/developers/api-reference": FileCode,
};

export default function Overview() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Developers | PayReality"
        description="Everything a developer needs to integrate Runtime Authority: register an agent, submit a signed action, and get a signed decision and evidence back."
        path="/developers"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": `${SITE_URL}/developers`,
          "name": "Developers | PayReality",
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-4">DEVELOPERS</div>
          <h1
            className="mb-6"
            style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4" }}
          >
            Build on
            <br />
            <span className="grad-text">Runtime Authority</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8" style={{ fontSize: "1.125rem", maxWidth: 680 }}>
            You're integrating a runtime that sits between your AI agents and the systems they act on,
            evaluating every signed action against your organization's delegated authority before it executes,
            and handing back a decision and its evidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="/developers/getting-started" className="btn-primary px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={15} />
            </a>
            <button onClick={openDemo} className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Talk to an Engineer
            </button>
          </div>

          {/* Where it sits */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 mb-16" style={{ borderColor: "rgba(124,111,255,0.2)" }}>
            <p className="text-xs mono uppercase tracking-widest text-muted-foreground mb-5">Where Runtime Authority sits</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 justify-center">
              {[
                { label: "Your AI Agent", color: "#3b8cf8" },
                { label: "Runtime Authority", color: "#7c6fff" },
                { label: "Your Enterprise System", color: "#22d3ee" },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-3 sm:gap-0">
                  <div
                    className="rounded-xl p-4 flex sm:flex-col items-center text-center gap-3 sm:gap-2"
                    style={{ width: "100%", minWidth: 160, background: `${step.color}12`, border: `1px solid ${step.color}30` }}
                  >
                    <div className="text-sm text-foreground leading-snug" style={{ fontWeight: 500 }}>{step.label}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden sm:block w-8 h-px flex-shrink-0" style={{ background: "rgba(124,111,255,0.25)" }} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-6">
              Your agent never calls your enterprise system directly. It submits a signed intent to Runtime
              Authority, receives an Allow, Deny, or Human Review decision, and only proceeds if the decision
              allows it. See the full{" "}
              <a href="/developers/architecture" style={{ color: "#a78bfa" }}>Architecture</a> for how each
              component in between fits together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {DOCS_PAGES.map((doc) => {
              const Icon = ICONS[doc.path] ?? BookOpen;
              return (
                <a key={doc.path} href={doc.path} className="glass-card rounded-2xl p-7 flex flex-col group" style={{ textDecoration: "none" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}>
                    <Icon size={19} style={{ color: "#7c6fff" }} />
                  </div>
                  <h2 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4", letterSpacing: "-0.015em" }}>
                    {doc.label}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{doc.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: "#7c6fff" }}>
                    Read
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

          <a
            href={`${API_URL}/docs`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-7 flex items-center justify-between gap-6 mb-16"
            style={{ border: "1px solid rgba(124,111,255,0.22)", textDecoration: "none" }}
          >
            <div>
              <span className="px-3 py-1 rounded-full mono text-xs inline-block mb-3" style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)", color: "#a78bfa", letterSpacing: "0.08em" }}>
                LIVE
              </span>
              <h2 className="mb-1" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4" }}>
                Interactive API Reference
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Generated directly from the running platform, not a static mirror that can drift out of date.
              </p>
            </div>
            <ArrowUpRight size={22} className="flex-shrink-0" style={{ color: "#7c6fff" }} />
          </a>

          <div className="pt-10 border-t border-border flex flex-col sm:flex-row gap-4">
            <a href={PLATFORM} target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              View Platform
              <ArrowUpRight size={16} />
            </a>
            <a href="/resources" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Resources and research
              <ArrowRight size={16} />
            </a>
            <a href="/contact" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Talk to Us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
