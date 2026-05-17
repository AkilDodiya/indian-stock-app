"use client";

import React, { useEffect, useState } from "react";

export default function IndicesPanel() {
  const [indices, setIndices] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/indices")
      .then((res) => res.json())
      .then((data) => {
        setIndices(data.data.slice(0, 3));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-900 rounded-lg">
      {indices.map((index) => (
        <div
          key={index.indexName}
          className="p-4 bg-gray-800 rounded-lg shadow text-white"
        >
          <h3 className="text-lg font-semibold">{index.indexName}</h3>
          <p className="text-xl">{index.last}</p>
          <p
            className={index.perChange >= 0 ? "text-green-400" : "text-red-400"}
          >
            {index.perChange}%
          </p>
        </div>
      ))}
    </div>
  );
}
