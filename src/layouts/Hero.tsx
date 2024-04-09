import Button from "../components/Button";
import ChangingColor from "../components/ChangingTextColor";
import DraggableSvg from "../components/DraggableSvg";
import Reveal from "../components/Reveal";
import SectionWrapper from "../components/SectionWrapper";

function Hero() {
  return (
    <SectionWrapper>
      <div className="w-full flex justify-center items-center relative min-h-[50vh]">
        <DraggableSvg className="top-[17.5%]" src="/src/assets/shape1.svg" />
        <DraggableSvg className="left-0" src="/src/assets/shape2.svg" />
        <DraggableSvg className="right-0" src="/src/assets/shape3.svg" />
        <img src="/src/assets/emoji.svg" alt="emoji" className="w-[60%]" />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Reveal type="text">
          <h1 className="text-4xl flex items-center">
            Hi, i am <ChangingColor className="ml-2" text="Yi Pei Zhu" />.
          </h1>
        </Reveal>
        <Reveal type="text">
          <p>
            I'm deeply enthusiastic about the ever-evolving landscape of
            technology, especially in the vibrant domains of computer science
            and programming. Each new challenge sparks my passion and drives my
            energy to explore and innovate.
          </p>
        </Reveal>
        <Button className="uppercase text-xl self-start">
          <a href="./public/cv.pdf">My resume</a>
        </Button>
      </div>
    </SectionWrapper>
  );
}

export default Hero;
