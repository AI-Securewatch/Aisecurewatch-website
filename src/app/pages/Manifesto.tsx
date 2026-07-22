import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Mail } from "lucide-react";
import SEO from "../components/SEO";
import { CONTACT_EMAIL, SITE_URL, mailto } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

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

const h2Style = {
  fontFamily: "'Onest', system-ui, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
  letterSpacing: "-0.02em",
  color: "#e8ecf4",
  lineHeight: 1.25,
} as const;

const proseStyle = { fontSize: "1.0625rem" } as const;

function PartHeading({ id, n, title }: { id: string; n: number; title: string }) {
  return (
    <div id={id} className="scroll-mt-28 mt-20 mb-6">
      <div className="section-label mb-3">{`PART ${String(n).padStart(2, "0")}`}</div>
      <h2 style={h2Style}>{title}</h2>
    </div>
  );
}

function PullQuote({ lines }: { lines: string[] }) {
  return (
    <div style={{ borderLeft: "3px solid rgba(124,111,255,0.45)", paddingLeft: "1.5rem", margin: "2rem 0" }}>
      {lines.map((line) => (
        <p
          key={line}
          style={{
            fontFamily: "'Onest', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "1.15rem",
            color: "#e8ecf4",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function DiagramBlock({ caption, children }: { caption?: string; children: ReactNode }) {
  return (
    <div className="glass-card rounded-2xl p-6 my-10" style={{ borderColor: "rgba(124,111,255,0.2)" }}>
      {caption && (
        <div className="mono text-xs mb-4 text-center" style={{ color: "#6b7280", letterSpacing: "0.1em" }}>
          {caption}
        </div>
      )}
      <div className="mono text-xs text-center text-muted-foreground leading-loose" style={{ letterSpacing: "0.02em" }}>
        {children}
      </div>
    </div>
  );
}

export default function Manifesto() {
  const { openDemo } = useDemoModal();
  const [progress, setProgress] = useState(0);

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

  return (
    <>
      <SEO
        title="The Enterprise Authority Manifesto | AI Securewatch"
        description="Why every autonomous enterprise will require authority infrastructure. The founding manifesto for Enterprise Authority Infrastructure, from AI Securewatch."
        path="/manifesto"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "The Enterprise Authority Manifesto",
          "description": "Why every autonomous enterprise will require authority infrastructure.",
          "url": `${SITE_URL}/manifesto`,
          "author": { "@id": `${SITE_URL}/#organization` },
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "about": { "@id": `${SITE_URL}/#software` },
          "mainEntityOfPage": `${SITE_URL}/manifesto`,
        }}
      />

      {/* Sticky reading progress */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[3px]" style={{ background: "rgba(255,255,255,0.06)" }}>
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
        <article className="max-w-3xl mx-auto">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
            ← Home
          </a>

          <div className="section-label mb-4">MANIFESTO</div>
          <h1
            className="mb-4"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            The Enterprise Authority Manifesto
          </h1>
          <p className="text-muted-foreground mb-6" style={{ fontSize: "1.1875rem", lineHeight: 1.5 }}>
            Why Every Autonomous Enterprise Will Require Authority Infrastructure
          </p>
          <div className="flex items-center gap-3 mb-16 mono text-xs text-muted-foreground" style={{ letterSpacing: "0.06em" }}>
            <span>AI SECUREWATCH</span>
            <span>·</span>
            <span>~22 MIN READ</span>
          </div>

          {/* Table of contents */}
          <div className="glass-card rounded-2xl p-7 mb-16">
            <div className="mono text-xs mb-5" style={{ color: "#7c6fff", letterSpacing: "0.12em" }}>
              CONTENTS
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {TOC.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-baseline gap-2"
                >
                  <span className="mono flex-shrink-0" style={{ fontSize: "11px", color: "#6b7280" }}>
                    {i < 13 ? String(i + 1).padStart(2, "0") : "—"}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed" style={proseStyle}>
            <PullQuote lines={["No enterprise fully trusts any single person within it.", "Every enterprise runs, successfully, for exactly that reason."]} />

            <PartHeading id="part-1" n={1} title="The Enterprise Already Solved Authority" />
            <p>
              No enterprise gives any one employee the run of the business — not the most senior, not the most trusted —
              and yet the business runs: payments go out, contracts get signed, claims get settled, thousands of times a
              day, without a single person personally approving each one. The enterprise depends completely on people it
              does not fully trust. That this is not a problem is worth pausing on.
            </p>
            <p>
              Every organisation of meaningful size has solved a hard problem: how do you let many people act on behalf
              of the business without losing control of what they can do? The answer is not software. It is a discipline
              older than computing: delegated authority.
            </p>
            <p>
              A junior buyer can raise a purchase order up to a defined limit. A regional manager can approve discounts
              within a band. A claims handler can settle a claim below a threshold. A treasury analyst can release a
              payment within an approved mandate. Above those limits, the request routes upward — a manager, a committee,
              a second signatory. This is not bureaucracy. It is a control system, extending the organisation's reach
              through many hands while keeping the risk of any single action bounded and known in advance. It is old
              enough, and familiar enough, to have become invisible.
            </p>
            <p>
              One detail is easy to miss: no employee owns the authority they exercise. A treasury analyst has no
              personal right to release a payment. The enterprise lends a defined slice of its own authority — for a
              defined purpose, within a defined limit, revocable at will. Resignation, role change, or policy update, and
              the loan is called in. The analyst never owned it. The analyst borrowed it.
            </p>
            <PullQuote lines={["Trust is a vulnerability.", "Authority is the fix."]} />
            <p>
              The enterprise does not need to trust the analyst completely. It only needs the analyst's authority to be
              bounded, revocable, and checked — a lower bar than trust, and a far more reliable one.
            </p>
            <PullQuote lines={["Authority belongs to the organisation.", "Never the individual."]} />
            <p>
              A chief financial officer's signing authority is not a personal attribute. It is a grant, attached to a
              role, that moves to the next person who holds the role the day the current one leaves.
            </p>
            <PullQuote lines={["Enterprises delegate authority.", "They never delegate ownership."]} />
            <p>
              If a human employee can be lent a bounded, revocable, auditable slice of the enterprise's authority, there
              is no structural reason an autonomous system cannot be lent the same thing, under the same terms.
              Delegation does not require a human delegate — only one that is bounded, identifiable, and accountable to
              the same policy every other delegate answers to. What changes when the borrower is a machine is not the
              mechanics of delegation. It is the speed at which the delegate can act.
            </p>
            <p>Three properties make this work, whoever or whatever is borrowing:</p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Authority is written down.</strong> A Delegation of Authority policy,
              an approval matrix, a signing schedule state, in advance, who or what may commit the organisation, to what
              extent, and under what conditions.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Authority is checked before the action completes.</strong> A purchase
              order above a threshold is not sent to the supplier until the second signature exists. The check happens
              before the consequence, not after.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Authority produces a trail.</strong> When a payment clears, there is a
              record of who approved it, under which policy, at what limit — not a reconstruction from memory when a
              regulator asks.
            </p>
            <p>
              This is an operating system for organisational trust, built by separating two questions that are easy to
              conflate: who is this, and what is this allowed to do. Enterprises have always answered the second with
              policy — borrowed and bounded, not judgement applied case by case.
            </p>
            <p>
              It was built for humans borrowing authority from other humans, enforced by paper, signatures, and
              committees. It was never built for software that can borrow the same authority and exercise it in
              milliseconds, unattended, at a volume no committee could review. That gap has stayed invisible for longer
              than it should have, because no enterprise has ever needed to explain a system this old to an entirely new
              kind of employee. The reason becomes clear once you see how every other layer of enterprise infrastructure
              got built.
            </p>

            <PartHeading id="part-2" n={2} title="The History of Enterprise Infrastructure" />
            <p>
              Why hasn't a machine-readable version of delegated authority been built already? Because every prior
              enterprise capability made the same journey — from something each application solved for itself, to
              something the enterprise solved once, centrally, for everyone.
            </p>
            <p>
              The pattern: a capability gets solved independently by every application that needs it. Independent
              solutions multiply cost and inconsistency as the number of applications grows. Past a certain point,
              consolidating the capability into one shared layer becomes cheaper than continuing to duplicate it.
              Enterprises do not centralise because centralisation is elegant. They centralise because duplication has
              become the more expensive option.
            </p>
            <p>
              Authority is the next layer in a sequence enterprises have been building, mostly without noticing, for
              seventy years.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>The 1950s.</strong> Computers calculate — payroll, actuarial tables,
              ledger totals. Narrow and mechanical: the computer calculates what a human already decided to calculate.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>The 1980s.</strong> Computers store information. Databases and ERP
              systems turn the computer into the enterprise's memory. Decisions still live with people.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>The 1990s.</strong> Computers communicate. Networking and middleware
              connect systems and people at a speed paper never allowed. Decisions still move only when a person
              initiates them.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>The 2000s.</strong> Identity becomes infrastructure. Each application
              had built its own login, its own password rules — solved independently, everywhere. Every new application
              multiplied the number of places a person's identity had to be established and kept consistent. A thousand
              applications did not mean a thousand small identity problems. It meant one identity problem, repeated a
              thousand times. Identity and access management consolidated into a shared layer: one place to answer,
              reliably, who someone is.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>The 2010s.</strong> Workflow automation removes the manual labour of
              carrying a human decision through to completion. The decision itself still belongs to a person.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>The 2020s.</strong> Autonomous systems execute. Language models and
              agent frameworks give software the capacity to decide, not just to carry out a decision already made. An
              agent can read a request, form an intent, and act on it — in some workflows without a human in the loop at
              all. This is the decade the execution boundary, described in Part 4, is crossed at scale.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>The 2030s, in view now, not yet arrived.</strong> Enterprise Authority
              Infrastructure. The pattern that carried identity through its steps is already running for authority.
              Every autonomous agent, built by a different team for a different workflow, must answer the same
              question: is this action within delegated scope. Left alone, each team answers it differently — a
              hundred agents will not produce a hundred small authority problems, but one authority problem, repeated a
              hundred times. No enterprise can sensibly rebuild an authority check inside every agent and every
              workflow. Consolidation is the only step left to happen.
            </p>
            <p>
              Enterprise Authority Infrastructure is not a category invented to justify a product. It is the next layer
              produced by the mechanism that produced identity infrastructure, arriving on schedule. Identity looked
              like a login problem until the number of applications made it a strategic one. Authority looks, today,
              like an AI oversight problem, because AI is the first actor to make the missing layer's absence visible.
            </p>
            <DiagramBlock caption="THE TRAJECTORY OF ENTERPRISE INFRASTRUCTURE">
              1950s Computers calculate → 1980s Computers store information → 1990s Computers communicate → 2000s
              Identity becomes infrastructure → 2010s Workflow automation → 2020s Autonomous systems execute → 2030s
              Enterprise Authority Infrastructure
            </DiagramBlock>

            <PartHeading id="part-3" n={3} title="The Wrong Industry Assumption" />
            <p>
              As AI moves from producing text to producing action, the industry has reached for the tools it knows
              best: better models, better reasoning, more governance, more monitoring.
            </p>
            <p>
              Each is necessary. None answers the question that determines whether an action should happen at all: is
              this system entitled to borrow the authority this action requires.
            </p>
            <PullQuote lines={["Authority is not an AI problem.", "It is an enterprise problem AI has exposed."]} />
            <p>
              <strong style={{ color: "#e8ecf4" }}>More intelligence</strong> produces a better answer to what should
              happen. It does not produce a verifiable answer to whether the system is entitled to make it happen.
              Capability and entitlement are orthogonal. A more capable agent, unchecked against a delegation, is not a
              safer agent. It is a more competent one.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Better reasoning</strong> — chain of thought, self-critique,
              multi-agent review — improves the recommendation by stacking more probabilistic steps. Stacking
              probability on probability does not produce a deterministic outcome. It produces a more elaborate
              probabilistic one.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Governance and monitoring</strong> are addressed fully in Part 5. In
              short: both operate before the system is built or after it has acted. Neither operates at the one moment
              that matters — the instant between an AI system deciding what it wants to do and that action taking
              effect.
            </p>
            <p>
              None of these four assumptions is wrong on its own terms. A more capable model is a better colleague. The
              error is treating any of them as an answer to a question none was built to answer.
            </p>
            <PullQuote lines={["We are not inventing new governance.", "We are making governance executable."]} />
            <p>
              Every rule already exists somewhere in the enterprise, written and approved. What does not exist is a
              system that evaluates those rules automatically, at the moment an autonomous agent tries to act on them.
              A human used to occupy that moment by default, simply by clicking send. As AI takes the moment over,
              something has to occupy it. Not a smarter model. A control.
            </p>
            <p>
              That moment has no name in most enterprise architectures today, because it has no precedent. What follows
              is what happens once it starts to matter, in the workflows where enterprises are already asking software
              to occupy it.
            </p>

            <PartHeading id="part-4" n={4} title="The Execution Boundary" />
            <p>
              For most of the history of enterprise software, AI produced information. A recommendation engine
              suggested a product. A fraud model flagged a transaction. A chatbot drafted a response. A human always
              stood between the output and any real consequence. The AI proposed. The human disposed.
            </p>
            <p>
              That arrangement is ending across financial services, insurance, healthcare, procurement, and operations.
              Autonomous agents today can:
            </p>
            <ul className="flex flex-col gap-2 pl-5" style={{ listStyleType: "disc" }}>
              <li>Release payments within a treasury workflow</li>
              <li>Approve or decline loan applications against a credit policy</li>
              <li>Settle insurance claims below a stated threshold</li>
              <li>Authorise healthcare procedures against a coverage policy</li>
              <li>Create suppliers and issue procurement approvals</li>
              <li>Modify pricing or contract terms</li>
              <li>Issue refunds or change customer accounts</li>
            </ul>
            <p>
              None of this is hypothetical. Each is in production or active pilot today, in a growing number of cases
              with human confirmation removed below a size or risk threshold — because removing that friction was the
              entire commercial argument for deploying the agent.
            </p>
            <PullQuote lines={["Recommendation is advice.", "Execution is a fact."]} />
            <p>
              This is the execution boundary: the line between an AI system that informs a decision and one that is the
              decision. Once an agent's output is a transaction rather than a suggestion, the enterprise is managing the
              same delegation problem from Part 1 — except the borrower is software that can act in milliseconds,
              without hesitation, and without the judgement a human brings to a borderline case.
            </p>
            <p>
              Crossing this boundary does not require the AI to be more capable or more agentic. It only requires that
              its output now closes a loop that used to require a human hand. Every question the enterprise answers for
              human delegates — who may act, to what limit, under what conditions, with what evidence — becomes a
              question it must answer for the agent too.
            </p>
            <p>
              The boundary is easy to miss because nothing about the agent's architecture announces when it has been
              crossed. The same model, the same prompt, the same reasoning steps can sit safely on either side of it,
              depending only on whether a human happens to review the output before it takes effect. Remove that
              review, and the risk profile changes completely without a single line of code changing.
            </p>
            <p>
              Most enterprises have built the agent. They have not built the layer that governs what it is entitled to
              do once it decides to act. The systems already in place were not built for this moment.
            </p>

            <PartHeading id="part-5" n={5} title="Governance Is Too Late" />
            <p>
              Ask a risk committee how it controls AI today, and the answer describes practices that are well
              established and largely sound: model risk policies, AI principles committees, compliance reviews, audit
              trails, monitoring dashboards, periodic reporting.
            </p>
            <p>
              Trace the timing of each and a pattern appears. Policies are written before deployment. Reviews happen at
              launch and on a cadence after. Audit trails are assembled after an action, stitched together from logs.
              Monitoring detects anomalies after the event. Every one of these operates before the agent exists or
              after it has acted. None sit at the moment the action is formed and about to take effect. A human
              occupied that moment by default.
            </p>
            <p>
              Governance, compliance, monitoring, audit, and observability are, without exception,{" "}
              <strong style={{ color: "#e8ecf4" }}>detective controls</strong>. A detective control asks whether
              something happened and whether it was acceptable. It examines a completed event — necessary, and by
              definition too late to stop the event it examines. A better dashboard still only shows the payment after
              it has left the account.
            </p>
            <p>
              A <strong style={{ color: "#e8ecf4" }}>preventive control</strong> asks a different question, before the
              fact, with the power to stop the action if the answer is no. Runtime Authority, defined in Part 7, is a
              preventive control. Everything the enterprise already calls governance can stay exactly as it is. It
              simply cannot do a preventive control's job, because timing is not a detail of a control. Timing is the
              control.
            </p>
            <PullQuote lines={["Governance tells you what happened.", "Authority decides what is allowed to happen."]} />
            <p>
              The cost of an authority failure is not evenly distributed across time. A payment released outside a
              delegation, a contract executed outside mandate, a claim settled above an approved limit — these carry
              consequences that do not wait for the next audit. Detective controls can catch the second occurrence.
              They cannot prevent the first, and an agent can execute thousands of actions between review cycles.
            </p>
            <p>
              This is not an argument for less governance. It is an argument that governance and authority are two
              different functions wearing one name, and only one of them can actually stop a consequence before it
              happens.
            </p>

            <PartHeading id="part-6" n={6} title="The Cost of No Authority" />
            <p>
              It is tempting to assume the risk in this paper requires something to go wrong with the AI itself. That
              assumption understates the risk. None of the following require a malicious agent, a broken model, or an
              attack — only a correctly functioning AI system acting on a correctly formed intent, with no
              deterministic check on whether it was entitled to act on it at all.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Payment approval.</strong> The model reads an invoice correctly,
              matches it to a purchase order correctly, initiates payment correctly. The amount exceeds the agent's
              delegation. Nothing in the chain of reasoning was built to notice.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Supplier creation.</strong> An onboarding agent populates a new
              vendor record accurately and activates it. Supplier creation was never within its delegated scope, and no
              check existed to say so before the record went live.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Banking detail changes.</strong> A servicing agent updates payment
              instructions exactly as instructed. The update is flawless. Whether this class of change should require a
              second, independent authorisation was already answered for humans. Not yet for the agent.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Contract signing.</strong> A procurement agent finalises terms
              within its price authority but outside its authority to bind the enterprise to a multi-year term — a
              distinction the organisation had reserved for one role, and had never told the agent existed.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Pricing changes.</strong> A pricing agent, optimising correctly for
              a stated objective, adjusts a price outside a band that exists for a regulatory reason it was never given
              visibility into.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Customer account changes.</strong> A support agent, resolving a
              complaint well, issues a credit above the limit any human in the equivalent role would need a supervisor
              to approve.
            </p>
            <p>
              Each scenario would have been caught, routinely and without incident, by the same delegation policy the
              enterprise already applies to its people. In every case, the AI did what it was asked, and did it well;
              none of these outcomes required the model to be wrong. Each required only that permission was assumed
              rather than checked.
            </p>
            <PullQuote lines={["These failures do not require a rogue AI.", "They only require a missing check."]} />
            <p>
              A model quality failure is visible, bounded, and improves with the next model version. An authority
              failure is invisible until realised, unbounded until a limit is hit, and does not improve with a better
              model, because a better model was never the missing layer.
            </p>

            <PartHeading id="part-7" n={7} title="Runtime Authority" />
            <p>
              There is exactly one moment an enterprise can still stop an autonomous action before it becomes real.
            </p>
            <p>
              Before that moment is planning: writing policy, training the model, designing the workflow. After it is
              damage control: detecting the error, reversing what can be reversed, explaining what happened to a
              regulator or a board. Neither is the moment the enterprise actually decides.
            </p>
            <p>
              That moment is runtime — the instant an autonomous system has formed an intent (an amount, a
              counterparty, a signature) and is about to convert it into a consequence the enterprise cannot take back.
            </p>
            <p style={{ color: "#e8ecf4", fontWeight: 500 }}>
              Runtime Authority is the capability of determining, at that instant, whether an autonomous system
              currently holds the delegated authority to perform the specific action it is about to take.
            </p>
            <p>
              Three words carry the definition. <em>Runtime</em>: contemporaneous with the decision, not design time,
              not after the fact. <em>Immediately before execution</em>: the control's value depends entirely on
              sitting between intent and consequence. <em>Delegated authority</em>: not a general judgement of
              reasonableness, but the same specific, borrowed scope from Part 1, expressed in a form a machine can
              evaluate.
            </p>
            <p>
              Runtime Authority is not access control, which answers a coarse question at session or resource level —
              can this identity reach this system. Runtime Authority answers a finer question at the level of the
              individual transaction: given this agent's identity, its delegation, and the specifics of this request,
              is this exact action, right now, within the{" "}
              <strong style={{ color: "#e8ecf4" }}>authority envelope</strong> it has borrowed.
            </p>
            <p>
              It is easy to mistake for something already on the shelf. It is not IAM, which answers who can log in.
              Not RBAC, which answers what a role can generally reach. Not governance, which sets rules but does not
              check them at the moment of action. Not monitoring, which reports what already happened. Not identity,
              which authenticates the requester but says nothing about the request. And not AI reasoning, which can
              judge whether an action seems sensible but cannot certify whether it is permitted.
            </p>
            <PullQuote lines={["Not who is asking.", "Not what a role can generally do.", "Whether this exact action, right now, is allowed."]} />
            <p>
              Enterprises deploying autonomous agents are not asking whether the agent can reach the payments API. They
              know it can. What they cannot currently answer, with evidence, is whether each payment falls within its
              delegated authority. No identity system answers that, because it was never built to.
            </p>
            <p>
              Runtime Authority is not a feature to add to existing AI infrastructure. It is a missing layer, at a
              point in the execution path that has never before required a dedicated system, because a human always
              stood there instead.
            </p>

            <PartHeading id="part-8" n={8} title="Deterministic Authority" />
            <p>
              Reaching for more AI, as argued in Part 3, is not just insufficient here. It is the wrong direction.
            </p>
            <p>
              A probabilistic system produces the most likely correct answer given its training and inputs. It carries
              an irreducible chance of being wrong, one that does not fall to zero with more reasoning steps — each
              additional step is itself probabilistic, and stacking probabilistic operations converges to a different
              probability distribution, not to certainty.
            </p>
            <p>
              A deterministic system produces the same answer every time, because it evaluates explicit rules rather
              than inferring one. A policy engine checking whether a payment is at or below an agent's limit is not
              reasoning about the question. It is comparing two numbers. Given the same rule and the same facts, the
              answer is identical on the first evaluation and the millionth.
            </p>
            <p>
              Consider an agent requesting a payment of ninety-eight thousand against a delegation capped at one
              hundred thousand. A probabilistic system asked whether this complies is estimating a likelihood, however
              confident it sounds. A deterministic system is comparing two numbers and returning true. Its only failure
              mode is a wrongly stated rule — a policy error the enterprise can inspect and fix.
            </p>
            <PullQuote lines={["Authority is not inference.", "Authority is evaluation."]} />
            <p>
              Better reasoning does not close this gap. More capable models do not close it. More models voting does
              not close it. Each improves an estimate. None turns an estimate into a fact, and authority, to be
              trustworthy, has to be a fact.
            </p>
            <p>
              AI has a real role here: interpretation. It is well suited to reading an unstructured request and
              extracting the structured claim it implies — a payment of this amount, to this counterparty, under this
              contract — and presenting that claim for evaluation. What AI should not do is decide, by its own
              probabilistic judgement, whether the claim is authorised.
            </p>
            <PullQuote lines={["Intelligence recommends.", "Authority decides."]} />
            <p>
              A rule inside a model's weights or prompt is a rule the model can be argued out of, or miscalculate under
              unusual input. A rule inside a policy engine, evaluated independently of the model that formed the
              request, cannot be argued out of anything. It is checked, not persuaded.
            </p>
            <p>
              This is why authority functions as the missing operating system for autonomous work. An operating system
              enforces boundaries the applications on top of it cannot override by being clever, however good those
              applications get. An authority layer must do the same for an agent, however good the agent gets — not a
              more convincing argument, but a boundary its own reasoning cannot talk its way past.
            </p>

            <PartHeading id="part-9" n={9} title="The Runtime Decision" />
            <p>
              The architecture separates into two planes: a control plane, where policy is authored and published, and
              a runtime plane — the authority plane — where individual intents are evaluated against it.
            </p>
            <DiagramBlock>
              Enterprise Policy → Authority Model → Runtime Validation → Execution → Cryptographic Evidence
              <br />
              Runtime Validation escalates to → Human Review → resolved, back to Execution
            </DiagramBlock>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Enterprise Policy.</strong> The Delegation of Authority policy, the
              approval matrix, the signing schedule the organisation already maintains. Nothing here requires new
              policy. It requires making existing policy legible to a machine.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Authority Model.</strong> Written policy, however clear to a person,
              is not directly executable. This stage compiles it into an explicit, machine-evaluable model: who, or
              what, may take which action, up to what limit, under what conditions, with what escalation path.
              Ambiguity in the original policy surfaces here and must be resolved — a valuable exercise whether or not
              a machine is involved.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Runtime Validation.</strong> An autonomous agent forms an intent,
              expressed as a structured claim, evaluated against the authority model before the action proceeds. The
              outcome is one of three: <em>approve</em> — within the authority the agent has borrowed; <em>escalate</em>{" "}
              — human review, exactly as a human delegate's request would route to a manager above a threshold; or{" "}
              <em>reject</em> — outside any authority the agent holds.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Execution.</strong> Only after a positive determination does the
              action take effect. Runtime Authority does not execute the action. It gates whether execution may
              proceed, the way a second signatory does not process a wire transfer but determines whether it may be
              processed.
            </p>
            <p>
              One failure mode deserves emphasis: fail-open behaviour, where a system that cannot reach a determination
              defaults to allowing the action anyway. A Runtime Authority layer must fail closed. Uncertainty about
              authority is not authority.
            </p>
            <p>
              <strong style={{ color: "#e8ecf4" }}>Cryptographic Evidence.</strong> Every decision generates an
              immutable record — an authority certificate: what was requested, by which agent, under which policy
              version, with what outcome, at what time. This is the stage most enterprises assume they already have.
            </p>
            <p>
              Most believe they have evidence because they have logs. Logs are records a system writes about itself,
              after the fact, in a format built for debugging — incomplete or alterable, never designed to withstand an
              adversarial challenge. Telemetry goes further, but it is still descriptive: it does not prove the story
              is accurate and unaltered. Both describe a system's own account of itself, produced by the system whose
              behaviour is in question.
            </p>
            <p>
              An <strong style={{ color: "#e8ecf4" }}>authority certificate</strong> is different in kind:
              cryptographically bound to the decision at the moment it is made, stored so alteration is detectable,
              structured so an auditor, regulator, insurer, or counterparty with no access to the underlying system can
              independently verify it is authentic. Logs and telemetry cannot prove the record presented is the one
              generated at the time, not one edited afterward. Cryptographic evidence can, because its integrity is
              verifiable independently of the system that produced it.
            </p>
            <p>
              Insurers underwriting autonomous AI risk need outcomes that are provable, not merely asserted; an
              unprovable control is, at claim time, indistinguishable from no control. Auditors need a record they can
              test independently, not a narrative assembled after the fact by the organisation under review.
            </p>
            <p>
              The distinction between a log and an authority certificate is, in practice, the distinction between a
              control an enterprise believes it has and one it can actually produce on demand. Multiply that across
              every agent and every workflow, and the case for a shared layer stops being architectural preference and
              starts being arithmetic — the same arithmetic that shaped every layer before it.
            </p>

            <PartHeading id="part-10" n={10} title="The Economics of Authority" />
            <p>
              Humans scale linearly. Add more transactions, and an enterprise adds more reviewers, bounded by hiring,
              training, and the plain limits of how much a person can review in a day.
            </p>
            <p>
              Autonomous agents do not share that constraint. Point one at more workflows, and it produces more
              intents, at whatever rate the enterprise permits, without the linear cost that would accompany the same
              increase in human volume.
            </p>
            <PullQuote lines={["Humans scale linearly.", "Machines do not wait for headcount."]} />
            <p>
              Once agents generate intents faster than any team can review them, human supervision stops being a
              safeguard and becomes the bottleneck. The constraint on how much autonomy an enterprise can safely use is
              no longer the AI's capability. It is the size of the review queue behind it.
            </p>
            <p>
              A detective control, however well designed, requires proportional review: more agent actions mean more
              audits, more monitoring capacity, more staff hours reconstructing what happened after the fact. Its cost
              grows with volume — precisely what autonomous agents are built to increase.
            </p>
            <p>
              A preventive control does not share this curve. A deterministic policy engine evaluates one action in
              constant time whether it is the first of the day or the millionth. Building it costs something once.
              Running it costs almost nothing per additional check.
            </p>
            <PullQuote lines={["A preventive control is built once.", "A detective control is repeated forever."]} />
            <p>
              Past a certain transaction volume — and autonomous agents reach that volume quickly — a preventive,
              automated check costs less per action than continuing to add human reviewers to keep pace. Runtime
              Authority does not merely reduce risk. It becomes the cheaper way to operate, faster than most
              enterprises currently budget for.
            </p>
            <p>
              This is the same logic that turned identity, networking, and payments into infrastructure: centralisation
              wins because a shared layer's marginal cost per check falls toward zero, while a scattered approach's
              marginal cost keeps climbing with every application that reinvents it. Infrastructure always wins this
              comparison eventually. Authority is no exception to a rule it did not write.
            </p>

            <PartHeading id="part-11" n={11} title="Enterprise Authority Infrastructure" />
            <p>
              A capability crosses from optional to load-bearing when it stops being logic embedded separately inside
              every application and becomes a shared layer instead.
            </p>
            <p>
              Identity followed this arc in the 2000s, for the reason set out in Part 2. Networking followed the same
              arc in a different shape: a point-to-point connection between every pair of systems grows faster than the
              number of systems itself — add a tenth application and you add nine connections, not one. No enterprise
              could sustain that growth, so connections gave way to a shared substrate every application could plug
              into once. Payments followed it too: every business settling and reconciling its own transactions was
              solving the same clearing and trust problem, independently, at its own expense, until volume and stakes
              made a shared, verifiable layer cheaper and safer than a thousand private ones.
            </p>
            <PullQuote lines={["Identity became infrastructure.", "Payments became infrastructure.", "Authority becomes infrastructure."]} />
            <DiagramBlock>
              Before consolidation: App authenticates its own way · App connects its own way · App settles its own way ·
              App checks authority its own way
              <br />
              After consolidation: Identity Infrastructure · Networking · Payments Infrastructure · Enterprise
              Authority Infrastructure
            </DiagramBlock>
            <p>
              Authority is on the same trajectory, under the same pressure, for the same reason. As autonomous agents
              proliferate across procurement, treasury, claims, and customer operations, no enterprise can sustain a
              bespoke authority check inside every agent and every workflow. Each team would interpret the same
              delegation policy differently, and the resulting evidence, if any exists, would be scattered across as
              many formats as there are applications. This is the identity problem, the networking problem, and the
              payments problem, recurring in a fourth domain.
            </p>
            <p>
              Enterprise Authority Infrastructure is the shared layer this pressure produces: a single authority plane
              through which every autonomous agent's actions are checked against delegated authority, producing an
              authority certificate in a consistent, verifiable form, regardless of which team built the agent.
            </p>
            <p>
              Placed alongside Identity, Payment, and Data Infrastructure, and Observability, it is not a fifth,
              unrelated addition. It is the layer those four have been quietly assuming exists all along: proof that
              the actions those systems record, move, and observe were actually permitted to happen.
            </p>
            <p>
              No single vendor will own this layer indefinitely, any more than one vendor owns identity or networking
              today. The claim is about the market's shape, not any one company's place in it. Authority checking will
              not remain scattered. It will consolidate, because the alternative does not scale and does not produce
              evidence anyone can rely on.
            </p>

            <PartHeading id="part-12" n={12} title="The Autonomous Enterprise" />
            <p>
              Extend this reasoning and a picture emerges of the enterprise once autonomous agents are a normal part of
              its operating model — a standard participant alongside humans and existing automation, not an exception.
            </p>
            <p>
              Humans, AI agents, robotic systems, and traditional automation all initiate consequential actions:
              approvals, payments, contract executions, customer decisions. What differs is not whether the action
              matters. It is only who, or what, initiated it, and what authority that initiator borrowed.
            </p>
            <p>
              The enterprise does not need a different authority model for each kind of actor. It needs one model,
              expressed once, enforced consistently, whether the initiator is a person with a login, an agent with a
              registered identity, or a robotic system on a factory floor. The delegation a human treasury analyst
              holds and the delegation an autonomous treasury agent holds should be expressed in the same policy
              language, evaluated by the same runtime, evidenced in the same durable form. The question is identical
              either way: is this actor, right now, entitled to borrow the authority this action requires.
            </p>
            <p>
              Most enterprises today build human workflows, system permissions, and AI agent controls with separate
              teams and separate tooling, with no shared model between them. Unifying that model is the only way an
              enterprise can make a credible, evidenced statement about its total exposure to autonomous action. A
              fragmented model produces, at best, a fragmented answer.
            </p>
            <p>
              The autonomous enterprise is not defined by how many agents it has deployed. It is defined by whether it
              has one coherent answer to the question every stakeholder — board, regulator, insurer, customer — will
              eventually ask: across every actor, human or machine, who is entitled to do what, and can you prove it.
            </p>
            <p>
              That answer either exists as one system, or as a promise stitched together after the fact from whichever
              teams happen to be in the room.
            </p>

            <PartHeading id="part-13" n={13} title="An Implementation of the Category" />
            <p>
              Everything argued to this point stands independently of any company. Runtime Authority is a capability
              enterprises need because AI has crossed the execution boundary in Part 4. A deterministic policy layer is
              the only sound way to provide it, for the reasons in Part 8. Cryptographic evidence is what makes its
              decisions defensible, as argued in Part 9. The economics in Part 10 make the layer cheaper than the
              alternative it replaces. The natural endpoint is a shared infrastructure layer, not scattered bespoke
              checks, as described in Part 11 and Part 12.
            </p>
            <p>
              PayReality, built by AI Securewatch, is one implementation of this architecture. It compiles an
              enterprise's existing delegation policy into a machine-evaluable authority model, using an open policy
              framework for inspectable rules rather than opaque ones. It evaluates agent intents against that model at
              runtime, through a deterministic enforcement engine, producing one of the three outcomes in Part 9, and
              fails closed when a determination cannot be made with confidence. Every decision produces a
              cryptographically signed authority certificate in immutable storage.
            </p>
            <p>
              PayReality does not decide what an enterprise's policy should be; that remains a human and
              organisational responsibility. It does not execute the underlying business action; execution stays with
              the enterprise's own systems of record. It provides the layer in between, at the one moment described in
              Part 7 when the check actually matters.
            </p>
            <p>
              No equivalent layer exists today in most enterprises deploying autonomous agents into consequential
              workflows. Identity infrastructure answers who is asking. Governance describes what should be allowed.
              Monitoring describes what already happened. None occupy the runtime gap between an agent's decision and
              its execution.
            </p>
            <p>
              That infrastructure is coming, in some form, for the reason identity infrastructure came before it: the
              alternative does not scale, and it becomes more expensive with every year autonomy grows. PayReality is
              one attempt to build it early. The category does not depend on it.
            </p>
            <p style={{ color: "#e8ecf4", fontWeight: 500 }}>
              Whether or not this particular implementation succeeds, the argument in the preceding twelve parts does
              not change. An enterprise that deploys autonomous agents into consequential workflows will need a runtime
              layer that checks delegated authority before execution and produces evidence a sceptical outside party
              can verify. Enterprise Authority Infrastructure will exist. The only uncertainty left to settle is who
              builds it — and how soon the enterprises reading this paper decide they can no longer wait to find out.
            </p>

            <div id="principles" className="scroll-mt-28 mt-20 mb-6">
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
                <li>Authority must be evaluated before execution. Evaluated after, it is no longer authority — it is a record.</li>
                <li>Governance must become executable. Written policy that cannot be checked automatically is not yet a control.</li>
                <li>Evidence must be cryptographically verifiable, or it is not evidence — only a description.</li>
                <li>Runtime is where authority exists. Before it, there is only planning. After it, only consequence.</li>
                <li>Enterprise Authority Infrastructure becomes foundational, for the same reason identity, networking, and payments did before it.</li>
              </ol>
            </div>

            <p className="mt-8 text-center" style={{ fontStyle: "italic" }}>
              AI Securewatch (Pty) Ltd. PayReality: Enterprise Authority Infrastructure for Autonomous AI.
            </p>
          </div>

          {/* Publisher block */}
          <div className="mt-20 pt-10 border-t border-border">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="mono text-xs mb-3" style={{ color: "#6b7280", letterSpacing: "0.12em" }}>
                PUBLISHED BY
              </div>
              <div style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#e8ecf4" }}>
                AI Securewatch (Pty) Ltd
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Building Enterprise Authority Infrastructure for Autonomous AI
              </p>
              <a href={SITE_URL} className="text-sm inline-block mt-2" style={{ color: "#7c6fff" }}>
                {SITE_URL.replace("https://", "")}
              </a>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="/" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Back to Home
            </a>
            <a
              href={mailto(CONTACT_EMAIL, "Enterprise Inquiry: The Enterprise Authority Manifesto")}
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
      </main>
    </>
  );
}
