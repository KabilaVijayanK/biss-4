import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import GaugeBar from "@/components/GaugeBar";
import testing, { labStatistics } from "@/data/testing";
import { nav, flatTests } from "@/data/nav";

export function TestingIndex() {
  const groups = nav.find((n) => n.label === "Testing").groups;
  return (
    <div>
      <section className="relative pt-32 pb-16 border-b border-line" data-testid="testing-hero">
        <div className="absolute inset-0 blueprint-bg opacity-70" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14">
          <SectionLabel index={1} label="Testing Services" />
          <h1 className="font-display font-semibold text-5xl md:text-8xl leading-[0.9] tracking-tightest max-w-5xl">
            Precision testing across <span className="text-red">mechanical, composite, structural</span> & medical.
          </h1>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            Servo-hydraulic and electromechanical testing solutions performed to ASTM, ISO, EN, BIS and customer-defined standards — from ambient to +1200 °C.
          </p>
        </div>
      </section>

      {/* Lab statistics table */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-16" data-testid="lab-stats">
        <SectionLabel index={2} label="Testing Laboratory Statistics" />
        <div className="border border-line">
          <table className="w-full text-left border-collapse">
            <tbody>
              {labStatistics.map((row, i) => (
                <tr key={row.capability} className={`${i % 2 === 0 ? "bg-paper" : "bg-paper2"}`}>
                  <td className="p-4 md:p-5 font-mono text-[11px] uppercase tracking-widest text-muted w-1/3 border-r border-line">
                    /{String(i + 1).padStart(2, "0")} · {row.capability}
                  </td>
                  <td className="p-4 md:p-5 font-display text-lg md:text-xl tracking-tight">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.title} className="max-w-[1600px] mx-auto px-6 md:px-14 py-16" data-testid={`testing-group-${gi}`}>
          <SectionLabel index={gi + 3} label={g.title} />
          <ul className="border-t border-ink">
            {g.items.map((it, i) => {
              const t = testing[it.slug];
              return (
                <motion.li
                  key={it.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-line"
                >
                  <Link
                    to={`/testing/${it.slug}`}
                    className="group grid grid-cols-12 gap-4 items-center py-7 hover:bg-paper2 transition-colors px-2 relative overflow-hidden"
                    data-testid={`testing-row-${it.slug}`}
                  >
                    <div className="col-span-1 font-mono text-xs text-muted2">/{String(i + 1).padStart(2, "0")}</div>
                    <div className="col-span-11 md:col-span-4 font-display text-2xl md:text-3xl tracking-tight group-hover:text-red transition-colors">{it.name}</div>
                    <div className="hidden md:block md:col-span-5 text-muted text-sm">{t?.tagline}</div>
                    <div className="col-span-6 md:col-span-1 font-mono text-[10px] uppercase tracking-widest text-muted2">{it.tag}</div>
                    <div className="col-span-6 md:col-span-1 justify-self-end flex items-center gap-2 text-ink group-hover:text-red">
                      <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function TestingDetail() {
  const { slug } = useParams();
  const t = testing[slug];
  if (!t) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 md:px-14 pt-32 pb-20" data-testid="testing-not-found">
        <h1 className="font-display text-4xl">Test not found</h1>
        <Link to="/testing" className="mt-4 inline-block text-red">← Back to Testing</Link>
      </div>
    );
  }
  const idx = flatTests.findIndex((x) => x.slug === slug);
  const next = flatTests[(idx + 1) % flatTests.length];

  return (
    <div data-testid={`testing-detail-${slug}`}>
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-60" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted2 mb-6">
            <Link to="/testing" className="hover:text-red">Testing</Link> <ChevronRight size={12} className="inline mx-1" /> {t.name}
          </div>
          <div className="eyebrow">/ {t.tagline}</div>
          <h1 className="font-display font-semibold text-5xl md:text-8xl leading-[0.9] tracking-tightest mt-4 max-w-5xl">{t.name}</h1>
        </div>
      </section>

      <section className="max-w-[1600px] mx-auto px-6 md:px-14 grid grid-cols-12 gap-8 pb-16">
        <div className="col-span-12 md:col-span-7">
          <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <img src={t.image} alt={t.name} className="w-full aspect-[16/10] object-cover" />
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <SectionLabel index={1} label="Overview" />
          <p className="text-muted leading-relaxed">{t.overview}</p>
        </div>
      </section>

      {/* TEMPERATURE GAUGE */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-12">
        <SectionLabel index={2} label="Operating Temperature Range" />
        <div className="border border-line p-8 md:p-12 bg-paper2">
          <GaugeBar min={t.tempMin} max={t.tempMax} />
        </div>
      </section>

      {/* STANDARDS TABLE */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-12">
        <SectionLabel index={3} label="Standards Supported" />
        <div className="border border-line">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line bg-ink text-paper">
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest w-1/3">Standard</th>
                <th className="p-4 font-mono text-[10px] uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody>
              {t.standards.map((s, i) => (
                <tr key={s.code} className={`${i % 2 === 0 ? "bg-paper" : "bg-paper2"} border-b border-line`}>
                  <td className="p-4 font-mono text-sm tracking-tight border-r border-line">{s.code}</td>
                  <td className="p-4 text-muted">{s.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SPECS + APPLICATIONS */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <SectionLabel index={4} label="Specifications & Capabilities" />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
            {t.specs.map((s, i) => (
              <li key={s} className="bg-paper p-4 flex items-start gap-3">
                <span className="font-mono text-[10px] text-red mt-1">/{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-5">
          <SectionLabel index={5} label="Applications" />
          <div className="flex flex-wrap gap-2">
            {t.applications.map((a) => (
              <span key={a} className="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors">{a}</span>
            ))}
          </div>
          <div className="mt-8 p-6 bg-ink text-paper">
            <div className="eyebrow text-red">/ Request Test Plan</div>
            <p className="mt-2 text-sm text-white/70">Speak with our engineering team about your specific coupons, standards and turnaround requirements.</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 border border-white px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest hover:bg-red hover:border-red transition-colors" data-testid="testing-cta">
              Contact Lab <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <Link to={`/testing/${next.slug}`} className="block bg-paper2 hover:bg-ink hover:text-paper transition-colors py-16 group border-t border-line" data-testid="next-testing">
        <div className="max-w-[1600px] mx-auto px-6 md:px-14 flex items-center justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-red">Next Test /</div>
            <div className="font-display text-3xl md:text-5xl tracking-tighter mt-2">{next.name}</div>
          </div>
          <ArrowUpRight size={32} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  );
}
