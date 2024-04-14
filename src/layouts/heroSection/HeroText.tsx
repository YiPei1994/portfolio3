import Button from "../../components/Button";
import ChangingColor from "../../components/ChangingTextColor";
import Reveal from "../../components/Reveal";

function HeroText() {
  return (
    <div className="flex flex-col gap-8 xl:gap-10 justify-center items-center">
      <Reveal type="text">
        <h1 className="text-6xl  flex items-center font-bold flex-wrap xl:text-8xl">
          Hi, i am <ChangingColor className="md:ml-2" text="Yi Pei Zhu" />.
        </h1>
      </Reveal>
      <Reveal type="text">
        <p className="text-lg md:text-center md:w-[85%] mx-auto xl:text-2xl  ">
          I'm deeply enthusiastic about the ever-evolving landscape of
          technology, especially in the vibrant domains of computer science and
          programming. Each new challenge sparks my passion and drives my energy
          to explore and innovate.
        </p>
      </Reveal>
      <Button className="uppercase text-2xl  flex ">
        <a href="./public/cv.pdf">My resume</a>
      </Button>
    </div>
  );
}

export default HeroText;
