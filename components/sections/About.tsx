"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TiltCard from "@/components/ui/TiltCard";
import { GITHUB_USERNAME } from "@/constants/data";

interface GithubProfile {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}

const STAT_LABELS = [
  { key: "public_repos", label: "DÃ©pÃ´ts publics" },
  { key: "followers", label: "Followers" },
  { key: "following", label: "Abonnements" },
  { key: "public_gists", label: "Gists publics" },
] as const;

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
  const [githubProfile, setGithubProfile] = useState<GithubProfile | null>(null);
  const [githubError, setGithubError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGithubProfile() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("GitHub profile request failed");

        const profile: GithubProfile = await response.json();
        setGithubProfile(profile);
      } catch {
        if (!controller.signal.aborted) setGithubError(true);
      }
    }

    loadGithubProfile();
    return () => controller.abort();
  }, []);

  return (
    <section id="about" className="section-pad relative mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">Ã€ propos</p>
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
              DÃ©veloppeur Full Stack passionnÃ©, je construis des produits
              numÃ©riques avec PHP et Laravel, en m&apos;appuyant sur mes
              compÃ©tences en JavaScript, Java, bases de donnÃ©es et outils de
              conception.
            </p>
            <p className="mt-4 leading-relaxed text-[#94A3B8]">
              Curieux et rigoureux, j&apos;aime transformer des idÃ©es
              complexes en expÃ©riences simples, fluides et mÃ©morables â€” en
              gardant toujours un Å“il sur les dÃ©tails qui font la diffÃ©rence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STAT_LABELS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-white">
                    {githubProfile ? (
                      <Counter value={githubProfile[stat.key]} />
                    ) : (
                      "â€”"
                    )}
                  </div>
                  <p className="mt-1 text-xs text-[#94A3B8]">{stat.label}</p>
                </div>
              ))}
            </div>
            {githubError && (
              <p className="mt-4 text-xs text-[#94A3B8]" role="status">
                Statistiques GitHub indisponibles pour le moment.
              </p>
            )}
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
                DisponibilitÃ©
              </h3>
              <p className="mt-2 text-sm text-[#94A3B8]">
                Ouvert aux missions freelance et collaborations Ã  distance.
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

