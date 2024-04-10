import { PropsWithChildren } from "react";

function SideSectionHeader({ children }: PropsWithChildren) {
  return (
    <h2 className="text-4xl  flex items-center font-bold flex-wrap xl:text-5xl">
      {children}
    </h2>
  );
}

export default SideSectionHeader;
