import { PropsWithChildren } from "react";

function SectionWrapper({ children }: PropsWithChildren) {
  return (
    <section className="w-full p-4 my-14 max-w-[90%] mx-auto">
      {children}
    </section>
  );
}

export default SectionWrapper;
