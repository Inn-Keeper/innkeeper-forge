import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { portfolioConfig } from "../src/data/repos.config";
import { getProjects } from "../src/lib/projects";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  if (!existsSync(path)) return;

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;

    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    dryRun: args.includes("--dry-run"),
    deploy: args.includes("--deploy") || !args.includes("--dry-run"),
  };
}

async function revalidatePortfolio() {
  const baseUrl = process.env.PORTFOLIO_URL ?? "http://localhost:3000";
  const secret = process.env.REVALIDATION_SECRET;

  if (!secret) {
    console.log(
      "\nSkipping revalidate — set REVALIDATION_SECRET in .env.local to refresh the live site.",
    );
    console.log("Or run: pnpm refresh");
    return false;
  }

  const url = `${baseUrl.replace(/\/$/, "")}/api/revalidate?secret=${encodeURIComponent(secret)}`;
  const response = await fetch(url, { method: "POST" });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Revalidate failed (${response.status}): ${body}`);
  }

  const payload = (await response.json()) as { revalidated: boolean; at: string };
  console.log(`\nRevalidated ${baseUrl} at ${payload.at}`);
  return true;
}

async function main() {
  loadEnvLocal();
  const { dryRun, deploy } = parseArgs();

  if (!process.env.GITHUB_TOKEN) {
    console.warn(
      "Warning: GITHUB_TOKEN not set — only public repos will be fetched.\n",
    );
  }

  const projects = await getProjects();
  const configured = new Set(Object.keys(portfolioConfig.repos));
  const hidden = Object.entries(portfolioConfig.repos)
    .filter(([, config]) => config.visible === false)
    .map(([name]) => name);

  console.log(`\n${projects.length} visible project(s) from GitHub:\n`);

  for (const project of projects) {
    const tags = [
      project.featured ? "featured" : null,
      project.private ? "private" : null,
      configured.has(project.name) ? null : "auto (not in config)",
    ]
      .filter(Boolean)
      .join(", ");

    console.log(`  • ${project.name}${tags ? ` [${tags}]` : ""}`);
    console.log(`    ${project.language ?? "—"} · updated ${project.updatedAt.slice(0, 10)}`);
  }

  const visibleNames = new Set(projects.map((project) => project.name));
  const newToConfig = projects
    .map((project) => project.name)
    .filter((name) => !configured.has(name));

  if (newToConfig.length > 0) {
    console.log(`\nNot listed in repos.config.ts (shown via defaults):`);
    for (const name of newToConfig) {
      console.log(`  • ${name}`);
    }
  }

  if (hidden.length > 0) {
    console.log(`\nHidden via repos.config.ts:`);
    for (const name of hidden) {
      const onGitHub = visibleNames.has(name) ? "" : " (not returned by GitHub)";
      console.log(`  • ${name}${onGitHub}`);
    }
  }

  if (dryRun) {
    console.log("\nDry run — no revalidation requested.");
    return;
  }

  if (deploy) {
    await revalidatePortfolio();
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
