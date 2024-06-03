import { FaGithubSquare } from "react-icons/fa";
import Link from "../../components/Link";
import { FaGlobe } from "react-icons/fa";

type WorkProps = {
  project: {
    title: string;
    description: string;
    usedTechs: string[];
    web: string;
    github: string;
    content: string;
  };
};

function Work({ project }: WorkProps) {
  return (
    <div className="group p-4 md:p-6 lg:p-8 xl:p-12 flex flex-col gap-4 lg:flex-row lg:gap-12 lg:items-center mt-[5%] bg-neutral-100/5 border  border-transparent hover:border-neutral-400/25 duration-300 transition-all">
      <div className="w-full h-full lg:w-3/5 p-4 lg:p-8 bg-neutral-400/25 rounded-xl">
        <a href={project.web} target="_blank">
          <img
            className="group-hover:scale-105 transition-all duration-300 ease-linear"
            src={project.content}
            alt={project.title}
          />
        </a>
      </div>
      <div className="p-4 md:p-6 lg:p-8 lg:w-2/5">
        <div className="flex flex-col gap-8 lg:gap-8">
          <h2 className="text-2xl  flex items-center font-bold flex-wrap xl:text-4xl">
            {project.title}
          </h2>
          <p className="text-lg  xl:text-2xl">{project.description}</p>
          <ul className="flex items-center flex-wrap gap-6">
            {project.usedTechs.map((techs, i) => (
              <li className="w-6 h-6 flex items-center" key={i}>
                <img
                  className="w-full h-auto"
                  src={`/techsImages/${techs}.png`}
                  alt={`icon_${techs}`}
                />
              </li>
            ))}
          </ul>
          <div className="flex gap-4 items-center w-fit">
            <Link link={project.github}>
              <FaGithubSquare />
            </Link>
            <Link link={project.web}>
              <FaGlobe />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
