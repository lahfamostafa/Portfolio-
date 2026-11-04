"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants/data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">Parcours</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Expérience
        </h2>
      </motion.div>

      <div className="relative pl-8">
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-linear-to-b from-[#2563EB] via-[#7C3AED] to-transparent" />

        <div className="space-y-12">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={item.role + item.year}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative"
            >
              <span className="glow-pulse absolute -left-[34px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#050816] bg-linear-to-br from-[#2563EB] to-[#06B6D4]" />

              <div className="glass gradient-border rounded-2xl p-6">
                <p className="font-mono text-xs text-[#06B6D4]">{item.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-0.5 text-sm text-[#7C3AED]">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
