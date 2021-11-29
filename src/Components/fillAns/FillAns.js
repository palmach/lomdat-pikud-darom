import React from "react";
import "./FillAns.css";
import FillTab from "./../fillTab/FillTab";
import Text from "./../../Text.json";

function FillAns(props) {
  const endValue = ["ע", "מ", "ו", "ד", "ע", "נ", "נ"];

  const moveTab = (event, index) => {
    let nextfiled;
    if (index + 1 !== 3) {
      nextfiled = document.querySelector(`input[name=field-${index + 1}]`);
    } else {
      nextfiled = document.querySelector(`input[name=field-${index + 2}]`);
    }
    if (nextfiled !== null) {
      nextfiled.focus();
    }
  };

  return (
    <div className="fill-btn-cont">
      {Text[props.questionNum]["letters"].map((ans, index) => {
        if (index === 3 || index === 6) {
          return (
            <div key={index} className="text-tab">
              <p className="text-tab tabs">
                {Text[props.questionNum]["letters"][index]}
              </p>
              <div className="blank-tab"> </div>
            </div>
          );
        } else {
          return (
            <FillTab
              key={index}
              index={index}
              name={`field-${index}`}
              endValue={endValue[index]}
              isCheacked={props.isCheacked}
              setIsCheacked={props.setIsCheacked}
              moveTab={moveTab}
              nextfiled={document.querySelector(
                `input[name=filed-${index + 1}]`
              )}
            />
          );
        }
      })}
    </div>
  );
}

export default FillAns;
