"use client";

import { motion } from "framer-motion";
import {
  Code, Layers, Plug, Palette, Gauge, Search, Wrench, MessageSquare,
} from "lucide-react";
import { SERVICES } from "@/constants/data";
import TiltCard from "@/components/ui/TiltCard";

const ICONS = [Code, Layers, Plug, Palette, Gauge, Search, Wrench, MessageSquare];

export default function Services() {
  return (
    <section id="services" className="section-pad relative mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">Services</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Ce que je propose
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08 }}
            >
              <TiltCard intensity={8} className="h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  <Icon size={18} className="text-[#06B6D4]" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  {service.description}
                </p>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
