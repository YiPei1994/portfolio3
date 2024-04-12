import SectionWrapper from "../../components/SectionWrapper";
import { efficentSkills, freetimeSkills } from "../../contants";
import SkillsWrapper from "./SkillsWrapper";

function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="flex flex-col gap-4 md:flex-row md:justify-around  bg-neutral-100/5 rounded-xl items-stretch "
    >
      <SkillsWrapper skills={efficentSkills}>
        Professional skills{" "}
      </SkillsWrapper>
      <SkillsWrapper skills={freetimeSkills}>
        Free-time experiments{" "}
      </SkillsWrapper>
    </SectionWrapper>
  );
}

export default Skills;
