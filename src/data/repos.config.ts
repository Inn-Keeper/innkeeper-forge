import type { RepoConfig } from "@/types/project";

export const portfolioConfig = {
  githubUsername: "Inn-Keeper",
  defaults: {
    visible: false,
  },
  repos: {
    "ativscrum": {
      visible: true,
      span: "medium",
      demoUrl: "https://ativscrum.vercel.app",
      technologies: ["React 19", "Motion", "dnd-kit", "Tailwind CSS 4"],
      description:
        "A 2013 university Scrum tool, reborn as an animated 2026 single-page app.",
    },
    "tech-refresh": {
      visible: true,
      featured: true,
      technologies: ["Expo", "React Native", "Vite", "TanStack", "Supabase"],
      description:
        "Grip hiring pipeline tooling with funnel analytics, velocity tracking, and Supabase auth.",
    },
    "intygy": {
      visible: true,
      featured: true,
      span: "large",
      technologies: ["Playwright", "axe-core", "Hono"],
      description:
        "Accessibility compliance reviewed in every pull request. Blocks WCAG 2.2 regressions and builds EN 301 549 evidence dossiers.",
    },
    "psycho-api": {
      visible: true,
      featured: true,
      span: "medium",
      technologies: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Anthropic API"],
      description:
        "Python backend for PsychoAI psychometric interview analysis and reporting.",
    },
    "dev-panel": {
      visible: true,
      featured: true,
      span: "large",
      technologies: ["Ratatui", "Crossterm"],
      description:
        "Terminal dashboard for local dev processes, ports, and services.",
    },
    "grip-pipeline-service": {
      visible: true,
      featured: true,
      span: "large",
      technologies: ["Spring Boot", "Spring Data JPA", "PostgreSQL"],
      description:
        "Spring Boot hiring-pipeline analytics and reminders over Grip's Supabase Postgres.",
    },
    "midiremapper": {
      visible: true,
      span: "medium",
      technologies: ["JUCE", "CMake", "Catch2"],
      description:
        "macOS app for batch-converting drum MIDI files between library mappings. Drop files, detect, remap.",
    },
    "stitcher": {
      visible: true,
      span: "medium",
      featured: true,
      technologies: ["Expo", "React Native", "Vite", "TanStack", "Supabase"],
      description:
        "Mobile-first app that slices panoramas into Instagram 4:5 carousel tiles that flow as one continuous image.",
    },
    "psycho-ui": {
      visible: true,
      span: "medium",
      technologies: ["React", "Vite", "TanStack Query"],
      description:
        "React/Vite frontend for PsychoAI, a psychometric interview reporting application.",
    },

    "next-playground": {
      visible: true,
      span: "medium",
      technologies: ["Next.js", "NextAuth.js", "Redux Toolkit"],
      description: "Booking system experiment built with Next.js.",
    },
    "vizite-web": {
      visible: false,
      span: "medium",
      description: "Next.js web frontend experiment.",
    },
    "aurelia-playground": {
      visible: true,
      span: "medium",
      technologies: ["Aurelia 2", "Vite"],
      description:
        "Aurelia 2 learning project with routing, TMDB search, infinite scroll, and saved movies.",
    },
    "ignited-website": {
      visible: true,
      span: "medium",
      technologies: ["React", "Vite", "GSAP"],
      description:
        "Ignited band website prototype built from a Figma design as a code bundle.",
    },
    "linkcheck": {
      visible: true,
      technologies: ["Go"],
      description: "Simple link checker implemented in Go.",
    },
    "portrait-web": {
      visible: true,
      span: "medium",
      technologies: ["Astro", "React", "Supabase"],
      description: "Web frontend for the Portrait project.",
    },
    "portrait-admin": {
      visible: false,
      span: "medium",
      description: "Admin dashboard for the Portrait project.",
    },
    "den-project": {
      visible: false,
      span: "small",
      description: "Static web experiment and prototype.",
    },
    "snow-brawl": {
      visible: true,
      span: "medium",
      technologies: ["SFML", "Box2D", "EnTT"],
      description: "C++ game experiment with a snow-themed brawl prototype.",
    },
  } satisfies Record<string, RepoConfig>,
};
