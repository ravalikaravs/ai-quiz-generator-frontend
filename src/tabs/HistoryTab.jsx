import React, { useEffect, useState } from "react";
import { getHistory, getQuizById } from "../services/api";
import HistoryTable from "../components/HistoryTable";
import QuizDisplay from "../components/QuizDisplay";

function HistoryTab({ refresh }) {
  const [history, setHistory] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    getHistory().then(setHistory).catch(console.error);
  }, [refresh]);

  const showDetails = async (id) => {
    setLoading(true);
    try {
      const data = await getQuizById(id);
      setSelectedQuiz(data.quiz);
    } catch (e) {
      alert("Failed to load details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <HistoryTable items={history} onDetails={showDetails} />
      {loading && <div>Loading quiz...</div>}
      {selectedQuiz && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Quiz Details</h3>
          <QuizDisplay quiz={selectedQuiz} />
        </div>
      )}
    </div>
  )
}
export default HistoryTab