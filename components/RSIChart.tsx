"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

const data = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
  datasets: [
    {
      label: "Price",
      data: [1500, 1520, 1510, 1535, 1540],
      borderColor: "blue",
      backgroundColor: "rgba(0,0,255,0.2)",
      yAxisID: "y",
    },
    {
      label: "RSI",
      data: [45, 55, 60, 65, 70],
      borderColor: "green",
      backgroundColor: "rgba(0,255,0,0.2)",
      yAxisID: "y1",
    },
  ],
};

const options = {
  responsive: true,
  interaction: { mode: "index" as const, intersect: false },
  stacked: false,
  plugins: { legend: { position: "top" as const } },
  scales: {
    y: { type: "linear" as const, position: "left" as const },
    y1: {
      type: "linear" as const,
      position: "right" as const,
      grid: { drawOnChartArea: false },
    },
  },
};

export default function RSIChart() {
  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">RSI Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}
