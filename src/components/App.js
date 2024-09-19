import React, { useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Starter from "./Starter";
import Question from "./questions/Question";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import { QuizContext } from "../Contexts/QuizContext";
function App() {
  const { status } = useContext(QuizContext);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "Loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Starter />}
        {status === "activ" && (
          <>
            <Progress />
            <Question />
          </>
        )}

        {status === "finish" && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
