"use client";

import React, { useEffect, useState } from "react";

interface Stock {
  id: number;
  symbol: string;
  addedPrice: number;
  currentPrice: number;
}

export default function WatchlistTracker() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    fetch("/api/watchlist")
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`API error ${res.status}: ${text}`);
        }
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      })
      .then((data) => setStocks(data))
      .catch((err) => {
        console.error("Fetch failed:", err);
        setStocks([]);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Watchlist Tracker</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2">Symbol</th>
            <th className="p-2">Added Price</th>
            <th className="p-2">Current Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((s) => (
            <tr key={s.id} className="border-t border-gray-700">
              <td className="p-2">{s.symbol}</td>
              <td className="p-2">₹{s.addedPrice}</td>
              <td className="p-2">₹{s.currentPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
