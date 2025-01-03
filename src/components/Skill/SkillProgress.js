import React, { useEffect, useState } from "react";
import "../Skill/skill.css";

const SkillProgress = () => {
  const [Skills] = React.useState([
    { id: 1, skillname: "HTML", progress: "100%" },
    { id: 2, skillname: "CSS", progress: "90%" },
    { id: 3, skillname: "Javascript", progress: "75%" },
    { id: 4, skillname: "React Js", progress: "80%" },
    { id: 5, skillname: "Node Js", progress: "70%" },
    { id: 6, skillname: "Express Js", progress: "75%" },
    { id: 7, skillname: "MongoDB", progress: "65%" },
    { id: 8, skillname: "MySQL", progress: "65%" },
  ]);

  const [animatedProgress, setAnimatedProgress] = useState([]);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimatedProgress(Skills.map((skill) => skill.progress));
    }, 100); // Delay for smoother animation start
  }, [Skills]);

  return (
    <section>
      <div className="skillContainer">
        {Skills.map((skill, index) => (
          <div className="progressBar" key={skill.id}>
            <p className="skillName">{skill.skillname}</p>
            <span className="progress">
              <span
                className="lineInProgress"
                style={{
                  width: animatedProgress[index] || "0%",
                  animation: `fillBars 1.5s ease-out`,
                }}
              >
                <span className="percentageText">{skill.progress}</span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillProgress;
