import React, { useContext } from "react";
import { QuizContext } from "../Contexts/QuizContext";
export default function FinishScreen() {
  const { points, maxPoints, heighScore, dispatch } = useContext(QuizContext);
  const persentage = ((points / maxPoints) * 100).toFixed(0);

  let emoji;
  if (persentage === 100) emoji = "🏅";
  if (persentage >= 80 && persentage <= 100) emoji = "🎉";
  if (persentage >= 50 && persentage <= 80) emoji = "😀";
  if (persentage >= 0 && persentage <= 50) emoji = "😶";
  if (persentage === 0) emoji = "😣";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> you scored {points} out of {maxPoints} {persentage}
        %
      </p>
      <p className="highscore">HeighScore : {heighScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
