import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { symbol: string } },
) {
  const { symbol } = params;

  // Example using Yahoo Finance API (works for NSE/BSE tickers)
  const res = await fetch(
    `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}.NS`,
    {
      headers: { "User-Agent": "Mozilla/5.0" },
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch stock price" },
      { status: 500 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
