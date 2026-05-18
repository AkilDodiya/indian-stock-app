import { NextResponse } from "next/server";

const sampleNews = [
  {
    id: "1",
    title: "Global markets rally as earnings beat expectations",
    source: "Reuters",
    description:
      "Stocks rose across Asia and Europe after quarterly earnings topped analyst forecasts, while investors kept a close eye on interest rate signals from major central banks.",
    url: "https://www.reuters.com/markets/global-markets-rally-earnings-beat/",
  },
  {
    id: "2",
    title: "Indian IPO activity remains strong despite volatility",
    source: "Bloomberg",
    description:
      "IPO issuance in India continued at a healthy pace, driven by strong investor demand in the technology and infrastructure sectors amid improving macroeconomic indicators.",
    url: "https://www.bloomberg.com/news/articles/indian-ipo-activity-remains-strong",
  },
  {
    id: "3",
    title: "Tech stocks lead gains as commodity shares retreat",
    source: "CNBC",
    description:
      "Technology stocks outperformed today while commodity-heavy indexes trimmed earlier gains, reflecting investor rotation into growth and defensive themes ahead of key economic data.",
    url: "https://www.cnbc.com/tech-stocks-lead-gains-commodity-shares-retreat/",
  },
];

export async function GET() {
  return NextResponse.json({ data: sampleNews });
}
