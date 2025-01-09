import React from "react";
import EduExp from "./EduExp";
import "../Education And Experience/eduexp.css";
import BlackLine from "../Black Line/BlackLine";

const EduExpHeader = () => {
  return (
    <section id="eduexp">
      <div className="header">
        <div className="headDesc">What I Completed and What I Experienced</div>
        <div className="heading">Education And Experience</div>
      </div>
      <EduExp />

      <div className="header">
        <div className="headDesc">Download or View My Resume</div>
        <div className="heading">My Resume</div>
      </div>
      <div className="resumeButton">
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1KSAuBY2JBKqwHgstZjbOYhbQ-d8ebVSC/view",
              "_blank"
            )
          }
          className="btn"
        >
          Download or View My Resume
        </button>
      </div>
      <BlackLine />
    </section>
  );
};

export default EduExpHeader;
