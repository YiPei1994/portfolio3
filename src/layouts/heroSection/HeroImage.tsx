import DraggableSvg from "../../components/DraggableSvg";

function HeroImage() {
  return (
    <div className="w-full flex justify-center items-center relative h-max max-w-[500px] mx-auto mt-20 mb-10 lg:my-[5%]">
      <DraggableSvg
        className="-top-10 left-32 xl:-top-[35%]"
        src="/src/assets/shape1.svg"
      />
      <DraggableSvg className="left-0" src="/src/assets/shape2.svg" />
      <DraggableSvg className="right-0" src="/src/assets/shape3.svg" />

      <img
        src="/src/assets/emoji.svg"
        alt="emoji"
        className="w-[50%] xl:hover:scale-125 z-20 transition-all duration-300 cursor-pointer"
      />
    </div>
  );
}

export default HeroImage;
