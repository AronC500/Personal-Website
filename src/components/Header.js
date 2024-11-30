import React, { useState, useEffect } from "react";

const Header = ({ scrollToHome, scrollToProjects, scrollToExperiences }) => {
  const [yellow, setYellow] = useState("0");
  const [nameAnimation, setNameAnimation] = useState(false);
  const [homeAnimation, sethomeAnimation] = useState(false);
  const [experienceAnimation, setexperienceAnimation] = useState(false);
  const [projectAnimation, setprojectAnimation] = useState(false);

  const colorChanger = () => setYellow("1");
  const colorChanger2 = () => setYellow("2");
  const colorChanger3 = () => setYellow("0");

  useEffect(() => {
    setNameAnimation(true);
    sethomeAnimation(true);
    setexperienceAnimation(true);
    setprojectAnimation(true);

    return () => {
      setNameAnimation(false);
      sethomeAnimation(false);
      setexperienceAnimation(false);
      setprojectAnimation(false);
    };
  }, []);

  return (
    <div
      id="headerContainer"
      className="flex pt-6 pl-20 pb-6  sticky top-0 overflow-auto z-10"
    >
      <div
        id={nameAnimation ? "nameAnimation" : ""}
        className="pl-12 ml-4 text-3xl font-extralight tracking-widest min-w-96 opacity-0"
      >
        aron chen
      </div>
      <div className="flex gap-10 text-sm font-medium pt-3">
        <div
          id={homeAnimation ? "homeAnimation" : ""}
          onClick={() => {
            colorChanger3();
            scrollToHome(); // Scroll to Home
          }}
          className={`${
            yellow === "0" ? "text-yellow-400" : "text-white"
          } cursor-pointer pl-3 opacity-0`}
        >
          Home
        </div>
        <div
          id={experienceAnimation ? "experienceAnimation" : ""}
          onClick={() => {
            colorChanger();
            scrollToExperiences();
          }}
          className={`${
            yellow === "1" ? "text-yellow-400" : "text-white"
          } cursor-pointer opacity-0`}
        >
          Experiences
        </div>
        <div
          id={projectAnimation ? "projectAnimation" : ""}
          onClick={() => {
            colorChanger2();
            scrollToProjects(); // Scroll to Projects
          }}
          className={`${
            yellow === "2" ? "text-yellow-400" : "text-white"
          } cursor-pointer opacity-0`}
        >
          Projects
        </div>
      </div>
    </div>
  );
};

export default Header;
