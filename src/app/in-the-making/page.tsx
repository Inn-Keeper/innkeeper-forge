import type { Metadata } from "next";
import { SiteNav } from "@/components/layout/SiteNav";
import { Footer } from "@/components/layout/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutConfig } from "@/data/about.config";
import { portfolioConfig } from "@/data/repos.config";

export const metadata: Metadata = {
  title: "In the Making · Dalton Castro",
  description: "An entirely new adventure in game development: Unbolted, SnowBrawl, and the SpeedzTail collaboration. Projects I’m building, testing, and figuring out.",
};

export default function InTheMakingPage() {
  const speedzTail = portfolioConfig.collaborations["speedz-tail"];
  const snowBrawl = portfolioConfig.repos["snow-brawl"];

  return (
    <>
      <header className="px-6"><SiteNav making /></header>
      <main id="main-content" className="px-6 pb-20">
        <section className="mx-auto max-w-6xl py-14 sm:py-20">
          <SectionLabel>In the Making</SectionLabel>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">Between the Hammer<br className="hidden sm:block" /> and the <span className="text-ember">Anvil.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">Game development is an entirely new adventure for me. These are the projects I’m building, testing, and figuring out along the way.</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">These are works in progress. Here’s what exists so far, what I’m working on, and the questions still worth asking.</p>
        </section>

        <section aria-labelledby="unbolted-heading" className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-ember/25 bg-bg-surface">
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <p className="text-ember">01 / GAME DEVELOPMENT</p>
              <span className="rounded-full border border-ember/30 px-3 py-2 text-ember">In development</span>
            </div>
            <h2 id="unbolted-heading" className="font-display mt-8 text-3xl font-bold sm:text-5xl">Unbolted</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">A physics puzzle game where solving puzzles earns parts to restore a vehicle. You might never encounter the same puzzle twice — I’m working on the magic to make that happen.</p>
            <p className="mt-6 font-mono text-xs leading-relaxed text-ember">TypeScript · PixiJS · Rapier · Capacitor</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-5 sm:px-10">
            <a href={`${aboutConfig.links.email}?subject=Unbolted`} className="text-link inline-flex min-h-11 items-center text-sm font-semibold text-ember">Ask about the game <span aria-hidden="true" className="ml-2">↗</span></a>
          </div>
        </section>

        <section aria-labelledby="snowbrawl-heading" className="mx-auto mt-8 grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-bg-surface p-6 sm:p-10 md:grid-cols-2">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs md:col-span-2">
            <p className="text-ember">02 / GAME DEVELOPMENT</p>
            <span className="rounded-full border border-ember/30 px-3 py-2 text-ember">In development</span>
          </div>
          <div>
            <h2 id="snowbrawl-heading" className="font-display text-3xl font-bold">SnowBrawl</h2>
            <p className="mt-3 text-text-muted">{snowBrawl.description}</p>
            <p className="mt-5 font-mono text-xs leading-relaxed text-ember">C++ · {snowBrawl.technologies.join(" · ")}</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">A new area to explore</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">Learning Unreal Engine as I develop the game further. Part of this new adventure, with room to try things out and learn as I go.</p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">Still a prototype, rather than a finished game.</p>
            <a href={`${aboutConfig.links.email}?subject=SnowBrawl`} className="text-link mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-ember">Ask about SnowBrawl <span aria-hidden="true" className="ml-2">↗</span></a>
          </div>
        </section>

        <section aria-labelledby="speedztail-heading" className="mx-auto mt-8 grid max-w-6xl gap-6 rounded-2xl border border-white/10 bg-bg-surface p-6 sm:p-10 md:grid-cols-2">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs md:col-span-2">
            <p className="text-ember">03 / COLLABORATION</p>
            <span className="rounded-full border border-ember/30 px-3 py-2 text-ember">Available on Android</span>
          </div>
          <div>
            <h2 id="speedztail-heading" className="font-display text-3xl font-bold">{speedzTail.title}</h2>
            <p className="mt-3 text-text-muted">{speedzTail.description}</p>
            <p className="mt-5 text-sm text-text-muted">With <a href={`https://github.com/${speedzTail.owner}`} className="text-link text-ember">{speedzTail.ownerName}</a>.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">My part</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{speedzTail.role}.</p>
            <p className="mt-5 font-mono text-xs text-ember">{speedzTail.technologies.join(" · ")}</p>
            <a href={speedzTail.demoUrl} target="_blank" rel="noopener noreferrer" className="text-link mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-ember">Get it on Google Play <span aria-hidden="true" className="ml-2">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
