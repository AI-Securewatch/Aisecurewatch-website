import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | PayReality"
        description="This page doesn't exist. Return to PayReality, the enterprise authority layer for autonomous AI."
        path="/404"
      />
      <main className="pt-40 pb-32 px-6 min-h-[60vh] flex items-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="section-label mb-4">404</div>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Onest', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              letterSpacing: "-0.03em",
              color: "#e8ecf4",
            }}
          >
            This page doesn't exist
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-10">
            The page you're looking for isn't here. It may have moved, or the link may be out of date.
          </p>
          <a href="/" className="btn-primary px-8 py-4 rounded-xl text-base inline-flex items-center gap-3">
            Back to PayReality
            <ArrowRight size={16} />
          </a>
        </div>
      </main>
    </>
  );
}
