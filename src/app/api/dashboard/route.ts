import { dashboardData } from "@/data/dashboard";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(dashboardData);
}
