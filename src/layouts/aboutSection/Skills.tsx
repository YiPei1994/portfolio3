import { efficentSkills, freetimeSkills } from "../../contants";
import SkillsBg from "./SkillsBg";
import SkillsWrapper from "./SkillsWrapper";

function Skills() {
  return (
    <div
      id="skills"
      className="relative flex flex-col gap-6 xl:gap-8 md:flex-row md:justify-around  items-stretch px-8 py-4 lg:py-8 rounded-xl overflow-hidden lg:px-16 mt-6 lg:mt-12 group"
    >
      <SkillsBg />
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
