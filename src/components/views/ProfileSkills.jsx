import AnimatedProgress from "../animations/AnimatedProgress";
import ProfileInformation from "../elements/ProfileInformation";
import useFadeInOnScroll from "../animations/FadeOnScroll";

function ProfileSkills() {
  const fadeInLeft = useFadeInOnScroll("fade-in-left");

  return (
    <section className="profile my-6">
      <div className="container">
        <div ref={fadeInLeft} className="row">
          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold">Profile</h3>
            <p>
              Here is some more info about myself to help you get to know me
              better.
            </p>
            <ul className="list-group list-group-flush">
              <ProfileInformation
                label="Full Name:"
                value="Kieran Price"
                icon="bi-person-fill"
              />
              <ProfileInformation
                label="Birth Date:"
                value="November 16"
                icon="bi-calendar"
              />
              <ProfileInformation
                label="Current Position:"
                value="Student"
                icon="bi-building"
              />
              <ProfileInformation
                label="Website:"
                value="null"
                icon="bi-building"
              />
              <ProfileInformation
                label="Email:"
                value="enquires.kieran@gmail.com"
                icon="bi-building"
              />
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="text-uppercase fw-bold">Skills</h3>
            <p>
              Here is a list of my skills with my level of confindence in them
            </p>
            <AnimatedProgress
              label="React"
              value={90}
              className="animated-progress-bar"
            />
            <AnimatedProgress
              label="CSS"
              value={79}
              className="animated-progress-bar"
            />
            <AnimatedProgress
              label="Express"
              value={87}
              className="animated-progress-bar"
            />
            <AnimatedProgress
              label="Javascript"
              value={91}
              className="animated-progress-bar"
            />
            <AnimatedProgress
              label="C# / Java"
              value={71}
              className="animated-progress-bar"
            />
            <AnimatedProgress
              label="ASP.net"
              value={78}
              className="animated-progress-bar"
            />
            <AnimatedProgress
              label="UX/UI"
              value={81}
              className="animated-progress-bar"
            />
          </div>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-12">
          <a
            href="mailto:enquires.kieran@gmail.com"
            className="btn btn-outline-dark btn-lg text-uppercase px-5 mx-3 my-2"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="btn btn-dark btn-lg text-uppercase px-5 mx-3 my-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileSkills;
