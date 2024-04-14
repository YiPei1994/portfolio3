import { ReactNode } from "react";
import SkillSingle from "./SkillSingle";

type SkillsWrapperProps = {
  skills: string[];
  children: ReactNode;
};

function SkillsWrapper({ skills, children }: SkillsWrapperProps) {
  return (
    <div className="flex flex-col gap-6 xl:gap-8 py-4 md:px-6 lg:px-8 justify-start ">
      <h2 className="text-2xl  flex items-center font-bold flex-wrap lg:text-4xl">
        {" "}
        {children}
      </h2>
      <ul>
        {skills.map((skill, i) => (
          <SkillSingle key={i} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default SkillsWrapper;
