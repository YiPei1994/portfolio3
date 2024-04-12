import { ReactNode } from "react";
import { cn } from "../lib/cn";

type SectionWrapperProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full mt-[10%] p-4 md:p-8 lg:p-12 xl:p-16 mx-auto relative",
        className
      )}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
