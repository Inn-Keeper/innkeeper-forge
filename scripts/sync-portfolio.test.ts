import assert from "node:assert/strict";
import test from "node:test";
import { appendMissingRepoEntries } from "./sync-portfolio.ts";

const configSource = `export const portfolioConfig = {
  repos: {
  } satisfies Record<string, RepoConfig>,
};
`;

test("adds visible entries for missing GitHub repositories", () => {
  assert.equal(
    appendMissingRepoEntries(configSource, ["zeta", "alpha"]),
    `export const portfolioConfig = {
  repos: {
    "alpha": {
      visible: true,
    },
    "zeta": {
      visible: true,
    },
  } satisfies Record<string, RepoConfig>,
};
`,
  );
});

test("does not change the config when every repository is already configured", () => {
  assert.equal(appendMissingRepoEntries(configSource, []), configSource);
});
