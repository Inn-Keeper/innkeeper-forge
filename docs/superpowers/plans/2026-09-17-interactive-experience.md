# Interactive Experience Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a recruiter-friendly `/experience` page with a unified, focusable career timeline, deployable CV downloads, and a compact homepage preview.

**Architecture:** Keep career content in one typed static data module and render the complete page on the server. Isolate only URL focus state and per-role expansion in one client component, using the native History API documented by Next.js 16 so filters are shareable without adding a dependency or making the whole page client-rendered.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Node's built-in test runner, existing portfolio UI components.

**Spec:** `docs/superpowers/specs/2026-09-17-interactive-experience-design.md`

## Global Constraints

- Use the Software Engineer CV as the neutral baseline; add only verified details from the Frontend, Full-stack, and React Native variants.
- Do not display a phone number on the public website.
- Keep all employers visible when a focus is selected; emphasize matching content rather than filtering roles out.
- The canonical focus values are `all`, `frontend`, `mobile`, `backend`, and `leadership`; unknown values fall back to `all`.
- Copy all four PDFs into this repository; do not add runtime coupling to `get-the-job`.
- Add no package, API, persistence layer, CMS, or generalized timeline framework.
- Reuse the existing forge palette, typography, controls, focus treatment, and reduced-motion behavior.
- Preserve the user's existing uncommitted changes in `src/app/opengraph-image.tsx` and `tsconfig.json`.

## File structure

- Create `src/data/experience.config.ts`: typed career history, focus definitions, milestones, education, languages, and CV metadata.
- Create `src/data/experience.config.test.ts`: data integrity, chronology, valid focuses, primary CV, and PDF presence.
- Create `public/cv/Dalton_Castro_{Software_Engineer,Frontend,Fullstack,React_Native}_CV.pdf`: stable deployable downloads copied byte-for-byte from `get-the-job`.
- Create `src/components/experience/ExperiencePreview.tsx`: server-rendered homepage teaser.
- Modify `src/app/page.tsx`: place the preview between projects and about.
- Create `src/components/experience/experience-focus.ts`: pure focus parsing, counts, and URL construction.
- Create `src/components/experience/experience-focus.test.ts`: focused unit coverage for fallback, counts, and URLs.
- Create `src/components/experience/ExperienceTimeline.tsx`: the sole client component for focus and disclosure state.
- Create `src/components/experience/ExperienceTimeline.test.ts`: source-level accessibility guardrails that complement browser interaction checks without adding a DOM-test dependency.
- Create `src/app/experience/page.tsx`: metadata, hero, complete timeline shell, CV actions, education, languages, contact, and footer.
- Create `src/app/experience/page.test.ts`: route-level structural guardrails for the recruiter flow.

---

### Task 1: Establish the verified career model and deployable CV files

**Files:**
- Create: `src/data/experience.config.ts`
- Create: `src/data/experience.config.test.ts`
- Create: `public/cv/Dalton_Castro_Software_Engineer_CV.pdf`
- Create: `public/cv/Dalton_Castro_Frontend_CV.pdf`
- Create: `public/cv/Dalton_Castro_Fullstack_CV.pdf`
- Create: `public/cv/Dalton_Castro_React_Native_CV.pdf`

**Interfaces:**
- Consumes: verified text from `/Volumes/T7/inn-kepper-overnight-machinery/get-the-job/output/pdf/*.pdf`.
- Produces: `Focus`, `focusOptions`, `CareerRole`, `experienceConfig`, and four public `/cv/*.pdf` URLs.

- [ ] **Step 1: Write the failing integrity test**

Create `src/data/experience.config.test.ts`:

```ts
import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { experienceConfig, focusOptions } from "./experience.config.ts";

test("experience data has one primary CV and valid focus references", () => {
  assert.equal(experienceConfig.cvs.filter((cv) => cv.primary).length, 1);
  const validFocuses = new Set(focusOptions.map(({ value }) => value));

  for (const role of experienceConfig.roles) {
    assert.ok(role.outcomes.length >= 2, `${role.company} needs two default outcomes`);
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
```

- [ ] **Step 2: Run the test and confirm the missing-module failure**

Run:

```bash
rtk pnpm exec tsx --test src/data/experience.config.test.ts
```

Expected: FAIL because `experience.config.ts` does not exist.

- [ ] **Step 3: Implement the typed model and verified content**

Create `src/data/experience.config.ts` with these exact public types and focus definitions:

```ts
export const focusOptions = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "mobile", label: "Mobile" },
  { value: "backend", label: "Backend" },
  { value: "leadership", label: "Architecture & Leadership" },
] as const;

export type Focus = (typeof focusOptions)[number]["value"];

export interface CareerOutcome {
  text: string;
  focuses: Exclude<Focus, "all">[];
}

export interface CareerRole {
  company: string;
  location: string;
  role: string;
  period: string;
  start: string;
  context: string;
  outcomes: CareerOutcome[];
  technologies: { label: string; focuses: Exclude<Focus, "all">[] }[];
}
```

Export one `experienceConfig` object containing:

- Hero copy: `15 years building web and mobile products.`, `Dalton Castro`, `Senior Software Engineer`, and `Stockholm, Sweden`.
- Milestones for 2011, 2017, and `2021-present` using the approved spec wording.
- Full roles for Nooga Solutions, LeoVegas, Dot Digital Group, CDA/WEDEV, Philips Informatics, and Pointer-Cielo, using the exact dates and verified outcome wording from the CV PDFs.
- An `earlierCareer` array for Ativsoft, Sao Joao Pharmacies, DBSite, and Compasso Tecnologia.
- Education and the four language levels from the CVs.
- CV metadata whose primary entry is `{ label: "Software Engineer", href: "/cv/Dalton_Castro_Software_Engineer_CV.pdf", primary: true }` and whose three secondary entries use the matching public filenames.

Keep phone data out of this module. Reuse email and LinkedIn from `aboutConfig` rather than duplicating them.

- [ ] **Step 4: Mark the PDF artifact operation and copy the four verified source PDFs**

Run the artifact marker exactly once before copying:

```bash
node /Users/daltoncastro/.codex/plugins/cache/openai-primary-runtime/pdf/26.909.61513/skills/pdf/container_tools/mark_artifact_operation_started.mjs --operation-kind create --expected-output-count 4 --output-format pdf
mkdir -p public/cv
cp /Volumes/T7/inn-kepper-overnight-machinery/get-the-job/output/pdf/Dalton_Castro_Software_Engineer_CV.pdf public/cv/
cp /Volumes/T7/inn-kepper-overnight-machinery/get-the-job/output/pdf/Dalton_Castro_Frontend_CV.pdf public/cv/
cp /Volumes/T7/inn-kepper-overnight-machinery/get-the-job/output/pdf/Dalton_Castro_Fullstack_CV.pdf public/cv/
cp /Volumes/T7/inn-kepper-overnight-machinery/get-the-job/output/pdf/Dalton_Castro_React_Native_CV.pdf public/cv/
```

Verify the copies are byte-identical:

```bash
shasum -a 256 /Volumes/T7/inn-kepper-overnight-machinery/get-the-job/output/pdf/*.pdf public/cv/*.pdf
```

Expected: each source hash matches the public copy with the same filename.

- [ ] **Step 5: Run the data test and all existing Node tests**

Run:

```bash
rtk pnpm exec tsx --test src/data/experience.config.test.ts
rtk pnpm exec tsx --test "src/**/*.test.ts" "scripts/**/*.test.ts"
```

Expected: both commands PASS.

- [ ] **Step 6: Commit the data and CV assets**

```bash
rtk git add src/data/experience.config.ts src/data/experience.config.test.ts public/cv
rtk git commit -m "feat: add verified career data and CV downloads"
```

---

### Task 2: Add the compact homepage career preview

**Files:**
- Create: `src/components/experience/ExperiencePreview.tsx`
- Modify: `src/app/page.tsx:1-25`
- Test: `src/components/experience/ExperiencePreview.test.ts`

**Interfaces:**
- Consumes: `experienceConfig.milestones` from Task 1 and existing `SectionLabel` and `Button` components.
- Produces: `ExperiencePreview(): JSX.Element`, linked from the homepage to `/experience`.

- [ ] **Step 1: Write the failing structural test**

Create `src/components/experience/ExperiencePreview.test.ts`:

```ts
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("experience preview exposes the approved heading and route", async () => {
  const source = await readFile(new URL("./ExperiencePreview.tsx", import.meta.url), "utf8");
  assert.match(source, /15 years at the forge/);
  assert.match(source, /href="\/experience"/);
  assert.match(source, /experienceConfig\.milestones\.map/);
});
```

- [ ] **Step 2: Run the test and confirm the missing-file failure**

Run:

```bash
rtk pnpm exec tsx --test src/components/experience/ExperiencePreview.test.ts
```

Expected: FAIL with `ENOENT` for `ExperiencePreview.tsx`.

- [ ] **Step 3: Build the server-rendered preview**

Create `ExperiencePreview.tsx` as a semantic `<section id="experience-preview">` with:

- `SectionLabel` text `Career journey`.
- `<h2>` text `15 years at the forge`.
- One concise sentence explaining that the full page connects roles to product outcomes.
- A three-item `<ol>` mapping `experienceConfig.milestones`.
- An existing `<Button href="/experience">Explore the full journey</Button>`.

Use only existing Tailwind tokens and the same `max-w-6xl`, spacing, surface border, mono year label, ember accent, and keyboard-focus conventions already present in `AboutSection` and `ProjectsSection`.

- [ ] **Step 4: Place the preview in the homepage flow**

In `src/app/page.tsx`, import `ExperiencePreview` and render it after `<ProjectsSection projects={projects} />` and before `<AboutSection />`.

- [ ] **Step 5: Run the focused test, lint, and build**

```bash
rtk pnpm exec tsx --test src/components/experience/ExperiencePreview.test.ts
rtk pnpm lint
rtk pnpm build
```

Expected: all PASS; the build lists `/` and does not report hydration or TypeScript errors.

- [ ] **Step 6: Commit the homepage entry point**

```bash
rtk git add src/app/page.tsx src/components/experience/ExperiencePreview.tsx src/components/experience/ExperiencePreview.test.ts
rtk git commit -m "feat: preview career journey on homepage"
```

---

### Task 3: Implement focus behavior and the interactive timeline

**Files:**
- Create: `src/components/experience/experience-focus.ts`
- Create: `src/components/experience/experience-focus.test.ts`
- Create: `src/components/experience/ExperienceTimeline.tsx`
- Create: `src/components/experience/ExperienceTimeline.test.ts`

**Interfaces:**
- Consumes: `CareerRole`, `Focus`, and `focusOptions` from Task 1.
- Produces: `parseFocus(value): Focus`, `countMatchingRoles(roles, focus): number`, `buildFocusHref(focus): string`, and `ExperienceTimeline({ roles }): JSX.Element`.

- [ ] **Step 1: Write failing unit tests for the URL and result contract**

Create `src/components/experience/experience-focus.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import type { CareerRole } from "@/data/experience.config";
import { buildFocusHref, countMatchingRoles, parseFocus } from "./experience-focus.ts";

const roles = [
  { outcomes: [{ text: "mobile", focuses: ["mobile"] }] },
  { outcomes: [{ text: "web", focuses: ["frontend"] }] },
] as CareerRole[];

test("unknown and repeated focus values fall back to all", () => {
  assert.equal(parseFocus(undefined), "all");
  assert.equal(parseFocus("unknown"), "all");
  assert.equal(parseFocus(["mobile", "backend"]), "all");
  assert.equal(parseFocus("mobile"), "mobile");
});

test("all includes every role and a focus counts matching roles", () => {
  assert.equal(countMatchingRoles(roles, "all"), 2);
  assert.equal(countMatchingRoles(roles, "mobile"), 1);
});

test("all has a clean URL and focused views are shareable", () => {
  assert.equal(buildFocusHref("all"), "/experience");
  assert.equal(buildFocusHref("mobile"), "/experience?focus=mobile");
});
```

- [ ] **Step 2: Run the unit test and confirm the missing-module failure**

```bash
rtk pnpm exec tsx --test src/components/experience/experience-focus.test.ts
```

Expected: FAIL because `experience-focus.ts` does not exist.

- [ ] **Step 3: Implement the pure focus helpers**

Create `experience-focus.ts`:

```ts
import { focusOptions, type CareerRole, type Focus } from "@/data/experience.config";

const focuses = new Set<string>(focusOptions.map(({ value }) => value));

export function parseFocus(value: string | string[] | undefined): Focus {
  return typeof value === "string" && focuses.has(value) ? (value as Focus) : "all";
}

export function countMatchingRoles(roles: CareerRole[], focus: Focus): number {
  if (focus === "all") return roles.length;
  return roles.filter((role) =>
    role.outcomes.some((outcome) => outcome.focuses.includes(focus)),
  ).length;
}

export function buildFocusHref(focus: Focus): string {
  return focus === "all" ? "/experience" : `/experience?focus=${focus}`;
}
```

- [ ] **Step 4: Add source-level accessibility guardrails before the component**

Create `ExperienceTimeline.test.ts`:

```ts
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("timeline exposes focus and disclosure state accessibly", async () => {
  const source = await readFile(new URL("./ExperienceTimeline.tsx", import.meta.url), "utf8");
  assert.match(source, /aria-pressed=/);
  assert.match(source, /aria-expanded=/);
  assert.match(source, /aria-controls=/);
  assert.match(source, /Show less/);
  assert.match(source, /View more/);
  assert.match(source, /history\.pushState/);
});
```

Run it and confirm `ENOENT` for `ExperienceTimeline.tsx`.

- [ ] **Step 5: Implement the sole client component**

Create `ExperienceTimeline.tsx` with `"use client"`, `useSearchParams`, and local `Set<string>` expansion state.

Required behavior:

- Compute `activeFocus = parseFocus(searchParams.get("focus") ?? undefined)`.
- Render focus options as real `<button type="button">` elements with `aria-pressed`.
- Keep the focus control group sticky below the viewport edge, horizontally scrollable on narrow screens, and fully operable by keyboard.
- On selection, call `window.history.pushState(null, "", buildFocusHref(focus))`; Next.js 16 integrates native history calls with `useSearchParams`.
- Keep every role in the DOM.
- Treat all outcomes as matches for `all`; otherwise match `outcome.focuses.includes(activeFocus)`.
- Render the first two outcomes by default. Render additional outcomes only while that role is expanded.
- Apply both text (`Matches {label}`) and styling to matching entries; reduce contrast on non-matching supporting content without hiding it.
- Show a visible status line: all mode uses `${roles.length} roles across web, mobile, backend, and leadership.`; focused mode uses `${count} roles include ${label.toLowerCase()} work.`.
- Give the status line `aria-live="polite"` and `aria-atomic="true"`.
- Use `aria-expanded`, `aria-controls={`${roleId}-details`}`, and labels `View more` / `Show less` for disclosures.
- Use stable IDs derived from company names, not array indexes.
- Render a compact earlier-career chapter after the full entries, outside disclosure state.

Wrap the component's `useSearchParams` usage in `<Suspense>` from the server page in Task 4, as required for a prerendered Next.js route.

- [ ] **Step 6: Run focused and full checks**

```bash
rtk pnpm exec tsx --test src/components/experience/experience-focus.test.ts src/components/experience/ExperienceTimeline.test.ts
rtk pnpm exec tsx --test "src/**/*.test.ts" "scripts/**/*.test.ts"
rtk pnpm lint
```

Expected: all PASS with no lint warnings introduced.

- [ ] **Step 7: Commit the interaction unit**

```bash
rtk git add src/components/experience/experience-focus.ts src/components/experience/experience-focus.test.ts src/components/experience/ExperienceTimeline.tsx src/components/experience/ExperienceTimeline.test.ts
rtk git commit -m "feat: add focusable career timeline"
```

---

### Task 4: Assemble the `/experience` route and verify the complete product flow

**Files:**
- Create: `src/app/experience/page.tsx`
- Modify only if required by an observed defect: `src/app/globals.css`

**Interfaces:**
- Consumes: `experienceConfig`, `ExperienceTimeline`, existing `Button`, `SectionLabel`, `Footer`, and `aboutConfig.links`.
- Produces: the public `/experience` route and complete recruiter flow.

- [ ] **Step 1: Write the failing route structure test**

Create `src/app/experience/page.test.ts`:

```ts
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("experience route contains metadata, timeline, CV access, and contact", async () => {
  const source = await readFile(new URL("./page.tsx", import.meta.url), "utf8");
  assert.match(source, /export const metadata/);
  assert.match(source, /<ExperienceTimeline/);
  assert.match(source, /More CV versions/);
  assert.match(source, /aboutConfig\.links\.email/);
  assert.match(source, /<Footer/);
});
```

Run:

```bash
rtk pnpm exec tsx --test src/app/experience/page.test.ts
```

Expected: FAIL with `ENOENT` for `page.tsx`.

- [ ] **Step 2: Build the server page**

Create `src/app/experience/page.tsx` with:

- Static `Metadata` title `Experience · Dalton Castro` and a description mentioning 15 years of web and mobile product delivery.
- `<main id="main-content">` so the existing skip link has a destination.
- A restrained forge hero reusing `SectionLabel`, existing typography, borders, and colors rather than the animated homepage backdrop.
- Primary `Download CV` as a plain `<a href={primaryCv.href} download>` styled like the existing primary button; downloads are internal files, so do not open a new tab.
- Email and LinkedIn actions from `aboutConfig.links`.
- Native `<details>` / `<summary>` labeled `More CV versions`, listing the three secondary CVs as download links.
- `<Suspense fallback={<p>Loading career focus…</p>}>` around `<ExperienceTimeline roles={experienceConfig.roles} earlierCareer={experienceConfig.earlierCareer} />`.
- Server-rendered education and languages.
- A closing contact section and the existing `<Footer />`.

Do not accept the page `searchParams` prop: Next.js 16 documents `useSearchParams` for client-only filtering of an already-loaded list, and avoiding the page prop preserves static rendering.

- [ ] **Step 3: Run route tests, lint, type checking, and production build**

```bash
rtk pnpm exec tsx --test src/app/experience/page.test.ts
rtk pnpm exec tsx --test "src/**/*.test.ts" "scripts/**/*.test.ts"
rtk pnpm lint
rtk pnpm exec tsc --noEmit
rtk pnpm build
rtk git diff --check
```

Expected: every command PASS; the build includes `/experience` and reports no prerendering or Suspense error.

- [ ] **Step 4: Start the production server for browser verification**

```bash
rtk pnpm start
```

Using the browser, verify at desktop and mobile widths:

1. `/` displays the three-milestone preview between Projects and About.
2. `Explore the full journey` reaches `/experience`.
3. The hero communicates role, experience, location, and primary CV action without scrolling.
4. `Download CV` and all three secondary download links return PDFs.
5. Selecting Mobile changes the URL to `/experience?focus=mobile`, keeps every employer visible, adds visible matching labels, and reports the correct role count.
6. Reloading the focused URL restores Mobile; `/experience?focus=invalid` resolves visually to All.
7. Browser Back returns to the previous focus.
8. `View more` exposes supporting outcomes, changes to `Show less`, and collapses independently per role.
9. Tab and Shift+Tab reach every filter, disclosure, download, and contact action in a logical order with a visible focus ring.
10. At a narrow mobile width, there is no page-level horizontal overflow; the focus controls remain usable.
11. With reduced motion enabled, no information or state change depends on animation.
12. The browser console has no error or hydration warning.

- [ ] **Step 5: Inspect the four final PDFs visually**

Render each public PDF to temporary PNGs under `tmp/pdfs/`, inspect every page for clipping or corruption, then remove the PNG intermediates:

```bash
mkdir -p tmp/pdfs
for file in public/cv/*.pdf; do pdftoppm -png "$file" "tmp/pdfs/$(basename "$file" .pdf)"; done
```

Expected: all pages remain legible and byte-identical to their verified source PDFs.

- [ ] **Step 6: Commit the completed experience page**

```bash
rtk git add src/app/experience/page.tsx src/app/experience/page.test.ts src/app/globals.css
rtk git commit -m "feat: launch interactive experience page"
```

Do not stage `src/app/globals.css` if it required no change. Do not stage the user's pre-existing `src/app/opengraph-image.tsx` or `tsconfig.json` changes.

- [ ] **Step 7: Record final evidence**

Run and retain the output for handoff:

```bash
rtk git status --short
rtk git log -5 --oneline
rtk pnpm exec tsx --test "src/**/*.test.ts" "scripts/**/*.test.ts"
rtk pnpm lint
rtk pnpm exec tsc --noEmit
rtk pnpm build
rtk git diff --check
```

Report automated results separately from the desktop/mobile browser checks and PDF visual inspection. Explicitly list any verification that could not be completed.
