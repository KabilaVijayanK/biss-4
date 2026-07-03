import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import CountUp from "@/components/CountUp";
import { ArrowUpRight } from "lucide-react";

const values = [
  { t: "Precision", d: "Every test, measurement and engineering solution is performed with accuracy and attention to detail." },
  { t: "Integrity", d: "We believe in transparency, ethical practices and delivering results customers can trust." },
  { t: "Innovation", d: "Continuous investment in technology and technical expertise to solve complex engineering challenges." },
  { t: "Customer Partnership", d: "Working closely with every customer to understand objectives and deliver value-driven solutions." },
  { t: "Excellence", d: "Continuous improvement in everything we do — from laboratory operations to customer service." },
];

const timeline = [
  { y: "Foundations", d: "Established as a specialised engineering testing organisation with a focus on precision." },
  { y: "Capability Growth", d: "Expanded from conventional material testing to advanced servo-hydraulic & structural systems." },
  { y: "Global Alliance", d: "Association with the ITW Test & Measurement network for world-class technology access." },
  { y: "Today", d: "50+ advanced systems · 50,000+ hours · 24/7 operations serving automotive, aerospace, energy, healthcare." },
];

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden" data-testid="about-hero">
        <div className="absolute inset-0 blueprint-bg opacity-70" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14">
          <SectionLabel index={1} label="About BISS Labs" />
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 md:col-span-8">
              <h1 className="font-display font-semibold text-5xl md:text-8xl leading-[0.9] tracking-tightest">
                Engineering confidence through knowledge, innovation & <span className="text-red">precision.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <p className="text-muted leading-relaxed">
                BISS Labs is a specialised engineering organisation dedicated to advancing product reliability through precision testing and technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-20" data-testid="about-overview">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <img src="https://images.unsplash.com/photo-1581093577421-f561a654a353?w=1600" alt="Lab" className="w-full aspect-[4/5] object-cover grayscale" />
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-8">
            <SectionLabel index={2} label="Company Overview" />
            <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[0.95]">
              A technical partner for engineering decisions.
            </h2>
            <p className="text-muted leading-relaxed mt-6">
              With decades of engineering knowledge and access to globally recognised testing technologies, we support organisations in developing safer, stronger and higher-performing products. Our focus extends beyond testing — we work as a technical partner, helping customers make informed engineering decisions through accurate data, scientific analysis and internationally accepted testing methodologies. From product development and research to quality assurance and certification, BISS Labs delivers dependable engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-paper2 py-24" data-testid="about-journey">
        <div className="max-w-[1600px] mx-auto px-6 md:px-14">
          <SectionLabel index={3} label="Our Journey" />
          <h2 className="font-display text-3xl md:text-5xl tracking-tighter max-w-3xl mb-16">
            Building long-term engineering partnerships.
          </h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink/20" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.y}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}
                  data-testid={`timeline-${i}`}
                >
                  <div className={`pl-8 md:pl-0 ${i % 2 === 1 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-red">/ Phase {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display text-2xl md:text-3xl mt-2 tracking-tight">{t.y}</h3>
                    <p className="text-muted mt-3 leading-relaxed">{t.d}</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 bg-red border-2 border-paper2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="grid grid-cols-1 md:grid-cols-2" data-testid="about-vision-mission">
        <div className="bg-paper p-10 md:p-20 border-b md:border-b-0 md:border-r border-line">
          <SectionLabel index={4} label="Vision" />
          <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[0.95] mt-4">
            Shaping the future of engineering validation.
          </h2>
          <p className="text-muted mt-6 leading-relaxed">
            To become one of the most trusted engineering testing organisations by delivering innovative, reliable and internationally recognised testing solutions that contribute to safer products, stronger industries and sustainable technological advancement.
          </p>
        </div>
        <div className="bg-ink text-paper p-10 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-bg-dark opacity-40" />
          <div className="relative">
            <div className="eyebrow text-red">05 / Mission</div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[0.95] mt-4">
              Delivering precision that builds <span className="text-red">confidence.</span>
            </h2>
            <p className="text-white/70 mt-6 leading-relaxed">
              Our mission is to provide customers with dependable engineering support through accurate testing, advanced technologies and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-24" data-testid="about-values">
        <SectionLabel index={6} label="Core Values" />
        <h2 className="font-display text-3xl md:text-5xl tracking-tighter mb-12 max-w-3xl">
          The principles that drive our success.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-line border border-line">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-paper p-8 min-h-[240px] flex flex-col justify-between group hover:bg-ink hover:text-paper transition-colors"
              data-testid={`value-${i}`}
            >
              <div className="font-mono text-[11px] uppercase tracking-widest text-red">/{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="font-display text-2xl tracking-tight">{v.t}</h3>
                <p className="text-sm mt-2 leading-relaxed text-muted group-hover:text-white/60 transition-colors">{v.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="bg-paper2 py-24" data-testid="about-global">
        <div className="max-w-[1600px] mx-auto px-6 md:px-14 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <SectionLabel index={7} label="Global Presence" />
            <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[0.95]">
              Local expertise with global <span className="text-red">engineering support.</span>
            </h2>
            <p className="text-muted mt-6 leading-relaxed">
              BISS Labs combines the responsiveness of a local engineering partner with the strength of a globally connected organisation. Through our association with the ITW Test & Measurement network, we access international engineering expertise, advanced technologies and proven testing methodologies — delivering world-class solutions to customers across India and neighbouring regions.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="grid grid-cols-3 gap-px bg-line border border-line">
              {["Bengaluru", "Pune", "Chennai", "Mumbai", "Delhi NCR", "Hyderabad", "Sri Lanka", "UAE", "Global (ITW)"].map((c, i) => (
                <div key={c} className="bg-paper p-6 text-center hover:bg-ink hover:text-paper transition-colors group">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-red">/ {String(i + 1).padStart(2, "0")}</div>
                  <div className="font-display text-lg mt-2">{c}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="bg-ink text-paper py-24 relative overflow-hidden" data-testid="about-facts">
        <div className="absolute inset-0 blueprint-bg-dark opacity-40" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14">
          <div className="eyebrow text-red">08 / Facts & Figures</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tighter mt-4 mb-14">BISS at a Glance.</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/10">
            {[
              { n: 50, s: "+", l: "Testing Systems", span: "col-span-2" },
              { n: 20000, s: "+", l: "Coupons / Year", span: "col-span-2" },
              { n: 50000, s: "+", l: "Testing Hours", span: "col-span-2" },
              { v: "1N–2MN", l: "Load Range", span: "col-span-2" },
              { v: "24/7", l: "Operations", span: "col-span-2" },
              { n: 15, s: "+", l: "Senior Engineers", span: "col-span-2" },
            ].map((s, i) => (
              <div key={i} className={`bg-ink p-8 ${s.span}`}>
                <div className="font-display font-semibold text-4xl md:text-5xl tracking-tighter">
                  {s.v ? <span className="text-red">{s.v}</span> : <><CountUp to={s.n} /><span className="text-red">{s.s}</span></>}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-3">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-28 text-center" data-testid="about-cta">
        <h2 className="font-display text-3xl md:text-6xl tracking-tighter leading-[0.95]">
          Partner with a laboratory that <span className="text-red">engineers confidence.</span>
        </h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-red transition-colors" data-testid="about-cta-btn">
          Talk to Our Engineering Team <ArrowUpRight size={16} />
        </Link>
      </section>
    </div>
  );
}
