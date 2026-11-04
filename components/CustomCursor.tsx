"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.5 });

  const rafRef = useRef<number>();

  useEffect(() => {
    const touchCapable = window.matchMedia("(hover: none)").matches;
    setIsTouch(touchCapable);
    if (touchCapable) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);

    const handleOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        setIsHovering(true);
        setLabel(interactive.getAttribute("data-cursor-text"));
      }
    };
    const handleOut = (e: Event) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        setIsHovering(false);
        setLabel(null);
      }
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2 w-2 rounded-full bg-white"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full border border-white/40"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 72 : 36,
          height: isHovering ? 72 : 36,
          backgroundColor: isHovering ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-white">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
