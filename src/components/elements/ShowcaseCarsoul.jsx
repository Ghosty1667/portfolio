import PropTypes from "prop-types";

import techQuiz from "../../images/techQuiz.jpg";
import natural from "../../images/Natural.jpg";
import ebook from "../../images/ebook.jpg";
import QueueViewer from "../../images/QueueViewer.jpg";
import FortuneCookie from "../../images/FortuneCookie.jpg";

import ShowcaseCarsoulItem from "./ShowcaseCarsoulItem";


function ShowcaseCarsoul({ carsoulID }) {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#${carsoulID}`}
          data-bs-slide-to="0"
          className="active text-luig"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={`#${carsoulID}`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={`#${carsoulID}`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target={`#${carsoulID}`}
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target={`#${carsoulID}`}
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        <ShowcaseCarsoulItem
          active={true}
          title="QueueViewer"
          description="QueueViewer is a powerful application that allows users to view, add, and sync videos across multiple clients. With QueueViewer, you can easily manage your video queue and enjoy seamless playback on all supported devices."
          alt="QueueViewer"
          image={QueueViewer}
          link="https://github.com/Ghosty1667/queueviewer"
        />
        <ShowcaseCarsoulItem
          title="Ebook-and-other-projects"
          description="Following Brad Traversy guide to bootstrap 5, I created 2 pages based on this course within react to gain a greater understanding of UI design."
          alt="Ebook-and-other-projects"
          image={ebook}
          link="https://github.com/Ghosty1667/Ebook-and-Other-Projects/"
        />
        <ShowcaseCarsoulItem
          title="Fortune Cookie"
          description="This project is a basic fortune cookie website designed to test the usage of Tailwind CSS and CSS animations."
          alt="Fortune Cookie"
          image={FortuneCookie}
          link="https://github.com/Ghosty1667/fortunecookie"
        />
        <ShowcaseCarsoulItem
          title="Natural Classifer"
          description="Uses Natural Classifer that the Natural Language Processing API to classify if a wikipedia article is about a fictional event or a real event."
          alt="Natural Classifer"
          image={natural}
          link="https://github.com/Ghosty1667/WikiTruthBackEnd"
        />
        <ShowcaseCarsoulItem
          title="TechnologyQuiz"
          description="A basic Quiz application created using TypeScript and React. The application allows the used to play a round of a quiz and view their score at the end."
          alt="TechnologyQuiz"
          image={techQuiz}
          link="https://github.com/Ghosty1667/TechnologyQuiz"
        />
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={carsoulID}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={carsoulID}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

ShowcaseCarsoul.propTypes = {
  carsoulID: PropTypes.string.isRequired,
};

export default ShowcaseCarsoul;
