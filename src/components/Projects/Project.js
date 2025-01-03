import React from "react";
import "../Projects/project.css";
import ProjectsCards from "./ProjectsCards";

const project = () => {
  return (
    <section id="projects">
      <div className="header">
        <div className="headDesc">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </div>
        <div className="heading">My Projects</div>
      </div>
      <ProjectsCards />
    </section>
  );
};

export default project;
