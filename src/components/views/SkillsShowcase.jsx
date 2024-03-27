import SkillsCards from "../elements/SkillsCards";
import useFadeInOnScroll from "../animations/FadeOnScroll";

function SkillsShowcase() {
  const fadeUp = useFadeInOnScroll("fade-in-up");
  return (
    <section id="skills" className="skills bg-primary bg-gradient">
      <div className="container py-5">
        <div ref={fadeUp} className="row">
          <h1 className="text-center display-3 text-uppercase fw-bold text-light ">
            Skills
          </h1>
          <SkillsCards
            title="Web Development and UX/UI"
            text="I possess robust backend skills, coupled with expertise in HTML, CSS, and JavaScript. With experience in frameworks like React, Next.js, and Vue, I excel in developing dynamic and responsive user interfaces for web applications."
            icon="bi-code-slash"
          />
          <SkillsCards
            title="Backend Design"
            text="I specialize in backend development with strong skills in Express, SQL, and ASP.NET. My expertise includes crafting robust RESTFUL server-side solutions, optimizing query performance, and building secure, feature-rich web applications tailored to business needs."
            icon="bi-braces"
          />
          <SkillsCards
            title="Software Development"
            text="With expertise in Java, C#, and Python, I excel in backend development, particularly in IoT and mobile technologies. My experience includes designing robust systems for sensor data processing and powering feature-rich mobile applications with efficient backend solutions."
            icon="bi-cpu"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsShowcase;
