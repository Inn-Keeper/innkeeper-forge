import { aboutConfig } from "@/data/about.config";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutSection() {
  return (
    <section id="about" className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Behind the forge</SectionLabel>
        <h2 className="font-display mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
          The innkeeper
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
            {aboutConfig.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <aside className="forge-glow h-fit rounded-2xl border border-white/10 bg-bg-surface p-6 sm:p-8">
            <p className="font-display text-2xl font-bold text-text-primary">
              {aboutConfig.shortName}
            </p>
            <p className="mt-1 text-ember">{aboutConfig.role}</p>
            <p className="mt-1 font-mono text-sm text-text-muted">
              {aboutConfig.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {aboutConfig.headline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {aboutConfig.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-bg-elevated px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              Off the clock
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {aboutConfig.interests.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ember/20 bg-ember/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ember/90"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6">
              <a
                href={aboutConfig.links.email}
                className="text-sm font-semibold text-ember transition hover:text-flame focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                Email →
              </a>
              <a
                href={aboutConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-text-muted transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                GitHub →
              </a>
              <a
                href={aboutConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-text-muted transition hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                LinkedIn →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
