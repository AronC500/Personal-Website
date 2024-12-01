import React, { useEffect, useState, useRef } from "react";
import linkin from "../imgs/link.svg";
import github from "../imgs/github.png";
import gmail from "../imgs/gmail.jpg";

const BelowHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const belowHeaderRef = useRef(null);

  const [linkinAnimation, setlinkinAnimation] = useState(false);
  const [gmailAnimation, setgmailAnimation] = useState(false);
  const [githubAnimation, setgithubAnimation] = useState(false);
  const [BigTextAnimation, setBigTextAnimation] = useState(false);
  const [currentText, setCurrentText] = useState("Software Engineer");

  const texts = ["Software Engineer", "Fullstack Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.5); // 50% visibility or more
      },
      { threshold: 0.5 }
    );

    if (belowHeaderRef.current) {
      observer.observe(belowHeaderRef.current);
    }

    return () => {
      if (belowHeaderRef.current) {
        observer.unobserve(belowHeaderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Text rotation
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    setBigTextAnimation(true);
    // Trigger animations when visible
    if (isVisible) {
      setlinkinAnimation(true);
      setgmailAnimation(true);
      setgithubAnimation(true);
    } else {
      setlinkinAnimation(false);
      setgmailAnimation(false);
      setgithubAnimation(false);
    }
    return () => {
        setBigTextAnimation(false);
    }
  }, [isVisible]);

  return (
    <div ref={belowHeaderRef} className="flex items-center">
      <div className="flex flex-col mt-40 ml-48 pl-1.5">
        <div className="BigTextContainer">
          <div
            id={`${BigTextAnimation ? "BigTextAnimation" : ""}`}
            className="BigText"
          >
            {currentText}
          </div>
        </div>
        <div id="containerForMedia" className="flex">
          <a
            id={`${linkinAnimation ? "linkinAnimation" : ""}`}
            href="https://github.com/AronC500"
            target="_blank"
            rel="noreferrer"
            className="opacity-0"
          >
            <img alt="LINKIN" src={linkin} className="w-16" />
          </a>
          <a
            id={`${githubAnimation ? "githubAnimation" : ""}`}
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
            className="transformgit opacity-0"
          >
            <img alt="GITHUB" src={github} className="w-26 h-36" />
          </a>
          <a
            id={`${gmailAnimation ? "gmailAnimation" : ""}`}
            href="mailto:example@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="transformmail opacity-0"
          >
            <img alt="GMAIL" src={gmail} className="w-16 h-24" />
          </a>
        </div>
      </div>
      <div className="min-w-96 h-80 ml-12 mt-28"></div>
    </div>
  );
};

export default BelowHeader;
