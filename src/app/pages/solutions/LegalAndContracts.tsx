import { FileSignature, ShieldCheck, Scale, Handshake } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

export default function LegalAndContracts() {
  return (
    <SolutionLayout
      industryLabel="Legal and Contracts"
      path="/solutions/legal-and-contracts"
      metaDescription="How Runtime Authority evaluates AI agent actions in legal workflows against delegated signing authority, before contracts, NDAs, or amendments execute."
      headline={<>Runtime Authority for <span className="grad-text">Legal and Contracts</span></>}
      oneLiner="Signing authority is one of the most explicitly delegated forms of authority any organization has. An AI agent drafting or routing an agreement needs it checked before anything is executed, not after."
      problemTitle="A signature isn't binding because someone typed a name -- it's binding because they had the authority to"
      problemBody={[
        "Legal and contracting functions already operate on precisely delegated signing authority: who can execute a contract, at what value a co-signature is required, who can approve outside counsel spend, who holds settlement authority up to what amount. This structure exists because the organization is bound by what gets signed, regardless of who or what drafted it.",
        "An AI agent that can draft, route, or flag an agreement for execution is operating directly inside that structure. Whether it's checked against actual delegated signing authority before execution is the difference between a control that holds and one that exists only on paper.",
      ]}
      useCases={[
        { icon: FileSignature, title: "Contract approval and signing authority", desc: "A contract an agent routes for execution is evaluated against the signing authority actually delegated to the approving Principal, by value and contract type." },
        { icon: ShieldCheck, title: "NDA execution authorization", desc: "An NDA an agent proposes to execute is evaluated against the authority delegated for that counterparty and disclosure scope." },
        { icon: Handshake, title: "Outside counsel spend approval", desc: "A spend commitment to outside counsel an agent initiates is evaluated against the approval limits actually delegated for legal spend." },
        { icon: Scale, title: "Settlement authority limits", desc: "A settlement amount an agent proposes is evaluated against the specific settlement authority delegated to the approving role, escalating above it." },
      ]}
      whyBody={[
        "A signing authority matrix is written for a general counsel's office to apply case by case. It's never been evaluated automatically at the point an agreement is routed for execution, because nothing sat between the draft and the signature. Runtime Authority's Authority Graph models exactly who holds signing and settlement authority, and to what extent; Runtime Policies compile the specific conditions -- value, counterparty, contract type -- that determine whether execution proceeds or escalates.",
        "Every decision produces evidence the moment it's made, tying the specific authority checked to the specific action taken -- exactly the kind of record a later dispute over whether an agreement was properly authorized would need.",
      ]}
    />
  );
}
