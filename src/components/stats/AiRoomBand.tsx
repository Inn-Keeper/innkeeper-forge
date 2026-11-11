import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutConfig } from "@/data/about.config";

export function AiRoomBand() {
  return (
    <section className="px-6 pt-10" aria-labelledby="ai-room-heading">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-x-10 gap-y-4 rounded-2xl border border-ember/25 bg-bg-surface p-6 sm:p-8">
        <div className="min-w-0">
          <SectionLabel>AI-first</SectionLabel>
          <h2 id="ai-room-heading" className="font-display mt-3 text-2xl font-bold">ai-room</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">My base kit of AI workflows for Claude Code and Codex: skills, agents, instructions, and the plugins I rely on. It is updated as I adapt and learn new ways of improving my productivity.</p>
        </div>
        <a href={`${aboutConfig.links.github}/ai-room`} target="_blank" rel="noopener noreferrer" className="text-link inline-flex min-h-11 items-center text-sm font-semibold text-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember">Source code <span aria-hidden="true" className="ml-2">↗</span><span className="sr-only">: ai-room on GitHub (opens in new tab)</span></a>
      </div>
    </section>
  );
}
