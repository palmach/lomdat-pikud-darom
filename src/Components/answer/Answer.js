import React, { useState, useEffect, useRef } from "react";
import "./Answer.css";
import gsap from "gsap";
import Text from "./../../Text.json";

function Answer(props) {
  // if(isAnswerd===true){}
  const colorRef = useRef();
  const checkAns = (event) => {
    if (props.isAnswerd === false) {
      props.setIsAnswerd(true);
      if (props.ansNum === Number(Text[props.questionNum]["a"])) {
        gsap.to(colorRef.current, { backgroundColor: "#56821D" });
      } else {
        gsap.to(colorRef.current, { backgroundColor: "#bb3c02" });
        gsap.to(".correct", { backgroundColor: "#56821D", delay: 0.25 });
      }
      const timer = setTimeout(() => {
        props.changeQuestion();
        props.setIsAnswerd(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    gsap.to(colorRef.current, { backgroundColor: "#c36b0e", duration: 0 });
  }, [props.ansText]);

  return (
    <div
      className={`answer btn text-questions ${
        props.ansNum === Number(Text[props.questionNum]["a"]) && "correct"
      }`}
      onClick={checkAns}
      ref={colorRef}
    >
      {props.ansText}
    </div>
  );
}

export default Answer;
