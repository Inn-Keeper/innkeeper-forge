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
    { label: "Stars", value: String(stats.totalStars) },
    { label: "Last activity", value: formatDate(stats.lastActivity) },
  ];

  return (
    <section className="px-6 pb-16">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-bg-surface/80 p-5 backdrop-blur-sm"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
              {item.label}
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-text-primary">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
