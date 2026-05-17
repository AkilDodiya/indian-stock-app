"use client";

import React, { useState } from "react";

interface Filing {
  title: string;
  category: string;
  date: string;
}

const filings: Filing[] = [
  { title: "Infosys Q4 Results", category: "Results", date: "2026-05-15" },
  {
    title: "Reliance Board Meeting",
    category: "Board Meetings",
    date: "2026-05-14",
  },
  {
    title: "HDFC Shareholding Pattern",
    category: "Shareholding",
    date: "2026-05-13",
  },
  {
    title: "Insider Trade by TCS Director",
    category: "Insider Trades",
    date: "2026-05-12",
  },
  {
    title: "Other Corporate Announcement",
    category: "Other",
    date: "2026-05-11",
  },
];

const categories = [
  "Results",
  "Board Meetings",
  "Shareholding",
  "Insider Trades",
  "Other",
];

export default function FilingsList() {
  const [activeCategory, setActiveCategory] = useState("Results");

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Corporate Filings</h2>
      <div className="flex gap-3 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded ${
              activeCategory === cat ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <ul className="space-y-3">
        {filings
          .filter((f) => f.category === activeCategory)
          .map((f, i) => (
            <li key={i} className="p-4 bg-gray-800 rounded-lg shadow">
              <p className="text-sm text-gray-400">
                {f.date} • {f.category}
              </p>
              <h3 className="text-lg font-semibold">{f.title}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}
