import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypingText = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

export default TypingText;
