export default function SkillGap() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-2">Skill Gap Analysis</h1>
      <p className="text-sm text-gray-500 mb-4">
        Based on your assessment performance
      </p>

      <div className="h-48 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400">
        Skill Radar Chart
      </div>

      <div className="mt-4 bg-white rounded-xl shadow-sm p-4">
        <h2 className="font-medium mb-2">AI Insight</h2>
        <p className="text-sm text-gray-600">
          You are strong in React fundamentals but need improvement in
          performance optimization and system design.
        </p>
      </div>
    </div>
  );
}