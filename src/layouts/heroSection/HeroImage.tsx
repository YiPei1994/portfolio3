import DraggableSvg from "../../components/animated/DraggableSvg";

function HeroImage() {
  return (
    <div
      id="hero"
      className="w-full flex justify-center items-center relative h-max max-w-[500px] mx-auto mb-10 lg:my-[5%]"
    >
      <DraggableSvg
        className="-top-10 left-32 xl:-top-[35%]"
        src="/web/shape1.svg"
      />
      <DraggableSvg className="left-0" src="/web/shape2.svg" />
      <DraggableSvg className="right-0" src="/web/shape3.svg" />

      <img
        src="/web/emoji.svg"
        alt="emoji"
        className="w-[50%] xl:hover:scale-125 z-20 transition-all duration-300 cursor-pointer"
      />
    </div>
  );
}

export default HeroImage;
