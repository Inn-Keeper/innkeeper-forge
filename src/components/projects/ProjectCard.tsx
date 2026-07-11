"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { getLanguageColor } from "@/lib/languages";
import { usePrefersReducedMotion } from "@/lib/motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      layout={!reducedMotion}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group"
    >
      <div className="forge-glow flex h-full flex-col rounded-2xl border border-white/10 bg-bg-surface p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-ember/40">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold text-text-primary">
            {project.name}
          </h3>
          <div className="flex flex-wrap justify-end gap-2">
            {project.private ? <Badge color="#9C9288">Private</Badge> : null}
            {project.featured ? (
              <Badge color="#F59E0B">Featured</Badge>
            ) : null}
          </div>
        </div>

        <p className="mt-3 flex-1 text-base leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.language ? (
            <Badge color={getLanguageColor(project.language)}>
              {project.language}
            </Badge>
          ) : null}
          <span className="font-mono text-xs text-text-muted">
            ★ {project.stars} · {project.forks} forks
          </span>
          <span className="font-mono text-xs text-text-muted">
            Updated {formatDate(project.updatedAt)}
          </span>
        </div>

        {project.topics.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded-md bg-bg-elevated px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-text-muted"
              >
                {topic}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm font-semibold text-ember transition hover:text-flame focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            View on GitHub
            <span className="sr-only"> — {project.name}</span> →
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-sm font-semibold text-text-muted transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              Live demo
              <span className="sr-only"> — {project.name}</span> →
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
