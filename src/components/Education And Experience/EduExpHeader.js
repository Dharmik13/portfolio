import React from "react";
import EduExp from "./EduExp";
import "../Education And Experience/eduexp.css";

const EduExpHeader = () => {
  return (
    <section id="eduexp">
      <div className="header">
        <div className="headDesc">What I Completed and What I Experienced</div>
        <div className="heading">Education And Experience</div>
      </div>
      <EduExp />
    </section>
  );
};

export default EduExpHeader;
