import { InferModel, relations } from "drizzle-orm";
import {
  date,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

const platformEnum = pgEnum("platform", ["Web", "App"]);

export const technologies = pgTable("technologies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  logo: text("logo").notNull(),
  width: integer("width"),
  height: integer("height"),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  overview: text("overview").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  href: text("href").notNull(),
  tags: text("tags").array(),
  github: varchar("github", { length: 255 }),
  platform: platformEnum("platform").notNull(),
  short_description: text("short_description"),
  appStoreURL: text("app_store_url"),
  playStoreURL: text("play_store_url"),
  appGalleryURL: text("app_gallery_url"),
  live: varchar("live", { length: 255 }),
  link: text("link"),
  date: date("date"),
  keyFeature: jsonb("key_features").array(),
  categoryId: integer("category_id").references(() => categories.id),
  slug: varchar("slug", { length: 255 }).notNull(),
  companyId: integer("company_id").references(() => companies.id),
});

export const projectsTechnologies = pgTable("projects_technologies", {
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id),
  techId: integer("tech_id")
    .notNull()
    .references(() => technologies.id),
});

export const experiences = pgTable("experience", {
  id: serial("id").primaryKey(),
  dateStart: date("dateStart"),
  dateEnd: date("dateEnd"),
  position: text("position").notNull(),
  description: text("description").notNull(),
  projects: text("projects").array(),
  logo: text("logo"),
  href: text("href"),
  companyId: integer("company_id").references(() => companies.id),
});

export const experiencesProjects = pgTable("experiences_projects", {
  experienceId: integer("experience_id").references(() => experiences.id),
  projectId: integer("tech_id").references(() => projects.id),
});

export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export type Techonologie = InferModel<typeof technologies>;
export type Project = InferModel<typeof projects>;
export type Experience = InferModel<typeof experiences>;
