import { ArrowRight, CreditCard, FileText, ClipboardCheck, Factory, Landmark, GitPullRequestArrow, FileSignature } from "lucide-react";
import SEO from "../../components/SEO";
import { SITE_URL } from "../../lib/site";
import { useDemoModal } from "../../context/DemoModalContext";

const SOLUTIONS = [
  { icon: CreditCard, label: "Financial Services", href: "/solutions/financial-services", desc: "Payment approvals, treasury, credit operations, claims, and customer servicing." },
  { icon: FileText, label: "Procurement", href: "/solutions/procurement", desc: "Purchase orders, supplier onboarding, invoice approval, and vendor risk." },
  { icon: ClipboardCheck, label: "Healthcare", href: "/solutions/healthcare", desc: "Administrative and operational authorization -- not clinical decision-making." },
  { icon: Factory, label: "Manufacturing", href: "/solutions/manufacturing", desc: "Production changes, maintenance sign-off, quality holds, and supply chain exceptions." },
  { icon: Landmark, label: "Public Sector", href: "/solutions/public-sector", desc: "Benefits disbursement, budget authorization, and procurement thresholds." },
  { icon: GitPullRequestArrow, label: "Enterprise IT", href: "/solutions/enterprise-it", desc: "Infrastructure change approval, access provisioning, and incident escalation." },
  { icon: FileSignature, label: "Legal and Contracts", href: "/solutions/legal-and-contracts", desc: "Contract signing authority, NDA execution, and settlement limits." },
];

export default function SolutionsOverview() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Solutions | PayReality"
        description="Runtime Authority applied to governance and authorization problems in financial services, procurement, healthcare, manufacturing, public sector, and legal."
        path="/solutions"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "url": `${SITE_URL}/solutions`,
          "name": "Solutions | PayReality",
          "about": { "@id": `${SITE_URL}/#software` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-label mb-4">SOLUTIONS</div>
          <h1 className="mb-6" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#e8ecf4", maxWidth: 780 }}>
            One runtime. <span className="grad-text">Every industry's own delegated authority.</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 700 }}>
            Runtime Authority doesn't change by industry. What changes is whose governance it evaluates, and
            what the workflow on either side of it looks like -- the platform underneath every page below is
            identical.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {SOLUTIONS.map((s) => (
              <a key={s.href} href={s.href} className="glass-card rounded-2xl p-7 flex flex-col group" style={{ textDecoration: "none" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}>
                  <s.icon size={19} style={{ color: "#7c6fff" }} />
                </div>
                <h2 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#e8ecf4", letterSpacing: "-0.015em" }}>
                  {s.label}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: "#7c6fff" }}>
                  Explore
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row gap-4">
            <a href="/products" className="btn-ghost px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              View Products
              <ArrowRight size={16} />
            </a>
            <button onClick={openDemo} className="btn-primary px-6 py-3 rounded-xl text-sm inline-flex items-center justify-center gap-2">
              Book a Demo
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
