import { Techonologie } from "@/lib/schema";
import { ApiResponse, ExperienceData, ProjectData } from "@/types";

export async function getTechnologies(): Promise<ApiResponse<Techonologie[]>> {
  const res = await fetch(`${process.env.URL}/api/technologies`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error fetching technologies");
  }

  return res.json();
}

export async function getProjects(): Promise<ApiResponse<ProjectData[]>> {
  const res = await fetch(`${process.env.URL}/api/projects`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error fetching technologies");
  }

  return res.json();
}

export async function getExperiences(): Promise<ApiResponse<ExperienceData[]>> {
  const res = await fetch(`${process.env.URL}/api/experiences`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error fetching technologies");
  }

  return res.json();
}
