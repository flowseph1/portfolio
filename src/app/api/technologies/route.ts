import { getTechnologies } from "@/lib/queries";
import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
  try {
    const data = await getTechnologies();

    return NextResponse.json({
      data,
    });
  } catch (error) {
    return NextResponse.json({
      error: {
        code: res.status,
        message: error,
      },
    });
  }
}
