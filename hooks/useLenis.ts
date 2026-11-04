"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Initializes Lenis smooth scrolling and syncs it with requestAnimationFrame.
 * Also exposes the instance on window for GSAP ScrollTrigger integration.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // @ts-expect-error - expose for other modules (e.g. GSAP ScrollTrigger)
    window.__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      // @ts-expect-error - cleanup
      window.__lenis = undefined;
    };
  }, []);
}
