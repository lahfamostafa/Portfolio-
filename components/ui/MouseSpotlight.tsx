"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function MouseSpotlight() {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { damping: 40, stiffness: 120 });
  const springY = useSpring(y, { damping: 40, stiffness: 120 });

  useEffect(() => {
    x.set(mouseX);
    y.set(mouseY);
  }, [mouseX, mouseY, x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[500px] w-[500px] rounded-full opacity-[0.06]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(37,99,235,1) 0%, rgba(124,58,237,0.5) 40%, transparent 70%)",
      }}
    />
  );
}
