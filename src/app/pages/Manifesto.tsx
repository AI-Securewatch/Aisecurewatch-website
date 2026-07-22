import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Mail,
  Copy,
  Check,
  Linkedin,
  Twitter,
  Calculator,
  Database,
  Network,
  Lock,
  Workflow,
  Cpu,
  Shield,
  FileText,
  GitBranch,
  AlertCircle,
  CheckCircle2,
  Fingerprint,
  Users,
  ExternalLink,
} from "lucide-react";
import SEO from "../components/SEO";
import { PLATFORM, SITE_URL } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

const PAGE_URL = `${SITE_URL}/manifesto`;

const TOC = [
  { id: "part-1", label: "The Enterprise Already Solved Authority" },
  { id: "part-2", label: "The History of Enterprise Infrastructure" },
  { id: "part-3", label: "The Wrong Industry Assumption" },
  { id: "part-4", label: "The Execution Boundary" },
  { id: "part-5", label: "Governance Is Too Late" },
  { id: "part-6", label: "The Cost of No Authority" },
  { id: "part-7", label: "Runtime Authority" },
  { id: "part-8", label: "Deterministic Authority" },
  { id: "part-9", label: "The Runtime Decision" },
  { id: "part-10", label: "The Economics of Authority" },
  { id: "part-11", label: "Enterprise Authority Infrastructure" },
  { id: "part-12", label: "The Autonomous Enterprise" },
  { id: "part-13", label: "An Implementation of the Category" },
  { id: "principles", label: "Principles of Enterprise Authority" },
];

const TRAJECTORY = [
  { decade: "1950s", label: "Computers calculate", icon: Calculator },
  { decade: "1980s", label: "Computers store information", icon: Database },
  { decade: "1990s", label: "Computers communicate", icon: Network },
  { decade: "2000s", label: "Identity becomes infrastructure", icon: Lock },
  { decade: "2010s", label: "Workflow automation", icon: Workflow },
  { decade: "2020s", label: "Autonomous systems execute", icon: Cpu },
  { decade: "2030s", label: "Enterprise Authority Infrastructure", icon: Shield, highlight: true },
];

const RUNTIME_FLOW = [
  { label: "Enterprise Policy", icon: FileText, color: "#7c6fff" },
  { label: "Authority Model", icon: GitBranch, color: "#6366f1" },
  { label: "Runtime Validation", icon: AlertCircle, color: "#3b8cf8" },
  { label: "Execution", icon: CheckCircle2, color: "#22d3ee" },
  { label: "Cryptographic Evidence", icon: Fingerprint, color: "#a78bfa" },
];

const BEFORE_CONSOLIDATION = [
  "App authenticates its own way",
  "App connects its own way",
  "App settles its own way",
  "App checks authority its own way",
];

const AFTER_CONSOLIDATION = [
  "Identity Infrastructure",
  "Networking",
  "Payments Infrastructure",
  "Enterprise Authority Infrastructure",
];

const RELATED = [
  {
    title: "Runtime Authority",
    desc: "Why identity and governance answer a different question than the one that matters before execution.",
    href: "/#runtime-authority",
    icon: Shield,
  },
  {
    title: "Platform Overview",
    desc: "The nine modules that compile policy, evaluate intent, and record evidence for autonomous AI.",
    href: "/#platform",
    icon: Cpu,
  },
  {
    title: "Insurance Portal",
    desc: "How cryptographic evidence supports underwriting, claims, and continuous risk assurance for insurance ecosystem partners.",
    href: "/insurance-portal",
    icon: Fingerprint,
  },
  {
    title: "Policy Engine",
    desc: "Runtime policy evaluation, OPA integration, and deterministic enforcement, explained end to end.",
    href: "/policy-engine",
    icon: FileText,
  },
];

const h2Style = {
  fontFamily: "'Onest', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
  letterSpacing: "-0.02em",
  color: "#e8ecf4",
  lineHeight: 1.25,
} as const;

const proseStyle = { fontSize: "1.0625rem", lineHeight: 1.75 } as const;

function PartHeading({ id, n, title }: { id: string; n: number; title: string }) {
  return (
    <div id={id} className="scroll-mt-28 mt-24 mb-7">
      <div className="section-label mb-3">{`PART ${String(n).padStart(2, "0")}`}</div>
      <h2 style={h2Style}>{title}</h2>
    </div>
  );
}

function PullQuote({ lines }: { lines: string[] }) {
  return (
    <div
      className="relative"
      style={{ margin: "2.75rem 0", paddingLeft: "1.75rem" }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 rounded-full"
        style={{ width: 3, background: "linear-gradient(180deg, #a78bfa, #7c6fff, #3b8cf8)" }}
      />
      {lines.map((line) => (
        <p
          key={line}
          style={{
            fontFamily: "'Onest', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "1.2rem",
            color: "#e8ecf4",
            lineHeight: 1.45,
            letterSpacing: "-0.01em",
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function DiagramCard({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8" style={{ margin: "2.75rem 0", borderColor: "rgba(124,111,255,0.2)" }}>
      <div className="mono text-xs mb-6 text-center" style={{ color: "#6b7280", letterSpacing: "0.12em" }}>
        {caption}
      </div>
      {children}
    </div>
  );
}

function TrajectoryDiagram() {
  return (
    <DiagramCard caption="THE TRAJECTORY OF ENTERPRISE INFRASTRUCTURE">
      <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
        {TRAJECTORY.map((step, i) => (
          <div key={step.decade} className="flex items-center flex-shrink-0">
            <div
              className="rounded-xl p-4 flex flex-col items-center text-center"
              style={{
                width: 140,
                background: step.highlight ? "rgba(124,111,255,0.1)" : "rgba(255,255,255,0.03)",
                border: step.highlight ? "1px solid rgba(124,111,255,0.35)" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: step.highlight ? "0 0 24px rgba(124,111,255,0.15)" : "none",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{
                  background: step.highlight ? "rgba(124,111,255,0.18)" : "rgba(255,255,255,0.05)",
                }}
              >
                <step.icon size={16} style={{ color: step.highlight ? "#a78bfa" : "#7c6fff" }} />
              </div>
              <div className="mono text-xs mb-1.5" style={{ color: step.highlight ? "#a78bfa" : "#6b7280" }}>
                {step.decade}
              </div>
              <div className="text-xs text-foreground leading-snug">{step.label}</div>
            </div>
            {i < TRAJECTORY.length - 1 && (
              <div className="w-6 h-px flex-shrink-0" style={{ background: "rgba(124,111,255,0.25)" }} />
            )}
          </div>
        ))}
      </div>
    </DiagramCard>
  );
}

function RuntimeDecisionDiagram() {
  return (
    <DiagramCard caption="ENTERPRISE POLICY → AUTHORITY MODEL → RUNTIME VALIDATION → EXECUTION → CRYPTOGRAPHIC EVIDENCE">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 justify-center">
        {RUNTIME_FLOW.map((step, i) => (
          <div key={step.label} className="flex items-center gap-3 sm:gap-0">
            <div
              className="rounded-xl p-4 flex sm:flex-col items-center text-center gap-3 sm:gap-2"
              style={{
                width: "100%",
                minWidth: 130,
                background: `${step.color}12`,
                border: `1px solid ${step.color}30`,
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${step.color}20` }}
              >
                <step.icon size={16} style={{ color: step.color }} />
              </div>
              <div className="text-xs text-foreground leading-snug">{step.label}</div>
            </div>
            {i < RUNTIME_FLOW.length - 1 && (
              <div className="hidden sm:block w-6 h-px flex-shrink-0" style={{ background: "rgba(124,111,255,0.25)" }} />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 mt-5 pt-5" style={{ borderTop: "1px dashed rgba(255,255,255,0.1)" }}>
        <Users size={14} style={{ color: "#f59e0b" }} />
        <span className="text-xs text-muted-foreground">
          Runtime Validation escalates to <span style={{ color: "#e8ecf4" }}>Human Review</span>, resolved, back to
          Execution
        </span>
      </div>
    </DiagramCard>
  );
}

function ConsolidationDiagram() {
  return (
    <DiagramCard caption="BEFORE / AFTER CONSOLIDATION">
      <div className="flex flex-col gap-2 mb-3">
        <div className="mono text-xs text-center mb-1" style={{ color: "#f87171", letterSpacing: "0.1em" }}>
          BEFORE
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {BEFORE_CONSOLIDATION.map((item) => (
            <div
              key={item}
              className="rounded-lg px-3 py-2.5 text-xs text-center text-muted-foreground"
              style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, rgba(124,111,255,0.4), rgba(59,140,248,0.4))" }} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="mono text-xs text-center mb-1" style={{ color: "#a78bfa", letterSpacing: "0.1em" }}>
          AFTER
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {AFTER_CONSOLIDATION.map((item, i) => (
            <div
              key={item}
              className="rounded-lg px-3 py-2.5 text-xs text-center"
              style={{
                background: i === AFTER_CONSOLIDATION.length - 1 ? "rgba(124,111,255,0.14)" : "rgba(124,111,255,0.08)",
                border: i === AFTER_CONSOLIDATION.length - 1 ? "1px solid rgba(124,111,255,0.35)" : "1px solid rgba(124,111,255,0.2)",
                color: i === AFTER_CONSOLIDATION.length - 1 ? "#a78bfa" : "#e8ecf4",
                fontWeight: i === AFTER_CONSOLIDATION.length - 1 ? 600 : 400,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </DiagramCard>
  );
}

function PartFooterNav({ index }: { index: number }) {
  const prev = TOC[index - 1];
  const next = TOC[index + 1];
  return (
    <div className="flex items-center justify-between gap-3 mt-10 mb-4 pt-8 border-t border-border">
      {prev ? (
        <a
          href={`#${prev.id}`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 min-w-0"
        >
          <ArrowLeft size={14} className="flex-shrink-0" />
          <span className="min-w-0">
            <span className="block mono" style={{ fontSize: "10px", color: "#6b7280" }}>
              PREVIOUS
            </span>
            <span className="truncate block">{prev.label}</span>
          </span>
        </a>
      ) : (
        <span />
      )}
      <a
        href="#manifesto-top"
        className="mono text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 flex-shrink-0"
        style={{ fontSize: "10px", letterSpacing: "0.08em" }}
      >
        <ArrowUp size={12} /> TOP
      </a>
      {next ? (
        <a
          href={`#${next.id}`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 justify-end text-right min-w-0"
        >
          <span className="min-w-0">
            <span className="block mono" style={{ fontSize: "10px", color: "#6b7280" }}>
              NEXT
            </span>
            <span className="truncate block">{next.label}</span>
          </span>
          <ArrowRight size={14} className="flex-shrink-0" />
        </a>
      ) : (
        <span />
      )}
    </div>
  );
}

export default function Manifesto() {
  const { openDemo, openPaperRequest } = useDemoModal();
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>("part-1");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = TOC.map((t) => document.getElementById(t.id)).filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; link sharing still works via the other channels.
    }
  };

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`;
  const twitterHref = `https://twitter.com/intent/tweet?url=${encodeURIComponent(PAGE_URL)}&text=${encodeURIComponent(
    "The Enterprise Authority Manifesto"
  )}`;
  const emailHref = `mailto:?subject=${encodeURIComponent(
    "The Enterprise Authority Manifesto"
  )}&body=${encodeURIComponent(`Why every autonomous enterprise will require authority infrastructure:\n\n${PAGE_URL}`)}`;

  const tocList = (
    <ul className="flex flex-col gap-2.5" role="list">
      {TOC.map((item, i) => {
        const isActive = activeId === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className="text-sm transition-colors flex items-baseline gap-2.5"
              style={{ color: isActive ? "#e8ecf4" : "#6b7280", fontWeight: isActive ? 600 : 400 }}
            >
              <span
                className="rounded-full flex-shrink-0"
                style={{
                  width: 5,
                  height: 5,
                  marginTop: 7,
                  background: isActive ? "#7c6fff" : "rgba(255,255,255,0.15)",
                  boxShadow: isActive ? "0 0 6px #7c6fff" : "none",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
              />
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <SEO
        title="The Enterprise Authority Manifesto | AI Securewatch"
        description="Why every autonomous enterprise will require authority infrastructure. The founding manifesto for Enterprise Authority Infrastructure, from AI Securewatch."
        path="/manifesto"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "The Enterprise Authority Manifesto",
              "description": "Why every autonomous enterprise will require authority infrastructure.",
              "url": PAGE_URL,
              "author": { "@id": `${SITE_URL}/#person-sean` },
              "publisher": { "@id": `${SITE_URL}/#organization` },
              "about": { "@id": `${SITE_URL}/#software` },
              "mainEntityOfPage": PAGE_URL,
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": `${SITE_URL}/resources` },
                { "@type": "ListItem", "position": 3, "name": "The Enterprise Authority Manifesto", "item": PAGE_URL },
              ],
            },
          ],
        }}
      />

      {/* Sticky reading progress */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[3px]" style={{ background: "rgba(255,255,255,0.06)" }} aria-hidden="true">
        <div
          className="h-full"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #7c6fff, #3b8cf8)",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <main className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-foreground transition-colors">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <a href="/resources" className="hover:text-foreground transition-colors">
              Resources
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">The Enterprise Authority Manifesto</span>
          </nav>

          <div id="manifesto-top" className="scroll-mt-20 max-w-3xl">
            <div className="section-label mb-4">MANIFESTO</div>
            <h1
              className="mb-4"
              style={{
                fontFamily: "'Onest', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.1rem, 5vw, 3.4rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#e8ecf4",
              }}
            >
              The Enterprise Authority Manifesto
            </h1>
            <p className="text-muted-foreground mb-8" style={{ fontSize: "1.1875rem", lineHeight: 1.5 }}>
              Why Every Autonomous Enterprise Will Require Authority Infrastructure
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-10">
              <a href="/leadership/sean-chihwendu" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,111,255,0.18)", border: "1px solid rgba(124,111,255,0.3)" }}
                >
                  <span style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#a78bfa" }}>
                    SC
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sean Chihwendu</div>
                  <div className="text-xs text-muted-foreground">Founder &amp; CEO, AI Securewatch</div>
                </div>
              </a>
              <div className="h-8 w-px" style={{ background: "rgba(255,255,255,0.1)" }} />
              <div className="mono text-xs text-muted-foreground" style={{ letterSpacing: "0.04em" }}>
                ~22 MIN READ
                <br />
                LAST UPDATED JULY 22, 2026
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={openDemo} className="btn-primary px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                Book a Demo
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => openPaperRequest("The Enterprise Authority Manifesto (PDF)")}
                className="btn-ghost px-7 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2"
              >
                Download PDF
                <FileText size={15} />
              </button>
            </div>

            {/* Mobile TOC accordion */}
            <details className="lg:hidden glass-card rounded-2xl p-6 mb-4">
              <summary className="mono text-xs cursor-pointer select-none" style={{ color: "#7c6fff", letterSpacing: "0.1em" }}>
                TABLE OF CONTENTS
              </summary>
              <div className="mt-5">{tocList}</div>
            </details>
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start mt-4">
            <article className="max-w-3xl min-w-0">
              <div className="flex flex-col text-muted-foreground" style={proseStyle}>
                <PullQuote lines={["No enterprise fully trusts any single person within it.", "Every enterprise runs, successfully, for exactly that reason."]} />

                <PartHeading id="part-1" n={1} title="The Enterprise Already Solved Authority" />
                <p className="mb-6">
                  No enterprise gives any one employee the run of the business, not the most senior, not the most
                  trusted, and yet the business runs: payments go out, contracts get signed, claims get settled,
                  thousands of times a day, without a single person personally approving each one. The enterprise
                  depends completely on people it does not fully trust. That this is not a problem is worth pausing
                  on.
                </p>
                <p className="mb-6">
                  Every organisation of meaningful size has solved a hard problem: how do you let many people act on
                  behalf of the business without losing control of what they can do? The answer is not software. It is
                  a discipline older than computing: delegated authority.
                </p>
                <p className="mb-6">
                  A junior buyer can raise a purchase order up to a defined limit. A regional manager can approve
                  discounts within a band. A claims handler can settle a claim below a threshold. A treasury analyst
                  can release a payment within an approved mandate. Above those limits, the request routes upward: a
                  manager, a committee, a second signatory. This is not bureaucracy. It is a control system, extending
                  the organisation's reach through many hands while keeping the risk of any single action bounded and
                  known in advance. It is old enough, and familiar enough, to have become invisible.
                </p>
                <p className="mb-6">
                  One detail is easy to miss: no employee owns the authority they exercise. A treasury analyst has no
                  personal right to release a payment. The enterprise lends a defined slice of its own authority, for
                  a defined purpose, within a defined limit, revocable at will. Resignation, role change, or policy
                  update, and the loan is called in. The analyst never owned it. The analyst borrowed it.
                </p>
                <PullQuote lines={["Trust is a vulnerability.", "Authority is the fix."]} />
                <p className="mb-6">
                  The enterprise does not need to trust the analyst completely. It only needs the analyst's authority
                  to be bounded, revocable, and checked: a lower bar than trust, and a far more reliable one.
                </p>
                <PullQuote lines={["Authority belongs to the organisation.", "Never the individual."]} />
                <p className="mb-6">
                  A chief financial officer's signing authority is not a personal attribute. It is a grant, attached
                  to a role, that moves to the next person who holds the role the day the current one leaves.
                </p>
                <PullQuote lines={["Enterprises delegate authority.", "They never delegate ownership."]} />
                <p className="mb-6">
                  If a human employee can be lent a bounded, revocable, auditable slice of the enterprise's authority,
                  there is no structural reason an autonomous system cannot be lent the same thing, under the same
                  terms. Delegation does not require a human delegate, only one that is bounded, identifiable, and
                  accountable to the same policy every other delegate answers to. What changes when the borrower is a
                  machine is not the mechanics of delegation. It is the speed at which the delegate can act.
                </p>
                <p className="mb-6">Three properties make this work, whoever or whatever is borrowing:</p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Authority is written down.</strong> A Delegation of Authority
                  policy, an approval matrix, a signing schedule state, in advance, who or what may commit the
                  organisation, to what extent, and under what conditions.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Authority is checked before the action completes.</strong> A
                  purchase order above a threshold is not sent to the supplier until the second signature exists. The
                  check happens before the consequence, not after.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Authority produces a trail.</strong> When a payment clears,
                  there is a record of who approved it, under which policy, at what limit, not a reconstruction from
                  memory when a regulator asks.
                </p>
                <p className="mb-6">
                  This is an operating system for organisational trust, built by separating two questions that are
                  easy to conflate: who is this, and what is this allowed to do. Enterprises have always answered the
                  second with policy: borrowed and bounded, not judgement applied case by case.
                </p>
                <p className="mb-6">
                  It was built for humans borrowing authority from other humans, enforced by paper, signatures, and
                  committees. It was never built for software that can borrow the same authority and exercise it in
                  milliseconds, unattended, at a volume no committee could review. That gap has stayed invisible for
                  longer than it should have, because no enterprise has ever needed to explain a system this old to an
                  entirely new kind of employee. The reason becomes clear once you see how every other layer of
                  enterprise infrastructure got built.
                </p>
                <PartFooterNav index={0} />

                <PartHeading id="part-2" n={2} title="The History of Enterprise Infrastructure" />
                <p className="mb-6">
                  Why hasn't a machine-readable version of delegated authority been built already? Because every
                  prior enterprise capability made the same journey: from something each application solved for
                  itself, to something the enterprise solved once, centrally, for everyone.
                </p>
                <p className="mb-6">
                  The pattern: a capability gets solved independently by every application that needs it. Independent
                  solutions multiply cost and inconsistency as the number of applications grows. Past a certain point,
                  consolidating the capability into one shared layer becomes cheaper than continuing to duplicate it.
                  Enterprises do not centralise because centralisation is elegant. They centralise because duplication
                  has become the more expensive option.
                </p>
                <p className="mb-6">
                  Authority is the next layer in a sequence enterprises have been building, mostly without noticing,
                  for seventy years.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>The 1950s.</strong> Computers calculate: payroll, actuarial
                  tables, ledger totals. Narrow and mechanical: the computer calculates what a human already decided
                  to calculate.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>The 1980s.</strong> Computers store information. Databases and
                  ERP systems turn the computer into the enterprise's memory. Decisions still live with people.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>The 1990s.</strong> Computers communicate. Networking and
                  middleware connect systems and people at a speed paper never allowed. Decisions still move only when
                  a person initiates them.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>The 2000s.</strong> Identity becomes infrastructure. Each
                  application had built its own login, its own password rules, solved independently, everywhere.
                  Every new application multiplied the number of places a person's identity had to be established and
                  kept consistent. A thousand applications did not mean a thousand small identity problems. It meant
                  one identity problem, repeated a thousand times. Identity and access management consolidated into a
                  shared layer: one place to answer, reliably, who someone is.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>The 2010s.</strong> Workflow automation removes the manual
                  labour of carrying a human decision through to completion. The decision itself still belongs to a
                  person.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>The 2020s.</strong> Autonomous systems execute. Language models
                  and agent frameworks give software the capacity to decide, not just to carry out a decision already
                  made. An agent can read a request, form an intent, and act on it, in some workflows without a human
                  in the loop at all. This is the decade the execution boundary, described in Part 4, is crossed at
                  scale.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>The 2030s, in view now, not yet arrived.</strong> Enterprise
                  Authority Infrastructure. The pattern that carried identity through its steps is already running for
                  authority. Every autonomous agent, built by a different team for a different workflow, must answer
                  the same question: is this action within delegated scope. Left alone, each team answers it
                  differently. A hundred agents will not produce a hundred small authority problems, but one
                  authority problem, repeated a hundred times. No enterprise can sensibly rebuild an authority check
                  inside every agent and every workflow. Consolidation is the only step left to happen.
                </p>
                <p className="mb-6">
                  Enterprise Authority Infrastructure is not a category invented to justify a product. It is the next
                  layer produced by the mechanism that produced identity infrastructure, arriving on schedule. Identity
                  looked like a login problem until the number of applications made it a strategic one. Authority
                  looks, today, like an AI oversight problem, because AI is the first actor to make the missing
                  layer's absence visible.
                </p>
                <TrajectoryDiagram />
                <PartFooterNav index={1} />

                <PartHeading id="part-3" n={3} title="The Wrong Industry Assumption" />
                <p className="mb-6">
                  As AI moves from producing text to producing action, the industry has reached for the tools it
                  knows best: better models, better reasoning, more governance, more monitoring.
                </p>
                <p className="mb-6">
                  Each is necessary. None answers the question that determines whether an action should happen at
                  all: is this system entitled to borrow the authority this action requires.
                </p>
                <PullQuote lines={["Authority is not an AI problem.", "It is an enterprise problem AI has exposed."]} />
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>More intelligence</strong> produces a better answer to what
                  should happen. It does not produce a verifiable answer to whether the system is entitled to make it
                  happen. Capability and entitlement are orthogonal. A more capable agent, unchecked against a
                  delegation, is not a safer agent. It is a more competent one.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Better reasoning</strong> (chain of thought, self-critique,
                  multi-agent review) improves the recommendation by stacking more probabilistic steps. Stacking
                  probability on probability does not produce a deterministic outcome. It produces a more elaborate
                  probabilistic one.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Governance and monitoring</strong> are addressed fully in Part
                  5. In short: both operate before the system is built or after it has acted. Neither operates at the
                  one moment that matters: the instant between an AI system deciding what it wants to do and that
                  action taking effect.
                </p>
                <p className="mb-6">
                  None of these four assumptions is wrong on its own terms. A more capable model is a better
                  colleague. The error is treating any of them as an answer to a question none was built to answer.
                </p>
                <PullQuote lines={["We are not inventing new governance.", "We are making governance executable."]} />
                <p className="mb-6">
                  Every rule already exists somewhere in the enterprise, written and approved. What does not exist is
                  a system that evaluates those rules automatically, at the moment an autonomous agent tries to act on
                  them. A human used to occupy that moment by default, simply by clicking send. As AI takes the moment
                  over, something has to occupy it. Not a smarter model. A control.
                </p>
                <p className="mb-6">
                  That moment has no name in most enterprise architectures today, because it has no precedent. What
                  follows is what happens once it starts to matter, in the workflows where enterprises are already
                  asking software to occupy it.
                </p>
                <PartFooterNav index={2} />

                <PartHeading id="part-4" n={4} title="The Execution Boundary" />
                <p className="mb-6">
                  For most of the history of enterprise software, AI produced information. A recommendation engine
                  suggested a product. A fraud model flagged a transaction. A chatbot drafted a response. A human
                  always stood between the output and any real consequence. The AI proposed. The human disposed.
                </p>
                <p className="mb-6">
                  That arrangement is ending across financial services, insurance, healthcare, procurement, and
                  operations. Autonomous agents today can:
                </p>
                <ul className="flex flex-col gap-2 pl-5 mb-6" style={{ listStyleType: "disc" }}>
                  <li>Release payments within a treasury workflow</li>
                  <li>Approve or decline loan applications against a credit policy</li>
                  <li>Settle insurance claims below a stated threshold</li>
                  <li>Authorise healthcare procedures against a coverage policy</li>
                  <li>Create suppliers and issue procurement approvals</li>
                  <li>Modify pricing or contract terms</li>
                  <li>Issue refunds or change customer accounts</li>
                </ul>
                <p className="mb-6">
                  None of this is hypothetical. Each is in production or active pilot today, in a growing number of
                  cases with human confirmation removed below a size or risk threshold, because removing that
                  friction was the entire commercial argument for deploying the agent.
                </p>
                <PullQuote lines={["Recommendation is advice.", "Execution is a fact."]} />
                <p className="mb-6">
                  This is the execution boundary: the line between an AI system that informs a decision and one that
                  is the decision. Once an agent's output is a transaction rather than a suggestion, the enterprise is
                  managing the same delegation problem from Part 1, except the borrower is software that can act in
                  milliseconds, without hesitation, and without the judgement a human brings to a borderline case.
                </p>
                <p className="mb-6">
                  Crossing this boundary does not require the AI to be more capable or more agentic. It only requires
                  that its output now closes a loop that used to require a human hand. Every question the enterprise
                  answers for human delegates (who may act, to what limit, under what conditions, with what evidence)
                  becomes a question it must answer for the agent too.
                </p>
                <p className="mb-6">
                  The boundary is easy to miss because nothing about the agent's architecture announces when it has
                  been crossed. The same model, the same prompt, the same reasoning steps can sit safely on either
                  side of it, depending only on whether a human happens to review the output before it takes effect.
                  Remove that review, and the risk profile changes completely without a single line of code changing.
                </p>
                <p className="mb-6">
                  Most enterprises have built the agent. They have not built the layer that governs what it is
                  entitled to do once it decides to act. The systems already in place were not built for this moment.
                </p>
                <PartFooterNav index={3} />

                <PartHeading id="part-5" n={5} title="Governance Is Too Late" />
                <p className="mb-6">
                  Ask a risk committee how it controls AI today, and the answer describes practices that are well
                  established and largely sound: model risk policies, AI principles committees, compliance reviews,
                  audit trails, monitoring dashboards, periodic reporting.
                </p>
                <p className="mb-6">
                  Trace the timing of each and a pattern appears. Policies are written before deployment. Reviews
                  happen at launch and on a cadence after. Audit trails are assembled after an action, stitched
                  together from logs. Monitoring detects anomalies after the event. Every one of these operates before
                  the agent exists or after it has acted. None sit at the moment the action is formed and about to
                  take effect. A human occupied that moment by default.
                </p>
                <p className="mb-6">
                  Governance, compliance, monitoring, audit, and observability are, without exception,{" "}
                  <strong style={{ color: "#e8ecf4" }}>detective controls</strong>. A detective control asks whether
                  something happened and whether it was acceptable. It examines a completed event: necessary, and by
                  definition too late to stop the event it examines. A better dashboard still only shows the payment
                  after it has left the account.
                </p>
                <p className="mb-6">
                  A <strong style={{ color: "#e8ecf4" }}>preventive control</strong> asks a different question,
                  before the fact, with the power to stop the action if the answer is no. Runtime Authority, defined
                  in Part 7, is a preventive control. Everything the enterprise already calls governance can stay
                  exactly as it is. It simply cannot do a preventive control's job, because timing is not a detail of
                  a control. Timing is the control.
                </p>
                <PullQuote lines={["Governance tells you what happened.", "Authority decides what is allowed to happen."]} />
                <p className="mb-6">
                  The cost of an authority failure is not evenly distributed across time. A payment released outside a
                  delegation, a contract executed outside mandate, a claim settled above an approved limit: these
                  carry consequences that do not wait for the next audit. Detective controls can catch the second
                  occurrence. They cannot prevent the first, and an agent can execute thousands of actions between
                  review cycles.
                </p>
                <p className="mb-6">
                  This is not an argument for less governance. It is an argument that governance and authority are two
                  different functions wearing one name, and only one of them can actually stop a consequence before it
                  happens.
                </p>
                <PartFooterNav index={4} />

                <PartHeading id="part-6" n={6} title="The Cost of No Authority" />
                <p className="mb-6">
                  It is tempting to assume the risk in this paper requires something to go wrong with the AI itself.
                  That assumption understates the risk. None of the following require a malicious agent, a broken
                  model, or an attack, only a correctly functioning AI system acting on a correctly formed intent,
                  with no deterministic check on whether it was entitled to act on it at all.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Payment approval.</strong> The model reads an invoice
                  correctly, matches it to a purchase order correctly, initiates payment correctly. The amount
                  exceeds the agent's delegation. Nothing in the chain of reasoning was built to notice.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Supplier creation.</strong> An onboarding agent populates a new
                  vendor record accurately and activates it. Supplier creation was never within its delegated scope,
                  and no check existed to say so before the record went live.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Banking detail changes.</strong> A servicing agent updates
                  payment instructions exactly as instructed. The update is flawless. Whether this class of change
                  should require a second, independent authorisation was already answered for humans. Not yet for the
                  agent.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Contract signing.</strong> A procurement agent finalises terms
                  within its price authority but outside its authority to bind the enterprise to a multi-year term:
                  a distinction the organisation had reserved for one role, and had never told the agent existed.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Pricing changes.</strong> A pricing agent, optimising correctly
                  for a stated objective, adjusts a price outside a band that exists for a regulatory reason it was
                  never given visibility into.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Customer account changes.</strong> A support agent, resolving a
                  complaint well, issues a credit above the limit any human in the equivalent role would need a
                  supervisor to approve.
                </p>
                <p className="mb-6">
                  Each scenario would have been caught, routinely and without incident, by the same delegation policy
                  the enterprise already applies to its people. In every case, the AI did what it was asked, and did
                  it well; none of these outcomes required the model to be wrong. Each required only that permission
                  was assumed rather than checked.
                </p>
                <PullQuote lines={["These failures do not require a rogue AI.", "They only require a missing check."]} />
                <p className="mb-6">
                  A model quality failure is visible, bounded, and improves with the next model version. An authority
                  failure is invisible until realised, unbounded until a limit is hit, and does not improve with a
                  better model, because a better model was never the missing layer.
                </p>
                <PartFooterNav index={5} />

                <PartHeading id="part-7" n={7} title="Runtime Authority" />
                <p className="mb-6">
                  There is exactly one moment an enterprise can still stop an autonomous action before it becomes
                  real.
                </p>
                <p className="mb-6">
                  Before that moment is planning: writing policy, training the model, designing the workflow. After it
                  is damage control: detecting the error, reversing what can be reversed, explaining what happened to
                  a regulator or a board. Neither is the moment the enterprise actually decides.
                </p>
                <p className="mb-6">
                  That moment is runtime: the instant an autonomous system has formed an intent (an amount, a
                  counterparty, a signature) and is about to convert it into a consequence the enterprise cannot take
                  back.
                </p>
                <p className="mb-6" style={{ color: "#e8ecf4", fontWeight: 500 }}>
                  Runtime Authority is the capability of determining, at that instant, whether an autonomous system
                  currently holds the delegated authority to perform the specific action it is about to take.
                </p>
                <p className="mb-6">
                  Three words carry the definition. <em>Runtime</em>: contemporaneous with the decision, not design
                  time, not after the fact. <em>Immediately before execution</em>: the control's value depends
                  entirely on sitting between intent and consequence. <em>Delegated authority</em>: not a general
                  judgement of reasonableness, but the same specific, borrowed scope from Part 1, expressed in a form
                  a machine can evaluate.
                </p>
                <p className="mb-6">
                  Runtime Authority is not access control, which answers a coarse question at session or resource
                  level: can this identity reach this system. Runtime Authority answers a finer question at the level
                  of the individual transaction: given this agent's identity, its delegation, and the specifics of
                  this request, is this exact action, right now, within the{" "}
                  <strong style={{ color: "#e8ecf4" }}>authority envelope</strong> it has borrowed.
                </p>
                <p className="mb-6">
                  It is easy to mistake for something already on the shelf. It is not IAM, which answers who can log
                  in. Not RBAC, which answers what a role can generally reach. Not governance, which sets rules but
                  does not check them at the moment of action. Not monitoring, which reports what already happened.
                  Not identity, which authenticates the requester but says nothing about the request. And not AI
                  reasoning, which can judge whether an action seems sensible but cannot certify whether it is
                  permitted.
                </p>
                <PullQuote lines={["Not who is asking.", "Not what a role can generally do.", "Whether this exact action, right now, is allowed."]} />
                <p className="mb-6">
                  Enterprises deploying autonomous agents are not asking whether the agent can reach the payments API.
                  They know it can. What they cannot currently answer, with evidence, is whether each payment falls
                  within its delegated authority. No identity system answers that, because it was never built to.
                </p>
                <p className="mb-6">
                  Runtime Authority is not a feature to add to existing AI infrastructure. It is a missing layer, at a
                  point in the execution path that has never before required a dedicated system, because a human
                  always stood there instead.
                </p>
                <PartFooterNav index={6} />

                <PartHeading id="part-8" n={8} title="Deterministic Authority" />
                <p className="mb-6">
                  Reaching for more AI, as argued in Part 3, is not just insufficient here. It is the wrong direction.
                </p>
                <p className="mb-6">
                  A probabilistic system produces the most likely correct answer given its training and inputs. It
                  carries an irreducible chance of being wrong, one that does not fall to zero with more reasoning
                  steps: each additional step is itself probabilistic, and stacking probabilistic operations
                  converges to a different probability distribution, not to certainty.
                </p>
                <p className="mb-6">
                  A deterministic system produces the same answer every time, because it evaluates explicit rules
                  rather than inferring one. A policy engine checking whether a payment is at or below an agent's
                  limit is not reasoning about the question. It is comparing two numbers. Given the same rule and the
                  same facts, the answer is identical on the first evaluation and the millionth.
                </p>
                <p className="mb-6">
                  Consider an agent requesting a payment of ninety-eight thousand against a delegation capped at one
                  hundred thousand. A probabilistic system asked whether this complies is estimating a likelihood,
                  however confident it sounds. A deterministic system is comparing two numbers and returning true. Its
                  only failure mode is a wrongly stated rule: a policy error the enterprise can inspect and fix.
                </p>
                <PullQuote lines={["Authority is not inference.", "Authority is evaluation."]} />
                <p className="mb-6">
                  Better reasoning does not close this gap. More capable models do not close it. More models voting
                  does not close it. Each improves an estimate. None turns an estimate into a fact, and authority, to
                  be trustworthy, has to be a fact.
                </p>
                <p className="mb-6">
                  AI has a real role here: interpretation. It is well suited to reading an unstructured request and
                  extracting the structured claim it implies (a payment of this amount, to this counterparty, under
                  this contract) and presenting that claim for evaluation. What AI should not do is decide, by its
                  own probabilistic judgement, whether the claim is authorised.
                </p>
                <PullQuote lines={["Intelligence recommends.", "Authority decides."]} />
                <p className="mb-6">
                  A rule inside a model's weights or prompt is a rule the model can be argued out of, or miscalculate
                  under unusual input. A rule inside a policy engine, evaluated independently of the model that
                  formed the request, cannot be argued out of anything. It is checked, not persuaded.
                </p>
                <p className="mb-6">
                  This is why authority functions as the missing operating system for autonomous work. An operating
                  system enforces boundaries the applications on top of it cannot override by being clever, however
                  good those applications get. An authority layer must do the same for an agent, however good the
                  agent gets: not a more convincing argument, but a boundary its own reasoning cannot talk its way
                  past.
                </p>
                <PartFooterNav index={7} />

                <PartHeading id="part-9" n={9} title="The Runtime Decision" />
                <p className="mb-6">
                  The architecture separates into two planes: a control plane, where policy is authored and
                  published, and a runtime plane (the authority plane) where individual intents are evaluated
                  against it.
                </p>
                <RuntimeDecisionDiagram />
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Enterprise Policy.</strong> The Delegation of Authority policy,
                  the approval matrix, the signing schedule the organisation already maintains. Nothing here requires
                  new policy. It requires making existing policy legible to a machine.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Authority Model.</strong> Written policy, however clear to a
                  person, is not directly executable. This stage compiles it into an explicit, machine-evaluable
                  model: who, or what, may take which action, up to what limit, under what conditions, with what
                  escalation path. Ambiguity in the original policy surfaces here and must be resolved, a valuable
                  exercise whether or not a machine is involved.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Runtime Validation.</strong> An autonomous agent forms an
                  intent, expressed as a structured claim, evaluated against the authority model before the action
                  proceeds. The outcome is one of three: <em>approve</em>: within the authority the agent has
                  borrowed; <em>escalate</em>: human review, exactly as a human delegate's request would route to a
                  manager above a threshold; or <em>reject</em>: outside any authority the agent holds.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Execution.</strong> Only after a positive determination does
                  the action take effect. Runtime Authority does not execute the action. It gates whether execution
                  may proceed, the way a second signatory does not process a wire transfer but determines whether it
                  may be processed.
                </p>
                <p className="mb-6">
                  One failure mode deserves emphasis: fail-open behaviour, where a system that cannot reach a
                  determination defaults to allowing the action anyway. A Runtime Authority layer must fail closed.
                  Uncertainty about authority is not authority.
                </p>
                <p className="mb-6">
                  <strong style={{ color: "#e8ecf4" }}>Cryptographic Evidence.</strong> Every decision generates an
                  immutable record, an authority certificate: what was requested, by which agent, under which policy
                  version, with what outcome, at what time. This is the stage most enterprises assume they already
                  have.
                </p>
                <p className="mb-6">
                  Most believe they have evidence because they have logs. Logs are records a system writes about
                  itself, after the fact, in a format built for debugging, incomplete or alterable, never designed
                  to withstand an adversarial challenge. Telemetry goes further, but it is still descriptive: it does
                  not prove the story is accurate and unaltered. Both describe a system's own account of itself,
                  produced by the system whose behaviour is in question.
                </p>
                <p className="mb-6">
                  An <strong style={{ color: "#e8ecf4" }}>authority certificate</strong> is different in kind:
                  cryptographically bound to the decision at the moment it is made, stored so alteration is
                  detectable, structured so an auditor, regulator, insurer, or counterparty with no access to the
                  underlying system can independently verify it is authentic. Logs and telemetry cannot prove the
                  record presented is the one generated at the time, not one edited afterward. Cryptographic evidence
                  can, because its integrity is verifiable independently of the system that produced it.
                </p>
                <p className="mb-6">
                  Insurers underwriting autonomous AI risk need outcomes that are provable, not merely asserted; an
                  unprovable control is, at claim time, indistinguishable from no control. Auditors need a record they
                  can test independently, not a narrative assembled after the fact by the organisation under review.
                </p>
                <p className="mb-6">
                  The distinction between a log and an authority certificate is, in practice, the distinction between
                  a control an enterprise believes it has and one it can actually produce on demand. Multiply that
                  across every agent and every workflow, and the case for a shared layer stops being architectural
                  preference and starts being arithmetic: the same arithmetic that shaped every layer before it.
                </p>
                <PartFooterNav index={8} />

                <PartHeading id="part-10" n={10} title="The Economics of Authority" />
                <p className="mb-6">
                  Humans scale linearly. Add more transactions, and an enterprise adds more reviewers, bounded by
                  hiring, training, and the plain limits of how much a person can review in a day.
                </p>
                <p className="mb-6">
                  Autonomous agents do not share that constraint. Point one at more workflows, and it produces more
                  intents, at whatever rate the enterprise permits, without the linear cost that would accompany the
                  same increase in human volume.
                </p>
                <PullQuote lines={["Humans scale linearly.", "Machines do not wait for headcount."]} />
                <p className="mb-6">
                  Once agents generate intents faster than any team can review them, human supervision stops being a
                  safeguard and becomes the bottleneck. The constraint on how much autonomy an enterprise can safely
                  use is no longer the AI's capability. It is the size of the review queue behind it.
                </p>
                <p className="mb-6">
                  A detective control, however well designed, requires proportional review: more agent actions mean
                  more audits, more monitoring capacity, more staff hours reconstructing what happened after the fact.
                  Its cost grows with volume: precisely what autonomous agents are built to increase.
                </p>
                <p className="mb-6">
                  A preventive control does not share this curve. A deterministic policy engine evaluates one action
                  in constant time whether it is the first of the day or the millionth. Building it costs something
                  once. Running it costs almost nothing per additional check.
                </p>
                <PullQuote lines={["A preventive control is built once.", "A detective control is repeated forever."]} />
                <p className="mb-6">
                  Past a certain transaction volume (and autonomous agents reach that volume quickly), a preventive,
                  automated check costs less per action than continuing to add human reviewers to keep pace. Runtime
                  Authority does not merely reduce risk. It becomes the cheaper way to operate, faster than most
                  enterprises currently budget for.
                </p>
                <p className="mb-6">
                  This is the same logic that turned identity, networking, and payments into infrastructure:
                  centralisation wins because a shared layer's marginal cost per check falls toward zero, while a
                  scattered approach's marginal cost keeps climbing with every application that reinvents it.
                  Infrastructure always wins this comparison eventually. Authority is no exception to a rule it did
                  not write.
                </p>
                <PartFooterNav index={9} />

                <PartHeading id="part-11" n={11} title="Enterprise Authority Infrastructure" />
                <p className="mb-6">
                  A capability crosses from optional to load-bearing when it stops being logic embedded separately
                  inside every application and becomes a shared layer instead.
                </p>
                <p className="mb-6">
                  Identity followed this arc in the 2000s, for the reason set out in Part 2. Networking followed the
                  same arc in a different shape: a point-to-point connection between every pair of systems grows
                  faster than the number of systems itself: add a tenth application and you add nine connections,
                  not one. No enterprise could sustain that growth, so connections gave way to a shared substrate
                  every application could plug into once. Payments followed it too: every business settling and
                  reconciling its own transactions was solving the same clearing and trust problem, independently, at
                  its own expense, until volume and stakes made a shared, verifiable layer cheaper and safer than a
                  thousand private ones.
                </p>
                <PullQuote lines={["Identity became infrastructure.", "Payments became infrastructure.", "Authority becomes infrastructure."]} />
                <ConsolidationDiagram />
                <p className="mb-6">
                  Authority is on the same trajectory, under the same pressure, for the same reason. As autonomous
                  agents proliferate across procurement, treasury, claims, and customer operations, no enterprise can
                  sustain a bespoke authority check inside every agent and every workflow. Each team would interpret
                  the same delegation policy differently, and the resulting evidence, if any exists, would be
                  scattered across as many formats as there are applications. This is the identity problem, the
                  networking problem, and the payments problem, recurring in a fourth domain.
                </p>
                <p className="mb-6">
                  Enterprise Authority Infrastructure is the shared layer this pressure produces: a single authority
                  plane through which every autonomous agent's actions are checked against delegated authority,
                  producing an authority certificate in a consistent, verifiable form, regardless of which team built
                  the agent.
                </p>
                <p className="mb-6">
                  Placed alongside Identity, Payment, and Data Infrastructure, and Observability, it is not a fifth,
                  unrelated addition. It is the layer those four have been quietly assuming exists all along: proof
                  that the actions those systems record, move, and observe were actually permitted to happen.
                </p>
                <p className="mb-6">
                  No single vendor will own this layer indefinitely, any more than one vendor owns identity or
                  networking today. The claim is about the market's shape, not any one company's place in it.
                  Authority checking will not remain scattered. It will consolidate, because the alternative does not
                  scale and does not produce evidence anyone can rely on.
                </p>
                <PartFooterNav index={10} />

                <PartHeading id="part-12" n={12} title="The Autonomous Enterprise" />
                <p className="mb-6">
                  Extend this reasoning and a picture emerges of the enterprise once autonomous agents are a normal
                  part of its operating model: a standard participant alongside humans and existing automation, not
                  an exception.
                </p>
                <p className="mb-6">
                  Humans, AI agents, robotic systems, and traditional automation all initiate consequential actions:
                  approvals, payments, contract executions, customer decisions. What differs is not whether the
                  action matters. It is only who, or what, initiated it, and what authority that initiator borrowed.
                </p>
                <p className="mb-6">
                  The enterprise does not need a different authority model for each kind of actor. It needs one
                  model, expressed once, enforced consistently, whether the initiator is a person with a login, an
                  agent with a registered identity, or a robotic system on a factory floor. The delegation a human
                  treasury analyst holds and the delegation an autonomous treasury agent holds should be expressed in
                  the same policy language, evaluated by the same runtime, evidenced in the same durable form. The
                  question is identical either way: is this actor, right now, entitled to borrow the authority this
                  action requires.
                </p>
                <p className="mb-6">
                  Most enterprises today build human workflows, system permissions, and AI agent controls with
                  separate teams and separate tooling, with no shared model between them. Unifying that model is the
                  only way an enterprise can make a credible, evidenced statement about its total exposure to
                  autonomous action. A fragmented model produces, at best, a fragmented answer.
                </p>
                <p className="mb-6">
                  The autonomous enterprise is not defined by how many agents it has deployed. It is defined by
                  whether it has one coherent answer to the question every stakeholder (board, regulator, insurer,
                  customer) will eventually ask: across every actor, human or machine, who is entitled to do what,
                  and can you prove it.
                </p>
                <p className="mb-6">
                  That answer either exists as one system, or as a promise stitched together after the fact from
                  whichever teams happen to be in the room.
                </p>
                <PartFooterNav index={11} />

                <PartHeading id="part-13" n={13} title="An Implementation of the Category" />
                <p className="mb-6">
                  Everything argued to this point stands independently of any company. Runtime Authority is a
                  capability enterprises need because AI has crossed the execution boundary in Part 4. A
                  deterministic policy layer is the only sound way to provide it, for the reasons in Part 8.
                  Cryptographic evidence is what makes its decisions defensible, as argued in Part 9. The economics in
                  Part 10 make the layer cheaper than the alternative it replaces. The natural endpoint is a shared
                  infrastructure layer, not scattered bespoke checks, as described in Part 11 and Part 12.
                </p>
                <p className="mb-6">
                  PayReality, built by AI Securewatch, is one implementation of this architecture. It compiles an
                  enterprise's existing delegation policy into a machine-evaluable authority model, using an open
                  policy framework for inspectable rules rather than opaque ones. It evaluates agent intents against
                  that model at runtime, through a deterministic enforcement engine, producing one of the three
                  outcomes in Part 9, and fails closed when a determination cannot be made with confidence. Every
                  decision produces a cryptographically signed authority certificate in immutable storage.
                </p>
                <p className="mb-6">
                  PayReality does not decide what an enterprise's policy should be; that remains a human and
                  organisational responsibility. It does not execute the underlying business action; execution stays
                  with the enterprise's own systems of record. It provides the layer in between, at the one moment
                  described in Part 7 when the check actually matters.
                </p>
                <p className="mb-6">
                  No equivalent layer exists today in most enterprises deploying autonomous agents into consequential
                  workflows. Identity infrastructure answers who is asking. Governance describes what should be
                  allowed. Monitoring describes what already happened. None occupy the runtime gap between an agent's
                  decision and its execution.
                </p>
                <p className="mb-6">
                  That infrastructure is coming, in some form, for the reason identity infrastructure came before it:
                  the alternative does not scale, and it becomes more expensive with every year autonomy grows.
                  PayReality is one attempt to build it early. The category does not depend on it.
                </p>
                <p className="mb-6" style={{ color: "#e8ecf4", fontWeight: 500 }}>
                  Whether or not this particular implementation succeeds, the argument in the preceding twelve parts
                  does not change. An enterprise that deploys autonomous agents into consequential workflows will
                  need a runtime layer that checks delegated authority before execution and produces evidence a
                  sceptical outside party can verify. Enterprise Authority Infrastructure will exist. The only
                  uncertainty left to settle is who builds it, and how soon the enterprises reading this paper decide
                  they can no longer wait to find out.
                </p>
                <PartFooterNav index={12} />

                <div id="principles" className="scroll-mt-28 mt-24 mb-7">
                  <div className="section-label mb-3">PRINCIPLES</div>
                  <h2 style={h2Style}>Principles of Enterprise Authority</h2>
                </div>
                <div className="glass-card rounded-2xl p-8">
                  <ol className="flex flex-col gap-4" style={{ listStyleType: "decimal", paddingLeft: "1.25rem" }}>
                    <li>Authority belongs to the enterprise, never to any individual or system that exercises it.</li>
                    <li>Humans do not own authority. They borrow it, bounded, revocable, and accountable to policy.</li>
                    <li>Autonomous systems borrow authority the same way humans do, under the same terms.</li>
                    <li>Intelligence does not determine authority. It only recommends what authority should decide.</li>
                    <li>Authority must remain deterministic. A rule that can be estimated is not a rule that can be trusted.</li>
                    <li>Authority must be evaluated before execution. Evaluated after, it is no longer authority: it is a record.</li>
                    <li>Governance must become executable. Written policy that cannot be checked automatically is not yet a control.</li>
                    <li>Evidence must be cryptographically verifiable, or it is not evidence: only a description.</li>
                    <li>Runtime is where authority exists. Before it, there is only planning. After it, only consequence.</li>
                    <li>Enterprise Authority Infrastructure becomes foundational, for the same reason identity, networking, and payments did before it.</li>
                  </ol>
                </div>

                <p className="mt-8 text-center" style={{ fontStyle: "italic" }}>
                  AI Securewatch (Pty) Ltd. PayReality: Enterprise Authority Infrastructure for Autonomous AI.
                </p>
              </div>

              {/* Continue the conversation */}
              <div className="mt-24 glass-card rounded-2xl p-8 sm:p-10" style={{ border: "1px solid rgba(124,111,255,0.25)", boxShadow: "0 0 32px rgba(124,111,255,0.08)" }}>
                <div className="mono text-xs mb-3" style={{ color: "#a78bfa", letterSpacing: "0.12em" }}>
                  CONTINUE THE CONVERSATION
                </div>
                <h2 className="mb-8" style={h2Style}>
                  Every enterprise that reads this will eventually need an answer.
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={openDemo}
                    className="btn-primary px-6 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2"
                  >
                    Book a Demo
                    <ArrowRight size={15} />
                  </button>
                  <a href="/contact" className="btn-ghost px-6 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                    Contact Us
                  </a>
                  <a href="/#runtime-authority" className="btn-ghost px-6 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                    Read About Runtime Authority
                  </a>
                  <a
                    href={PLATFORM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-6 py-3.5 rounded-xl text-sm inline-flex items-center justify-center gap-2"
                  >
                    Explore the Platform
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Published by */}
              <div className="mt-16 pt-10 border-t border-border">
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="mono text-xs mb-3" style={{ color: "#6b7280", letterSpacing: "0.12em" }}>
                    PUBLISHED BY
                  </div>
                  <div style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8ecf4" }}>
                    AI Securewatch (Pty) Ltd
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Building Enterprise Authority Infrastructure for Autonomous AI</p>
                  <a href={SITE_URL} className="text-sm inline-block mt-2" style={{ color: "#7c6fff" }}>
                    {SITE_URL.replace("https://", "")}
                  </a>
                </div>
              </div>

              {/* Author block */}
              <div className="mt-10 glass-card rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}
                >
                  <span style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#7c6fff" }}>
                    SC
                  </span>
                </div>
                <div>
                  <div className="mono text-xs mb-2" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>
                    ABOUT THE AUTHOR
                  </div>
                  <a
                    href="/leadership/sean-chihwendu"
                    className="mb-1 inline-block"
                    style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8ecf4" }}
                  >
                    Sean Chihwendu
                  </a>
                  <div className="text-sm mb-3" style={{ color: "#a78bfa" }}>
                    Founder &amp; CEO, AI Securewatch · Enterprise Authority Infrastructure
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sean founded AI Securewatch after years in procurement and tender management, where he saw
                    firsthand how difficult it is to verify that an approved action actually followed policy. That gap
                    is why PayReality exists.{" "}
                    <a href="/leadership/sean-chihwendu" style={{ color: "#a78bfa" }}>
                      Read his full profile →
                    </a>
                  </p>
                </div>
              </div>

              {/* Related reading */}
              <div className="mt-16">
                <div className="section-label mb-6">RELATED READING</div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {RELATED.map((r) => (
                    <a
                      key={r.title}
                      href={r.href}
                      className="glass-card rounded-2xl p-6 flex flex-col group"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
                      >
                        <r.icon size={17} style={{ color: "#7c6fff" }} />
                      </div>
                      <div
                        className="mb-2"
                        style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#e8ecf4" }}
                      >
                        {r.title}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{r.desc}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium" style={{ color: "#7c6fff" }}>
                        Read more
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom navigation */}
              <div className="mt-16 flex flex-col sm:flex-row gap-4">
                <a href="/" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
                  Back to Home
                </a>
                <a
                  href="/contact"
                  className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
                >
                  Contact
                  <Mail size={15} />
                </a>
                <button
                  onClick={openDemo}
                  className="btn-primary px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2"
                >
                  Book a Demo
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>

            {/* Desktop sidebar */}
            <aside className="hidden lg:block sticky" style={{ top: "100px" }}>
              <div className="glass-card rounded-2xl p-6 mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="mono text-xs" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>
                    READING PROGRESS
                  </span>
                  <span className="mono text-xs" style={{ color: "#a78bfa" }}>
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full"
                    style={{ width: `${progress}%`, background: "linear-gradient(90deg, #7c6fff, #3b8cf8)", transition: "width 0.1s linear" }}
                  />
                </div>
              </div>

              <nav aria-label="Table of contents" className="glass-card rounded-2xl p-6 mb-5" style={{ maxHeight: "48vh", overflowY: "auto" }}>
                <div className="mono text-xs mb-4" style={{ color: "#7c6fff", letterSpacing: "0.12em" }}>
                  CONTENTS
                </div>
                {tocList}
              </nav>

              <div className="glass-card rounded-2xl p-6 mb-5 flex flex-col gap-3">
                <button onClick={openDemo} className="btn-primary px-4 py-2.5 rounded-lg text-sm w-full">
                  Book a Demo
                </button>
                <a href="/contact" className="btn-ghost px-4 py-2.5 rounded-lg text-sm w-full text-center">
                  Contact
                </a>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="mono text-xs mb-4" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>
                  SHARE
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyLink}
                    aria-label="Copy link to this page"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: copied ? "#34d399" : "#e8ecf4" }}
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                  </button>
                  <a
                    href={linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#e8ecf4" }}
                  >
                    <Linkedin size={15} />
                  </a>
                  <a
                    href={twitterHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X (Twitter)"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#e8ecf4" }}
                  >
                    <Twitter size={15} />
                  </a>
                  <a
                    href={emailHref}
                    aria-label="Share via email"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#e8ecf4" }}
                  >
                    <Mail size={15} />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
