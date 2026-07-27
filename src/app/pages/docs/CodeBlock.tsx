export default function CodeBlock({ children, label }: { children: string; label?: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden my-2"
      style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
    >
      {label && (
        <div
          className="mono px-4 py-2 text-xs"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", color: "#6b7280", letterSpacing: "0.05em" }}
        >
          {label}
        </div>
      )}
      <pre className="mono px-5 py-4 overflow-x-auto" style={{ fontSize: "0.8125rem", lineHeight: 1.7, color: "#c9d1e0" }}>
        <code>{children}</code>
      </pre>
    </div>
  );
}
