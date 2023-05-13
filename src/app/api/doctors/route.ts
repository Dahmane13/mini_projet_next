import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const doctors = await prisma.user.findMany();
    return NextResponse.json({ doctors });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = {
      ...body,
      role: "DOCTOR",
      specialty: {
        create: { title: "test" },
      },
    };
    const doctor = await prisma.user
      .create({ data })
      .then((val) => {
        return NextResponse.json({ val });
      })
      .catch((res) => {
        console.log(res);
      });
    return NextResponse.json({ doctor });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
