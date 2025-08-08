import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    userId: 1,
    user: "np",
    email: "n@p.com",
  });
}

export async function POST() {
  return NextResponse.json({
    userId: 1,
    user: "np",
    email: "n@p.com",
  });
}

export async function PUT() {
  return NextResponse.json({
    userId: 1,
    user: "np",
    email: "n@p.com",
  });
}
