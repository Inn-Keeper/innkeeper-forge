"use client";

import { useMemo, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { highlightedTech } from "@/lib/languages";
import type { Project } from "@/types/project";
import { LanguageFilter } from "./LanguageFilter";
import { ProjectCard } from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

const previews: Record<string, { src: string; alt: string }> = {
  stretchy: { src: "/projects/stretchy.png", alt: "Stretchy editor splitting a cat panorama into four aligned carousel tiles" },
  "grip-apps": { src: "/projects/grip-prep.png", alt: "Grip Prep screen showing a practice map of technologies, study cards and readiness stats" },
  lambari: { src: "/projects/lambari.png", alt: "Lambari dashboard showing simulated transaction throughput and a fraud review queue" },
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const catalogueRef = useRef<HTMLDetailsElement>(null);
  const selected = projects.filter((project) => project.featured && previews[project.slug]).slice(0, 3);
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);

  const languages = useMemo(() => {
    const projectLanguages = [
      ...new Set(projects.map((project) => project.language).filter(Boolean)),
    ] as string[];
    const hasHighlightedTech = projects.some((project) =>
      project.technologies.includes(highlightedTech.name),
    );
    return hasHighlightedTech
      ? [highlightedTech.name, ...projectLanguages]
      : projectLanguages;
  }, [projects]);

  const filtered = useMemo(() => {
    if (!activeLanguage) return projects;
    return projects.filter(
      (project) =>
        project.language === activeLanguage ||
        project.technologies.includes(activeLanguage),
    );
  }, [activeLanguage, projects]);

  const filterAnnouncement =
    filtered.length === 0
      ? "No projects match this filter."
      : `${filtered.length} project${filtered.length === 1 ? "" : "s"} shown${
          activeLanguage ? ` for ${activeLanguage}` : ""
        }.`;

  return (
    <section id="projects" className="px-6 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>From the workshop</SectionLabel>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-xl text-text-muted">A few things I’ve built. Open a demo and take a look around.</p>
          </div>
          <a href="#catalogue" onClick={() => { if (catalogueRef.current) catalogueRef.current.open = true; }} className="text-link inline-flex min-h-11 items-center text-sm text-ember">Browse all {projects.length} projects ↓</a>
        </div>
        {selected.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {selected.map((project) => <ProjectCard key={project.slug} project={project} preview={previews[project.slug]} />)}
          </div>
        ) : <p className="mt-8 text-text-muted">Explore the full project catalogue below.</p>}

        <details ref={catalogueRef} id="catalogue" className="group/catalogue mt-10 rounded-2xl border border-white/10 bg-bg-surface/40 open:bg-transparent">
          <summary className="cursor-pointer rounded-2xl px-6 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember">
            <span className="ml-2 font-display text-lg font-semibold">All projects & experiments</span>
            <span className="ml-3 font-mono text-xs text-text-muted">{projects.length} projects</span>
          </summary>
          <div className="border-t border-white/10 px-4 py-6 sm:px-6">
            <p className="mb-5 text-sm text-text-muted">The full workshop: products, supporting services, and things I’m learning.</p>
            <LanguageFilter languages={languages} active={activeLanguage} onChange={setActiveLanguage} />
            <p aria-live="polite" aria-atomic="true" className="mt-5 text-sm text-text-muted">{filterAnnouncement}</p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              {filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
