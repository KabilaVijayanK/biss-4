import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import products from "@/data/products";
import { nav, flatProducts } from "@/data/nav";

export function ProductsIndex() {
  const groups = nav.find((n) => n.label === "Products").groups;
  return (
    <div>
      <section className="relative pt-32 pb-16 border-b border-line" data-testid="products-hero">
        <div className="absolute inset-0 blueprint-bg opacity-70" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14">
          <SectionLabel index={1} label="Products" />
          <h1 className="font-display font-semibold text-5xl md:text-8xl leading-[0.9] tracking-tightest max-w-5xl">
            Engineered testing systems for every <span className="text-red">scale of validation.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            From high-precision Universal Testing Machines to full-scale multi-axis structural rigs, BISS delivers hardware, controls, and software that meet ASTM, ISO, BIS and customer-defined standards.
          </p>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.title} className="max-w-[1600px] mx-auto px-6 md:px-14 py-20" data-testid={`product-group-${gi}`}>
          <SectionLabel index={gi + 2} label={g.title} />
          <ul className="border-t border-ink">
            {g.items.map((it, i) => {
              const p = products[it.slug];
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
                    to={`/products/${it.slug}`}
                    className="group grid grid-cols-12 gap-4 items-center py-7 hover:bg-paper2 transition-colors relative overflow-hidden px-2"
                    data-testid={`product-row-${it.slug}`}
                  >
                    <div className="col-span-1 font-mono text-xs text-muted2">/{String(i + 1).padStart(2, "0")}</div>
                    <div className="col-span-11 md:col-span-4 font-display text-2xl md:text-3xl tracking-tight group-hover:text-red transition-colors">{it.name}</div>
                    <div className="hidden md:block md:col-span-5 text-muted text-sm truncate">{p?.overview.slice(0, 120)}…</div>
                    <div className="col-span-6 md:col-span-1 font-mono text-[10px] uppercase tracking-widest text-muted2">{it.tag}</div>
                    <div className="col-span-6 md:col-span-1 justify-self-end flex items-center gap-2 text-ink group-hover:text-red">
                      <span className="hidden md:inline font-mono text-[10px] uppercase tracking-widest">Explore</span>
                      <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    {/* Thumbnail slides in on hover */}
                    <div className="pointer-events-none hidden md:block absolute right-32 top-1/2 -translate-y-1/2 w-40 aspect-[4/3] overflow-hidden opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-500">
                      <img src={p?.image} alt={it.name} className="w-full h-full object-cover" />
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

export function ProductDetail() {
  const { slug } = useParams();
  const p = products[slug];
  if (!p) {
    return (
      <div className="max-w-[1600px] mx-auto px-6 md:px-14 pt-32 pb-20" data-testid="product-not-found">
        <h1 className="font-display text-4xl">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-red">← Back to products</Link>
      </div>
    );
  }
  const currentIdx = flatProducts.findIndex((x) => x.slug === slug);
  const next = flatProducts[(currentIdx + 1) % flatProducts.length];

  return (
    <div data-testid={`product-detail-${slug}`}>
      {/* HERO */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg opacity-60" />
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-14">
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted2 mb-6">
            <Link to="/products" className="hover:text-red">Products</Link> <ChevronRight size={12} className="inline mx-1" /> {p.name}
          </div>
          <div className="eyebrow">/ {p.eyebrow}</div>
          <h1 className="font-display font-semibold text-5xl md:text-8xl leading-[0.9] tracking-tightest mt-4 max-w-5xl">{p.name}</h1>
        </div>
      </section>

      {/* IMAGE + OVERVIEW */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 grid grid-cols-12 gap-8 pb-24">
        <div className="col-span-12 md:col-span-7">
          <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <img src={p.image} alt={p.name} className="w-full aspect-[16/10] object-cover" />
          </motion.div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <SectionLabel index={1} label="Overview" />
          <p className="text-muted leading-relaxed">{p.overview}</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:bg-red transition-colors" data-testid="product-cta">
            Request a Quote <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-paper2 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-14 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <SectionLabel index={2} label="Features" />
            <h2 className="font-display text-3xl md:text-4xl tracking-tighter">Built for accuracy & repeatability.</h2>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
            {p.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-paper p-6 flex items-start gap-3"
              >
                <Check size={16} className="text-red mt-1 shrink-0" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted2">/ {String(i + 1).padStart(2, "0")}</div>
                  <div className="font-display text-lg mt-1">{f}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPS + INDUSTRIES */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-14 py-20 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <SectionLabel index={3} label="Applications" />
          <ul className="border-t border-ink">
            {p.applications.map((a, i) => (
              <li key={a} className="border-b border-line py-4 flex justify-between items-baseline">
                <span className="font-display text-xl">{a}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted2">/ {String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6">
          <SectionLabel index={4} label="Industries Served" />
          <div className="flex flex-wrap gap-2">
            {p.industries.map((ind) => (
              <span key={ind} className="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors">
                {ind}
              </span>
            ))}
          </div>
          <div className="mt-10 p-8 bg-ink text-paper">
            <div className="eyebrow text-red">/ Why Choose BISS</div>
            <p className="mt-3 text-white/80 leading-relaxed">
              Advanced servo-electric & servo-hydraulic technology, in-house engineering expertise, ASTM/ISO compliance and end-to-end support from prototype to production.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT PRODUCT */}
      <Link to={`/products/${next.slug}`} className="block bg-paper2 hover:bg-ink hover:text-paper transition-colors py-16 group border-t border-line" data-testid="next-product">
        <div className="max-w-[1600px] mx-auto px-6 md:px-14 flex items-center justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-red">Next Product /</div>
            <div className="font-display text-3xl md:text-5xl tracking-tighter mt-2">{next.name}</div>
          </div>
          <ArrowUpRight size={32} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  );
}
