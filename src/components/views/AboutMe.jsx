import me from "../../images/Picture2.png";
import useFadeInOnScroll from "../animations/FadeOnScroll";
function AboutMe() {
  const fadeIn = useFadeInOnScroll("fade-in-left");

  return (
    <section id="about" className="about bg-light py-5">
      <div ref={fadeIn} className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">About Me</h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">Let me introduce myself.</h2>
        </div>
        <div className="about-content d-flex gap-5 align-items-center h-100 flex-md-nowrap justify-content-center flex-wrap">
          <img src={me} alt="" className="about-img img-fluid rounded-circle" />
          <p className="lead">
            I am a full-stack web developer based in Brisbane, with a passion for web technologies like HTML, CSS, and JavaScript, starting my journey in coding with Java.
            Now holding a degree in Information Technology, I am excited to apply my academic knowledge and further develop my skills in a professional setting.
            I&apos;m eager to contribute to innovative projects while continuously growing in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
