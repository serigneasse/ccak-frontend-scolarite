"use client";

import { useState } from "react";

interface DataPoint {
  month: string;
  value: number;
}

const data: DataPoint[] = [
  { month: "Sept", value: 2520 },
  { month: "Oct", value: 2600 },
  { month: "Nov", value: 2730 },
  { month: "Déc", value: 2680 },
  { month: "Jan", value: 2790 },
  { month: "Fév", value: 2847 },
];

const minValue = 2500;
const maxValue = 2900;

export default function EnrollmentEvolutionChart() {
  const [period, setPeriod] = useState("6 derniers mois");

  const getYPosition = (value: number) => {
    const range = maxValue - minValue;
    const percentage = ((value - minValue) / range) * 100;
    return 100 - percentage;
  };

  const points = data
    .map((item, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = getYPosition(item.value);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Évolution des Inscriptions</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option>6 derniers mois</option>
          <option>12 derniers mois</option>
          <option>Cette année</option>
        </select>
      </div>

      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute -left-2 top-0 flex h-full flex-col justify-between text-xs text-gray-500">
          <span>2900</span>
          <span>2800</span>
          <span>2700</span>
          <span>2600</span>
          <span>2500</span>
        </div>

        {/* Chart area */}
        <div className="ml-10 h-full">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="0" x2="100" y2="0" stroke="#e5e7eb" strokeWidth="0.2" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="#e5e7eb" strokeWidth="0.2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#e5e7eb" strokeWidth="0.2" />
            <line x1="0" y1="75" x2="100" y2="75" stroke="#e5e7eb" strokeWidth="0.2" />
            <line x1="0" y1="100" x2="100" y2="100" stroke="#e5e7eb" strokeWidth="0.2" />

            {/* Line chart */}
            <polyline
              points={points}
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="2"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />

            {/* Data points */}
            {data.map((item, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = getYPosition(item.value);
              return (
                <circle
                  key={item.month}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill="#1e3a8a"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {/* X-axis labels */}
          <div className="mt-2 flex justify-between text-xs text-gray-600">
            {data.map((item) => (
              <span key={item.month}>{item.month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
