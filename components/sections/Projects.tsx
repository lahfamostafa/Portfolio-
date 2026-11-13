"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/constants/data";
import TiltCard from "@/components/ui/TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">Projets</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Travaux récents
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.08 }}
          >
            <TiltCard intensity={5} className="group h-full overflow-hidden">
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br from-[#0F172A] to-[#050816]">
                {project.image ? (
                  <Image
                    src={`/images/${project.image}`}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-linear-to-br from-[#2563EB]/20 via-transparent to-[#7C3AED]/20 transition-transform duration-500 group-hover:scale-110" />
                    <span className="font-display text-3xl text-white/10 transition-transform duration-500 group-hover:scale-105">
                      {project.title}
                    </span>
                  </>
                )}
              </div>

              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] text-[#94A3B8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    data-cursor-text="Code"
                    className="flex items-center gap-1.5 text-sm text-[#94A3B8] transition-colors hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    data-cursor-text="Demo"
                    className="flex items-center gap-1.5 text-sm text-[#94A3B8] transition-colors hover:text-white"
                  >
                    <ExternalLink size={16} /> Démo
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
