import { CreditCard, Landmark, ShieldAlert, Headset, Scale } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

export default function FinancialServices() {
  return (
    <SolutionLayout
      industryLabel="Financial Services"
      path="/solutions/financial-services"
      metaDescription="How Runtime Authority evaluates AI agent actions in financial services against delegated authority, before payment, treasury, or credit actions execute."
      headline={<>Runtime Authority for <span className="grad-text">Financial Services</span></>}
      oneLiner="AI agents are moving from generating payment recommendations to initiating them. Runtime Authority evaluates every one against your delegated authority before it executes."
      problemTitle="An approval matrix that isn't enforced at the moment of action isn't a control"
      problemBody={[
        "Banks and financial institutions already operate detailed approval matrices: who can move funds, at what threshold a second approver is required, which credit exceptions need escalation. These controls exist because a person acting outside their authority is a known, governed risk.",
        "An AI agent initiating a payment, adjusting a credit line, or processing a claim carries the same exposure, except it can act at a volume and speed no manual review cadence was built to keep up with. The question isn't whether your approval matrix covers this. It's whether anything evaluates it before the agent acts, not after.",
      ]}
      useCases={[
        { icon: CreditCard, title: "Payment approvals", desc: "An agent initiating a payment is evaluated against the approving Principal's actual delegated limit and dual-approval thresholds before the payment executes." },
        { icon: Landmark, title: "Treasury", desc: "FX and cash movement actions are evaluated against treasury authority limits and counterparty constraints, the same way a human treasury officer's actions already are." },
        { icon: ShieldAlert, title: "Credit operations", desc: "A credit line change or exception request is evaluated against the underwriting authority actually delegated to whoever (or whatever) is requesting it." },
        { icon: Scale, title: "Claims", desc: "A claims payout action is evaluated against the approval authority and policy conditions active at the time, with the decision recorded as evidence." },
        { icon: Headset, title: "Customer servicing", desc: "An account change or refund an agent proposes is evaluated against the servicing authority actually delegated for that account type and amount." },
      ]}
      whyBody={[
        "A written approval matrix tells a human what's permitted. It says nothing to a system evaluating an AI agent's action in real time, because nothing translates it into a form that system can evaluate. Runtime Authority's Authority Graph models your actual delegation structure (who can approve what, and to what extent), and Runtime Policies compile the specific conditions under which an action is permitted.",
        "Every decision (Allow, Deny, or Human Review) produces evidence the moment it's made, not a reconstruction assembled for an examiner later. See Authorization Receipts for where that evidence is headed next: a portable artifact a regulator or auditor can verify independently.",
      ]}
    />
  );
}
