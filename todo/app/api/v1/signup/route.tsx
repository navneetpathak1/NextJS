import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.body;

  return NextResponse.json({
    message: "you have successfully signup"
  });
}
