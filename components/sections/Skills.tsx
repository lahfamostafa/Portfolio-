"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import { SKILL_CATEGORIES } from "@/constants/data";

const ICONS: Record<string, React.ElementType> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  devops: Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">Compétences</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Ce que je maîtrise
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const Icon = ICONS[cat.id] ?? Code2;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard intensity={6} className="h-full p-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="glow-shadow flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-[#2563EB] to-[#7C3AED]">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8]">{cat.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-[#94A3B8]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
