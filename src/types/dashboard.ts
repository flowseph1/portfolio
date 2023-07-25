import { Experience, Project, Techonologie } from "@/lib/schema";

export type Dashboard = {
  projects: Project[];
  technologies: Techonologie[];
  experience: Experience[];
};
