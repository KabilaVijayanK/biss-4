import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { nav } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper overflow-hidden" data-testid="site-footer">
      <div className="blueprint-bg-dark absolute inset-0 opacity-40" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-14 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <div className="eyebrow text-red">/ Get In Touch</div>
            <h3 className="font-display text-4xl md:text-6xl mt-3 leading-[0.95] tracking-tighter">
              Let's validate your <br /> next innovation.
            </h3>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-red hover:bg-red-700 text-paper px-6 py-4 font-mono text-xs uppercase tracking-widest transition-colors"
              data-testid="footer-cta"
            >
              Request a Quote <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {nav.filter((n) => n.groups || ["About", "Contact"].includes(n.label)).map((col) => (
              <div key={col.label}>
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 pb-2 mb-3 border-b border-white/10">
                  {col.label}
                </div>
                <ul className="space-y-2">
                  {col.groups
                    ? col.groups.flatMap((g) => g.items).slice(0, 6).map((i) => (
                        <li key={i.slug}>
                          <Link to={`${col.to}/${i.slug}`} className="text-sm text-white/70 hover:text-red transition-colors">
                            {i.name}
                          </Link>
                        </li>
                      ))
                    : <li><Link to={col.to} className="text-sm text-white/70 hover:text-red">{col.label}</Link></li>}
                </ul>
              </div>
            ))}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-white/40 pb-2 mb-3 border-b border-white/10">Reach Us</div>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Peenya Industrial Area</li>
                <li>Bengaluru, Karnataka, India</li>
                <li className="font-mono text-xs">+91 XXXXX XXXXX</li>
                <li className="font-mono text-xs">info@bisslabs.com</li>
              </ul>
              <div className="flex gap-3 mt-4">
                {[Linkedin, Twitter, Youtube, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 border border-white/20 grid place-items-center hover:bg-red hover:border-red transition-colors" aria-label="social">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Giant faded wordmark */}
        <div className="py-16 overflow-hidden">
          <div className="font-display font-semibold text-[16vw] leading-none tracking-tightest text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.14)" }}>
            BISS·LABS
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-white/40">
          <div>© {new Date().getFullYear()} BISS Labs · Precision Testing · Bengaluru, India</div>
          <div className="flex gap-6">
            <span>NABL Accredited</span>
            <span>DGAQA · BIS · NADCAP</span>
            <span>ITW Test & Measurement Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
