import { efficentSkills, freetimeSkills } from "../../contants";
import SkillIcon from "./SkillIcon";

function SkillsBg() {
  return (
    <div className="max-xl:hidden block w-full h-full absolute left-0 top-0 -z-10  group-hover:scale-150 group-hover:rotate-45 ease-in-out duration-500 transition-all">
      {efficentSkills.map((skill, i) => (
        <SkillIcon key={i} name={skill.name} style={skill.style} />
      ))}
      {freetimeSkills.map((skill, i) => (
        <SkillIcon key={i} name={skill.name} style={skill.style} />
      ))}
    </div>
  );
}

export default SkillsBg;
