import { FileText, Handshake, Receipt, ShieldAlert } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

export default function Procurement() {
  return (
    <SolutionLayout
      industryLabel="Procurement"
      path="/solutions/procurement"
      metaDescription="How Runtime Authority evaluates AI agent actions in procurement against delegated spend authority, before purchase orders, onboarding, or invoices execute."
      headline={<>Runtime Authority for <span className="grad-text">Procurement</span></>}
      oneLiner="An AI agent that can raise a purchase order or approve an invoice needs the same spend authority controls the person it's assisting already operates under."
      problemTitle="Spend authority was delegated to people, not to whatever initiates the request"
      problemBody={[
        "Procurement already runs on delegated spend authority: category-specific limits, approval chains above certain thresholds, and separation between whoever requests a purchase and whoever approves it. These controls exist to prevent exactly the failure mode an ungoverned AI agent introduces -- spend that's technically requested correctly but outside anyone's actual authority to approve.",
        "An AI agent raising purchase orders or flagging supplier risk doesn't remove the need for that control. It removes the natural friction -- the time it takes a person to act -- that made the control's absence tolerable before.",
      ]}
      useCases={[
        { icon: FileText, title: "Purchase orders", desc: "A purchase order an agent raises is evaluated against the category and amount limits actually delegated to the requesting Principal before it's issued." },
        { icon: Handshake, title: "Supplier onboarding", desc: "Onboarding a new supplier above a certain exposure or risk classification is routed to Human Review rather than approved automatically." },
        { icon: Receipt, title: "Invoice approval", desc: "An invoice an agent matches and proposes for payment is evaluated against the same approval limits a human approver would be held to." },
        { icon: ShieldAlert, title: "Vendor risk", desc: "An action involving a vendor above a defined risk threshold escalates for review instead of proceeding on the agent's own assessment." },
      ]}
      whyBody={[
        "A procurement policy document defines category limits and approval chains for humans to follow. It's never been evaluated automatically at the moment a purchase order is raised, because nothing sat between the request and the system of record to check it. Runtime Authority's Authority Graph models exactly who can commit spend, to what category, and to what extent; Runtime Policies compile the specific conditions -- amount, category, vendor risk tier -- that determine the outcome.",
        "Every purchase order, onboarding decision, or invoice approval produces evidence at the moment it's decided, so a procurement audit doesn't depend on reconstructing intent from an email thread.",
      ]}
    />
  );
}
