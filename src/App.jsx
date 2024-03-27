import AboutMe from "./components/views/AboutMe";
import ProfileSkills from "./components/views/ProfileSkills";
import Showcase from "./components/views/Showcase";
import SkillsShowcase from "./components/views/SkillsShowcase";
import TitleCard from "./components/views/TitleCard";
import Footer from "./components/views/Footer";

function App() {
  return (
    <>
      <TitleCard />
      <AboutMe />
      <ProfileSkills />
      <Showcase />
      <SkillsShowcase />
      <Footer />
    </>
  );
}

export default App;
