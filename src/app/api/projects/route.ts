import { getProjects } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
  try {
    const projects = await getProjects();

    return NextResponse.json({
      data: projects,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: {
        code: res.status,
        message: error,
      },
    });
  }
}
