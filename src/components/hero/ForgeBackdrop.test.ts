import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("strike shake does not replace the forge centering transform", async () => {
  const source = await readFile(new URL("./ForgeBackdrop.tsx", import.meta.url), "utf8");

  assert.match(source, /className="[^"]*forge-strike-shake/);
  assert.doesNotMatch(
    source,
    /className="[^"]*forge-strike-shake[^"]*(?:left-1\/2|-translate-x-1\/2)/,
  );
});

test("foreground innkeeper does not clip the held tool", async () => {
  const source = await readFile(new URL("./ForgeBackdrop.tsx", import.meta.url), "utf8");

  const forgeSvgEnd = source.indexOf("</svg>");
  const innkeeper = source.indexOf("<InnkeeperSilhouette");
  const className = source.match(/<InnkeeperSilhouette className="([^"]+)"/)?.[1];

  assert.ok(
    innkeeper > forgeSvgEnd,
    "the innkeeper must be a foreground sibling, not clipped by the forge SVG",
  );
  assert.ok(className);
  assert.match(className, /\babsolute\b/);
  assert.match(className, /\bz-10\b/);
  assert.match(className, /\boverflow-visible\b/);
});
