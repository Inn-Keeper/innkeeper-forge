import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { experienceConfig, focusOptions } from "./experience.config.ts";

test("experience data has one primary CV and valid focus references", () => {
  assert.equal(experienceConfig.cvs.filter((cv) => cv.primary).length, 1);
  const validFocuses = new Set(focusOptions.map(({ value }) => value));

  for (const role of experienceConfig.roles) {
    assert.ok(role.outcomes.length >= 1, `${role.company} needs at least one contribution`);
    for (const outcome of role.outcomes) {
      assert.ok(outcome.focuses.every((focus) => validFocuses.has(focus)));
    }
  }
});

test("all configured CV downloads exist under public", async () => {
  const publicDir = fileURLToPath(new URL("../../public", import.meta.url));
  await Promise.all(
    experienceConfig.cvs.map((cv) => access(`${publicDir}${cv.href}`)),
  );
});

test("roles run newest to oldest", () => {
  const starts = experienceConfig.roles.map((role) => role.start);
  assert.deepEqual(starts, [...starts].sort().reverse());
});
