export type ProjectSpan = "large" | "medium" | "small";

export interface RepoConfig {
  visible?: boolean;
  featured?: boolean;
  span?: ProjectSpan;
  description?: string;
  demoUrl?: string | null;
  technologies?: string[];
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
  updatedAt: string;
  htmlUrl: string;
  homepage: string | null;
  demoUrl: string | null;
  featured: boolean;
  private: boolean;
  span: ProjectSpan;
}

export interface PortfolioStats {
  repoCount: number;
  languages: string[];
  totalStars: number;
  lastActivity: string | null;
}
