import { aboutConfig } from "@/data/about.config";
import { Button } from "@/components/ui/Button";
import { ForgeBackdrop } from "./ForgeBackdrop";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-12 sm:pb-16">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between gap-4 border-b border-white/10 py-6">
        <a href="#" aria-label="Innkeeper Forge home" className="font-display text-sm font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-ember">IF<span className="text-ember">.</span></a>
        <div className="flex items-center gap-5 text-sm text-text-muted sm:gap-8">
          <a href="#projects" className="text-link hover:text-text-primary">Work</a>
          <a href="#about" className="text-link hover:text-text-primary">About</a>
          <a href={aboutConfig.links.email} className="text-link text-ember">Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
      <div className="mx-auto grid max-w-6xl items-center gap-6 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-4 lg:pt-16">
        <div className="relative z-10 min-w-0">
          <p className="font-mono text-xs uppercase tracking-[.18em] text-ember">{aboutConfig.shortName} <span className="text-text-muted">/ {aboutConfig.location}</span></p>
          <h1 className="font-display mt-5 text-[clamp(2rem,8vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight">Innkeeper<br /><span className="gradient-text">Forge.</span></h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-text-muted">I’m Dalton, a product-minded engineer forging ideas for quite some time. I decided to showcase a few personal experiments and projects because I feel like doing it. Well, take a look! Feedback always appreciated.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">Explore my work <span aria-hidden="true" className="ml-2">↓</span></Button>
            <Button href={aboutConfig.links.email} variant="ghost">Get in touch</Button>
          </div>
        </div>
        <ForgeBackdrop />
      </div>
    </section>
  );
}
