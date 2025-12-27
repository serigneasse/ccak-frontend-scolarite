export default function ValidationRateChart() {
  const validatedPercentage = 82;
  const rejectedPercentage = 18;

  // SVG donut chart parameters
  const size = 200;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate stroke offsets
  const validatedOffset = circumference - (validatedPercentage / 100) * circumference;
  const rejectedOffset = circumference - (rejectedPercentage / 100) * circumference;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Taux de validation</h2>

      <div className="flex flex-col items-center">
        {/* Donut Chart */}
        <div className="relative">
          <svg width={size} height={size} className="rotate-[-90deg]">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth={strokeWidth}
            />

            {/* Validated arc (green) */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#16a34a"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={validatedOffset}
              strokeLinecap="round"
            />

            {/* Rejected arc (red) */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#dc2626"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (validatedPercentage / 100) * circumference}
              strokeLinecap="round"
              style={{
                transform: `rotate(${(validatedPercentage / 100) * 360}deg)`,
                transformOrigin: "center",
              }}
            />
          </svg>

          {/* Center percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-900">{validatedPercentage} %</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex gap-8">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-sm bg-green-600"></div>
            <span className="text-sm font-medium text-gray-700">Validé</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-sm bg-red-600"></div>
            <span className="text-sm font-medium text-gray-700">Ajourné</span>
          </div>
        </div>
      </div>
    </div>
  );
}
