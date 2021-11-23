import React, { useState, useEffect } from "react";
import "./QuestionsContainer.css";
import gsap from "gsap";
import Answer from "../../Components/answer/Answer";
import Map from "../../Components/map/Map";
import FillAns from "../../Components/fillAns/FillAns";
import Text from "../../Text.json";
import { Markup } from "interweave";
import { flushSync } from "react-dom";

function QuestionsContainer(props) {
  const [isCheacked, setIsCheacked] = useState(false);

  var hasExplain =
    Text[props.questionNum]["explain"] !== "" ||
    Text[props.questionNum]["pic"] !== "";
  const cheackAns = () => {
    setIsCheacked(true);
  };

        
  // useEffect(() => {
  //   if(props.isAnswerd ){
  //     gsap.to(".answers-container", { opacity: 0, duration: 0.25, delay: 1 });
  //   }else{
  //     gsap.to(".answers-container", { opacity: 1, duration: 0.25, delay: 0.75 });
  //   }
  //   }, [props.isAnswerd]);
  // useEffect(() => {
  //   if(props.isAnswerd=== false ){
  //     gsap.to(".answers-container", { opacity: 1, duration: 0.25, delay: 0.75 });
  //   }
  //   }, []);



  return (
    <div className="questions-container under-question-headlie">
      {/* <div className="black-back" ></div> */}

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

      {/* // <div className="cheack-btn btn" onClick={}>בדיקה</div> */}
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
