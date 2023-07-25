import { db } from "@/lib/db";
import { migrate } from "drizzle-orm/postgres-js/migrator";

export const migrateDB = async () => {
  console.log("migrating");
  await migrate(db, { migrationsFolder: "src/migrations" });
  console.log("DB migrated");
};

migrateDB();
