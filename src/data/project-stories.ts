export const projectStories: Record<string, {
  status: string;
  ownership: string;
  problem: string;
  decision: string;
  outcome: string;
}> = {
  stretchy: {
    status: "Personal product · Web & mobile",
    ownership: "My work: composition editor, shared slicing logic, and export flow.",
    problem: "Arrange photos across slide boundaries so an Instagram carousel reads as one continuous composition.",
    decision: "Moving a cut line shifts the entire slice grid rather than resizing individual tiles. This keeps every export at 1080 × 1350 while letting the user choose where the cuts fall. Web and mobile share the slicing math.",
    outcome: "Import, arrange, preview, and export numbered tiles. Web exports a ZIP; the mobile implementation saves through Skia to Photos.",
  },
  "grip-apps": {
    status: "Personal project · Study & job search",
    ownership: "My work: web and mobile flows, shared practice logic, and Supabase data layer.",
    problem: "Bring interview preparation and application follow-ups into one place, with progress that carries between web and mobile.",
    decision: "Accept LLM grader feedback only when it is grounded in a verbatim source quote, so feedback must point back to the material being assessed.",
    outcome: "Interview preparation and hiring-pipeline tracking across web and mobile, with a Python/FastAPI grader using Gemini, built as self-directed project work.",
  },
  lambari: {
    status: "Learning prototype · Simulated payments",
    ownership: "My work: Go scoring engine, ingestion pipeline, and live React dashboard.",
    problem: "Explore how payment-risk rules behave under concurrent traffic, and make their decisions visible to an analyst.",
    decision: "Commit Kafka offsets only after scoring and successful verdict publication. A crash can replay work, so delivery is at-least-once rather than exactly-once. The live dashboard is outside that delivery guarantee.",
    outcome: "A payment-fraud scoring prototype with velocity analysis, an analyst case queue, SSE updates, and throughput benchmarks. This is a learning project, not a production fraud service.",
  },
  intygy: {
    status: "Personal product · MVP",
    ownership: "My work: GitHub Action scanner, ingest API, and evidence reports.",
    problem: "Catch new accessibility violations in the pull request that introduces them, and keep a dated record of what was fixed.",
    decision: "Fingerprint each failing element by rule, route, viewport, and exact selector, then compare against a baseline. Known issues do not block a pull request; only new ones do. Each scan and its baseline changes commit in one database transaction.",
    outcome: "A GitHub Action that scans rendered routes with Playwright and axe-core, a Hono API that comments on the pull request and fails the check, and an EN 301 549 evidence page built from merge history. This is an MVP, not a launched service.",
  },
};
