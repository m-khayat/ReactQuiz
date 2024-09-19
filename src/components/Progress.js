import React, { useContext } from "react";
import { QuizContext } from "../Contexts/QuizContext";
export default function Progress() {
  const { maxPoints, numOfQuestion, index, points } = useContext(QuizContext);
  return (
    <header className="progress">
      <progress max={numOfQuestion} value={index} />
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}
