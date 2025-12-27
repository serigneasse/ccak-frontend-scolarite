interface Activity {
  id: number;
  student: {
    name: string;
    avatar: string;
  };
  action: string;
  course: string;
  date: string;
  status: "Validé" | "Traité" | "En attente";
}

const activities: Activity[] = [
  {
    id: 1,
    student: {
      name: "Sokhna Anta",
      avatar: "SA",
    },
    action: "Inscription",
    course: "Mathématiques L3",
    date: "Il y a 2h",
    status: "Validé",
  },
  {
    id: 2,
    student: {
      name: "Serigne Cheikh",
      avatar: "SC",
    },
    action: "Note ajoutée",
    course: "Physique M1",
    date: "Il y a 4h",
    status: "Traité",
  },
  {
    id: 3,
    student: {
      name: "Modou GUEYE",
      avatar: "MG",
    },
    action: "Demande changement",
    course: "Informatique L2",
    date: "Il y a 6h",
    status: "En attente",
  },
];

const statusStyles = {
  Validé: "bg-green-100 text-green-700",
  Traité: "bg-blue-100 text-blue-700",
  "En attente": "bg-yellow-100 text-yellow-700",
};

export default function RecentActivities() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Activités Récentes</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 text-left text-sm text-gray-600">
              <th className="pb-3 font-medium">Étudiant</th>
              <th className="pb-3 font-medium">Action</th>
              <th className="pb-3 font-medium">Cours</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {activities.map((activity) => (
              <tr key={activity.id} className="text-sm hover:bg-gray-50">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                      {activity.student.avatar}
                    </div>
                    <span className="font-medium text-gray-900">{activity.student.name}</span>
                  </div>
                </td>
                <td className="py-4 text-gray-700">{activity.action}</td>
                <td className="py-4 text-gray-700">{activity.course}</td>
                <td className="py-4 text-gray-600">{activity.date}</td>
                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[activity.status]}`}
                  >
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
