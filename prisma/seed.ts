import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: process.env["DATABASE_URL"] ?? "file:./prisma/dev.db",
  }),
});

async function main() {
  await prisma.watchlist.deleteMany();
  await prisma.watchlist.createMany({
    data: [
      { symbol: "RELIANCE", addedPrice: 2450, currentPrice: 2500 },
      { symbol: "TCS", addedPrice: 3600, currentPrice: 3650 },
      { symbol: "INFY", addedPrice: 1450, currentPrice: 1475 },
    ],
  });
  console.log("✅ Watchlist seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
