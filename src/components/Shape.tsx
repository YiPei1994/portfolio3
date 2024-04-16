import { cn } from "../lib/cn";

type ShapeProps = {
  className?: string;
  type: "One" | "Two" | "Three";
};

function Shape({ type, className }: ShapeProps) {
  return (
    <img
      className={cn("hidden xl:block absolute pointer-events-none", className)}
      src={`/bgShape${type}.svg`}
      alt={`bgShape-${type}`}
    />
  );
}

export default Shape;
