import "./App.css";
import React, { useState } from "react";
import FirstPage from "./Container/firstPage/FirstPage";
import LastPage from "./Container/lastPage/LastPage";
import QuizzPart from "./Container/quizzPart/QuizzPart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <LastPage pageNum={pageNum} setPageNum={setPageNum} />
          </Route>
          <Route exact path="/questions">
            <QuizzPart
              pageNum={pageNum}
              setPageNum={setPageNum}
              questionNum={questionNum}
              setQuestionNum={setQuestionNum}
            />
          </Route>
          <Route exact path="/end">
            <LastPage pageNum={pageNum} setPageNum={setPageNum} />
          </Route>
        </Switch>
      </Router>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
