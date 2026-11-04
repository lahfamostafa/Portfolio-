"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <motion.div
        className="aurora-blob left-[-10%] top-[-10%] h-[600px] w-[600px] bg-[#2563EB]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-blob right-[-10%] top-[10%] h-[550px] w-[550px] bg-[#7C3AED]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-blob bottom-[-15%] left-[20%] h-[500px] w-[500px] bg-[#06B6D4]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="grid-bg absolute inset-0" />
    </div>
  );
}
