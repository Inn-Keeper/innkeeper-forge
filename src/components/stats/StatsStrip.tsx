import type { PortfolioStats } from "@/types/project";

interface StatsStripProps {
  stats: PortfolioStats;
}

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export function StatsStrip({ stats }: StatsStripProps) {
  const items = [
    { label: "Projects", value: String(stats.repoCount) },
    { label: "Languages", value: stats.languages.join(", ") || "—" },
    { label: "Last activity", value: formatDate(stats.lastActivity) },
  ];

  return (
    <section className="px-6 pb-16" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        Portfolio stats
      </h2>
      <dl className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-bg-surface/80 p-5 backdrop-blur-sm"
          >
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              {item.label}
            </dt>
            <dd className="mt-2 font-display text-2xl font-bold text-text-primary">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
