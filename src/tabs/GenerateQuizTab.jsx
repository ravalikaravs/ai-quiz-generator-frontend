import React, { useState } from "react";

function GenerateQuizTab({ onQuizGenerated }) {
  const [url, setUrl] = useState("");
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setError("");
    setQuiz(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/generate_quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (data.status === "success") {
        setQuiz(data.quiz);
        if(onQuizGenerated) onQuizGenerated(); // notify App to refresh history
      } else {
        setError(data.message || "Failed to generate quiz.");
      }
    } catch (err) {
      console.error(err);
      setError("Error generating quiz");
    }
  };


  return (
    <div style={{ padding: "20px" }}>
      <h2>Generate Quiz</h2>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter article URL"
        style={{ width: "60%", padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleGenerate}>Generate</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {quiz && (
        <div style={{ marginTop: "20px" }}>
          <h3>{quiz.title}</h3>
          <p><strong>Summary:</strong> {quiz.summary}</p>

          <ul>
            {quiz.quiz?.map((q, i) => (
              <li key={i}>
                <p><strong>{q.question}</strong></p>
                <ul>
                  {q.options.map((opt, j) => (
                    <li key={j}>{opt}</li>
                  ))}
                </ul>
                <p><strong>Answer:</strong> {q.answer}</p>
                <p><em>Difficulty:</em> {q.difficulty}</p>
                <p><em>Explanation:</em> {q.explanation}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default GenerateQuizTab;
