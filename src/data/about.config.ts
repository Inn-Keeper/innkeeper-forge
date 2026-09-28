import { portfolioConfig } from "@/data/repos.config";

const experienceYears = 15;

export const aboutConfig = {
  name: "Dalton Moraes de Castro",
  shortName: "Dalton Castro",
  role: "Software Engineer",
  location: "Stockholm, Sweden",
  experienceYears,
  headline: `Product-minded engineer, ${experienceYears} years shipping web and mobile software.`,
  bio: [
    "Hi there! I'm a software engineer who likes staying close to the product and business goals, understanding the problem, building the interface, wiring it up and seeing how everything behaves once it's live.",
    "Most of my work lives in the React and TypeScript world, building web experiences and React Native mobile apps, from complex UI state to observability, applying the engineering principles. I've shipped software in healthcare with Philips Tasy EMR, regulated iGaming such as LeoVegas, and enterprise tooling, including extensions for Azure DevOps.",
    "The Inn-Keeper name is inspired by the dependable characters in games who make sure adventurers have what they need for the journey ahead. If something here sparks your curiosity, reach out.",
    "Off the clock, I'm a heavy metal fan, guitarist and songwriter for a band called Ignited, an old-school gaming enthusiast, and willing to explore every single centimeter of a good open-world RPG.",
  ],
  interests: [
    "Heavy metal",
    "Songwriting",
    "Old-school games",
    "Open-world RPGs",
  ],
  focus: [
    "React & TypeScript",
    "React Native & Expo",
    "Product engineering",
    "Ownership & autonomy",
    "End-to-end delivery",
  ],
  links: {
    email: "mailto:daltonmcastro@gmail.com",
    github: `https://github.com/${portfolioConfig.githubUsername}`,
    linkedin: "https://www.linkedin.com/in/dalton-castro-5a724963",
  },
};
