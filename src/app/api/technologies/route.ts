import { db } from "@/lib/db";
import { technologies } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getTechnologies();

    return NextResponse.json({
      data,
    });
  } catch (error) {
    return NextResponse.json({
      error: {
        message: error,
      },
    });
  }
}

async function getTechnologies() {
  return await db.select().from(technologies);
}
