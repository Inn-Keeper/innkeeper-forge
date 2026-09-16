import { portfolioConfig } from "@/data/repos.config";
import { fetchGitHubRepos } from "@/lib/github";
import type {
  CollabConfig,
  PortfolioStats,
  Project,
  ProjectSpan,
  RepoConfig,
} from "@/types/project";

// Frameworks listed ahead of GitHub languages in the stats strip.
const statsFrameworks = ["React", "React Native"];

function resolveSpan(featured: boolean, configured?: ProjectSpan): ProjectSpan {
  if (configured) return configured;
  if (featured) return "large";
  return "medium";
}

function getRepoConfig(name: string): RepoConfig | undefined {
  return portfolioConfig.repos[name as keyof typeof portfolioConfig.repos];
}

function getCollabProjects(): Project[] {
  const collaborations: Record<string, CollabConfig> =
    portfolioConfig.collaborations;

  return Object.entries(collaborations)
    .filter(([, config]) => config.visible !== false)
    .map(([name, config]) => {
      const featured = config.featured ?? false;

      // ponytail: collabs are assumed private (no GitHub link, no dates); add a url field when one is public
      return {
        name,
        title: config.title ?? name,
        slug: `${config.owner}/${name}`,
        description: config.description ?? "No description yet.",
        language: null,
        technologies: config.technologies ?? [],
        stars: 0,
        forks: 0,
        topics: [],
        updatedAt: null,
        htmlUrl: null,
        homepage: null,
        demoUrl: config.demoUrl ?? null,
        featured,
        private: true,
        span: resolveSpan(featured, config.span),
        collab: {
          owner: config.owner,
          ownerName: config.ownerName ?? config.owner,
          role: config.role,
        },
        inProgress: config.inProgress ?? false,
      } satisfies Project;
    });
}

export async function getProjects(): Promise<Project[]> {
  const repos = await fetchGitHubRepos(portfolioConfig.githubUsername);

  const projects = repos
    .map((repo): Project | null => {
      const config = getRepoConfig(repo.name);
      const visible = config?.visible ?? portfolioConfig.defaults.visible;

      if (!visible) return null;

      const featured = config?.featured ?? false;
      const description =
        config?.description ?? repo.description ?? "No description yet.";

      return {
        name: repo.name,
        title: config?.title ?? repo.name,
        slug: repo.name,
        description,
        language: repo.language,
        technologies: config?.technologies ?? [],
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics,
        updatedAt: repo.updated_at,
        // Private repos 404 for visitors, so they get no GitHub link.
        htmlUrl: repo.private ? null : repo.html_url,
        homepage: repo.homepage,
        demoUrl: config?.demoUrl ?? repo.homepage ?? null,
        featured,
        private: repo.private,
        span: resolveSpan(featured, config?.span),
      } satisfies Project;
    })
    .filter((project): project is Project => project !== null);

  return [...projects, ...getCollabProjects()].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return (
      new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime()
    );
  });
}

export function getPortfolioStats(projects: Project[]): PortfolioStats {
  const languages = [
    ...new Set(projects.map((project) => project.language).filter(Boolean)),
  ] as string[];
  const frameworks = statsFrameworks.filter((framework) =>
    projects.some((project) => project.technologies.includes(framework)),
  );

  const totalStars = projects.reduce((sum, project) => sum + project.stars, 0);

  return {
    repoCount: projects.length,
    techs: [...frameworks, ...languages],
    totalStars,
  };
}
