"use client";

import React from "react";

interface NewsItem {
  title: string;
  category: string;
  date: string;
}

const news: NewsItem[] = [
  {
    title: "NIFTY closes at record high",
    category: "Macro",
    date: "2026-05-16",
  },
  {
    title: "Infosys Q4 earnings beat estimates",
    category: "Earnings",
    date: "2026-05-15",
  },
  {
    title: "Reliance announces new energy project",
    category: "Corporate",
    date: "2026-05-14",
  },
  {
    title: "SEBI introduces new compliance rules",
    category: "Regulatory",
    date: "2026-05-13",
  },
];

export default function NewsFeed() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Market News</h2>
      <ul className="space-y-3">
        {news.map((item, i) => (
          <li key={i} className="p-4 bg-gray-800 rounded-lg shadow">
            <p className="text-sm text-gray-400">
              {item.date} • {item.category}
            </p>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
