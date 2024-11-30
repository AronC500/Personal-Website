import React, { useEffect, useState, forwardRef, useRef } from "react";
import threemusk from "../imgs/pngegg.png";
import c from "../imgs/c++.png";
import reac from "../imgs/react.png";
import tail from "../imgs/tailwind.png";
import post from "../imgs/postgres.png";

const Experience = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.5); // Fully visible
      },
      { threshold: 0.5 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={(node) => {
        experienceRef.current = node;
        if (ref) ref.current = node;
      }}
      className="ml-24 flex flex-col"
    >
      <div className="h-96 font-koulen ">
        <div className="flex justify-between">
          <div
            id={`${isVisible ? "experiencetext" : ""}`}
            className="text-3xl opacity-0"
          >
            Teaching Assistant (Hunter College)
          </div>
          <div
            id={`${isVisible ? "experiencetext2" : ""}`}
            className="text-3xl mr-10 opacity-0"
          >
            Aug 2023 - December 2023
          </div>
        </div>
        <div
          id={`${isVisible ? "experiencetext3" : ""}`}
          className="ml-5 text-2xl opacity-0"
        >
          - Tutor students with Python and C++
        </div>
        <div
          id={`${isVisible ? "experiencetext4" : ""}`}
          className="ml-5 text-2xl opacity-0"
        >
          - Organizing appointments
        </div>
      </div>
      <div className="h-56 flex justify-center pt-28 gap-10">
        <img
          id={`${isVisible ? "setelanguageused" : ""}`}
          className="opacity-0 w-20 h-20"
          src={threemusk}
          alt="Javascript, HTML, CSS"
        />
        <img
          id={`${isVisible ? "setelanguageused2" : ""}`}
          className="opacity-0 w-20 h-20"
          src={c}
          alt="C++"
        />
        <img
          id={`${isVisible ? "setelanguageused3" : ""}`}
          className="opacity-0 w-20 h-20"
          src={tail}
          alt="TailwindCSS"
        />
        <img
          id={`${isVisible ? "setelanguageused4" : ""}`}
          className="opacity-0 w-20 h-20"
          src={post}
          alt="PostgreSQL"
        />
        <img
          id={`${isVisible ? "setelanguageused5" : ""}`}
          className="opacity-0 w-20 h-20"
          src={reac}
          alt="React"
        />
      </div>
    </div>
  );
});

export default Experience;
