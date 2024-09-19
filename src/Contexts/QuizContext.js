import React, { createContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "Loading",
  index: 0,
  answer: null,
  points: 0,
  heighScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchQuestion":
      return { ...state, questions: action.payload, status: "ready" };

    case "fetchFaild":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "activ" };

    case "next":
      return { ...state, index: state.index + 1, answer: null };

    case "answerQuestion":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "restart":
      return { ...state, status: "activ", index: 0, answer: null, points: 0 };

    case "finish":
      return {
        ...state,
        status: "finish",
        heighScore:
          state.heighScore < state.points ? state.points : state.heighScore,
      };
    default:
      throw new Error("error");
  }
}

function QuizProvider({ children }) {
  const [{ questions, status, index, answer, points, heighScore }, dispatch] =
    useReducer(reducer, initialState);

  const numOfQuestion = questions.length;
  const maxPoints = questions.reduce((pre, cur) => pre + cur.points, 0);
  useEffect(function () {
    fetch("https://m-khayat.github.io/React_quiz_quistion_API/quistions.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "fetchQuestion", payload: data }))
      .catch((err) => dispatch({ type: "fetchFaild" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        dispatch,
        numOfQuestion,
        maxPoints,
        questions,
        status,
        index,
        answer,
        points,
        heighScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
export { QuizProvider, QuizContext };
