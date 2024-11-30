import React, { useRef } from "react";
import Header from "./components/Header.js";
import BelowHeader from "./components/BelowHeader.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";
import "./App.css";

const App = () => {
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const scrollToExperiences = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div>
      {/* Pass the scroll functions directly */}
      <Header
        scrollToProjects={scrollToProjects}
        scrollToHome={scrollToHome}
        scrollToExperiences={scrollToExperiences}
      />
      <div ref={homeRef}>
        <BelowHeader />
      </div>
      <Projects ref={projectsRef} />
      <div ref={experienceRef}>
        <Experience />
      </div>
    </div>
  );
};

export default App;
