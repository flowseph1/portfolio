CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "experience" (
	"id" serial PRIMARY KEY NOT NULL,
	"dateStart" date,
	"dateEnd" date,
	"position" text NOT NULL,
	"description" text NOT NULL,
	"logo" text,
	"tags" text[],
	"href" text,
	"live" varchar(255),
	"company_id" integer
);

CREATE TABLE IF NOT EXISTS "experiences_projects" (
	"experience_id" integer,
	"tech_id" integer
);

CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL,
	"href" text NOT NULL,
	"tags" text[],
	"github" varchar(255),
	"live" varchar(255),
	"date" date,
	"category_id" integer,
	"slug" varchar(255),
	"company_id" integer
);

CREATE TABLE IF NOT EXISTS "projects_technologies" (
	"project_id" integer NOT NULL,
	"tech_id" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "technologies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"logo" text NOT NULL,
	"width" integer,
	"height" integer
);

DO $$ BEGIN
 ALTER TABLE "experience" ADD CONSTRAINT "experience_company_id_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "experiences_projects" ADD CONSTRAINT "experiences_projects_experience_id_experience_id_fk" FOREIGN KEY ("experience_id") REFERENCES "experience"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "experiences_projects" ADD CONSTRAINT "experiences_projects_tech_id_projects_id_fk" FOREIGN KEY ("tech_id") REFERENCES "projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_company_id_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_tech_id_technologies_id_fk" FOREIGN KEY ("tech_id") REFERENCES "technologies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
