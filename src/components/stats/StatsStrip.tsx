import { aboutConfig } from "@/data/about.config";
import type { PortfolioStats } from "@/types/project";

export function StatsStrip({ stats }: { stats: PortfolioStats }) {
  return (
    <section className="px-6" aria-label="At a glance">
      <dl className="mx-auto grid max-w-6xl gap-6 border-y border-white/10 py-7 sm:grid-cols-3">
        {[
          ["Experience", `${aboutConfig.experienceYears} years shipping software`],
          ["Focus", "React · React Native · TypeScript"],
          ["The workshop", `${stats.repoCount} projects & experiments`],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="font-mono text-[10px] uppercase tracking-[.18em] text-text-muted">{label}</dt>
            <dd className="mt-2 text-sm font-medium text-text-primary">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
