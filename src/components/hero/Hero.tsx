import { SiteNav } from "@/components/layout/SiteNav";
import { aboutConfig } from "@/data/about.config";
import { Button } from "@/components/ui/Button";
import { ForgeBackdrop } from "./ForgeBackdrop";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 sm:pb-16">
      <SiteNav />
      <div className="mx-auto grid max-w-6xl items-center gap-6 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-4 lg:pt-16">
        <div className="relative z-10 min-w-0">
          <p className="font-mono text-xs uppercase tracking-[.18em] text-ember">{aboutConfig.shortName} <span className="text-text-muted">/ {aboutConfig.location}</span></p>
          <h1 className="font-display mt-5 text-[clamp(2rem,6vw,3.75rem)] font-extrabold leading-[1.02] tracking-tight">Senior<br /><span className="gradient-text">Engineer.</span></h1>
          <p className="mt-4 text-sm font-medium text-ember">Frontend-focused · React, TypeScript &amp; Node.js</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">I’m Dalton. I build web and mobile products with React, React Native, and TypeScript. Over 15 years, I’ve shipped software across healthcare, regulated iGaming, and enterprise tooling.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">Explore my work <span aria-hidden="true" className="ml-2">↓</span></Button>
            <Button href="/cv/Dalton_Castro_Fullstack_CV.pdf" variant="ghost" external>View CV <span className="ml-2 text-xs">PDF ↗</span></Button>
          </div>
          <div className="mt-5 flex gap-6 text-sm">
            <a href={aboutConfig.links.email} className="text-link text-text-muted hover:text-text-primary">Get in touch ↗</a>
            <a href={aboutConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-link text-text-muted hover:text-text-primary">LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in new tab)</span></a>
          </div>
        </div>
        <ForgeBackdrop />
      </div>
    </section>
  );
}
