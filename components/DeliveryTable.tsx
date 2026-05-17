"use client";

import React from "react";

interface DeliveryData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  change: number;
  rsi: number;
  delivery: number;
}

const data: DeliveryData[] = [
  {
    date: "2026-05-11",
    open: 1500,
    high: 1520,
    low: 1490,
    close: 1510,
    change: 0.7,
    rsi: 55,
    delivery: 62,
  },
  {
    date: "2026-05-12",
    open: 1510,
    high: 1530,
    low: 1505,
    close: 1525,
    change: 1.0,
    rsi: 60,
    delivery: 58,
  },
  {
    date: "2026-05-13",
    open: 1525,
    high: 1540,
    low: 1515,
    close: 1535,
    change: 0.7,
    rsi: 63,
    delivery: 65,
  },
];

export default function DeliveryTable() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Delivery Historic Table</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2">Date</th>
            <th className="p-2">Open</th>
            <th className="p-2">High</th>
            <th className="p-2">Low</th>
            <th className="p-2">Close</th>
            <th className="p-2">% Change</th>
            <th className="p-2">RSI</th>
            <th className="p-2">Delivery %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="p-2">{row.date}</td>
              <td className="p-2">₹{row.open}</td>
              <td className="p-2">₹{row.high}</td>
              <td className="p-2">₹{row.low}</td>
              <td className="p-2">₹{row.close}</td>
              <td className="p-2">{row.change}%</td>
              <td className="p-2">{row.rsi}</td>
              <td className="p-2">{row.delivery}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
