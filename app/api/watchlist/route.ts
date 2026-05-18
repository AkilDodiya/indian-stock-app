import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const watchlist = await prisma.watchlist.findMany();
    return NextResponse.json(Array.isArray(watchlist) ? watchlist : []);
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json(
      { error: "Failed to fetch watchlist" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newStock = await prisma.watchlist.create({ data: body });
    return NextResponse.json(newStock);
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json({ error: "Failed to add stock" }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    await prisma.watchlist.deleteMany();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE error:", err);
    return NextResponse.json(
      { error: "Failed to reset watchlist" },
      { status: 500 },
    );
  }
}
