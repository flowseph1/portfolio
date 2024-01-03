import {
  Project,
  Technology,
  categories,
  companies,
  experiences,
  experiencesProjects,
  projects,
  projectsTechnologies,
  technologies,
} from "@/lib/schema";
import { eq, sql } from "drizzle-orm";
import { db } from "./db";
import { ProjectData } from "@/types";

export async function getTechnologies() {
  return await db.select().from(technologies);
}

export async function getProjects() {
  const { _, ...rest } = projects;

  return await db
    .select({
      ...rest,
      categoryName: categories.name,
      companyName: companies.name,
      technologies: sql<string[]>`array_agg(${technologies.name})`,
    })
    .from(projects)
    .innerJoin(categories, eq(projects.categoryId, categories.id))
    .innerJoin(companies, eq(projects.companyId, companies.id))
    .innerJoin(
      projectsTechnologies,
      eq(projectsTechnologies.projectId, projects.id)
    )
    .innerJoin(technologies, eq(projectsTechnologies.techId, technologies.id))
    .groupBy(projects.id, categories.id, companies.name)
    .orderBy(projects.id);
}

export async function getExperiences() {
  const { _, ...rest } = experiences;

  return await db
    .select({
      ...rest,
      companyName: companies.name,
      projects: sql<string[]>`array_agg(${projects.name})`,
    })
    .from(experiences)
    .innerJoin(companies, eq(experiences.companyId, companies.id))
    .innerJoin(
      experiencesProjects,
      eq(experiencesProjects.experienceId, experiences.id)
    )
    .innerJoin(projects, eq(experiencesProjects.projectId, projects.id))
    .groupBy(experiences.id, companies.name);
}
