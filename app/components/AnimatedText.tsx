"use client";

import React, { memo, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Variants } from "framer-motion";

// Type for the props passed to AnimatedText

// Define animation variants with proper typing
const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

// Props type for the component
interface AnimatedTextProps {
  text: string;
  className?: string;
}

function AnimatedTextComponent({ text, className = "" }: AnimatedTextProps) {
  const words = React.useMemo(() => text.split(" "), [text]);

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref1 = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref1, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref1.current && Number(latest.toFixed(0)) <= value) {
        ref1.current.textContent = latest.toFixed(0);
      }
    });

    return () => unsubscribe(); // Cleanup function to avoid memory leaks
  }, [springValue, value]);

  return <span ref={ref1}></span>;
};
// Define the type for the DiagonalArrow component
export const AnimatedText = memo(AnimatedTextComponent);
