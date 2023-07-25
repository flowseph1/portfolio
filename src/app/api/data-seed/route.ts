import { setSeedData } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET() {
  await setSeedData();

  return NextResponse.json({
    message: "success",
  });
}
