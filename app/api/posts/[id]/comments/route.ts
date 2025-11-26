import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  // public view: only approved
  const comments = await prisma.comment.findMany({
    where: { postId: Number(params.id), approved: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(comments);
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();
  const comment = await prisma.comment.create({
    data: {
      postId: Number(params.id),
      author: data.author,
      body: data.body,
    },
  });
  // return approved:0 in body to follow contract
  return NextResponse.json({ ...comment, approved: 0 }, { status: 201 });
}
