import { db } from "@/lib/db";
import {
  Project,
  companies,
  experiences,
  experiencesProjects,
  projects,
} from "@/lib/schema";
import { eq, sql } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getExperiences();
    return NextResponse.json({
      data,
    });
  } catch (error) {
    console.log("route.ts -> 11", error);
    return NextResponse.json({
      error: {
        message: error,
      },
    });
  }
}

async function getExperiences() {
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
}
