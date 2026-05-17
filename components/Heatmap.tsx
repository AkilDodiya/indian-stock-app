"use client";

import React from "react";

interface Sector {
  name: string;
  change: number;
}

const sectors: Sector[] = [
  { name: "IT", change: 1.2 },
  { name: "Pharma", change: -0.8 },
  { name: "Banking", change: 0.5 },
  { name: "Energy", change: -1.1 },
  { name: "Auto", change: 0.9 },
];

export default function Heatmap() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sector Heatmap</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sectors.map((sector) => (
          <div
            key={sector.name}
            className={`p-4 rounded-lg text-center ${
              sector.change >= 0 ? "bg-green-700" : "bg-red-700"
            }`}
          >
            <h3 className="text-lg font-semibold">{sector.name}</h3>
            <p>
              {sector.change >= 0 ? "+" : ""}
              {sector.change}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
