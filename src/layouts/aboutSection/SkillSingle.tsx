type SkillSingleProps = {
  skill: string;
};

function SkillSingle({ skill }: SkillSingleProps) {
  return (
    <li className="text-lg md:text-center md:w-[85%] mx-auto xl:text-3xl uppercase pl-4 before:content before:w-3 before:h-3 before:rounded-full before:inline-block before:bg-[#9B5CFF] flex items-center before:mr-3 hover:before:bg-[#50CAE4] transition-all duration-300 ring hover:ring-neutral-300 ring-transparent p-2 rounded-xl hover:text-white">
      {skill}
    </li>
  );
}

export default SkillSingle;
