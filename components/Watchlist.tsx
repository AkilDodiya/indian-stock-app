"use client";

import React, { useState } from "react";

interface Stock {
  symbol: string;
  addedPrice: number;
  currentPrice: number;
}

export default function Watchlist() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [form, setForm] = useState<Stock>({
    symbol: "",
    addedPrice: 0,
    currentPrice: 0,
  });

  const addStock = () => {
    setStocks([...stocks, form]);
    setForm({ symbol: "", addedPrice: 0, currentPrice: 0 });
  };

  const calculatePerformance = (s: Stock) => {
    const change = ((s.currentPrice - s.addedPrice) / s.addedPrice) * 100;
    return change.toFixed(2);
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Watchlist</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <input
          className="p-2 rounded bg-gray-800"
          placeholder="Symbol"
          value={form.symbol}
          onChange={(e) => setForm({ ...form, symbol: e.target.value })}
        />
        <input
          type="number"
          className="p-2 rounded bg-gray-800"
          placeholder="Added Price"
          value={form.addedPrice}
          onChange={(e) =>
            setForm({ ...form, addedPrice: parseFloat(e.target.value) })
          }
        />
        <input
          type="number"
          className="p-2 rounded bg-gray-800"
          placeholder="Current Price"
          value={form.currentPrice}
          onChange={(e) =>
            setForm({ ...form, currentPrice: parseFloat(e.target.value) })
          }
        />
      </div>
      <button
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        onClick={addStock}
      >
        Add Stock
      </button>

      <table className="w-full mt-6 border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2">Symbol</th>
            <th className="p-2">Added Price</th>
            <th className="p-2">Current Price</th>
            <th className="p-2">Performance %</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((s, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="p-2">{s.symbol}</td>
              <td className="p-2">₹{s.addedPrice}</td>
              <td className="p-2">₹{s.currentPrice}</td>
              <td className="p-2">{calculatePerformance(s)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
