import Link from "next/link";
import { aboutConfig } from "@/data/about.config";

export function SiteNav({ experience = false, making = false }: { experience?: boolean; making?: boolean }) {
  return (
    <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-b border-white/10 py-6">
      <Link href="/" aria-label="Innkeeper Forge home" className="font-display text-sm font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-ember">Innkeeper Forge<span className="text-ember">.</span></Link>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-4 text-xs text-text-muted sm:gap-x-8 sm:text-sm">
        <Link href="/#projects" className="text-link hover:text-text-primary">Work</Link>
        <Link href="/experience" aria-current={experience ? "page" : undefined} className={`text-link hover:text-text-primary ${experience ? "text-ember" : ""}`}>Experience</Link>
        <Link href="/in-the-making" aria-current={making ? "page" : undefined} className={`text-link hover:text-text-primary ${making ? "text-ember" : ""}`}>In the Making</Link>
        <Link href="/#about" className="text-link hover:text-text-primary">About</Link>
        <a href={aboutConfig.links.email} className="text-link text-ember">Let’s talk <span aria-hidden="true">↗</span></a>
      </div>
    </nav>
  );
}
