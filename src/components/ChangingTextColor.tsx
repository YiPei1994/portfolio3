import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { useEffect } from "react";
import { cn } from "../lib/cn";

const colors = ["#FFE074", "#50CAE4", "#9B5CFF"];

type ChangingColorProps = {
  text: string;
  className?: string;
};

function ChangingColor({ text, className }: ChangingColorProps) {
  const color = useMotionValue(colors[0]);
  const textColor = useMotionTemplate`${color}`;
  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.div className={cn("", className)} style={{ color: textColor }}>
      {text}
    </motion.div>
  );
}

export default ChangingColor;
