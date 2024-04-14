import { efficentSkills, freetimeSkills } from "../../contants";
import SkillsWrapper from "./SkillsWrapper";

function Skills() {
  return (
    <div
      id="skills"
      className="flex flex-col gap-6 xl:gap-8 md:flex-row md:justify-around  items-stretch px-8 lg:px-12 mt-6 lg:mt-12"
    >
      <SkillsWrapper skills={efficentSkills}>
        Professional skills{" "}
      </SkillsWrapper>
      <SkillsWrapper skills={freetimeSkills}>
        Free-time experiments{" "}
      </SkillsWrapper>
    </div>
  );
}

export default Skills;
