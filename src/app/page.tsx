import { AboutSection } from "@/components/about/AboutSection";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { StatsStrip } from "@/components/stats/StatsStrip";
import { getPortfolioStats, getProjects } from "@/lib/projects";
import { Analytics } from "@vercel/analytics/next"

export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();
  const stats = getPortfolioStats(projects);

  return (
    <main>
      <Analytics />
      <Hero />
      <StatsStrip stats={stats} />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <Footer />
    </main>
  );
}
