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
