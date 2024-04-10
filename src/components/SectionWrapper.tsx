import { ReactNode } from "react";
import { cn } from "../lib/cn";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section
      className={cn("w-full my-[10%] p-4 max-w-[95%] mx-auto", className)}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
