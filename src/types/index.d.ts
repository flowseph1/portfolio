import { Experience, Project, Techonologie } from "@/lib/schema";

export type NavBarItem = {
  option: string;
  href: string;
};

export interface ProjectData extends Project {
  categoryName: string;
  technologies: string[];
}

export interface ExperienceData extends Experience {
  companyName: string;
  // experiences: string[];
}

export type ApiResponse<T> = {
  data: T;
  error?: {
    code: number;
    message: string;
  };
};
