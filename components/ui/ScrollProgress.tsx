"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4]"
      style={{ scaleX }}
    />
  );
}
