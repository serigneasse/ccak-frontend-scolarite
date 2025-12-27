interface LevelData {
  level: string;
  licence: number;
  master: number;
}

const data: LevelData[] = [
  { level: "L1", licence: 220, master: 0 },
  { level: "L2", licence: 480, master: 0 },
  { level: "L3", licence: 180, master: 0 },
  { level: "M1", licence: 0, master: 420 },
  { level: "M2", licence: 0, master: 110 },
];

const maxValue = 500;

export default function LevelDistributionChart() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Répartition par Niveau</h2>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-[#003d6b]"></div>
            <span className="text-gray-600">Licence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-green-600"></div>
            <span className="text-gray-600">Master</span>
          </div>
        </div>
      </div>

      <div className="relative h-80">
        {/* Y-axis labels */}
        <div className="absolute -left-2 top-0 flex h-full flex-col justify-between text-xs text-gray-500">
          <span>500</span>
          <span>450</span>
          <span>400</span>
          <span>350</span>
          <span>300</span>
          <span>250</span>
          <span>200</span>
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 flex h-full items-end justify-around gap-4">
          {data.map((item) => (
            <div key={item.level} className="flex flex-col items-center gap-2">
              <div className="flex items-end gap-1">
                {item.licence > 0 && (
                  <div
                    className="w-16 rounded-t bg-[#003d6b] transition-all hover:opacity-80"
                    style={{ height: `${(item.licence / maxValue) * 100}%` }}
                    title={`Licence: ${item.licence}`}
                  ></div>
                )}
                {item.master > 0 && (
                  <div
                    className="w-16 rounded-t bg-green-600 transition-all hover:opacity-80"
                    style={{ height: `${(item.master / maxValue) * 100}%` }}
                    title={`Master: ${item.master}`}
                  ></div>
                )}
              </div>
              <span className="text-sm font-medium text-gray-700">{item.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
