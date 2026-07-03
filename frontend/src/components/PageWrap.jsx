import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function PageWrap({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pt-16"
    >
      {children}
    </motion.main>
  );
}
