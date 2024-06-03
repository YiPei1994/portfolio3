import SectionWrapper from "../../components/SectionWrapper";
import SideSectionHeader from "../../components/SideSectionHeader";
import ChangingColor from "../../components/animated/ChangingTextColor";
import Reveal from "../../components/animated/Reveal";
import { projects } from "../../contants";
import Work from "./Work";

function MyWork() {
  return (
    <SectionWrapper id="work">
      <div className="md:w-[85%]  lg:w-3/5 md:text-center lg:text-left ">
        {" "}
        <SideSectionHeader className="flex-row flex gap-4">
          <Reveal>My</Reveal>
          <Reveal delayTime={0.35}>
            <ChangingColor text="projects" />
          </Reveal>
        </SideSectionHeader>
      </div>
      <div className=" py-8 rounded-xl  ">
        {projects.map((project, i) => (
          <Work key={i} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default MyWork;
