export default function SectionLabel({ index, label, className = "" }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`} data-testid={`section-label-${label.toLowerCase()}`}>
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-red">
        {String(index).padStart(2, "0")} /
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink">{label}</span>
      <span className="flex-1 h-px bg-line" />
    </div>
  );
}
