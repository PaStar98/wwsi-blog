import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const updated = await prisma.comment.update({
    where: { id: Number(params.id) },
    data: { approved: true },
  });
  return NextResponse.json(updated);
}
