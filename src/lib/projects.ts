import { portfolioConfig } from "@/data/repos.config";
import { fetchGitHubRepos } from "@/lib/github";
import type { PortfolioStats, Project, ProjectSpan, RepoConfig } from "@/types/project";

function resolveSpan(featured: boolean, configured?: ProjectSpan): ProjectSpan {
  if (configured) return configured;
  if (featured) return "large";
  return "medium";
}

function getRepoConfig(name: string): RepoConfig | undefined {
  return portfolioConfig.repos[name as keyof typeof portfolioConfig.repos];
}

export async function getProjects(): Promise<Project[]> {
  const repos = await fetchGitHubRepos(portfolioConfig.githubUsername);

  const projects = repos
    .map((repo) => {
      const config = getRepoConfig(repo.name);
      const visible = config?.visible ?? portfolioConfig.defaults.visible;

      if (!visible) return null;

      const featured = config?.featured ?? false;
      const description =
        config?.description ?? repo.description ?? "No description yet.";

      return {
        name: repo.name,
        slug: repo.name,
        description,
        language: repo.language,
        technologies: config?.technologies ?? [],
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics,
        updatedAt: repo.updated_at,
        htmlUrl: repo.html_url,
        homepage: repo.homepage,
        demoUrl: config?.demoUrl ?? repo.homepage ?? null,
        featured,
        private: repo.private,
        span: resolveSpan(featured, config?.span),
      } satisfies Project;
    })
    .filter((project): project is Project => project !== null);

  return projects.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

export function getPortfolioStats(projects: Project[]): PortfolioStats {
  const languages = [
    ...new Set(projects.map((project) => project.language).filter(Boolean)),
  ] as string[];

  const totalStars = projects.reduce((sum, project) => sum + project.stars, 0);
  const lastActivity = projects[0]?.updatedAt ?? null;

  return {
    repoCount: projects.length,
    languages,
    totalStars,
    lastActivity,
  };
}
