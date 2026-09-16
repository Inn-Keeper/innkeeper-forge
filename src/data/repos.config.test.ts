import assert from "node:assert/strict";
import test from "node:test";
import type { RepoConfig } from "../types/project.ts";
import { portfolioConfig } from "./repos.config.ts";

const repos: [string, RepoConfig][] = Object.entries(portfolioConfig.repos);
const visibleRepos = repos.filter(([, config]) => config.visible);

test("every visible repo has a display title and description", () => {
  for (const [slug, config] of visibleRepos) {
    assert.ok(config.title, `${slug} is missing a title`);
    assert.ok(config.description, `${slug} is missing a description`);
  }
});

test("only the four flagship projects are featured", () => {
  const featured = repos.filter(([, config]) => config.featured).map(([slug]) => slug);
  assert.deepEqual(featured.sort(), ["intygy", "lambari", "stretchy", "tech-refresh"]);
});

test("linkcheck is included in the synced portfolio", () => {
  assert.equal(portfolioConfig.repos.linkcheck.visible, true);
});

test("lambari is included in the synced portfolio", () => {
  assert.equal(portfolioConfig.repos.lambari.visible, true);
});

test("matematica shows up in the React Native filter", () => {
  assert.ok(portfolioConfig.repos.matematica.technologies.includes("React Native"));
});

test("speedz-tail is listed as an in-progress collab", () => {
  const collab = portfolioConfig.collaborations["speedz-tail"];
  assert.equal(collab.owner, "joelpiccoli");
  assert.equal(collab.inProgress, true);
  assert.ok(collab.technologies.includes("React Native"));
});

test("kotlin-study is included in the synced portfolio", () => {
  assert.equal(portfolioConfig.repos["kotlin-study"].visible, true);
});
