import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Dashboard } from "@/types/dashboard";

export default async function Home() {
  const dashboardReq = await fetch("http://localhost:3000/api/dashboard", {
    cache: "no-cache",
  });

  const dashboardData = (await dashboardReq.json()) as Dashboard;

  return (
    <main>
      <Hero />
      <TechStack technologies={dashboardData.technologies} />
      <Projects projects={dashboardData.projects} />
      <Experience experience={dashboardData.experience} />
    </main>
  );
}
