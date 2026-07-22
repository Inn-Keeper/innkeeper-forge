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
