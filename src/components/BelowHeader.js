import React, { useEffect, useState, useRef, useMemo } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize the texts array
  const texts = useMemo(() => ["Software Engineer", "Fullstack Developer"], []);

  // Interval for rotating text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts]);

  // Update current text based on currentIndex
  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex, texts]);

  // Intersection Observer to track visibility
  useEffect(() => {
    const ref = belowHeaderRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.5); // 50% visibility or more
      },
      { threshold: 0.5 }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);

  useEffect(() => {
    // Trigger animations when visible
    if (isVisible) {
      setBigTextAnimation(true);
      setlinkinAnimation(true);
      setgmailAnimation(true);
      setgithubAnimation(true);
    } else {
      setBigTextAnimation(false);
      setlinkinAnimation(false);
      setgmailAnimation(false);
      setgithubAnimation(false);
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
            href="https://www.linkedin.com/in/aron-chen-77656a2b4/"
            target="_blank"
            rel="noreferrer"
            className="opacity-0"
          >
            <img alt="LINKIN" src={linkin} className="w-16" />
          </a>
          <a
            id={`${githubAnimation ? "githubAnimation" : ""}`}
            href="https://github.com/AronC500"
            target="_blank"
            rel="noreferrer"
            className="transformgit opacity-0"
          >
            <img alt="GITHUB" src={github} className="w-26 h-36" />
          </a>
          <a
            id={`${gmailAnimation ? "gmailAnimation" : ""}`}
            href="mailto:aronchen500@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="transformmail opacity-0"
          >
            <img alt="GMAIL" src={gmail} className="w-16 h-24" />
          </a>
        </div>
      </div>
      <div className="min-w-96 h-80 ml-12 mt-28 border-white border-2">
        Img Here
      </div>
    </div>
  );
};

export default BelowHeader;