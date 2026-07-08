import { createContext, useContext, useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Mail, Send, Shield, X } from "lucide-react";
import { CONTACT_EMAIL, mailto } from "../lib/site";

type DemoModalContextValue = {
  openDemo: () => void;
  openPaperRequest: (topic: string) => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [paperTopic, setPaperTopic] = useState<string | null>(null);
  const [demoForm, setDemoForm] = useState({ name: "", email: "", company: "", message: "" });

  const openDemo = () => {
    setPaperTopic(null);
    setDemoSubmitted(false);
    setDemoForm({ name: "", email: "", company: "", message: "" });
    setDemoOpen(true);
  };

  const openPaperRequest = (topic: string) => {
    setPaperTopic(topic);
    setDemoSubmitted(false);
    setDemoForm({ name: "", email: "", company: "", message: "" });
    setDemoOpen(true);
  };

  const closeDemo = () => setDemoOpen(false);

  const updateDemoField =
    (field: keyof typeof demoForm) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDemoForm((f) => ({ ...f, [field]: e.target.value }));

  const handleDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = paperTopic
      ? `Technical Overview Request: ${paperTopic}`
      : `Demo Request: ${demoForm.company || demoForm.name}`;
    const body = [
      `Name: ${demoForm.name}`,
      `Work email: ${demoForm.email}`,
      `Company: ${demoForm.company}`,
      ...(paperTopic ? ["", `Requested: ${paperTopic}`] : []),
      "",
      demoForm.message || "No additional details provided.",
    ].join("\n");
    window.location.href = mailto(CONTACT_EMAIL, subject, body);
    setDemoSubmitted(true);
  };

  useEffect(() => {
    if (!demoOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDemo();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [demoOpen]);

  return (
    <DemoModalContext.Provider value={{ openDemo, openPaperRequest }}>
      {children}

      {demoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(5,6,12,0.75)", backdropFilter: "blur(4px)" }}
            onClick={closeDemo}
          />
          <div
            className="modal-panel glass-card relative w-full max-w-md rounded-2xl p-8"
            style={{ background: "rgba(13,16,32,0.97)", border: "1px solid rgba(124,111,255,0.25)" }}
          >
            <button
              onClick={closeDemo}
              aria-label="Close"
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>

            {!demoSubmitted ? (
              <>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(124,111,255,0.12)", border: "1px solid rgba(124,111,255,0.3)" }}
                >
                  {paperTopic ? (
                    <Mail size={20} style={{ color: "#7c6fff" }} />
                  ) : (
                    <Shield size={20} style={{ color: "#7c6fff" }} />
                  )}
                </div>
                <h3
                  id="demo-modal-title"
                  className="mb-2"
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#e8ecf4",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {paperTopic ? "Request Technical Overview" : "Book a Demo"}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {paperTopic
                    ? `Tell us where to send "${paperTopic}" and we'll follow up directly.`
                    : "Tell us about your organization and our team will reach out within one business day."}
                </p>

                <form onSubmit={handleDemoSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={demoForm.name}
                    onChange={updateDemoField("name")}
                    className="form-field"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work email"
                    value={demoForm.email}
                    onChange={updateDemoField("email")}
                    className="form-field"
                  />
                  <input
                    type="text"
                    required={!paperTopic}
                    placeholder={paperTopic ? "Company (optional)" : "Company"}
                    value={demoForm.company}
                    onChange={updateDemoField("company")}
                    className="form-field"
                  />
                  {!paperTopic && (
                    <textarea
                      placeholder="What would you like to see in the demo? (optional)"
                      value={demoForm.message}
                      onChange={updateDemoField("message")}
                      rows={3}
                      className="form-field"
                      style={{ resize: "none" }}
                    />
                  )}
                  <button
                    type="submit"
                    className="btn-primary px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2 mt-2"
                  >
                    Send Request
                    <Send size={14} />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    This opens your email client addressed to{" "}
                    <a
                      href={mailto(
                        CONTACT_EMAIL,
                        paperTopic ? `Technical Overview Request: ${paperTopic}` : "Demo Request"
                      )}
                      style={{ color: "#a78bfa" }}
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)" }}
                >
                  <CheckCircle2 size={26} style={{ color: "#34d399" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Onest', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#e8ecf4",
                  }}
                  className="mb-2"
                >
                  Request sent
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Your email client should now be open with a pre-filled message to our team. If it didn't
                  open, email us directly at{" "}
                  <a
                    href={mailto(
                      CONTACT_EMAIL,
                      paperTopic ? `Technical Overview Request: ${paperTopic}` : "Demo Request"
                    )}
                    style={{ color: "#a78bfa" }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button onClick={closeDemo} className="btn-ghost px-6 py-2.5 rounded-xl text-sm">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </DemoModalContext.Provider>
  );
}
