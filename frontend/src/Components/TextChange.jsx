import React from "react";
import { useState, useEffect, useMemo } from "react";

const TextChange = () => {
  const texts = useMemo(() => [
    "Hi, I'm Shailendra",
    "Full-Stack Developer",
    "Good at Data Structures & Algorithms",
    "Building Scalable Web Solutions"
  ], []);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [endValue, setEndValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isForward) {
        if (endValue < texts[currentIndex].length) {
          setEndValue(prev => prev + 1);
          setCurrentText(texts[currentIndex].substring(0, endValue + 1));
        } else {
          // Wait a bit at the end of the text before deleting
          setTimeout(() => setIsForward(false), 1000);
        }
      } else {
        if (endValue > 0) {
          setEndValue(prev => prev - 1);
          setCurrentText(texts[currentIndex].substring(0, endValue - 1));
        } else {
          // When completely deleted, move to next text
          setIsForward(true);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, currentIndex, texts]);

  return <div className="transition ease duration-300">'{currentText}</div>;
};

export default TextChange;