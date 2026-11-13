"use client";

import { motion } from "framer-motion";
import {
  SiHtml5, SiCss, SiJavascript, SiPhp, SiLaravel, SiTailwindcss,
  SiBootstrap, SiMysql, SiLinux, SiFigma, SiPostman,
  SiSpringboot, SiC, SiPostgresql, SiUml, SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TECHNOLOGIES } from "@/constants/data";

const TECH_ICONS: Record<string, React.ElementType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  C: SiC,
  PostgreSQL: SiPostgresql,
  UML: SiUml,
  Docker: SiDocker,
  PHP: SiPhp,
  Laravel: SiLaravel,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  MySQL: SiMysql,
  Linux: SiLinux,
  Figma: SiFigma,
  Postman: SiPostman,
};

// Couleur de marque au survol pour chaque techno (fallback: cyan)
const TECH_COLORS: Record<string, string> = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  Java: "#ED8B00",
  "Spring Boot": "#6DB33F",
  C: "#A8B9CC",
  PostgreSQL: "#4169E1",
  UML: "#06B6D4",
  Docker: "#2496ED",
  PHP: "#777BB4",
  Laravel: "#FF2D20",
  "Tailwind CSS": "#06B6D4",
  Bootstrap: "#7952B3",
  MySQL: "#4479A1",
  Linux: "#FCC624",
  Figma: "#F24E1E",
  Postman: "#FF6C37",
};

export default function Technologies() {
  const loop = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="section-pad relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-6xl px-6"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">Stack</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Technologies
        </h2>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#050816] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#050816] to-transparent" />

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((tech, i) => {
            const Icon = TECH_ICONS[tech];
            const color = TECH_COLORS[tech] ?? "#06B6D4";
            return (
              <div
                key={`${tech}-${i}`}
                className="glass group flex min-w-[140px] flex-col items-center justify-center gap-3 rounded-2xl px-6 py-6 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
                style={{ ["--tech-color" as string]: color }}
                title={tech}
              >
                {Icon && (
                  <Icon
                    size={28}
                    className="text-[#94A3B8] transition-colors duration-300 group-hover:[color:var(--tech-color)]"
                  />
                )}
                <span className="font-mono text-sm text-[#94A3B8] transition-colors group-hover:text-white">
                  {tech}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
