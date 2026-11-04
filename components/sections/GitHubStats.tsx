"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Users, Star, GitFork } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import { GITHUB_USERNAME } from "@/constants/data";

interface GithubUser {
  public_repos: number;
  followers: number;
  avatar_url: string;
  html_url: string;
}

interface GithubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export default function GitHubStats() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [totalStars, setTotalStars] = useState(0);
  const [languages, setLanguages] = useState<string[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("github fetch failed");

        const userData: GithubUser = await userRes.json();
        const repos: GithubRepo[] = await reposRes.json();

        if (cancelled) return;

        setUser(userData);
        setTotalStars(repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0));

        const langs = Array.from(
          new Set(repos.map((r) => r.language).filter(Boolean) as string[])
        ).slice(0, 6);
        setLanguages(langs);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const stats = [
    { icon: Github, label: "Dépôts publics", value: user?.public_repos },
    { icon: Users, label: "Followers", value: user?.followers },
    { icon: Star, label: "Stars cumulées", value: totalStars },
    { icon: GitFork, label: "Langages actifs", value: languages.length || undefined },
  ];

  return (
    <section className="section-pad relative mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">GitHub</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Activité en direct
        </h2>
        {error && (
          <p className="mt-3 text-sm text-[#94A3B8]">
            Statistiques indisponibles pour le moment — réessayez plus tard.
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <TiltCard intensity={6} className="flex flex-col items-center gap-3 p-6 text-center">
              <stat.icon size={20} className="text-[#06B6D4]" />
              <span className="font-display text-2xl font-bold text-white">
                {stat.value ?? "—"}
              </span>
              <span className="text-xs text-[#94A3B8]">{stat.label}</span>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {languages.length > 0 && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {languages.map((lang) => (
            <span
              key={lang}
              className="glass rounded-full px-4 py-1.5 font-mono text-xs text-[#94A3B8]"
            >
              {lang}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
