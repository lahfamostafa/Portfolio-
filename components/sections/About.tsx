"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import TiltCard from "@/components/ui/TiltCard";

const STATS = [
  { label: "Années d'expérience", value: 6 },
  { label: "Projets livrés", value: 48 },
  { label: "Clients satisfaits", value: 30 },
  { label: "Tasses de café", value: 1200 },
];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration: 1.6, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function About() {
  return (
    <section id="about" className="section-pad relative mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">À propos</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Qui je suis
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <TiltCard className="group h-full p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-[#94A3B8]">
              Développeur Full Stack passionné, je construis des produits
              numériques qui allient performance technique et finesse
              visuelle. Mon approche combine une architecture backend solide
              (Laravel, Node.js) avec des interfaces React modernes, animées
              et accessibles.
            </p>
            <p className="mt-4 leading-relaxed text-[#94A3B8]">
              Curieux et rigoureux, j&apos;aime transformer des idées
              complexes en expériences simples, fluides et mémorables — en
              gardant toujours un œil sur les détails qui font la différence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-white">
                    <Counter value={stat.value} />+
                  </div>
                  <p className="mt-1 text-xs text-[#94A3B8]">{stat.label}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <TiltCard className="flex h-full flex-col justify-between p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                Disponibilité
              </h3>
              <p className="mt-2 text-sm text-[#94A3B8]">
                Ouvert aux missions freelance et collaborations à distance.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06B6D4] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#06B6D4]" />
              </span>
              <span className="text-sm text-white">Disponible pour de nouveaux projets</span>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
