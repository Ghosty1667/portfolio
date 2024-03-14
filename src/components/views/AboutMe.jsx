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
            I am a full stack web developer living in Brisbane. I started
            writing code about 16 years ago. I started with Java and then moved
            to web technologies like HTML, CSS, JavaScript and PHP. As a
            fourth-year Information and Communication Technology Student, I am
            eager to secure a job where I can apply my academic knowledge and
            further develop my skills in a professional setting.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
