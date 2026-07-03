import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/data/nav";

const NavItem = ({ item, active, setOpenMenu, openMenu }) => {
  const hasMega = !!item.groups;
  return (
    <div
      className="relative"
      onMouseEnter={() => hasMega && setOpenMenu(item.label)}
      onMouseLeave={() => hasMega && setOpenMenu(null)}
    >
      <NavLink
        to={item.to}
        data-testid={`nav-${item.label.toLowerCase()}`}
        className={({ isActive }) =>
          `relative flex items-center px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
            isActive || active ? "text-ink" : "text-muted hover:text-ink"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className="flex items-center gap-1.5 leading-none">
              <span className="font-mono text-[10px] text-muted2">
                {String(nav.indexOf(item) + 1).padStart(2, "0")}
              </span>
              {item.label}
            </span>
            {(isActive || active) && (
              <motion.span
                layoutId="nav-underline"
                className="absolute left-3 right-3 -bottom-[1px] h-[2px] bg-red"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </>
        )}
      </NavLink>
    </div>
  );
};

const MegaMenu = ({ item, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
    className="absolute left-0 right-0 top-full bg-paper border-t border-b border-line shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]"
    data-testid={`megamenu-${item.label.toLowerCase()}`}
  >
    <div className="max-w-[1600px] mx-auto px-8 md:px-14 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="md:col-span-1">
        <div className="eyebrow">{String(nav.indexOf(item) + 1).padStart(2, "0")} / {item.label}</div>
        <h3 className="font-display text-3xl mt-3 leading-tight">
          {item.label === "Products" ? "Engineered testing systems for every scale." : "Testing services across mechanical, composite, structural & medical."}
        </h3>
        <Link
          to={item.to}
          onClick={onClose}
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink hover:text-red transition-colors"
          data-testid={`megamenu-${item.label.toLowerCase()}-view-all`}
        >
          View all {item.label.toLowerCase()} <ArrowUpRight size={14} />
        </Link>
      </div>
      {item.groups.map((g) => (
        <div key={g.title}>
          <div className="text-[11px] font-mono uppercase tracking-widest text-muted2 border-b border-line pb-2 mb-3">
            {g.title}
          </div>
          <ul className="space-y-2.5">
            {g.items.map((it) => (
              <li key={it.slug}>
                <Link
                  to={`${item.to}/${it.slug}`}
                  onClick={onClose}
                  className="group flex items-baseline justify-between gap-4 text-sm text-ink hover:text-red transition-colors"
                  data-testid={`megamenu-link-${it.slug}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-ink group-hover:bg-red transition-colors" />
                    {it.name}
                  </span>
                  <span className="font-mono text-[10px] text-muted2 uppercase tracking-widest">{it.tag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-xl border-b border-line" : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-14 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0" data-testid="nav-logo">
          <img
            src="/logo.png"
            alt="BISS Labs"
            className="h-28 w-20 object-contain shrink-0"
          />
          <div className="leading-none">
            <div className="font-display font-semibold text-lg tracking-tight leading-none">
              BISS<span className="text-red">·</span>Labs
            </div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted2 leading-none mt-1">
              Precision Testing
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {nav.map((item) => (
            <NavItem key={item.label} item={item} setOpenMenu={setOpenMenu} openMenu={openMenu} />
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            to="/contact"
            data-testid="nav-request-quote"
            className="group inline-flex items-center gap-2 bg-ink text-paper px-4 py-2.5 text-xs font-mono uppercase tracking-widest hover:bg-red transition-colors"
          >
            Request a Quote
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-ink shrink-0"
          onClick={() => setMobileOpen((v) => !v)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
        className="h-[2px] bg-red"
        data-testid="scroll-progress"
      />

      <AnimatePresence>
        {openMenu && nav.find((n) => n.label === openMenu)?.groups && (
          <div
            onMouseEnter={() => setOpenMenu(openMenu)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <MegaMenu item={nav.find((n) => n.label === openMenu)} onClose={() => setOpenMenu(null)} />
          </div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-paper border-t border-line overflow-hidden"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 space-y-4">
              {nav.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.to}
                    className="block font-display text-2xl tracking-tight"
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                  {item.groups && (
                    <div className="mt-2 pl-4 grid grid-cols-1 gap-1">
                      {item.groups.flatMap((g) => g.items).slice(0, 6).map((it) => (
                        <Link key={it.slug} to={`${item.to}/${it.slug}`} className="text-sm text-muted py-1">
                          {it.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="block bg-ink text-paper text-center py-3 font-mono text-xs uppercase tracking-widest">
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}