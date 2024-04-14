import { ReactNode } from "react";
import { cn } from "../lib/cn";

type SideSectionHeaderProps = {
  children: ReactNode;
  className?: string;
};

function SideSectionHeader({ children, className }: SideSectionHeaderProps) {
  return (
    <h2
      className={cn("text-3xl my-6 lg:my-8  font-bold  lg:text-5xl", className)}
    >
      {children}
    </h2>
  );
}

export default SideSectionHeader;
