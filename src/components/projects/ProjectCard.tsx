"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { getLanguageColor, highlightedTech } from "@/lib/languages";
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
            {project.collab ? <Badge color="#A78BFA">Collab</Badge> : null}
            {project.inProgress ? (
              <Badge color="#56B6C2">In progress</Badge>
            ) : null}
            {project.private ? <Badge color="#9C9288">Private</Badge> : null}
            {project.featured ? (
              <Badge color="#F59E0B">Featured</Badge>
            ) : null}
          </div>
        </div>

        <p className="mt-3 flex-1 text-base leading-relaxed text-text-muted">
          {project.description}
        </p>

        {project.collab ? (
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            <span className="font-semibold text-text-primary">
              With{" "}
              <a
                href={`https://github.com/${project.collab.owner}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-ember hover:text-flame focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                {project.collab.owner}
                <span className="sr-only"> on GitHub (opens in new tab)</span>
              </a>
              .
            </span>{" "}
            My role: {project.collab.role}.
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.language ? (
            <Badge color={getLanguageColor(project.language)}>
              {project.language}
            </Badge>
          ) : null}
          {project.technologies.slice(0, 5).map((technology) => {
            const highlighted = technology === highlightedTech.name;
            return (
              <Badge
                key={technology}
                color={highlighted ? highlightedTech.color : "#B8AEA4"}
                highlight={highlighted}
              >
                {technology}
              </Badge>
            );
          })}
          {project.updatedAt ? (
            <span className="font-mono text-xs text-text-muted">
              Updated {formatDate(project.updatedAt)}
            </span>
          ) : null}
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

        {project.htmlUrl || project.demoUrl ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.htmlUrl ? (
              <a
                href={project.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-sm font-semibold text-ember transition hover:text-flame focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                View on GitHub
                <span className="sr-only">: {project.name}</span> →
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : null}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-sm font-semibold text-text-muted transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                Live demo
                <span className="sr-only">: {project.name}</span> →
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
