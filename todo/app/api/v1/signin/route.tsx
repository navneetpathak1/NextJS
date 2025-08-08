
import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const user = await prisma.user.create({
      data: {
        userName: data.name,
        password: data.password,
      },
    });

    return NextResponse.json({
      message: "You have successfully signed in",
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
}
