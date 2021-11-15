// AboutPage
import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

function AboutPage(props) {

  return (
    <div className="about-page">
        <p className="headline about-headline">אודות</p>
        {/* <div></div> */}
        <p className="about-text"><span className="about-titles">ראש מדור מט"ח: </span>רס"ן מור דהן</p>
        <p className="about-text"><span className="about-titles">מפקדת הדיגיטל: </span>סגן יעל חפץ</p>
        <p className="about-text"><span className="about-titles">מפקדת סטודיו: </span>סגן נועה דהן</p>
        <p className="about-text"><span className="about-titles">מפתחת הלומדה: </span>רב"ט זוהר סלע</p>
        <p className="about-text"><span className="about-titles">עיצוב: </span>סמל דנה איטקין</p>
        <p className="about-text"><span className="about-titles">מומחה התוכן: </span>סגן עומרי בן אבו</p>
        <p className="about-text"><span className="about-titles">מאשר מקצועי: </span>רס"ן רעות שלום</p>
    </div>
  );
}

export default AboutPage;
