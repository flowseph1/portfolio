import { db } from "@/lib/db";
import {
  Techonologie,
  categories,
  companies,
  projects,
  projectsTechnologies,
  technologies,
} from "@/lib/schema";
import { eq, sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await getProjects();

    return NextResponse.json({
      data: projects,
    });
  } catch (error) {
    return NextResponse.json({
      error: {
        message: error,
      },
    });
  }
}

async function getProjects() {
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
}
