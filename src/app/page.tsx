import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { getDomain } from "@/lib/utils";
import { ApiResponse, ExperienceData, ProjectData } from "@/types";

async function getTechnologies() {
  const domain = getDomain();

  const res = await fetch(`${domain}/api/technologies`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error fetching technologies");
  }

  return res.json();
}

async function getProjects() {
  const domain = getDomain();

  const res = await fetch(`${domain}/api/projects`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error fetching technologies");
  }

  return res.json();
}

async function getExperiences() {
  const domain = getDomain();

  const res = await fetch(`${domain}/api/experiences`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error fetching technologies");
  }

  return res.json();
}

export default async function Home() {
  const technologiesData = await getTechnologies();

  const projectsData = await getProjects();

  const experiencesData = await getExperiences();

  const [technologies, projects, experiences] = await Promise.all([
    technologiesData,
    projectsData,
    experiencesData,
  ]);

  return (
    <main>
      <Hero />
      <TechStack technologies={technologies.data} />
      <Projects projects={projects.data} />
      <Experience experience={experiences.data} />
    </main>
  );
}
