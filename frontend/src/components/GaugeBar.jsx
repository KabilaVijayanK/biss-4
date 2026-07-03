import { motion } from "framer-motion";

export default function GaugeBar({ min, max, absoluteMin = -200, absoluteMax = 1300 }) {
  const range = absoluteMax - absoluteMin;
  const start = ((min - absoluteMin) / range) * 100;
  const width = ((max - min) / range) * 100;

  const ticks = [-150, 0, 300, 600, 900, 1200];

  return (
    <div className="w-full" data-testid="gauge-bar">
      <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted2 mb-2">
        <span>{min}°C</span>
        <span>Operating Range</span>
        <span>{max}°C</span>
      </div>
      <div className="relative h-2 bg-line">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginLeft: `${start}%` }}
          className="h-full bg-gradient-to-r from-ink to-red"
        />
      </div>
      <div className="relative mt-2 h-3">
        {ticks.map((t) => {
          const p = ((t - absoluteMin) / range) * 100;
          return (
            <div key={t} className="absolute -translate-x-1/2" style={{ left: `${p}%` }}>
              <div className="w-px h-2 bg-line2" />
              <div className="font-mono text-[9px] text-muted2 mt-1">{t}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
