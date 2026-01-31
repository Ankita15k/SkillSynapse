export default function Assessment() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Assessment</h1>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <p className="font-medium mb-3">
          What does useEffect dependency array control?
        </p>

        <div className="space-y-2">
          {[
            "Component rendering",
            "Side effect execution",
            "State updates",
            "JSX updates",
          ].map((option) => (
            <button
              key={option}
              className="w-full text-left p-3 border rounded-lg text-sm"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
