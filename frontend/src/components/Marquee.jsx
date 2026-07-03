export default function Marquee({ items, className = "" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.25em] text-ink">
            <span className="text-red">●</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
