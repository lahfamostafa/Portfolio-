"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const ParticlesCanvas = dynamic(() => import("@/components/ui/ParticlesCanvas"), {
  ssr: false,
});

const ROLES = ["Développeur Full Stack", "Laravel & React", "UI/UX Enthusiast"];

function useTypedText(words: string[]) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [display, deleting, wordIndex, words]);

  return display;
}

const TECH_ICONS = ["React", "Next.js", "TS", "Laravel", "Tailwind", "Node"];

export default function Hero() {
  const typed = useTypedText(ROLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {/* <ParticlesCanvas /> */}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        {/* Left column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-sm tracking-widest text-[#06B6D4]"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Mostafa
            <br />
            <span className="gradient-text">Lahfa</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 h-8 font-mono text-lg text-[#94A3B8]"
          >
            {typed}
            <span className="animate-pulse text-[#2563EB]">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-md text-[#94A3B8]"
          >
            Je conçois et développe des expériences web rapides, élégantes et
            robustes — du backend Laravel aux interfaces React les plus
            soignées.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects" cursorText="Voir">
              Voir mes projets
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline" cursorText="Écrire">
              Me contacter
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center gap-5 text-[#94A3B8]"
          >
            <a href="https://github.com/mostafalahfa" data-cursor className="hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/mostafalahfa" data-cursor className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex h-[420px] w-[340px] items-center justify-center"
        >
          <div className="absolute h-full w-full rounded-full bg-linear-to-br from-[#2563EB]/30 via-[#7C3AED]/20 to-[#06B6D4]/20 blur-3xl" />

          <motion.div
            className="absolute h-[300px] w-[300px] rounded-full border border-[#2563EB]/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-[#7C3AED]/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />

          <div className="glass gradient-border glow-shadow relative h-[280px] w-[240px] overflow-hidden rounded-3xl">
            <Image
              src="/images/photo1.JPG"
              alt="Portrait de Mostafa Lahfa"
              fill
              priority
              sizes="(max-width: 768px) 240px, 240px"
              className="object-cover"
            />
          </div>

          {TECH_ICONS.map((tech, i) => (
            <motion.div
              key={tech}
              className="glass floating absolute rounded-xl px-3 py-1.5 font-mono text-[11px] text-[#06B6D4]"
              style={{
                top: `${15 + (i % 3) * 30}%`,
                left: i % 2 === 0 ? "-10%" : "auto",
                right: i % 2 !== 0 ? "-10%" : "auto",
                animationDelay: `${i * 0.4}s`,
              }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#94A3B8]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
