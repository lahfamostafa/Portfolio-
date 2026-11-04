"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/constants/data";

const ICONS = { GitHub: Github, LinkedIn: Linkedin, Twitter: Twitter };

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 pb-10 pt-20">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-40 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass gradient-border relative flex flex-col items-center gap-8 rounded-3xl px-8 py-14 text-center"
      >
        <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Construisons quelque chose de{" "}
          <span className="gradient-text">remarquable</span>.
        </h3>

        <a
          href="#contact"
          data-cursor
          data-cursor-text="Écrire"
          className="rounded-full bg-linear-to-r from-[#2563EB] to-[#7C3AED] px-8 py-3.5 text-sm font-medium text-white glow-shadow"
        >
          Démarrer une conversation
        </a>
      </motion.div>

      <div className="mt-14 flex flex-col items-center gap-8 border-t border-white/5 pt-10 sm:flex-row sm:justify-between">
        <a href="#hero" className="font-display text-lg font-semibold text-white">
          ML<span className="text-[#2563EB]">.</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-[#94A3B8] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => {
            const Icon = ICONS[social.label as keyof typeof ICONS];
            return (
              <a
                key={social.label}
                href={social.href}
                data-cursor
                className="text-[#94A3B8] hover:text-white"
                aria-label={social.label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-[#94A3B8] sm:flex-row">
        <p>© {new Date().getFullYear()} Mostafa Lahfa. Tous droits réservés.</p>
        <a href="#hero" data-cursor className="flex items-center gap-1.5 hover:text-white">
          Retour en haut <ArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
}
