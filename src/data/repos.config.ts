import type { CollabConfig, RepoConfig } from "@/types/project";

export const portfolioConfig = {
  githubUsername: "Inn-Keeper",
  defaults: {
    visible: false,
  },
  repos: {
    "ativscrum": {
      visible: true,
      title: "ativScrum",
      span: "medium",
      demoUrl: "https://ativscrum.vercel.app",
      technologies: ["React 19", "Motion", "dnd-kit", "Tailwind CSS 4"],
      description:
        "A 2013 university Scrum tool, reborn as an animated 2026 single-page app.",
    },
    "tech-refresh": {
      visible: true,
      title: "Grip",
      featured: true,
      technologies: ["Expo", "React Native", "Vite", "TanStack", "Supabase"],
      description:
        "Interview prep and hiring pipeline manager. Web and React Native apps share one Supabase Postgres, with funnel analytics, stage velocity, and follow-up tracking.",
    },
    "intygy": {
      visible: true,
      title: "Intygy",
      featured: true,
      span: "large",
      technologies: ["Playwright", "axe-core", "Hono"],
      description:
        "Accessibility compliance reviewed in every pull request. Blocks WCAG 2.2 regressions and builds EN 301 549 evidence dossiers.",
    },
    "assembly-demo": {
      visible: true,
      title: "Assembly",
      featured: true,
      technologies: ["Next.js", "React Three Fiber", "WebSockets", "PostgreSQL"],
      description:
        "Collaborative 3D hardware design review. Reviewers join a shared room, inspect assemblies in exploded or isolated views, and comment live over WebSockets, with SQLite or Postgres persistence.",
    },
    "psycho-api": {
      visible: true,
      title: "PsychoAI API",
      span: "medium",
      technologies: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Anthropic API"],
      description:
        "Python backend for PsychoAI psychometric interview analysis and reporting.",
    },
    "dev-panel": {
      visible: true,
      title: "Dev Panel",
      span: "large",
      technologies: ["Ratatui", "Crossterm"],
      description:
        "Terminal dashboard for local dev processes, ports, and services.",
    },
    "grip-pipeline-service": {
      visible: true,
      title: "Grip Pipeline Service",
      span: "large",
      technologies: ["Spring Boot", "Spring Data JPA", "PostgreSQL"],
      description:
        "Spring Boot hiring-pipeline analytics and reminders over Grip's Supabase Postgres.",
    },
    "midiremapper": {
      visible: true,
      title: "MIDI Remapper",
      span: "medium",
      technologies: ["JUCE", "CMake", "Catch2"],
      description:
        "macOS app for batch-converting drum MIDI files between library mappings. Drop files, detect, remap.",
    },
    "stretchy": {
      visible: true,
      title: "Stretchy",
      span: "medium",
      featured: true,
      technologies: ["Expo", "React Native", "Skia", "Supabase"],
      description:
        "Mobile-first app that slices panoramas into Instagram 4:5 carousel tiles that flow as one continuous image.",
    },
    "psycho-ui": {
      visible: true,
      title: "PsychoAI UI",
      span: "medium",
      technologies: ["React", "Vite", "TanStack Query"],
      description:
        "React/Vite frontend for PsychoAI, a psychometric interview reporting application.",
    },

    "next-playground": {
      visible: false,
      span: "medium",
      technologies: ["Next.js", "NextAuth.js", "Redux Toolkit"],
      description: "Booking system experiment built with Next.js.",
    },
    "kotlin-study": {
      visible: true,
      title: "Kotlin Study",
      span: "medium",
      technologies: ["Kotlin", "Gradle", "Ktor", "kotlinx.serialization"],
      description:
        "Terminal task tracker for learning idiomatic Kotlin, with JSON persistence, Ktor enrichment, structured concurrency, and raw terminal input.",
    },
    "vizite-web": {
      visible: false,
      span: "medium",
      description: "Next.js web frontend experiment.",
    },
    "aurelia-playground": {
      visible: false,
      span: "medium",
      technologies: ["Aurelia 2", "Vite"],
      description:
        "Aurelia 2 learning project with routing, TMDB search, infinite scroll, and saved movies.",
    },
    "ignited-website": {
      visible: true,
      title: "Ignited Website",
      span: "medium",
      technologies: ["React", "Vite", "GSAP"],
      description:
        "Ignited band website prototype built from a Figma design as a code bundle.",
    },
    "linkcheck": {
      visible: true,
      title: "linkcheck",
      description:
        "Concurrent broken-link checker CLI. Crawls same-host pages and reports every failing link, with worker pools, graceful cancellation, retries, and per-host rate limiting.",
    },
    "portrait-web": {
      visible: true,
      title: "Portrait",
      span: "medium",
      technologies: ["Astro", "React", "Supabase"],
      description:
        "Web frontend for Cult of Grain, a curated photography portfolio of landscape, portrait, and editorial work.",
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
      title: "Snow Brawl",
      span: "medium",
      technologies: ["SFML", "Box2D", "EnTT"],
      description: "C++ game experiment with a snow-themed brawl prototype.",
    },

    "lambari": {
      visible: true,
      title: "Lambari",
      featured: true,
      span: "large",
      technologies: ["Kafka", "React", "Server-Sent Events"],
      description:
        "Real-time fraud scoring pipeline. A Go worker-pool engine scores payment transactions against velocity, geo, amount, and merchant-risk rules, fed over HTTP or Kafka, and streams verdicts to a live React dashboard. Named after a tiny Brazilian fish.",
    },
    "grip-ai-api": {
      visible: true,
      title: "Grip AI API",
      span: "medium",
      technologies: ["FastAPI", "Pydantic", "Gemini", "Supabase"],
      description:
        "Talk-track grading service for Grip. Supabase-authenticated FastAPI with strict-output, evidence-required model grading.",
    },
    "ativscrum-ai-api": {
      visible: true,
      title: "ativScrum AI API",
      span: "medium",
      technologies: ["FastAPI", "Pydantic", "Gemini", "Supabase"],
      description:
        "Stateless AI service for ativScrum team boards. Validates Supabase sessions, reads only through row-level security, enforces a daily quota, and returns strictly validated Gemini suggestions without storing prompts.",
    },
    "fretboard-chaos": {
      visible: true,
      title: "Fretboard Chaos",
      span: "medium",
      technologies: ["React", "Vite", "Tailwind CSS 4", "Web Audio API"],
      description:
        "Interactive guitar-theory workspace for learning the neck as connected geometry and musical motion, not isolated boxes to memorize.",
    },
    "testing-practices": {
      visible: false,
      span: "medium",
      technologies: ["Vitest", "Playwright", "Stryker", "fast-check"],
      description:
        "Learning repo covering modern software testing practices, with references and a runnable TypeScript example per topic.",
    },
    "innkeeper-forge": {
      visible: true,
      title: "Innkeeper Forge",
      span: "medium",
      technologies: ["Next.js 16", "React 19", "Motion", "React Three Fiber"],
      description:
        "This portfolio. A dark forge-themed site that syncs its own project list from GitHub.",
    },
    "ativscrum-landing": {
      visible: false,
      span: "small",
      description: "Portfolio landing page for ativScrum.",
    },
    "ativscrum-legacy": {
      visible: false,
      span: "small",
      description: "Original 2013 ativScrum source, provenance for the rebuild.",
    },
    "stretchy-landing": {
      visible: false,
      span: "small",
      description: "Portfolio landing page for Stretchy.",
    },
    "matematica": {
      visible: true,
      title: "Matemática",
      technologies: ["Expo", "React Native", "Vite", "Supabase"],
      description:
        "Month-to-month personal finance app for web and mobile, built to replace an old Excel sheet.",
    },
    "matematica-ai-api": {
      visible: true,
      title: "Matemática AI API",
      technologies: ["FastAPI", "Gemini", "Supabase"],
      description:
        "Insights chat service for Matemática. FastAPI on Gemini, authenticated with the caller's Supabase token so row-level security applies and no service key is needed.",
    },
  } satisfies Record<string, RepoConfig>,
  // Repos owned by someone else, listed by hand (not fetched from GitHub).
  collaborations: {
    "speedz-tail": {
      title: "SpeedzTail",
      owner: "joelpiccoli",
      ownerName: "Joel Piccoli",
      role: "UI/UX, game experience, and soundtrack (full composition and arrangements)",
      inProgress: true,
      span: "medium",
      technologies: ["React Native", "Pro Tools"],
      description: "Infinite 2D car racing game.",
    },
  } satisfies Record<string, CollabConfig>,
};
