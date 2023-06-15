import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = "https://sgrrsgkivueanmeeuuvj.supabase.co";

const client = postgres(connectionString);
export const db = drizzle(client);
