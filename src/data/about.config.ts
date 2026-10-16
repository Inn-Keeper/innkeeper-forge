import { portfolioConfig } from "@/data/repos.config";

const experienceYears = 15;

export const aboutConfig = {
  name: "Dalton Moraes de Castro",
  shortName: "Dalton Castro",
  role: "Senior Engineer",
  location: "Stockholm, Sweden",
  experienceYears,
  headline: `Product-minded engineer, ${experienceYears} years shipping web and mobile software.`,
  bio: [
    "I like understanding the problem before building, working closely with product teams, and following what happens after release.",
    "The Inn-Keeper name comes from the characters in games who help adventurers prepare for the journey ahead.",
    "Outside work, I’m a guitarist and songwriter with Ignited, a heavy metal fan, and an old-school gaming enthusiast. I’ll happily spend hours exploring a good open-world RPG.",
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
