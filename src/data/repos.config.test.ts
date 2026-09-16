import assert from "node:assert/strict";
import test from "node:test";
import { portfolioConfig } from "./repos.config.ts";

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
