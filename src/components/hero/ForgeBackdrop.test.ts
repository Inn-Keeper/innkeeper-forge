import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import test from "node:test";
import { ForgeBackdrop } from "./ForgeBackdrop";

test("two forge scenes do not share SVG paint IDs", () => {
  const html = renderToStaticMarkup(createElement("div", null, createElement(ForgeBackdrop), createElement(ForgeBackdrop)));
  const ids = [...html.matchAll(/ id="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(ids.length > 0);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, reference] of html.matchAll(/url\(#([^\)]+)\)/g)) {
    assert.ok(ids.includes(reference), `missing paint: ${reference}`);
  }
});
