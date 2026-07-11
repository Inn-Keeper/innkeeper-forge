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

        <div className="mt-10 grid grid-cols-12 gap-5">
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-text-muted">No projects match this filter.</p>
        ) : null}
      </div>
    </section>
  );
}
