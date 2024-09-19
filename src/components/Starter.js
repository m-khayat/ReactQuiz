import React, { useContext } from "react";
import { QuizContext } from "../Contexts/QuizContext";
export default function Starter() {
  const { numOfQuestion, dispatch } = useContext(QuizContext);
  return (
    <div className="start">
      <h2>wellcome to the react Quiz!</h2>
      <h3>{numOfQuestion} question to test your react mastary</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let's start
      </button>
    </div>
  );
}
