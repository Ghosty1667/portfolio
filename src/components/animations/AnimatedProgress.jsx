import { useEffect, useRef } from "react";

import PropTypes from "prop-types";

function AnimatedProgress({ value, label, className }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
      });
    });

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [className]);

  return (
    <>
      <h5>
        <i className="bi bi-check"></i> {label}
      </h5>
      <div className="progress mb-4">
        <div
          ref={elementRef}
          className="progress-bar"
          style={{ "--progress-width": `${value}%`, width: `${value}%` }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {value}%
        </div>
      </div>
    </>
  );
}

AnimatedProgress.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default AnimatedProgress;
