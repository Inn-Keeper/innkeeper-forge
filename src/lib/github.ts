import { z } from "zod";

const GitHubRepoSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  topics: z.array(z.string()).optional().default([]),
  updated_at: z.string(),
  html_url: z.string(),
  homepage: z.string().nullable(),
  fork: z.boolean(),
  archived: z.boolean(),
  private: z.boolean(),
});

export type GitHubRepo = z.infer<typeof GitHubRepoSchema>;

function buildHeaders(token?: string): HeadersInit {
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function fetchRepoPage(
  url: string,
  headers: HeadersInit,
): Promise<GitHubRepo[]> {
  const response = await fetch(url, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}`,
    );
  }

  const data: unknown = await response.json();
  return z.array(GitHubRepoSchema).parse(data);
}

async function fetchAllPages(baseUrl: string, headers: HeadersInit) {
  const allRepos: GitHubRepo[] = [];
  let page = 1;

  while (true) {
    const separator = baseUrl.includes("?") ? "&" : "?";
    const url = `${baseUrl}${separator}per_page=100&sort=updated&page=${page}`;
    const repos = await fetchRepoPage(url, headers);
    allRepos.push(...repos);

    if (repos.length < 100) break;
    page += 1;
  }

  return allRepos;
}

function filterRepos(repos: GitHubRepo[]) {
  return repos.filter((repo) => !repo.fork && !repo.archived);
}

async function fetchAuthenticatedRepos(token: string) {
  const headers = buildHeaders(token);
  const baseUrl =
    "https://api.github.com/user/repos?affiliation=owner&visibility=all";
  return filterRepos(await fetchAllPages(baseUrl, headers));
}

async function fetchPublicRepos(username: string) {
  const headers = buildHeaders();
  const baseUrl = `https://api.github.com/users/${username}/repos?type=owner`;
  return filterRepos(await fetchAllPages(baseUrl, headers));
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const token = process.env.GITHUB_TOKEN;

  if (token) {
    return fetchAuthenticatedRepos(token);
  }

  if (process.env.VERCEL === "1" || process.env.NODE_ENV === "production") {
    throw new Error(
      "GITHUB_TOKEN is required on Vercel to include private repositories. " +
        "Add it under Project Settings → Environment Variables (Production), then redeploy.",
    );
  }

  console.warn(
    "[innkeeper-forge] GITHUB_TOKEN not set — fetching public repos only.",
  );
  return fetchPublicRepos(username);
}
