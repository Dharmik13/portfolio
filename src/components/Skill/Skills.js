import React from "react";
import "../Skill/skill.css";
import SkillProgress from "./SkillProgress";
import BlackLine from "../Black Line/BlackLine";

const Skills = () => {
  return (
    <section id="skill">
      <div className="header">
        <div className="headDesc">FEATURES</div>
        <div className="heading">Development Skill</div>
      </div>

      <SkillProgress />
      <BlackLine />
    </section>
  );
};

export default Skills;
