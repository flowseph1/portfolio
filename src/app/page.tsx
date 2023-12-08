import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import {
  getExperiences,
  getProjects,
  getTechnologies,
} from "@/lib/api-request";

export default async function Home() {
  const [experiences, projects, technologies] = await Promise.all([
    getExperiences(),
    getProjects(),
    getTechnologies(),
  ]);

  return (
    <main>
      <Hero />
      <TechStack technologies={technologies} />
      <Projects projects={projects} />
      <Experience experience={experiences} />
    </main>
  );
}
