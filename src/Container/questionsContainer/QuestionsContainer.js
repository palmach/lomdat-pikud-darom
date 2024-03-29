import React, { useState } from "react";
import "./QuestionsContainer.css";
import Answer from "../../Components/answer/Answer";
import Map from "../../Components/map/Map";
import FillAns from "../../Components/fillAns/FillAns";
import Text from "../../Text.json";
import { Markup } from "interweave";

function QuestionsContainer(props) {
  const [isCheacked, setIsCheacked] = useState(false);

  var hasExplain =
    Text[props.questionNum]["explain"] !== "" ||
    Text[props.questionNum]["pic"] !== "";
  const cheackAns = () => {
    setIsCheacked(true);
  };

  return (
    <div className="questions-container under-question-headlie">
      <div className="answers-container">
        <Markup
          className="question text-questions"
          content={Text[props.questionNum]["q"]}
        />
        {props.questionNum === 7 ? (
          <FillAns
            questionNum={props.questionNum}
            changeQuestion={props.changeQuestion}
            isCheacked={isCheacked}
            setIsCheacked={setIsCheacked}
          />
        ) : props.questionNum === 5 ? (
          <Map
            changeQuestion={props.changeQuestion}
            questionNum={props.questionNum}
          />
        ) : (
          Text[props.questionNum]["answers"].map((ans, index) => {
            return (
              <Answer
                questionNum={props.questionNum}
                key={index}
                ansText={ans}
                ansNum={index}
                changeQuestion={props.changeQuestion}
                setIsAnswerd={props.setIsAnswerd}
                isAnswerd={props.isAnswerd}
              />
            );
          })
        )}
      </div>
      {props.questionNum === 7 && isCheacked === false ? (
        <div className="cheack-btn btn" onClick={cheackAns}>
          בדיקה
        </div>
      ) : (
        props.questionNum === 7 &&
        isCheacked === true && (
          <div className="cheack-btn btn" onClick={props.changeQuestion}>
            הבא
          </div>
        )
      )}

      {hasExplain && (
        <div
          className="btn back-btn change-explain"
          onClick={props.changeFromExplain}
        >
          חזור
        </div>
      )}
    </div>
  );
}

export default QuestionsContainer;
