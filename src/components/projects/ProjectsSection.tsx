"use client";

import { useMemo, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project } from "@/types/project";
import { LanguageFilter } from "./LanguageFilter";
import { ProjectCard } from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);

  const languages = useMemo(
    () =>
      [
        ...new Set(projects.map((project) => project.language).filter(Boolean)),
      ] as string[],
    [projects],
  );

  const filtered = useMemo(() => {
    if (!activeLanguage) return projects;
    return projects.filter((project) => project.language === activeLanguage);
  }, [activeLanguage, projects]);

  const filterAnnouncement =
    filtered.length === 0
      ? "No projects match this filter."
      : `${filtered.length} project${filtered.length === 1 ? "" : "s"} shown${
          activeLanguage ? ` for ${activeLanguage}` : ""
        }.`;

  return (
    <section id="projects" className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Projects</SectionLabel>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
            From the workshop floor
          </h2>
          <LanguageFilter
            languages={languages}
            active={activeLanguage}
            onChange={setActiveLanguage}
          />
        </div>

        <p aria-live="polite" aria-atomic="true" className="sr-only">
          {filterAnnouncement}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-text-muted" aria-hidden="true">
            No projects match this filter.
          </p>
        ) : null}
      </div>
    </section>
  );
}
