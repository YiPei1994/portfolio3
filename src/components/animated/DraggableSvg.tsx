import { motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/cn";

type DraggbleSvgProps = {
  src: string;
  className: string;
};

function DraggableSvg({ src, className }: DraggbleSvgProps) {
  const dragzoneRef = useRef(null);
  return (
    <motion.div ref={dragzoneRef}>
      <motion.img
        src={src}
        alt="shape"
        className={cn("w-1/5 absolute cursor-grab", className)}
        drag
        whileDrag={{
          scale: 0.5,
        }}
        dragConstraints={{
          top: -5,
          left: -5,
          right: 5,
          bottom: 5,
        }}
        transition={{ type: "spring", duration: 0.8 }}
      />
    </motion.div>
  );
}

export default DraggableSvg;
