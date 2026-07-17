import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  top: string;
  left: string;
  size: number;
  rotation?: number;
  duration?: number;
  xOffset?: number;
  yOffset?: number;
};

export default function FloatingDecoration({
  src,
  alt,
  top,
  left,
  size,
  rotation = 0,
  duration = 8,
  xOffset = 0,
  yOffset = 0,
}: Props) {
  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      className="floatingDecoration"
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        pointerEvents: "none",
      }}
      animate={{
        x: xOffset,
        y: yOffset,
        rotate: [
          rotation - 3,
          rotation + 3,
          rotation - 3,
        ],
        scale: [
          1,
          1.03,
          1,
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}