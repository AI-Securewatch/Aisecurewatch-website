import { Landmark, Users, Banknote, FileSignature } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

export default function PublicSector() {
  return (
    <SolutionLayout
      industryLabel="Public Sector"
      path="/solutions/public-sector"
      metaDescription="How Runtime Authority evaluates AI agent actions in public sector budget and procurement workflows against delegated authority, before disbursements execute."
      headline={<>Runtime Authority for the <span className="grad-text">Public Sector</span></>}
      oneLiner="Budget authority, benefits disbursement, and procurement in government already follow strict delegation and appropriation rules. An AI agent operating in any of them needs those rules evaluated before it acts, not audited after."
      problemTitle="Appropriated authority is not the same thing as an agent that can technically make the call"
      problemBody={[
        "Public sector organizations operate under some of the most explicit delegation structures that exist: budget authority tied to appropriations, benefits and grant disbursement bound by eligibility rules and sign-off chains, procurement bound by thresholds that trigger additional review by statute, not preference.",
        "An AI agent that can draft a disbursement, flag a benefits determination, or initiate a contractor payment is operating inside that same structure whether or not anything checks it against the structure first. The absence of a check doesn't reduce the exposure, it just moves where the exposure gets discovered.",
      ]}
      useCases={[
        { icon: Banknote, title: "Benefits and grant disbursement", desc: "A disbursement an agent proposes is evaluated against eligibility and sign-off rules before it's approved, not reconciled against them afterward." },
        { icon: Landmark, title: "Budget authorization", desc: "A budget commitment an agent initiates is evaluated against the appropriated authority actually delegated to the requesting role." },
        { icon: Users, title: "Interagency delegation", desc: "An action crossing agency or department lines is evaluated against the specific delegation that permits it, rather than assumed permitted by default." },
        { icon: FileSignature, title: "Contractor payment approval", desc: "A contractor payment an agent flags for release is evaluated against procurement thresholds that require additional review before it executes." },
      ]}
      whyBody={[
        "An appropriations rule or benefits eligibility policy is written to be interpreted by a caseworker or budget officer. It's never been evaluated automatically at the point an agent proposes a disbursement or commitment, because nothing sat between the proposal and the system of record. Runtime Authority's Authority Graph models the actual delegation and appropriation structure; Runtime Policies compile the specific conditions (thresholds, eligibility rules, sign-off chains) an action has to satisfy.",
        "Every decision produces evidence the moment it's made. This page describes how Runtime Authority applies to public sector governance structures. It does not claim any specific government compliance certification, authorization, or contract vehicle, current or pending.",
      ]}
    />
  );
}
