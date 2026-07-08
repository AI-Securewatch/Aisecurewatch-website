import { ArrowRight, Building2, Mail, MapPin, Users } from "lucide-react";
import SEO from "../components/SEO";
import { CAREERS_EMAIL, CONTACT_EMAIL, SITE_URL, mailto } from "../lib/site";
import { useDemoModal } from "../context/DemoModalContext";

export default function Contact() {
  const { openDemo } = useDemoModal();

  return (
    <>
      <SEO
        title="Contact AI Securewatch"
        description="Get in touch with AI Securewatch, developer of PayReality — Enterprise AI Authority Infrastructure. Sales, leadership, and careers contacts."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "url": `${SITE_URL}/contact`,
          "about": { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-label mb-4">CONTACT</div>
          <h1
            className="mb-8"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            Talk to <span className="grad-text">AI Securewatch</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16" style={{ fontSize: "1.125rem", maxWidth: 620 }}>
            AI Securewatch develops, owns, and operates{" "}
            <a href="/" style={{ color: "#a78bfa" }}>
              PayReality
            </a>
            . Reach out below for sales, leadership, or careers.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-16">
            <div className="glass-card rounded-2xl p-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
              >
                <Building2 size={20} style={{ color: "#7c6fff" }} />
              </div>
              <h2 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#e8ecf4" }}>
                Company
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                AI Securewatch (Pty) Ltd — the company behind PayReality, Enterprise AI Authority
                Infrastructure.{" "}
                <a href="/about" style={{ color: "#a78bfa" }}>
                  About us →
                </a>
              </p>
              <a href={mailto(CONTACT_EMAIL, "Enterprise Inquiry: PayReality")} className="text-sm inline-flex items-center gap-2" style={{ color: "#7c6fff" }}>
                <Mail size={14} />
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
              >
                <MapPin size={20} style={{ color: "#7c6fff" }} />
              </div>
              <h2 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#e8ecf4" }}>
                Office
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Johannesburg, South Africa — where the team works together daily.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
              >
                <Users size={20} style={{ color: "#7c6fff" }} />
              </div>
              <h2 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#e8ecf4" }}>
                Leadership
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                <a href="/leadership/sean-chihwendu" style={{ color: "#a78bfa" }}>
                  Sean Chihwendu
                </a>
                , Founder & CEO, and{" "}
                <a href="/leadership/nathan-obiekwe" style={{ color: "#a78bfa" }}>
                  Nathan Obiekwe
                </a>
                , Co-Founder & CTO.
              </p>
              <a href="/leadership" className="text-sm inline-flex items-center gap-2" style={{ color: "#7c6fff" }}>
                Full leadership team →
              </a>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,111,255,0.1)", border: "1px solid rgba(124,111,255,0.2)" }}
              >
                <Mail size={20} style={{ color: "#7c6fff" }} />
              </div>
              <h2 className="mb-2" style={{ fontFamily: "'Onest', system-ui, sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#e8ecf4" }}>
                Careers
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Exceptional engineers and enterprise architects — reach out directly.
              </p>
              <a href={mailto(CAREERS_EMAIL, "Interest: Working at AI Securewatch")} className="text-sm inline-flex items-center gap-2" style={{ color: "#7c6fff" }}>
                <Mail size={14} />
                {CAREERS_EMAIL}
              </a>
            </div>
          </div>

          <button
            onClick={openDemo}
            className="btn-primary px-8 py-4 rounded-xl text-base inline-flex items-center gap-3"
          >
            Book a Demo
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </>
  );
}
