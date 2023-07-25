import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { getDomain } from "@/lib/utils";
import { ApiResponse, ExperienceData, ProjectData } from "@/types";

export default async function Home() {
  const domain = getDomain();

  const res = await fetch(`${domain}/api/technologies`, {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });

  const res2 = await fetch(`${domain}/api/projects`, {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });

  const res3 = await fetch(`${domain}/api/experiences`, {
    method: "GET",
    next: {
      revalidate: 10,
    },
  });

  if (res.headers.get("Content-Type") !== "application/json") {
    return null;
  }

  if (res2.headers.get("Content-Type") !== "application/json") {
    return null;
  }

  if (res3.headers.get("Content-Type") !== "application/json") {
    return null;
  }

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
