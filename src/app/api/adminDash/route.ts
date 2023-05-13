import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requests = await prisma.user.findMany({
    where: {
      status: "pending",
    },
  });
  const doctors = await prisma.user.findMany({
    where: {
      role: "DOCTOR",
    },
  });
  const patients = await prisma.patient.findMany();
  const stats = [requests.length, doctors.length, patients.length];

  return NextResponse.json({ stats, requests: requests.slice(0, 5) });
}
