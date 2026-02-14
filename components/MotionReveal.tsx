"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const defaultVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function MotionReveal({
  children,
  className = "",
  variants = defaultVariants,
}: {
  children: ReactNode;
  className?: string;
  variants?: typeof defaultVariants;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
