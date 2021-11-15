import React, { useEffect } from "react";
import "./Explain.css";
import { Markup } from "interweave";
import Text from "./../../Text.json";

function Explain(props) {
  useEffect(() => {
    props.setToExplain(true);
  }, []);

  return (
    <div className="explain-part under-question-headlie">
      {Text[props.questionNum]["explain"] !== "" && (
        <Markup
          className="explian text-questions explain-text"
          content={Text[props.questionNum]["explain"]}
        />
      )}
      {Text[props.questionNum]["pic"] !== "" && (
        <Markup className="pic-cont" content={Text[props.questionNum]["pic"]} />
      )}
      <div
        className="btn next-btn change-explain"
        onClick={props.changeFromExplain}
      >
        הבא
      </div>
    </div>
  );
}

export default Explain;
