import ShowcaseCarsoul from "../elements/ShowcaseCarsoul";
import useFadeInOnScroll from "../../components/animations/FadeOnScroll";
function Showcase() {
  const fadeIn = useFadeInOnScroll("fade-in-left");

  return (
    <div className="portifolo py-5 bg-secondary text-light">
      <div ref={fadeIn} id="project" className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-6 align-self-center align-content-center">
            <h1 className="display-3 text-uppercase fw-bold">Projects</h1>
            <p className="lead">
              Here are some of the projects I have worked on. Click on the
              project to view more details.
            </p>
          </div>
          <div className="col-md-6 align-self-center flex-fill">
            <ShowcaseCarsoul carsoulID="#carouselExampleCaptions" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
