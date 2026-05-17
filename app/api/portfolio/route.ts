import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const portfolio = await prisma.portfolio.findMany();
    return NextResponse.json(portfolio);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newStock = await prisma.portfolio.create({ data: body });
    return NextResponse.json(newStock);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to add stock" }, { status: 500 });
  }
}
