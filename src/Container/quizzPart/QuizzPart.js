import React, { useState, useEffect } from "react";
import "./QuizzPart.css";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import SkyPart from "../../Components/skyPart/SkyPart";
import DesertPart from "../../Components/desertPart/DesertPart";
import GrassPart from "../../Components/grassPart/GrassPart";
import Explain from "../../Components/explain/Explain";
import QuestionsContainer from "../questionsContainer/QuestionsContainer";
import Text from "../../Text.json";

function QuizzPart(props) {
  const navigate = useNavigate();
  const [isAnswerd, setIsAnswerd] = useState(false);
  // const [hasExplain, setHasExplain] = useState(false);

  var hasExplain =
    Text[props.questionNum]["explain"] !== "" ||
    Text[props.questionNum]["pic"] !== "";
  const [toExplain, setToExplain] = useState(false);

  useEffect(() => {
    if (props.questionNum !== 14) {
      if (hasExplain === true) {
        setToExplain(true);
      } else {
        setToExplain(false);
      }
    }
  }, [props.questionNum]);

  const changeQuestion = () => {
    if (props.questionNum + 1 === 14) {
      gsap.to(".black-back", {
        display: "block",
        opacity: 1,
        duration: 1.75,
      });
      props.setPageNum(3);
      navigate("/end");
    } else {
      props.setQuestionNum((prevState) => prevState + 1);
    }
  };

  const changeFromExplain = () => {
    if (isAnswerd === false ) {
      setToExplain((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (props.questionNum === 0) {
      gsap.to(".black-back", { display: "none", opacity: 0, duration: 1.75 });
    }
  }, []);

  return (
    <div className="quizz-part">
      <div
        className={`black-back ${
          props.pageNum === 3
            ? "from-black"
            : props.pageNum === 2
            ? "to-back"
            : ""
        }`}
      ></div>
      <SkyPart />
      {props.questionNum >= 0 && props.questionNum < 5 ? (
        <DesertPart />
      ) : (
        props.questionNum >= 5 && <GrassPart questionNum={props.questionNum} />
      )}
      <div className="questions-part">
        <p className="headline question-headline">
          שאלה {props.questionNum + 1}
        </p>
        {toExplain ? (
          <Explain
            setToExplain={setToExplain}
            questionNum={props.questionNum}
            changeFromExplain={changeFromExplain}
          />
        ) : (
          <QuestionsContainer
            questionNum={props.questionNum}
            pageNum={props.pageNum}
            changeQuestion={changeQuestion}
            changeFromExplain={changeFromExplain}
            // toExplain={toExplain}
            isAnswerd={isAnswerd}
            setIsAnswerd={setIsAnswerd}
          />
        )}
      </div>
    </div>
  );
}

export default QuizzPart;
