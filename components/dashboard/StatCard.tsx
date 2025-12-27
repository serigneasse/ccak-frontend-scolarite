interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">{title}</span>
          <span className="text-3xl font-bold text-gray-900">{value}</span>
        </div>
      </div>
    </div>
  );
}
