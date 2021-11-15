import React, { useState, useEffect } from "react";
import "./QuizzPart.css";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

// import Map from "../../Components/map/Map";
// import FillAns from "../../Components/fillAns/FillAns";
import SkyPart from "../../Components/skyPart/SkyPart";
import DesertPart from "../../Components/desertPart/DesertPart";
import GrassPart from "../../Components/grassPart/GrassPart";
// import FlowersPart from "../../Components/flowersPart/FlowersPart";
import Explain from "../../Components/explain/Explain";
import QuestionsContainer from "../questionsContainer/QuestionsContainer";
import Text from "../../Text.json";

function QuizzPart(props) {
  const history = useHistory();
  const [isAnswerd, setIsAnswerd] = useState(false);
  // const [hasExplain, setHasExplain] = useState(false);

  var hasExplain;
  //   Text[props.questionNum]["explain"] !== "" ||
  //   Text[props.questionNum]["pic"] !== "";
  const [toExplain, setToExplain] = useState(false);

  useEffect(() => {
    if (props.questionNum !== 14) {
      //   props.setQuestionNum(3);
      //   history.push("/end");
      // } else {
        hasExplain =
        // setHasExplain()
        Text[props.questionNum]["explain"] !== "" ||
        Text[props.questionNum]["pic"] !== "";
        console.log("hasExplain "+hasExplain);
        // if (hasExplain === true) {
          setToExplain(hasExplain);
        //   console.log("num true");
        //   console.log(toExplain);
        // } else {
        //   setToExplain(false);
        //   console.log("num44");
        // }
      }
      console.log(hasExplain);
      console.log("toExplain "+toExplain);
    }, [props.questionNum]);
    // console.log(toExplain);


    useEffect(()=>{
      console.log("toExplain "+toExplain);

      },[toExplain])
  const changeQuestion = () => {
    if (props.questionNum + 1 === 14) {
      gsap.to(".black-back", {
        display: "block",
        opacity: 1,
        duration: 1.75,
      });
      props.setPageNum(3);
      history.push("/end");
    } else {
      props.setQuestionNum((prevState) => prevState + 1);
    }
    
  };

  const changeFromExplain = () => {
    if (isAnswerd === false && toExplain) {
    // if (isAnswerd === false && hasExplain) {
      setToExplain((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (props.questionNum === 0) {
      gsap.to(".black-back", { display: "none", opacity: 0, duration: 1.75 });
    }
    // console.log(toExplain);
  }, []);

  return (
    <div className="quizz-part">
      <div className={`black-back ${props.pageNum ===3 ?"from-black":props.pageNum ===2 ?"to-back":""}`}></div>
      {/* <div className="black-back to-black"></div> */}

      <SkyPart />
      {
        props.questionNum >= 0 && props.questionNum < 5 ? (
          <DesertPart />
        ) : (
          props.questionNum >= 5 && (
            <GrassPart questionNum={props.questionNum} />
          )
        )
        // :
        // <FlowersPart/>
      }
      <div className="questions-part">
        <p className="headline question-headline">
          שאלה {props.questionNum + 1}
        </p>
        {toExplain   ? (
          <Explain
            questionNum={props.questionNum}
            changeFromExplain={changeFromExplain}
            />
        ) : (
          <QuestionsContainer
            questionNum={props.questionNum}
            pageNum={props.pageNum}
            changeQuestion={changeQuestion}
            changeFromExplain={changeFromExplain}
            toExplain={toExplain}
            isAnswerd={isAnswerd}
            setIsAnswerd={setIsAnswerd}
          />
        )}
      </div>
    </div>
  );
}

export default QuizzPart;
