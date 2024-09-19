import React, { useContext } from "react";
import Option from "./Option";
import { QuizContext } from "../../Contexts/QuizContext";
export default function Question() {
  const { questions, dispatch, answer, numOfQuestion, index } =
    useContext(QuizContext);
  const hasAnswered = answer !== null;
  const quistion = questions.at(index);
  return (
    <div>
      <h4>{quistion.question}</h4>
      <Option quistion={quistion} hasAnswered={hasAnswered} />
      {index < numOfQuestion - 1
        ? hasAnswered && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "next" })}
            >
              Next
            </button>
          )
        : index === numOfQuestion - 1
        ? hasAnswered && (
            <button
              className="btn btn-ui"
              onClick={() => dispatch({ type: "finish" })}
            >
              Finish
            </button>
          )
        : null}
      {}
      {}
    </div>
  );
}
