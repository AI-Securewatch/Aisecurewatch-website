import { GitPullRequestArrow, KeyRound, Cloud, Siren } from "lucide-react";
import SolutionLayout from "./SolutionLayout";

export default function EnterpriseIt() {
  return (
    <SolutionLayout
      industryLabel="Enterprise IT"
      path="/solutions/enterprise-it"
      metaDescription="How Runtime Authority evaluates AI agent actions in enterprise IT against delegated change, access, or spend authority, before infrastructure changes execute."
      headline={<>Runtime Authority for <span className="grad-text">Enterprise IT</span></>}
      oneLiner="Change management and access control already exist to stop exactly what an ungoverned AI agent introduces: an action taken outside anyone's actual authority to approve it."
      problemTitle="An agent that can open a change request can usually also merge it"
      problemBody={[
        "Enterprise IT already runs on delegated change and access authority: who can approve an infrastructure change, provision access, authorize cloud spend, or escalate an incident response. Change advisory boards and access reviews exist because the cost of an unauthorized change is measured in outages and breaches, not inconvenience.",
        "An AI agent operating inside CI/CD, infrastructure-as-code, or access management doesn't remove that risk -- it removes the deliberate slowness that made the risk manageable, since an agent can propose and, without a check, execute a change far faster than any change advisory board was built to review.",
      ]}
      useCases={[
        { icon: GitPullRequestArrow, title: "Infrastructure change approval", desc: "A change an agent proposes is evaluated against the change authority actually delegated for that system and environment before it's applied." },
        { icon: KeyRound, title: "Access provisioning and deprovisioning", desc: "An access grant or revocation an agent initiates is evaluated against the identity and access authority delegated to whoever requested it." },
        { icon: Cloud, title: "Cloud spend and resource provisioning", desc: "A provisioning action with cost implications is evaluated against budget and approval limits before resources are committed." },
        { icon: Siren, title: "Incident escalation authority", desc: "An escalation or remediation action an agent takes during an incident is evaluated against the specific authority delegated for that severity level." },
      ]}
      whyBody={[
        "A change management policy or access control matrix is written for a human reviewer to apply. It's never been evaluated automatically against an agent proposing the change, because nothing sat between the pull request and the deploy. Runtime Authority's Authority Graph models who actually holds change and access authority, by system and environment; Runtime Policies compile the specific conditions -- severity, blast radius, cost -- that determine whether an action proceeds or escalates.",
        "Every decision produces evidence the moment it's made, so a post-incident review has an exact record of what was evaluated and why, not a reconstruction from a deploy log and a Slack thread.",
      ]}
    />
  );
}
