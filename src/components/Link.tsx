import { PropsWithChildren, PropsWithoutRef, ReactNode } from "react";
import { cn } from "../lib/cn";

type LinkProps = {
  link: string;
  className?: string;
  children: ReactNode;
} & PropsWithChildren<PropsWithoutRef<JSX.IntrinsicElements["a"]>>;

function Link({ link, className, children }: LinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        " p-4 font-bold  rounded-xl border border-neutral-400/25 bg-black text-2xl hover:bg-neutral-400/25 transition-all duration-300 hover:border-transparent",
        className
      )}
    >
      {children}
    </a>
  );
}

export default Link;
