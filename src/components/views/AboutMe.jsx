import me from "../../images/Picture2.png";
function AboutMe() {
  return (
    <section id="about" className="about bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h4 className="text-uppercase fw-bold text-primary">About Me</h4>
          <hr className="w-25 mx-auto" />
          <h2 className="mb-4">Let me introduce myself.</h2>
        </div>
        <div className="about-content d-flex gap-5 align-items-center h-100">
          <img src={me} alt="" className="about-img img-fluid rounded-circle" />
          <p className="lead">
            I am a full stack web developer from Boston MA. I started writing
            code about 16 years ago. I started with Java and then moved to web
            technologies like HTML, CSS, JavaScript and PHP. I have worked for
            companies as well as ran my own. In 2016 I started creating content
            full-time. I love helping people learn to code and better their
            lives.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
