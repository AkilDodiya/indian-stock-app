"use client";

import React, { useEffect, useState } from "react";

interface Stock {
  id: number;
  symbol: string;
  addedPrice: number;
  currentPrice: number;
}

export default function PortfolioTracker() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  // Load portfolio from SQLite
  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  // Add new stock to portfolio
  const addStock = async (
    symbol: string,
    addedPrice: number,
    currentPrice: number,
  ) => {
    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symbol, addedPrice, currentPrice }),
    });
    const newStock = await res.json();
    setStocks((prev) => [...prev, newStock]);
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Portfolio Tracker</h2>
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
