import React, { useEffect, useState, useRef } from "react";
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedProgress(Skills.map((skill) => skill.progress));
        }
      });
    };

    // Store ref in a local variable inside the effect
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.3, // Adjust threshold as needed
    });

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [Skills]);

  return (
    <section ref={sectionRef}>
      <div className="skillContainer">
        {Skills.map((skill, index) => (
          <div className="progressBar" key={skill.id}>
            <p className="skillName">{skill.skillname}</p>
            <span className="progress">
              <span
                className="lineInProgress"
                style={{
                  width: animatedProgress[index] || "0%",
                  animation: animatedProgress[index]
                    ? `fillBars 1.5s ease-out`
                    : "none",
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
