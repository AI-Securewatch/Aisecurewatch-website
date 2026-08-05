import { ClipboardCheck, Route, Package, CalendarClock } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

export default function Healthcare() {
  return (
    <SolutionLayout
      industryLabel="Healthcare"
      path="/solutions/healthcare"
      metaDescription="How Runtime Authority evaluates AI agent actions in healthcare workflows against delegated authority, before prior authorizations or referrals execute."
      headline={<>Runtime Authority for <span className="grad-text">Healthcare</span></>}
      oneLiner="This page covers administrative and operational authorization (prior authorization workflows, referral routing, procurement, and scheduling), not clinical decision-making, which Runtime Authority does not perform or evaluate."
      problemTitle="Administrative authority in healthcare is delegated as carefully as clinical authority, and enforced far less consistently"
      problemBody={[
        "Health systems delegate administrative and operational authority with real structure: who can approve a prior authorization request, route a referral, commit to a supply or equipment purchase, or reallocate non-clinical scheduling resources. None of that structure is clinical judgment. It's governance, the same category of control finance and procurement already operate under.",
        "An AI agent operating in this administrative layer (drafting a prior authorization request, proposing a referral, or flagging a supply reorder) needs that same delegated-authority check applied to it, evaluated before the action reaches a payer, a partner system, or a purchase order.",
      ]}
      useCases={[
        { icon: ClipboardCheck, title: "Prior authorization workflows", desc: "An agent-drafted prior authorization request is evaluated against the administrative approval authority actually delegated for that request type before submission." },
        { icon: Route, title: "Referral routing", desc: "A referral an agent proposes is evaluated against routing and network authority constraints, escalating to review where those constraints aren't clearly met." },
        { icon: Package, title: "Supply and equipment procurement", desc: "A reorder or purchase an agent initiates is evaluated against category and spend authority the same way any procurement action would be." },
        { icon: CalendarClock, title: "Non-clinical scheduling and resourcing", desc: "Resource or scheduling changes an agent proposes are evaluated against the operational authority delegated to whoever (or whatever) is proposing them." },
      ]}
      whyBody={[
        "An administrative policy document (who can approve what, and under what payer or network rule) was written for a human to interpret. It's never been evaluated automatically at the point an agent drafts a request, because nothing sat between the draft and the system it would reach. Runtime Authority's Authority Graph models the actual administrative delegation structure; Runtime Policies compile the specific conditions a request has to meet.",
        "Every decision produces evidence the moment it's made, scoped to the administrative action it covers, consistent with the same minimal-disclosure principle behind Authorization Receipts: evidence proves a decision was made correctly without requiring broad access to the underlying request.",
      ]}
    />
  );
}
