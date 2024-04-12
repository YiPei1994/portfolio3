import SectionWrapper from "../../components/SectionWrapper";

import AboutMe from "./AboutMe";
import Skills from "./Skills";

function About() {
  return (
    <SectionWrapper id="about">
      <AboutMe />
      <Skills />
    </SectionWrapper>
  );
}

export default About;
