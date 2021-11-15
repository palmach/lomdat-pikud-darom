import React, { useState, useEffect, useRef } from "react";
import "./FillTab.css";
import gsap from "gsap";
import Text from "./../../Text.json";

function FillTab(props) {
  const colorRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (props.isCheacked) {
      if (inputValue === props.endValue) {
        gsap.to(colorRef.current, {
          borderBottomColor: "#56821D",
          duration: 0.25,
        });
        setIsCorrect(true)
      } else {
        gsap.to(colorRef.current, {
          borderBottomColor: "#bb3c02",
          duration: 0.25,
        });
        props.setIsCheacked(false);
      }
    }
  }, [props.isCheacked]);

  return (
    <input
      ref={colorRef}
      className="fill-tab tabs"
      value={inputValue}
      onChange={handelChange}
      disabled = {isCorrect}
      // disabledInputStyle={{color:'black'}}
    />
  );
}

export default FillTab;
