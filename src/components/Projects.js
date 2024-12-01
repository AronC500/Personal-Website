import React, { forwardRef, useEffect, useState, useRef } from "react";
import ToDo from "../imgs/ToDo.jpeg";
import threemusk from "../imgs/pngegg.png";

const Projects = forwardRef((props, ref) => {
  const [isFullyVisible, setIsFullyVisible] = useState(false); // Track full visibility
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFullyVisible(entry.intersectionRatio >= 0.5); // Full visibility detected
      },
      { threshold: 0.5 } // Trigger only when 100% visible
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={(node) => {
        projectRef.current = node;
        if (ref) {
          ref.current = node;
        }
      }}
      className="projectcontainer gap-20 pb-16 ml-24 mt-72 flex"
    >
      <div
        className={`imgcontainer rounded-xl border-white border-2 transition-opacity duration-500 ${
          isFullyVisible ? "opacity-100 animate-fade-in" : "opacity-0"
        }`}
      >
        <a href="https://aronc500.github.io/ToDo-List/">
          <img src={ToDo} className="imgproject rounded-lg" alt="ToDo" />
        </a>
      </div>
      <div className="textcontainer flex flex-col gap-5 pr-20 pb-20 font-koulen text-4xl overflow-hidden">
        <div
          className={`transition-opacity duration-500 ${
            isFullyVisible ? "opacity-100 animate-slide-in" : "opacity-0"
          }`}
        >
          - Built a feature-rich to-do list application with functionalities for
          adding, editing, and deleting tasks.
        </div>
        <div
          className={`transition-opacity duration-500 ${
            isFullyVisible ? "opacity-100 animate-slide-in" : "opacity-0"
          }`}
        >
          - Enhanced usability with task sorting by due date and priority.
        </div>
        <div
          className={`transition-opacity duration-500 ${
            isFullyVisible ? "opacity-100 animate-slide-in" : "opacity-0"
          }`}
        >
          - Leveraged local storage to ensure persistent data across sessions.
        </div>
        <div
          className={`transition-opacity duration-500 ${
            isFullyVisible ? "opacity-100 animate-slide-in" : "opacity-0"
          }`}
        >
          <img src={threemusk} className="w-40 h-40" alt="Three Musketeers" />
        </div>
      </div>
    </div>
  );
});

export default Projects;
