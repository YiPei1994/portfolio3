import { PropsWithChildren, PropsWithoutRef } from "react";
import { cn } from "../lib/cn";

type ButtonProps = {
  className: string;
} & PropsWithChildren<PropsWithoutRef<JSX.IntrinsicElements["button"]>>;

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-gradient-to-r from-[#FFE074] via-[#50CAE4] to-[#9B5CFF] inline-block text-transparent bg-clip-text font-bold",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
