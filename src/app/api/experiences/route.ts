import { getExperiences } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getExperiences();
    return NextResponse.json({
      data,
    });
  } catch (error) {
    console.log("route.ts -> 11", error);
    return NextResponse.json({
      error: {
        message: error,
      },
    });
  }
}
