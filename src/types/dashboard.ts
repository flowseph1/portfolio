import { Experience, Project, Technology } from "@/lib/schema";

export type Dashboard = {
  projects: Project[];
  technologies: Technology[];
  experience: Experience[];
};
