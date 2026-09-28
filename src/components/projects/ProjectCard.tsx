import Image from "next/image";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  preview?: { src: string; alt: string };
}

export function ProjectCard({ project, preview }: ProjectCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-bg-surface transition-colors hover:border-ember/30">
      {preview ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-bg-elevated">
          <Image src={preview.src} alt={preview.alt} fill sizes="(min-width: 1024px) 368px, (min-width: 768px) 45vw, 90vw" className="object-cover object-top" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-bold">{project.title}</h3>
          {project.inProgress ? <span className="text-xs text-text-muted">In progress</span> : null}
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted sm:text-base">{project.description}</p>
        {project.collab ? (
          <p className="mt-3 text-sm leading-relaxed text-text-muted">With <a href={`https://github.com/${project.collab.owner}`} target="_blank" rel="noopener noreferrer" className="text-link text-ember">{project.collab.ownerName}<span className="sr-only"> on GitHub (opens in new tab)</span></a>. My role: {project.collab.role}.</p>
        ) : null}
        <p className="mt-5 font-mono text-[11px] leading-relaxed text-text-muted">{[...new Set([project.language, ...project.technologies].filter(Boolean))].slice(0, 4).join(" · ")}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4">
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-link inline-flex min-h-11 items-center text-sm font-semibold text-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember">Try the demo <span aria-hidden="true" className="ml-2">↗</span><span className="sr-only">: {project.title} (opens in new tab)</span></a>
          ) : null}
          {project.htmlUrl ? (
            <a href={project.htmlUrl} target="_blank" rel="noopener noreferrer" className="text-link inline-flex min-h-11 items-center text-sm text-text-muted hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember">Source code <span aria-hidden="true" className="ml-2">↗</span><span className="sr-only">: {project.title} on GitHub (opens in new tab)</span></a>
          ) : null}
          {!project.htmlUrl && !project.demoUrl ? <span className="text-xs text-text-muted">{project.private ? "Private project" : "Demo coming soon"}</span> : null}
        </div>
      </div>
    </article>
  );
}
