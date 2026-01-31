import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Dashboard</h1>

      <div className="space-y-4">
        <a
          className="block p-4 bg-white rounded-xl shadow-sm"
        >
          <h2 className="font-medium">Skill Gap Analysis</h2>
          <p className="text-sm text-gray-500 mt-1">
            Visualize your strengths & weaknesses
          </p>
        </a>

        <a
          className="block p-4 bg-white rounded-xl shadow-sm"
        >
          <h2 className="font-medium">Take Assessment</h2>
          <p className="text-sm text-gray-500 mt-1">
            Adaptive AI-powered test
          </p>
        </a>
      </div>
    </div>
  );
}
