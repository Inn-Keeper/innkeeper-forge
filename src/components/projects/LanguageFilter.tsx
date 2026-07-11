"use client";


interface LanguageFilterProps {
  languages: string[];
  active: string | null;
  onChange: (language: string | null) => void;
}

export function LanguageFilter({
  languages,
  active,
  onChange,
}: LanguageFilterProps) {
  const options = [null, ...languages];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by language">
      {options.map((language) => {
        const selected = active === language;
        const label = language ?? "All";

        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange(language)}
            aria-pressed={selected}
            className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
              selected
                ? "border-ember bg-ember/15 text-ember"
                : "border-white/10 text-text-muted hover:border-ember/30 hover:text-text-primary"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
