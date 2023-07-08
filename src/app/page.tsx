import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { dashboardData } from "@/data/dashboard";
import { Dashboard } from "@/types/dashboard";

export default async function Home() {
  /* const dashboardReq = await fetch("http://localhost:3000/api/dashboard", {
    cache: "no-cache",
  }); */

  const data = dashboardData;

  return (
    <main>
      <Hero />
      <TechStack technologies={data.technologies} />
      <Projects projects={data.projects} />
      <Experience experience={data.experience} />
    </main>
  );
}
