import { PropsWithChildren } from "react";

function SideSectionHeader({ children }: PropsWithChildren) {
  return (
    <h2 className="text-3xl my-[5%] flex items-center font-bold flex-wrap lg:text-5xl">
      {children}
    </h2>
  );
}

export default SideSectionHeader;
