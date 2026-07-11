import type { RepoConfig } from "@/types/project";

export const portfolioConfig = {
  githubUsername: "Inn-Keeper",
  defaults: {
    visible: true,
  },
  repos: {
    "dev-panel": {
      visible: true,
      featured: true,
      span: "large",
      description:
        "Terminal dashboard for local dev processes, ports, and services.",
    },
    "grip-pipeline-service": {
      visible: true,
      featured: true,
      span: "large",
      description:
        "Spring Boot hiring-pipeline analytics and reminders over Grip's Supabase Postgres.",
    },
    "next-playground": {
      visible: true,
      span: "medium",
      description: "Booking system experiment built with Next.js.",
    },
    "vizite-web": {
      visible: true,
      span: "medium",
      description: "Next.js web frontend experiment.",
    },
    "tech-refresh": {
      visible: false,
      description:
        "Grip — hiring pipeline tooling with funnel analytics, velocity tracking, and Supabase auth.",
    },
    "intygy": {
      visible: true,
      featured: true,
      span: "large",
      description:
        "Accessibility compliance reviewed in every pull request — blocks WCAG 2.2 regressions and builds EN 301 549 evidence dossiers.",
    },
    "midiremapper": {
      visible: true,
      span: "medium",
      description:
        "macOS app for batch-converting drum MIDI files between library mappings. Drop files, detect, remap.",
    },
    "stitcher": {
      visible: true,
      span: "medium",
      description:
        "Mobile-first app that slices panoramas into Instagram 4:5 carousel tiles that flow as one continuous image.",
    },
    "psycho-ui": {
      visible: true,
      span: "medium",
      description:
        "React/Vite frontend for PsychoAI — a psychometric interview reporting application.",
    },
    "psycho-api": {
      visible: true,
      span: "medium",
      description:
        "Python backend for PsychoAI psychometric interview analysis and reporting.",
    },
    "aurelia-playground": {
      visible: true,
      span: "medium",
      description:
        "Aurelia 2 learning project — movie browser with routing, TMDB search, infinite scroll, and saved movies.",
    },
    "ignited-website": {
      visible: true,
      span: "medium",
      description:
        "Ignited band website prototype — built from Figma design as a code bundle.",
    },
    "portrait-web": {
      visible: true,
      span: "medium",
      description: "Web frontend for the Portrait project.",
    },
    "portrait-admin": {
      visible: true,
      span: "medium",
      description: "Admin dashboard for the Portrait project.",
    },
    "den-project": {
      visible: true,
      span: "small",
      description: "Static web experiment and prototype.",
    },
    "snow-brawl": {
      visible: true,
      span: "medium",
      description: "C++ game experiment — snow-themed brawl prototype.",
    },
  } satisfies Record<string, RepoConfig>,
};
