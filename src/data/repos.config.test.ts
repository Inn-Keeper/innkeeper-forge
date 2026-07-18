import assert from "node:assert/strict";
import test from "node:test";
import { portfolioConfig } from "./repos.config.ts";

test("linkcheck is included in the synced portfolio", () => {
  assert.equal(portfolioConfig.repos.linkcheck.visible, true);
});
