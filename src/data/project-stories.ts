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
    outcome: "Import, arrange, preview, and export numbered tiles. Web exports a ZIP; the mobile implementation saves through Skia to Photos. Cloud backup remains deferred.",
  },
  "grip-apps": {
    status: "Personal project · Study & job search",
    ownership: "My work: web and mobile flows, shared practice logic, and Supabase data layer.",
    problem: "Bring interview preparation and application follow-ups into one place, with progress that carries between web and mobile.",
    decision: "Score an architecture diagram and its explanation separately. Readiness stays unassessed until the reasoning is graded, so drawing the right boxes alone cannot count as passing the exercise.",
    outcome: "Web and mobile share practice content and scoring. Users can work through quizzes, architecture exercises, and STAR stories, then track application stages and follow-ups.",
  },
  lambari: {
    status: "Learning prototype · Simulated payments",
    ownership: "My work: Go scoring engine, ingestion pipeline, and live React dashboard.",
    problem: "Explore how payment-risk rules behave under concurrent traffic, and make their decisions visible to an analyst.",
    decision: "Commit Kafka offsets only after scoring and successful verdict publication. A crash can replay work, so delivery is at-least-once rather than exactly-once. The live dashboard is outside that delivery guarantee.",
    outcome: "A runnable HTTP/Kafka proof of concept with a simulator and live review queue. Benchmarks and delivery trade-offs are documented in the repository; this is not a production fraud service.",
  },
};
