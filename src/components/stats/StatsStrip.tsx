import { aboutConfig } from "@/data/about.config";

export function StatsStrip() {
  return (
    <section className="px-6" aria-label="At a glance">
      <dl className="mx-auto grid max-w-6xl gap-6 border-y border-white/10 py-7 sm:grid-cols-3">
        {[
          ["Experience", `${aboutConfig.experienceYears} years since the first delivery`],
          ["Focus", "React · React Native · TypeScript · Node.js"],
          ["The workshop", "Personal projects & experiments"],
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
