import TypingText from "../animations/TypingText";
import useFadeInOnScroll from "../animations/FadeOnScroll";

function TitleCard() {
  const text = useFadeInOnScroll("fade-in-up");

  return (
    <header className="header vh-100 text-center position-relative">
      <div
        ref={text}
        className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100"
      >
        <h5 className="text-primary fs-3 fw-bold text-uppercase">
          Hello World
          <TypingText text="I am Kieran Price." delay={100} />
        </h5>
        <h1 id="typing-text" className="display-1 fw-bold text-white"></h1>

        <p className="roles text-white text-uppercase fs-4">
          <span>Full Stack Web Developer | </span>
          <span>Software Engineer</span>
        </p>

        <a href="#about" className="btn btn-outline-light btn-lg mt-3">
          <div className="d-flex">
            <div className="me-3">
              <i className="bi bi-chevron-down"></i>
            </div>
            <div className="text-start">
              <span>More About Me</span>
            </div>
          </div>
        </a>

        <div className="social d-flex gap-3 position-absolute">
          <a href="https://www.linkedin.com/in/kieran-price-q">
            <i className="bi bi-linkedin  text-white display-6"></i>
          </a>
          <a href="https://github.com/Ghosty1667">
            <i className="bi bi-github text-white display-6"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default TitleCard;
