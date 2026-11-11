import { ExperienceSection } from "@/components/about/ExperienceSection";
import { AboutSection } from "@/components/about/AboutSection";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AiRoomBand } from "@/components/stats/AiRoomBand";
import { StatsStrip } from "@/components/stats/StatsStrip";
import { getProjects } from "@/lib/projects";
import { Analytics } from "@vercel/analytics/next"

export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <main id="main-content">
      <Analytics />
      <Hero />
      <StatsStrip />
      <AiRoomBand />
      <ExperienceSection />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <Footer />
    </main>
  );
}
