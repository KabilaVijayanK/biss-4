import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, strength = 20, className = "", ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}
