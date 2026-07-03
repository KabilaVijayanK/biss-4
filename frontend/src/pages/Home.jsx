import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, ArrowLeft, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Marquee from "@/components/Marquee";
import SectionLabel from "@/components/SectionLabel";
import CountUp from "@/components/CountUp";
import MagneticButton from "@/components/MagneticButton";
import { flatTests } from "@/data/nav";

const stagger = { animate: { transition: { staggerChildren: 0.07 } } };
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const words = ["Precision", "Testing", "Solutions", "for", "Engineering", "Excellence."];

export default function Home() {
  // Industries section state
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Testimonials section state
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const industries = [
    { name: "Automotive", body: "Performance, durability and fatigue evaluation for vehicles and components.", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200" },
    { name: "Aerospace & Defence", body: "Material qualification and structural validation for mission-critical applications.", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200" },
    { name: "Renewable Energy", body: "Testing solutions supporting wind energy through structural and fatigue analysis.", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200" },
    { name: "Medical Devices", body: "Mechanical testing of implants, surgical instruments and healthcare products.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200" },
    { name: "Manufacturing", body: "Quality assurance and material validation for industrial equipment.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200" },
    { name: "Research & Academia", body: "Laboratory support for universities, research institutions and innovation centres.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200" },
  ];

  const testimonials = [
    {
      sector: "Power & Energy Sector",
      quote:
        "BISS Labs delivered precise fatigue analysis on our turbine components ahead of schedule. Their reporting is thorough and their engineers are genuinely easy to work with.",
      name: "Daniel Smith",
      role: "Senior Engineer",
      avatar: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=600&h=600&fit=crop",
    },
    {
      sector: "Aerospace & Defence",
      quote:
        "The structural validation work BISS Labs carried out on our composite panels gave us full confidence ahead of certification. Communication throughout was excellent.",
      name: "Priya Nair",
      role: "Project Manager",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop",
    },
    {
      sector: "Automotive",
      quote:
        "We've relied on BISS Labs for durability testing across three vehicle programs now. Consistent turnaround times and results we can defend to regulators.",
      name: "Marcus Webb",
      role: "Test Engineering Lead",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
    },
    {
      sector: "Renewable Energy",
      quote:
        "Their fatigue analysis on our wind turbine blade prototypes was rigorous and well documented, and it helped us catch a design issue early.",
      name: "Elena Fischer",
      role: "Structural Analyst",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
    },
  ];

  const current = testimonials[index];

  const handlePrev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByAmount = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 420; // +gap-6
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-24 pb-16" data-testid="hero-section">
        <div className="absolute inset-0 blueprint-bg opacity-70" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-paper to-transparent" />

        {/* Ticker */}
        <div className="absolute top-16 inset-x-0 py-3 border-y border-line bg-paper/60 backdrop-blur-sm">
          <Marquee items={[
            "NABL Accredited",
            "ASTM / ISO Compliant",
            "50+ Advanced Testing Systems",
            "24/7 Lab Operations",
            "1N to 2MN Testing Capacity",
            "20,000+ Test Coupons / Year",
            "ITW Test & Measurement Network",
          ]} />
        </div>

        <div className="relative max-w-[1600px] w-full mx-auto px-6 md:px-14 grid grid-cols-12 gap-6 items-center">
         

          <div className="col-span-12 text-center py-12">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="eyebrow">
              / BISS Labs · Bengaluru · India
            </motion.div>
            <h1 className="font-display font-semibold mt-6 leading-[0.9] tracking-tightest text-[clamp(2.75rem,7vw,7rem)]" data-testid="hero-headline">
              <motion.span variants={stagger} initial="initial" animate="animate" className="inline-block">
                {words.map((w, i) => (
                  <motion.span key={i} variants={fadeUp} className="inline-block mr-[0.25em]">
                    {w === "Excellence." ? <span className="text-red">{w}</span> : w}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-muted leading-relaxed"
            >
              Delivering reliable material testing, mechanical testing & product validation services across automotive, aerospace, defence, energy & manufacturing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link to="/contact" data-testid="hero-cta-quote">
                <MagneticButton className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-red transition-colors">
                  Request a Quote <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </MagneticButton>
              </Link>
              <Link to="/contact" data-testid="hero-cta-experts">
                <MagneticButton className="inline-flex items-center gap-3 border border-ink px-6 py-4 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors">
                  Contact Our Experts <ArrowRight size={16} />
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-24 md:py-32" data-testid="home-about">
        <SectionLabel index={1} label="About BISS" />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[0.95] tracking-tighter">
              Your trusted partner in <span className="text-red">engineering testing</span> solutions.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:pt-2">
            <p className="text-muted leading-relaxed">
              In today's competitive industrial landscape, product quality is built on precision, performance, and compliance. BISS Labs helps organizations achieve these goals by delivering accurate testing solutions that support design validation, quality assurance, research, and certification. Our multidisciplinary team works closely with manufacturers, OEMs, research organizations, and engineering institutions to evaluate material behaviour, structural integrity, and component performance under real-world conditions.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-line">
              {[
                { n: "50+", l: "Testing Systems" },
                { n: "15+", l: "Senior Engineers" },
                { n: "24/7", l: "Lab Operations" },
                { n: "1N–2MN", l: "Load Range" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl">{s.n}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — BENTO */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-16" data-testid="home-why">
        <SectionLabel index={2} label="Why Choose BISS" />
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter max-w-3xl mb-10">
          Delivering confidence through precision engineering.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-line border border-line">
          {[
            { title: "Advanced Testing Technology", body: "Modern systems evaluating a broad spectrum of engineering materials and components with exceptional accuracy.", span: "md:col-span-3 md:row-span-2", tall: true, image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1200" },
            { title: "Technical Expertise", body: "Experienced engineers deliver customised solutions for product development and validation.", span: "md:col-span-3" },
            { title: "International Standards", body: "ASTM, ISO, BIS, EN and customer-defined specifications — consistent, reliable results.", span: "md:col-span-2" },
            { title: "End-to-End Support", body: "From material selection & prototyping to certification & lifecycle validation.", span: "md:col-span-1" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-paper p-8 md:p-10 flex flex-col justify-between group hover:bg-paper2 transition-colors ${c.span}`}
              data-testid={`why-card-${i}`}
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-red">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-3 tracking-tight">{c.title}</h3>
                <p className="text-muted text-sm mt-3 leading-relaxed max-w-md">{c.body}</p>
              </div>
              {c.tall && c.image && (
                <div className="mt-8 relative aspect-[16/9] overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
              )}
              <div className="mt-6 h-px bg-ink w-8 group-hover:w-full group-hover:bg-red transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES — horizontal scroll strip */}
       <section className="py-24" data-testid="home-industries">
      <div className="max-w-[1600px] mx-auto px-6 md:px-14">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel index={3} label="Industries We Serve" />
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter max-w-3xl">
              Supporting innovation across diverse industries.
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scrollByAmount(-1)}
              disabled={!canScrollLeft}
              aria-label="Scroll industries left"
              data-testid="industries-arrow-left"
              className="w-11 h-11 grid place-items-center border border-line text-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollByAmount(1)}
              disabled={!canScrollRight}
              aria-label="Scroll industries right"
              data-testid="industries-arrow-right"
              className="w-11 h-11 grid place-items-center border border-line text-ink hover:bg-ink hover:text-paper disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="overflow-x-auto no-scrollbar snap-x snap-mandatory">
        <div className="flex gap-6 px-6 md:px-14 pb-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              data-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="snap-start shrink-0 w-[85vw] md:w-[420px] bg-paper border border-line group hover:border-ink transition-colors"
              data-testid={`industry-card-${i}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-red">/ {String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-2xl mt-2 tracking-tight">{ind.name}</h3>
                <p className="text-muted text-sm mt-2 leading-relaxed">{ind.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  

      {/* APPLICATIONS — editorial index list */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-24" data-testid="home-applications">
        <SectionLabel index={4} label="Applications" />
        <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter max-w-3xl mb-10">
          Testing solutions for advanced materials & components.
        </h2>
        <ul className="border-t border-ink">
          {[
            { t: "Metals", d: "Mechanical property evaluation — tensile, compression, fatigue, fracture toughness, creep." },
            { t: "Composite Materials", d: "GFRP, CFRP, sandwich structures, bonded assemblies and advanced composite systems." },
            { t: "Structural Components", d: "Chassis, suspension systems, EV components and industrial structures." },
            { t: "Medical Products", d: "Implants, bone screws, sutures and specialised medical devices." },
            { t: "High-Performance Materials", d: "Performance testing under extreme mechanical and environmental conditions." },
          ].map((row, i) => (
            <motion.li
              key={row.t}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group border-b border-line py-6 md:py-8 grid grid-cols-12 gap-4 items-center hover:bg-paper2 px-2 transition-colors cursor-default"
              data-testid={`app-row-${i}`}
            >
              <div className="col-span-1 font-mono text-xs text-muted2">/{String(i + 1).padStart(2, "0")}</div>
              <div className="col-span-11 md:col-span-3 font-display text-2xl md:text-3xl tracking-tight">{row.t}</div>
              <div className="col-span-12 md:col-span-7 text-muted text-sm md:text-base">{row.d}</div>
              <div className="col-span-1 justify-self-end"><ArrowUpRight size={18} className="text-muted2 group-hover:text-red group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" /></div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* IMPACT — full-bleed dark stats */}
      <section className="relative bg-ink text-paper overflow-hidden" data-testid="home-impact">
        <div className="absolute inset-0 blueprint-bg-dark opacity-40" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14 py-24 md:py-32">
          <SectionLabel index={5} label="Our Impact" className="[&_span:nth-child(2)]:text-paper" />
          <h2 className="font-display font-semibold text-4xl md:text-6xl tracking-tighter max-w-3xl mb-14">
            The <span className="text-red">numbers</span> behind our precision.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/10">
            {[
              { n: 50, s: "+", l: "Advanced Testing Systems", span: "col-span-2 md:col-span-3" },
              { n: 20000, s: "+", l: "Test Coupons / Year", span: "col-span-2 md:col-span-3" },
              { n: 50000, s: "+", l: "Annual Testing Hours", span: "col-span-2 md:col-span-2" },
              { v: "1N–2MN", l: "Testing Capacity", span: "col-span-2 md:col-span-2" },
              { v: "24/7", l: "Lab Operations", span: "col-span-1 md:col-span-1" },
              { n: 15, s: "+", l: "Senior Engineers", span: "col-span-1 md:col-span-1" },
            ].map((stat, i) => (
              <div key={i} className={`bg-ink p-8 ${stat.span}`} data-testid={`impact-stat-${i}`}>
                <div className="font-display font-semibold text-4xl md:text-6xl leading-none tracking-tighter">
                  {stat.v ? <span className="text-red">{stat.v}</span> : <><CountUp to={stat.n} /><span className="text-red">{stat.s}</span></>}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-4">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-24" data-testid="home-certs">
        <SectionLabel index={6} label="Certifications" />
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter">Quality that inspires confidence.</h2>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="text-muted leading-relaxed">
              BISS Labs operates under internationally recognized certification systems that reinforce accuracy, consistency and technical competence — enabling customers to confidently meet regulatory, customer and product qualification standards.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 border-t border-l border-line">
          {["NABL Accredited", "DGAQA Certified", "BIS Approved", "NADCAP Materials", "International Standards"].map((c) => (
            <div key={c} className="border-r border-b border-line p-8 flex items-center justify-center text-center min-h-[140px] hover:bg-paper2 transition-colors group">
              <div>
                <div className="font-display text-xl md:text-2xl tracking-tight group-hover:text-red transition-colors">{c}</div>
                <div className="mt-2 h-px w-8 bg-ink mx-auto group-hover:w-16 group-hover:bg-red transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER HIGHLIGHTS */}
      <section className="py-24" data-testid="home-testimonials">
      <div className="max-w-[1600px] mx-auto px-6 md:px-14">
        <div className="border border-line grid md:grid-cols-2 bg-paper overflow-hidden">
          {/* Left — content */}
          <div className="p-10 md:p-14 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-red mb-4">
                Public Testimonial
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tighter mb-8 max-w-md">
                Public Feedback About BISS·Labs
              </h2>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: direction * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  data-testid={`testimonial-panel-${index}`}
                >
                  <h3 className="font-display font-semibold text-lg mb-4">{current.sector}</h3>
                  <p className="text-muted text-[15px] leading-relaxed max-w-md">{current.quote}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-12 pt-6 border-t border-line">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-display font-semibold text-base tracking-tight">{current.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-red mt-1">
                    {current.role}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  data-testid="testimonial-prev"
                  className="w-10 h-10 rounded-full border border-line text-ink grid place-items-center hover:border-ink hover:bg-ink hover:text-paper transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  data-testid="testimonial-next"
                  className="w-10 h-10 rounded-full bg-red text-paper grid place-items-center hover:bg-ink transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right — avatar */}
          <div className="relative bg-paper2 flex items-center justify-center p-10 md:p-14 min-h-[320px] md:min-h-0 border-t md:border-t-0 md:border-l border-line">
            <span className="absolute top-8 left-8 md:left-12 font-display text-6xl md:text-7xl text-red leading-none select-none">
              "
            </span>
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-4 ring-paper shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={current.avatar}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                  data-testid={`testimonial-avatar-${index}`}
                />
              </AnimatePresence>
            </div>

            {/* dots */}
            <div className="absolute bottom-6 flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-testid={`testimonial-dot-${i}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-red" : "w-1.5 bg-ink/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* CTA BAND */}
      <section className="relative bg-ink text-paper overflow-hidden" data-testid="home-cta">
        <div className="absolute inset-0 blueprint-bg-dark opacity-40" />
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600)" }}
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14 py-28 md:py-40 text-center">
          <div className="eyebrow text-red">/ Call To Action</div>
          <h2 className="font-display font-semibold text-4xl md:text-7xl mt-6 tracking-tighter leading-[0.95]">
            Let's validate your <br /> next <span className="text-red">innovation.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 mt-6 leading-relaxed">
            Whether you're developing a new product, improving an existing design, or meeting regulatory requirements, BISS Labs provides the technical expertise and advanced testing capabilities to help you move forward with confidence.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" data-testid="home-cta-quote">
              <MagneticButton className="group inline-flex items-center gap-3 bg-red text-paper px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-red-700 transition-colors">
                Request a Quote <ArrowUpRight size={16} />
              </MagneticButton>
            </Link>
            <Link to="/contact" data-testid="home-cta-speak">
              <MagneticButton className="inline-flex items-center gap-3 border border-white/40 text-paper px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-paper hover:text-ink hover:border-paper transition-colors">
                Speak with a Specialist
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
