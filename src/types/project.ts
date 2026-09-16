export type ProjectSpan = "large" | "medium" | "small";

export interface RepoConfig {
  visible?: boolean;
  featured?: boolean;
  span?: ProjectSpan;
  description?: string;
  demoUrl?: string | null;
  technologies?: string[];
}

export interface CollabConfig extends RepoConfig {
  owner: string;
  role: string;
  inProgress?: boolean;
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  language: string | null;
  technologies: string[];
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string | null;
  htmlUrl: string | null;
  homepage: string | null;
  demoUrl: string | null;
  featured: boolean;
  private: boolean;
  span: ProjectSpan;
  collab?: { owner: string; role: string };
  inProgress?: boolean;
}

export interface PortfolioStats {
  repoCount: number;
  techs: string[];
  totalStars: number;
  lastActivity: string | null;
}
