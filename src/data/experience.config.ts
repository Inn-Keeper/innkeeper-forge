export const focusOptions = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "mobile", label: "Mobile" },
  { value: "backend", label: "Backend" },
  { value: "leadership", label: "Architecture & Leadership" },
] as const;

export type Focus = (typeof focusOptions)[number]["value"];
export type CareerFocus = Exclude<Focus, "all">;

export interface CareerOutcome {
  text: string;
  focuses: CareerFocus[];
}

export interface CareerRole {
  company: string;
  location: string;
  role: string;
  period: string;
  start: string;
  context: string;
  outcomes: CareerOutcome[];
  technologies: { label: string; focuses: CareerFocus[] }[];
}

export interface EarlierCareerRole {
  company: string;
  role: string;
  period: string;
  summary: string;
}

export const experienceConfig = {
  hero: {
    name: "Dalton Castro",
    role: "Senior Engineer",
    headline: "15 years building web and mobile products.",
    location: "Stockholm, Sweden",
  },
  milestones: [
    {
      year: "2011",
      title: "Engineering career begins",
      description: "Enterprise Java and business intelligence systems in Brazil.",
    },
    {
      year: "2017",
      title: "Architecture at healthcare scale",
      description: "Shared framework work for Philips Tasy EMR and its product teams.",
    },
    {
      year: "2021-present",
      title: "Regulated products and enterprise tooling",
      description: "Consumer platforms at LeoVegas and Azure DevOps products at Nooga.",
    },
  ],
  roles: [
    {
      company: "Nooga Solutions AB",
      location: "Stockholm, Sweden",
      role: "Software Engineer",
      period: "Aug 2025 - Present",
      start: "2025-08",
      context:
        "Enterprise extensions and product experiments distributed through the Azure Marketplace.",
      outcomes: [
        {
          text: "Cut most SAFe dashboard request times from several minutes to milliseconds through data chunking, concurrency controls, and telemetry instrumentation.",
          focuses: ["frontend", "backend"],
        },
        {
          text: "Implemented role-based access control covering four product roles and Azure DevOps-specific ownership cases.",
          focuses: ["frontend", "backend", "leadership"],
        },
        {
          text: "Build React and TypeScript extensions for Azure DevOps used by enterprise customers.",
          focuses: ["frontend"],
        },
        {
          text: "Contribute backend fixes and features to Azure Functions powering the license checker and risk extension.",
          focuses: ["backend"],
        },
        {
          text: "Own GitHub security workflows and the Playwright end-to-end suite; investigate incidents with Application Insights and KQL.",
          focuses: ["frontend", "leadership"],
        },
        {
          text: "Partner with Product and Sales on telemetry-led prototypes to test business goals before full development.",
          focuses: ["leadership"],
        },
      ],
      technologies: [
        { label: "React", focuses: ["frontend"] },
        { label: "TypeScript", focuses: ["frontend", "backend"] },
        { label: "Azure DevOps", focuses: ["leadership"] },
        { label: "Playwright", focuses: ["frontend"] },
        { label: "Application Insights", focuses: ["backend"] },
      ],
    },
    {
      company: "LeoVegas Group",
      location: "Stockholm, Sweden",
      role: "JavaScript Engineer",
      period: "Apr 2021 - Apr 2025",
      start: "2021-04",
      context:
        "A regulated, multi-brand consumer platform serving hundreds of thousands of users across web, iOS, and Android.",
      outcomes: [
        {
          text: "Delivered customer-facing React, TypeScript, and GraphQL features for LeoVegas.com and its multi-brand organization.",
          focuses: ["frontend"],
        },
        {
          text: "Shipped web features inside the Ionic casino and sports app and an early React Native app across iOS and Android.",
          focuses: ["frontend", "mobile"],
        },
        {
          text: "Contributed to brand launches and market expansions on the shared platform.",
          focuses: ["frontend", "leadership"],
        },
        {
          text: "Contributed to early group API capabilities in a NestJS monorepo.",
          focuses: ["frontend", "backend"],
        },
        {
          text: "Supported production quality through Datadog and Grafana investigation, testing, code review, and LaunchDarkly experiments.",
          focuses: ["frontend", "leadership"],
        },
      ],
      technologies: [
        { label: "React", focuses: ["frontend"] },
        { label: "TypeScript", focuses: ["frontend", "backend"] },
        { label: "GraphQL", focuses: ["frontend", "backend"] },
        { label: "React Native", focuses: ["mobile"] },
        { label: "NestJS", focuses: ["backend"] },
        { label: "GCP", focuses: ["backend"] },
      ],
    },
    {
      company: "Dot Digital Group",
      location: "Florianopolis, Brazil",
      role: "Analyst Developer",
      period: "Jan 2021 - Mar 2021",
      start: "2021-01",
      context: "A mobile micro-learning product delivered across native and cross-platform code.",
      outcomes: [
        {
          text: "Built mobile learning features with Swift and React Native.",
          focuses: ["mobile"],
        },
      ],
      technologies: [
        { label: "React Native", focuses: ["mobile"] },
        { label: "Swift", focuses: ["mobile"] },
      ],
    },
    {
      company: "CDA/WEDEV",
      location: "Balneario Camboriu, Brazil",
      role: "Software Architect",
      period: "Apr 2018 - Jan 2021",
      start: "2018-04",
      context:
        "Client web and mobile products spanning discovery, architecture, implementation, and release.",
      outcomes: [
        {
          text: "Led React Native delivery for iOS and Android from architecture and design through App Store release.",
          focuses: ["mobile", "leadership"],
        },
        {
          text: "Built live video and audio calling on OpenTok, including session and stream management across both mobile platforms.",
          focuses: ["mobile", "backend"],
        },
        {
          text: "Designed web and mobile application architectures spanning UX and backend work.",
          focuses: ["frontend", "mobile", "backend", "leadership"],
        },
        {
          text: "Led customer and leadership requirements workshops while mentoring developers and interviewing candidates.",
          focuses: ["leadership"],
        },
      ],
      technologies: [
        { label: "React Native", focuses: ["mobile"] },
        { label: "OpenTok", focuses: ["mobile", "backend"] },
        { label: "Redux", focuses: ["frontend", "mobile"] },
        { label: "Firebase", focuses: ["mobile", "backend"] },
      ],
    },
    {
      company: "Philips Informatics",
      location: "Blumenau, Brazil",
      role: "Systems Architect",
      period: "Apr 2017 - Apr 2018",
      start: "2017-04",
      context:
        "Core architecture for Philips Tasy EMR, an electronic medical record product used worldwide.",
      outcomes: [
        {
          text: "Built shared AngularJS framework components for Philips Tasy EMR as part of the core architecture team, supporting dozens of engineers across product modules.",
          focuses: ["frontend", "leadership"],
        },
        {
          text: "Built patient-test graphing components and maintained Java services for clinical workflows.",
          focuses: ["frontend", "backend"],
        },
      ],
      technologies: [
        { label: "AngularJS", focuses: ["frontend"] },
        { label: "Java", focuses: ["backend"] },
        { label: "Platform architecture", focuses: ["leadership"] },
      ],
    },
    {
      company: "Pointer-Cielo",
      location: "Passo Fundo, Brazil",
      role: "Full-stack Web Developer",
      period: "Jun 2015 - Feb 2017",
      start: "2015-06",
      context: "Vehicle tracking, data integration, and live monitoring systems.",
      outcomes: [
        {
          text: "Owned the architecture for a monitoring prototype with Oracle-to-MongoDB ETL and live WebSocket updates.",
          focuses: ["frontend", "backend", "leadership"],
        },
        {
          text: "Avoided Oracle real-time licensing costs by retaining it as the system of record and adding MongoDB with application-level polling.",
          focuses: ["backend", "leadership"],
        },
        {
          text: "Built Java and Oracle data-mining solutions for operational products.",
          focuses: ["backend"],
        },
      ],
      technologies: [
        { label: "Java", focuses: ["backend"] },
        { label: "WebSockets", focuses: ["frontend", "backend"] },
        { label: "MongoDB", focuses: ["backend"] },
        { label: "Oracle", focuses: ["backend"] },
      ],
    },
  ] satisfies CareerRole[],
  earlierCareer: [
    {
      company: "Ativsoft Web Systems",
      role: "Co-founder",
      period: "Feb 2014 - Apr 2015",
      summary: "Ran PHP web development and consultancy projects for clients.",
    },
    {
      company: "Sao Joao Pharmacies",
      role: "Java Web Developer",
      period: "Nov 2013 - Jan 2014",
      summary: "Developed a Java point-of-sale system for a national pharmacy chain.",
    },
    {
      company: "DBSite",
      role: "Web Developer",
      period: "Apr 2012 - Oct 2013",
      summary: "Built e-commerce platforms and websites with payment integrations.",
    },
    {
      company: "Compasso Tecnologia",
      role: "Java Web Developer",
      period: "Mar 2011 - Mar 2012",
      summary: "Developed internal business-intelligence systems for enterprise clients.",
    },
  ] satisfies EarlierCareerRole[],
  education: {
    qualification: "Associate Degree, Systems for Internet",
    institution: "University of Passo Fundo, Brazil",
    period: "2010 - 2014",
  },
  languages: [
    { language: "English", level: "Fluent" },
    { language: "Portuguese", level: "Native" },
    { language: "Swedish", level: "B1 (reading and writing)" },
    { language: "Spanish", level: "Reading comprehension" },
  ],
  cvs: [
    { label: "Full-stack", href: "/cv/Dalton_Castro_Fullstack_CV.pdf", primary: true },
  ],
};
