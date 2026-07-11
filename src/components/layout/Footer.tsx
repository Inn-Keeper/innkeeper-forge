import { portfolioConfig } from "@/data/repos.config";

export function Footer() {
  const githubUrl = `https://github.com/${portfolioConfig.githubUsername}`;

  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-text-primary">
            Innkeeper Forge
          </p>
          <p className="mt-1 max-w-md text-sm text-text-muted">
            Projects and experiments from the workshop. Built with Next.js, synced
            from GitHub.
          </p>
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link font-mono text-sm text-ember transition hover:text-flame focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          @{portfolioConfig.githubUsername}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
    </footer>
  );
}
