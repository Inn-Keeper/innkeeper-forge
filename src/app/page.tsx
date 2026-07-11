import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { StatsStrip } from "@/components/stats/StatsStrip";
import { getPortfolioStats, getProjects } from "@/lib/projects";

export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();
  const stats = getPortfolioStats(projects);

  return (
    <main>
      <Hero />
      <StatsStrip stats={stats} />
      <ProjectsSection projects={projects} />
      <Footer />
    </main>
  );
}
