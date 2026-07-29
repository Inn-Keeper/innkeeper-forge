import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const VIEWBOX_WIDTH = 160;

async function readSilhouette() {
  return readFile(new URL("./InnkeeperSilhouette.tsx", import.meta.url), "utf8");
}

/**
 * The held item spilled past the viewBox and survived only because the svg sets
 * `overflow-visible` — which an `overflow-hidden` ancestor in ForgeBackdrop then
 * clipped, cutting the tool. Geometry must stay in bounds on its own.
 */
test("the tongs and held item stay inside the viewBox", async () => {
  const source = await readSilhouette();

  const tongs = source.match(/\{\/\* Right arm \+ tongs toward forge \*\/\}[\s\S]*?<\/g>/)?.[0];
  assert.ok(tongs, "could not locate the tongs group");

  const strokeWidth = Number(tongs.match(/<g stroke="[^"]*" strokeWidth="([\d.]+)"/)?.[1]);
  assert.ok(Number.isFinite(strokeWidth), "tongs group must declare a strokeWidth");

  const lineEdges = [...tongs.matchAll(/<line x1="([\d.]+)"[^>]*x2="([\d.]+)"/g)].flatMap(
    (m) => [Number(m[1]), Number(m[2])].map((x) => x + strokeWidth / 2),
  );

  const circle = tongs.match(/<circle cx="([\d.]+)"[^>]*r="([\d.]+)"[^>]*strokeWidth="([\d.]+)"/);
  assert.ok(circle, "could not locate the held item");
  const itemEdge = Number(circle[1]) + Number(circle[2]) + Number(circle[3]) / 2;

  const rightmost = Math.max(...lineEdges, itemEdge);
  assert.ok(
    rightmost <= VIEWBOX_WIDTH,
    `tongs reach x=${rightmost}, past the viewBox edge at ${VIEWBOX_WIDTH}`,
  );
});

test("the tongs start at the hand, not floating off the arm", async () => {
  const source = await readSilhouette();

  const armEnd = source.match(/d="M104 98 Q128 108 ([\d.]+) ([\d.]+)/);
  assert.ok(armEnd, "could not locate the right arm path");

  const tongsStart = source.match(/<line x1="([\d.]+)" y1="([\d.]+)"/);
  assert.ok(tongsStart, "could not locate the tongs origin");

  const distance = Math.hypot(
    Number(tongsStart[1]) - Number(armEnd[1]),
    Number(tongsStart[2]) - Number(armEnd[2]),
  );
  assert.ok(distance < 16, `tongs origin is ${distance.toFixed(1)} units from the hand`);
});
