// Shared pill used everywhere a page needs to mark something Planned,
// Coming Soon, Early Access, or Live, so the wording and styling for "this
// doesn't exist yet" stays identical across every Developers page instead
// of drifting per-file (SDKs, Integration Guides, and Authorization
// Receipts all need this repeatedly enough to justify one component).
type Status = "Live" | "Coming First" | "Planned" | "Early Access" | "Coming Soon" | "Planned Architecture" | "Roadmap";

const COLORS: Record<Status, { bg: string; fg: string; border: string }> = {
  Live: { bg: "rgba(34,197,94,0.1)", fg: "#4ade80", border: "rgba(34,197,94,0.3)" },
  "Coming First": { bg: "rgba(124,111,255,0.12)", fg: "#a78bfa", border: "rgba(124,111,255,0.3)" },
  Planned: { bg: "rgba(107,114,128,0.15)", fg: "#9ca3af", border: "rgba(107,114,128,0.3)" },
  "Early Access": { bg: "rgba(59,140,248,0.12)", fg: "#60a5fa", border: "rgba(59,140,248,0.3)" },
  "Coming Soon": { bg: "rgba(124,111,255,0.12)", fg: "#a78bfa", border: "rgba(124,111,255,0.3)" },
  "Planned Architecture": { bg: "rgba(124,111,255,0.12)", fg: "#a78bfa", border: "rgba(124,111,255,0.3)" },
  Roadmap: { bg: "rgba(107,114,128,0.15)", fg: "#9ca3af", border: "rgba(107,114,128,0.3)" },
};

export default function StatusBadge({ status }: { status: Status }) {
  const c = COLORS[status];
  return (
    <span
      className="mono text-[10px] px-2.5 py-1 rounded-full inline-block flex-shrink-0"
      style={{ background: c.bg, color: c.fg, border: `1px solid ${c.border}`, letterSpacing: "0.04em" }}
    >
      {status.toUpperCase()}
    </span>
  );
}
