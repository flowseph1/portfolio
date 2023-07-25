import { getProjects } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await getProjects();

    return NextResponse.json({
      data: projects,
    });
  } catch (error) {
    return NextResponse.json({
      error: {
        message: error,
      },
    });
  }
}
