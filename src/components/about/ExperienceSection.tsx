import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

// Selected highlights from the October 2026 Software Engineer CV.
const roles = [
  {
    company: "Nooga Solutions",
    role: "Software Engineer",
    period: "Aug 2025 — Present",
    domain: "Enterprise tooling",
    description: "React and TypeScript extensions for Azure DevOps, distributed through the Azure Marketplace.",
    contribution: "Improved dashboard request performance with data chunking and concurrency controls. Implemented role-based access and own the Playwright end-to-end suite.",
  },
  {
    company: "LeoVegas Group",
    role: "JavaScript Engineer",
    period: "Apr 2021 — Apr 2025",
    domain: "Regulated consumer products",
    description: "Customer-facing experiences on a shared, multi-brand platform across web and mobile.",
    contribution: "Delivered React, TypeScript, and GraphQL features, contributed to brand launches, and collaborated with native engineers on Ionic and early React Native apps.",
  },
  {
    company: "Philips Informatics",
    role: "Systems Architect",
    period: "Apr 2017 — Apr 2018",
    domain: "Healthcare platforms",
    description: "Shared framework components for Philips Tasy EMR, as part of the core architecture team.",
    contribution: "Built AngularJS components used across product modules, patient-test visualizations, and supporting Java services for clinical workflows.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-6 px-6 pt-14 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Experience</SectionLabel>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Where I’ve worked</h2>
            <p className="mt-3 max-w-2xl text-text-muted">Selected roles, from shared platforms to customer-facing products.</p>
          </div>
          <Link href="/experience" className="text-link inline-flex min-h-11 items-center text-sm text-ember">Explore my experience <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {roles.map((role) => (
            <article key={role.company} className="border-t border-ember/30 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-ember">{role.domain}</p>
              <h3 className="font-display mt-3 text-xl font-bold">{role.company}</h3>
              <p className="mt-1 text-sm text-text-primary">{role.role}</p>
              <p className="mt-2 font-mono text-xs text-text-muted">{role.period}</p>
              <p className="mt-5 text-sm leading-relaxed text-text-muted">{role.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-primary">{role.contribution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
