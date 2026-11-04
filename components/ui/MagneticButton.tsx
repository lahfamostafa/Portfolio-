"use client";

import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  cursorText?: string;
  variant?: "primary" | "outline";
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  cursorText = "View",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-medium text-sm tracking-wide transition-colors duration-300",
    variant === "primary"
      ? "bg-linear-to-r from-[#2563EB] to-[#7C3AED] text-white glow-shadow"
      : "border border-white/15 text-white hover:border-white/30 glass",
    className
  );

  const Content = (
    <motion.span
      ref={ref as React.RefObject<HTMLAnchorElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={baseClasses}
      data-cursor
      data-cursor-text={cursorText}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block">
        {Content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {Content}
    </button>
  );
}
