import { getTechnologies } from "@/lib/queries";
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
