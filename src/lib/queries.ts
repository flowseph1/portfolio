import { dashboardData } from "@/data/dashboard";
import { db } from "@/lib/db";
import {
  Project,
  Techonologie,
  categories,
  companies,
  experiences,
  experiencesProjects,
  projects,
  projectsTechnologies,
  technologies,
} from "@/lib/schema";
import { eq, sql } from "drizzle-orm";

export const setSeedData = async () => {
  await insertProjects();
};

const insertCategories = async () => {
  await db.insert(categories).values([
    {
      name: "Web development",
    },
    {
      name: "Movil development",
    },
  ]);
};

const insertProjects = async () => {
  await db.insert(projects).values(dashboardData.projects);
};

export const getTechnologies = async () => {
  return await db.select().from(technologies);
};

export const getProjects = async () => {
  const { _, ...rest } = projects;

  return await db
    .select({
      ...rest,
      categoryName: categories.name,
      companyName: companies.name,
      technologies: sql<Techonologie[]>`array_agg(${technologies.name})`,
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
};

export const getExperiences = async () => {
  const { _, ...rest } = experiences;

  return await db
    .select({
      ...rest,
      companyName: companies.name,
      projects: sql<Project[]>`array_agg(${projects.name})`,
    })
    .from(experiences)
    .innerJoin(companies, eq(experiences.companyId, companies.id))
    .innerJoin(
      experiencesProjects,
      eq(experiencesProjects.experienceId, experiences.id)
    )
    .innerJoin(projects, eq(experiencesProjects.projectId, projects.id))
    .groupBy(experiences.id, companies.name);
};
