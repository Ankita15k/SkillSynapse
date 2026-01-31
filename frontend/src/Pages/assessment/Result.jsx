export default function Result() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Assessment Result</h1>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <p className="text-sm mb-2">Score: <strong>72%</strong></p>
        <p className="text-sm text-gray-600">
          AI suggests improving async JavaScript and React hooks usage.
        </p>
      </div>

      <a
        className="block mt-4 text-center bg-indigo-600 text-white py-3 rounded-lg"
      >
        View Skill Gap
      </a>
    </div>
  );
}
