import { useState } from "react";
import GenerateQuizTab from "./tabs/GenerateQuizTab";
import HistoryTab from "./tabs/HistoryTab";

function App() {
  const [tab, setTab] = useState("generate");
  const [historyUpdated, setHistoryUpdated] = useState(0); // counter to trigger refresh

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Wiki Quiz Generator</h1>
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${tab === "generate" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("generate")}
        >
          Generate
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "history" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("history")}
        >
          History
        </button>
      </div>

      {tab === "generate" ? (
        <GenerateQuizTab onQuizGenerated={() => setHistoryUpdated(prev => prev + 1)} />
      ) : (
        <HistoryTab refresh={historyUpdated} />
      )}
    </div>
  );
}

export default App;
