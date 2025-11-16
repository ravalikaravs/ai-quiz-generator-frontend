import React from "react";

function QuizDisplay({ quiz }) {
  if (!quiz) return <div>No quiz to show.</div>;

  const questions = quiz.quiz || quiz.questions; 
  // supports both: quiz.quiz (your backend) and quiz.questions (your old code)

  if (!Array.isArray(questions)) return <div>No questions available.</div>;

  return (
    <div className="space-y-4">
      {quiz.title && <h2 className="text-xl font-bold">{quiz.title}</h2>}
      {quiz.summary && <p className="text-sm text-gray-600">{quiz.summary}</p>}

      {questions.map((q, idx) => (
        <div key={idx} className="p-4 border rounded shadow-sm">
          <div className="font-semibold">{idx + 1}. {q.question}</div>

          <ul className="list-disc ml-5 mt-2">
            {Array.isArray(q.options) &&
              q.options.map((opt, i) => <li key={i}>{opt}</li>)
            }
          </ul>

          <div className="mt-2 text-green-700">
            <strong>Answer:</strong> {q.answer}
          </div>

          <div className="text-gray-500 text-sm">
            <em>Difficulty:</em> {q.difficulty}
          </div>

          <p className="text-gray-500 text-sm">
            <em>Explanation:</em> {q.explanation}
          </p>

        </div>
      ))}
    </div>
  );
}

export default QuizDisplay;
