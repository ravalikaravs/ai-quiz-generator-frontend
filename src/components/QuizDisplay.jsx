import React from "react";
function QuizDisplay({ quiz }) {
  if (!quiz || !quiz.questions) return <div>No quiz to show.</div>;
  return (
    <div className="space-y-4">
      {quiz.title && <h2 className="text-xl font-bold">{quiz.title}</h2>}
      {quiz.summary && <p className="text-sm text-gray-600">{quiz.summary}</p>}

      {quiz.questions.map((q, idx) => (
        <div key={idx} className="p-4 border rounded shadow-sm">
          <div className="font-semibold">{idx + 1}. {q.question}</div>
          <ul className="list-disc ml-5 mt-2">
            {q.options.map((opt, i) => (
              <li key={i}>{opt}</li>
            ))}
          </ul>
          <div className="mt-2 text-green-700">Answer: {q.answer}</div>
        </div>
      ))}
    </div>
  );
}
export default QuizDisplay