import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { dashboardData } from "@/data/dashboard";
import { ApiResponse, ExperienceData, ProjectData } from "@/types";
import { Dashboard } from "@/types/dashboard";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/technologies", {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });

  const res2 = await fetch("http://localhost:3000/api/projects", {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });

  const res3 = await fetch("http://localhost:3000/api/experiences", {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });

  const technologies = await res.json();

  const projects = (await res2.json()) as ApiResponse<ProjectData[]>;

  const experiences = (await res3.json()) as ApiResponse<ExperienceData[]>;

  return (
    <main>
      <Hero />
      <TechStack technologies={technologies.data} />
      <Projects projects={projects.data} />
      <Experience experience={experiences.data} />
    </main>
  );
}
