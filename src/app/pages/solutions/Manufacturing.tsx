import { Factory, Wrench, PauseCircle, Truck } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

export default function Manufacturing() {
  return (
    <SolutionLayout
      industryLabel="Manufacturing"
      path="/solutions/manufacturing"
      metaDescription="How Runtime Authority evaluates AI agent actions on the plant floor against delegated authority, before production changes, sign-offs, or holds execute."
      headline={<>Runtime Authority for <span className="grad-text">Manufacturing</span></>}
      oneLiner="A production change, a maintenance override, or a quality-hold release already requires specific delegated sign-off. An AI agent proposing one needs the same check, before it reaches the line."
      problemTitle="Plant-floor authority is delegated by role and shift, not by whoever happens to be looking at the system"
      problemBody={[
        "Manufacturing already runs on tightly delegated operational authority: who can approve a production parameter change, release a quality hold, sign off on maintenance work, or authorize a supply chain exception, often varying by shift, plant, and role. This exists because the cost of an unauthorized change on a production line is immediate and physical, not theoretical.",
        "An AI agent monitoring a line or supply chain and proposing an action doesn't reduce that cost. It removes the person who would otherwise have checked their own authority before acting, which is exactly the check that needs to move to before execution, not after.",
      ]}
      useCases={[
        { icon: Factory, title: "Production changes requiring sign-off", desc: "A parameter or process change an agent proposes is evaluated against the specific role and shift authority delegated for that change type." },
        { icon: Wrench, title: "Maintenance authorization", desc: "A maintenance action or override an agent initiates is evaluated against delegated maintenance authority before it's applied." },
        { icon: PauseCircle, title: "Quality-hold overrides", desc: "Releasing a quality hold an agent recommends is evaluated against the specific quality authority delegated to release it, escalating where that authority isn't clearly held." },
        { icon: Truck, title: "Supply chain exceptions", desc: "A supply chain exception (an expedited order, a substitute supplier) an agent proposes is evaluated against procurement and risk authority before it's committed." },
      ]}
      whyBody={[
        "A plant's authority matrix (who can sign off on what, by role and shift) is written for a person to check against their own badge and title. It's never been evaluated automatically against a proposing agent, because nothing sat between the proposal and the system executing it. Runtime Authority's Authority Graph models that structure directly; Runtime Policies compile the specific conditions a proposed change has to satisfy.",
        "Every decision produces evidence at the moment it's made (which authority was checked, what the outcome was), so a quality or safety review doesn't depend on reconstructing who approved what from a shift log.",
      ]}
    />
  );
}
