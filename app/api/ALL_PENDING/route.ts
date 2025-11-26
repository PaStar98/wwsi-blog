import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const comments = await prisma.comment.findMany({
    where: { approved: false },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(comments);
}
