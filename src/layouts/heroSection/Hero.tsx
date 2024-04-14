import SectionWrapper from "../../components/SectionWrapper";

import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

function Hero() {
  return (
    <SectionWrapper id="hero" className="mt-20 ">
      <HeroImage />
      <HeroText />
    </SectionWrapper>
  );
}

export default Hero;
