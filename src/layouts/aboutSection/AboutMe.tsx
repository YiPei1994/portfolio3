import SideSectionHeader from "../../components/SideSectionHeader";

function AboutMe() {
  return (
    <div className="flex  flex-col  lg:flex-row items-center lg:items-start lg:justify-center">
      <div className="md:text-left md:w-[85%] mx-auto lg:w-2/3">
        <SideSectionHeader>About Me</SideSectionHeader>
        <p className="text-lg  xl:text-3xl text-white lg:w-3/4">
          With over two years of professional experience and a self-taught
          discipline cultivated during my free time, I've honed my programming
          capabilities to effectively handle tasks at a professional level,
          consistently meeting and exceeding expectations.
        </p>
      </div>
      <div className="my-8 flex max-w-[300px] justify-center items-center relative before:block before:absolute before:-inset-1  before:left-[10%] -z-10 before:-top-[4%] before:-bottom-[4%] before:border before:border-neutral-300">
        <img
          className="max-w-[90%] max-h-[90%] m-auto z-10"
          src="/src/assets/placeholder.jpg"
        />
      </div>
    </div>
  );
}

export default AboutMe;
