import type { Metadata } from "next";
import { SiteNav } from "@/components/layout/SiteNav";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { experienceConfig as career } from "@/data/experience.config";
import { aboutConfig } from "@/data/about.config";

export const metadata: Metadata = {
  title: "Experience · Dalton Castro · Innkeeper Forge",
  description: "15 years of software engineering: enterprise tooling, regulated products, healthcare platforms, and web and mobile delivery.",
};

export default function ExperiencePage() {
  return (
    <>
      <header className="px-6"><SiteNav experience /></header>
      <main id="main-content">
        <section className="px-6 py-8 sm:py-10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Professional experience</SectionLabel>
              <h1 className="font-display mt-3 text-3xl font-bold sm:text-4xl">Dalton Castro</h1>
              <p className="mt-2 text-base text-text-primary">Senior Engineer</p>
              <p className="mt-2 text-sm text-text-muted">Frontend-focused · React, TypeScript &amp; Node.js</p>
              <p className="mt-2 font-mono text-xs text-text-muted">Stockholm, Sweden · 15 years in software</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={career.cvs[0].href} download className="inline-flex min-h-11 items-center justify-center rounded-full bg-ember px-5 py-3 text-sm font-semibold text-bg-deep transition hover:bg-flame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember">Download Full-stack CV <span aria-hidden="true" className="ml-2">↓</span></a>
            </div>
          </div>
        </section>

        <section aria-labelledby="career-heading" className="px-6 pb-16 sm:pb-24">
          <div className="mx-auto max-w-6xl border-t border-white/10 pt-6">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <h2 id="career-heading" className="font-display text-2xl font-bold">Career timeline</h2>
              <p className="font-mono text-xs text-text-muted">2011 — present · Newest first</p>
            </div>
            <ol className="ml-2 border-l border-ember/25 md:ml-48">
              {career.roles.map((role, index) => (
                <li key={role.start} className="relative pb-8 pl-6 sm:pl-10">
                  <span aria-hidden="true" className={`absolute -left-[5px] top-7 h-[9px] w-[9px] rounded-full border border-ember ${index === 0 ? "bg-ember shadow-[0_0_16px_#f59e0b66]" : "bg-bg-deep"}`} />
                  <p className="mb-3 pt-1 font-mono text-xs text-ember md:absolute md:right-[calc(100%+24px)] md:top-5 md:w-40 md:text-right">{role.period}</p>
                  <article className="rounded-2xl border border-white/10 bg-bg-surface p-5 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm text-ember">{role.role}</p>
                        <h3 className="font-display mt-2 text-2xl font-bold sm:text-3xl">{role.company}</h3>
                        <p className="mt-2 text-xs text-text-muted">{role.location}</p>
                      </div>
                      {index === 0 ? <span className="rounded-full border border-ember/25 bg-ember/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ember">Current role</span> : null}
                    </div>
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-muted">{role.context}</p>
                    <ul className="mt-5 space-y-3">
                      {role.outcomes.slice(0, 2).map((outcome) => <li key={outcome.text} className="flex gap-3 text-sm leading-relaxed"><span aria-hidden="true" className="text-ember">↳</span><span>{outcome.text}</span></li>)}
                    </ul>
                    {role.outcomes.length > 2 ? (
                      <details className="group mt-5 border-t border-white/10 pt-2">
                        <summary className="cursor-pointer rounded py-3 text-sm font-medium text-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"><span className="group-open:hidden">More about this role</span><span className="hidden group-open:inline">Less about this role</span><span className="sr-only"> at {role.company}</span></summary>
                        <ul className="space-y-3 pb-3">{role.outcomes.slice(2).map((outcome) => <li key={outcome.text} className="flex gap-3 text-sm leading-relaxed text-text-muted"><span aria-hidden="true" className="text-ember">↳</span><span>{outcome.text}</span></li>)}</ul>
                      </details>
                    ) : null}
                    <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">{role.technologies.map(({ label }) => <li key={label} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] text-text-muted">{label}</li>)}</ul>
                  </article>
                </li>
              ))}
              <li className="relative pl-6 sm:pl-10">
                <span aria-hidden="true" className="absolute -left-[5px] top-3 h-[9px] w-[9px] rounded-full border border-ember bg-bg-deep" />
                <p className="mb-3 font-mono text-xs text-ember md:absolute md:right-[calc(100%+24px)] md:top-2 md:w-40 md:text-right">2011 — 2015</p>
                <h3 className="font-display text-2xl font-bold">The foundations.</h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">{career.earlierCareer.map((role) => <article key={role.company} className="border-t border-white/10 pt-4"><p className="font-mono text-[11px] text-text-muted">{role.period}</p><h4 className="mt-2 font-semibold">{role.company}</h4><p className="mt-1 text-sm text-ember">{role.role}</p><p className="mt-2 text-sm leading-relaxed text-text-muted">{role.summary}</p></article>)}</div>
              </li>
            </ol>
          </div>
        </section>

        <section aria-label="Education and languages" className="px-6 pb-16">
          <div className="mx-auto grid max-w-6xl gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
            <div><SectionLabel>Education</SectionLabel><h2 className="font-display mt-4 text-xl font-bold">{career.education.qualification}</h2><p className="mt-2 text-sm text-text-muted">{career.education.institution}</p><p className="mt-2 font-mono text-xs text-text-muted">{career.education.period}</p></div>
            <div><SectionLabel>Languages</SectionLabel><dl className="mt-4 grid grid-cols-2 gap-4">{career.languages.map(({ language, level }) => <div key={language}><dt className="text-sm font-semibold">{language}</dt><dd className="mt-1 text-sm text-text-muted">{level}</dd></div>)}</dl></div>
          </div>
        </section>
        <section className="px-6 pb-20">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 rounded-2xl border border-ember/20 bg-bg-surface p-6 sm:p-10">
            <div><h2 className="font-display text-2xl font-bold sm:text-3xl">Contact</h2><p className="mt-3 text-text-muted">daltonmcastro@gmail.com</p></div>
            <Button href={aboutConfig.links.email}>Get in touch <span aria-hidden="true" className="ml-2">↗</span></Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
