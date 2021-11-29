import React, { useState, useEffect, useRef } from "react";
import "./FillTab.css";
import gsap from "gsap";

function FillTab(props) {
  const colorRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handelChange = (event) => {
    const { maxLength, value } = event.target;
    let fieldIntIndex = parseInt(props.index, 10);

    setInputValue(event.target.value);
    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        props.moveTab(event, props.index);
      }
    }
  };

  useEffect(() => {
    if (props.isCheacked) {
      if (inputValue === props.endValue) {
        gsap.to(colorRef.current, {
          borderBottomColor: "#56821D",
          duration: 0.25,
        });
        setIsCorrect(true);
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
      name={props.name}
      className="fill-tab tabs"
      value={inputValue}
      onChange={handelChange}
      disabled={isCorrect}
      maxLength="1"
    />
  );
}

export default FillTab;
