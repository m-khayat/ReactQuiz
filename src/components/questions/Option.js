import React, { useContext } from "react";
import { QuizContext } from "../../Contexts/QuizContext";
export default function Option({ quistion, hasAnswered }) {
  const { answer, dispatch } = useContext(QuizContext);
  return (
    <div className="options">
      {quistion.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswered
              ? index === quistion.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "answerQuestion", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
