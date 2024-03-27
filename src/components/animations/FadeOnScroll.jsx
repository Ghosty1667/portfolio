import { useEffect, useRef } from "react";

const useFadeInOnScroll = (className) => {
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

  return elementRef;
};

export default useFadeInOnScroll;
