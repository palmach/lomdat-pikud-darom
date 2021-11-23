import "./App.css";
import React, { useState } from "react";
import FirstPage from "./Container/firstPage/FirstPage";
import LastPage from "./Container/lastPage/LastPage";
import QuizzPart from "./Container/quizzPart/QuizzPart";
import { BrowserRouter , Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<LastPage pageNum={pageNum} setPageNum={setPageNum} />}
          >
            {/* <LastPage pageNum={pageNum} setPageNum={setPageNum} /> */}
          </Route>
          <Route
            exact
            path="/questions"
            element={
              <QuizzPart
                pageNum={pageNum}
                setPageNum={setPageNum}
                questionNum={questionNum}
                setQuestionNum={setQuestionNum}
              />
            }
          >
          </Route>
          <Route
            exact
            path="/end"
            element={<LastPage pageNum={pageNum} setPageNum={setPageNum} />}
          >
          </Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
