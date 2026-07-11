"use client";

import { motion } from "motion/react";
import { portfolioConfig } from "@/data/repos.config";
import { Button } from "@/components/ui/Button";
import { EmberField } from "./EmberField";

export function Hero() {
  const githubUrl = `https://github.com/${portfolioConfig.githubUsername}`;

  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-28 sm:pb-40 sm:pt-32">
      <EmberField />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ember"
        >
          Portfolio · Workshop
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display mt-4 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="gradient-text">Innkeeper Forge</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-text-muted sm:text-xl"
        >
          Projects and experiments from the workshop — forged in code, synced
          from GitHub.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="#projects">View projects</Button>
          <Button href={githubUrl} variant="ghost" external>
            GitHub profile
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
