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
  const technologies = await getTechnologies();

  const projects = await getProjects();

  const experiences = await getExperiences();

  return (
    <main>
      <Hero />
      <TechStack technologies={technologies.data} />
      <Projects projects={projects.data} />
      <Experience experience={experiences.data} />
    </main>
  );
}
