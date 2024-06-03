import Button from "../../components/Button";
import ChangingColor from "../../components/animated/ChangingTextColor";
import Reveal from "../../components/animated/Reveal";
import { FaFileAlt } from "react-icons/fa";

function HeroText() {
  return (
    <div className="flex flex-col gap-8 xl:gap-10 justify-center items-center">
      <h1 className="text-6xl  flex items-center font-bold flex-wrap xl:text-8xl">
        <Reveal className="ml-2"> Hi, </Reveal>
        <Reveal delayTime={0.35}> i am </Reveal>
        <Reveal delayTime={0.5}>
          <ChangingColor className="md:ml-2" text="Yi Pei Zhu" />
        </Reveal>
        .
      </h1>

      <Reveal type="text">
        <p className="text-lg md:text-center md:w-[85%] mx-auto xl:text-2xl  ">
          I'm deeply enthusiastic about the ever-evolving landscape of
          technology, especially in the vibrant domains of computer science and
          programming. Each new challenge sparks my passion and drives my energy
          to explore and innovate.
        </p>
      </Reveal>
      <Button className="uppercase text-2xl max-md:self-start flex gap-4 items-center ">
        <FaFileAlt className="text-white" />
        <a href="/cv.pdf" target="_blank">
          My resume
        </a>
      </Button>
    </div>
  );
}

export default HeroText;
