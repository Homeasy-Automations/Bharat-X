import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { EASINGS, DURATIONS } from "./variants";

export type HeadingEffect =
  | "mask"
  | "words"
  | "chars"
  | "gradient"
  | "underline"
  | "blur"
  | "fadeUp";

export type HeadingHover =
  | "color"
  | "shift"
  | "tracking"
  | "underline"
  | "gradient"
  | "none";

export interface AnimatedHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  effect?: HeadingEffect;
  hover?: HeadingHover;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function AnimatedHeading({
  children,
  as: Component = "h2",
  effect = "fadeUp",
  hover = "color",
  className,
  delay = 0,
  immediate = false,
}: AnimatedHeadingProps) {
  const reduced = useReducedMotion();

  const hoverClass = {
    color: "", // Handled by CSS / brand-aware
    shift: "hover:translate-x-1 transition-transform duration-300",
    tracking: "fx-tracking",
    underline: "fx-underline",
    gradient: "fx-gradient-text",
    none: "",
  }[hover];

  if (reduced) {
    const Tag = Component;
    return <Tag className={cn(className, hoverClass)}>{children}</Tag>;
  }

  // Effect: Line-mask reveal
  if (effect === "mask") {
    const Tag = Component;
    return (
      <Tag className={cn("overflow-hidden", className, hoverClass)}>
        <motion.span
          className="block will-change-transform"
          initial={{ y: "110%" }}
          animate={immediate ? { y: "0%" } : undefined}
          whileInView={immediate ? undefined : { y: "0%" }}
          viewport={{ once: true, margin: "0px 0px 40px 0px" }}
          transition={{ duration: DURATIONS.reveal, delay, ease: EASINGS.premium }}
        >
          {children}
        </motion.span>
      </Tag>
    );
  }

  // Effect: Blur-to-sharp reveal
  if (effect === "blur") {
    const MotionTag = motion[Component];
    return (
      <MotionTag
        initial={{ opacity: 0, filter: "blur(10px)", y: 15 }}
        animate={immediate ? { opacity: 1, filter: "blur(0px)", y: 0 } : undefined}
        whileInView={immediate ? undefined : { opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "0px 0px 40px 0px" }}
        transition={{ duration: DURATIONS.reveal, delay, ease: EASINGS.premium }}
        className={cn(className, hoverClass)}
      >
        {children}
      </MotionTag>
    );
  }

  // Effect: Word-by-word fade up if children is a plain string
  if (effect === "words" && typeof children === "string") {
    const words = children.split(" ");
    const Tag = Component;
    return (
      <Tag className={cn("inline-flex flex-wrap gap-x-[0.25em]", className, hoverClass)}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "115%", opacity: 0 }}
              animate={immediate ? { y: "0%", opacity: 1 } : undefined}
              whileInView={immediate ? undefined : { y: "0%", opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px 40px 0px" }}
              transition={{
                duration: 0.6,
                delay: delay + i * 0.045,
                ease: EASINGS.premium,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  // Default: smooth fadeUp
  const MotionTag = motion[Component];
  return (
    <MotionTag
      initial={{ opacity: 0, y: 22 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined}
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 40px 0px" }}
      transition={{ duration: DURATIONS.slow, delay, ease: EASINGS.premium }}
      className={cn(className, hoverClass)}
    >
      {children}
    </MotionTag>
  );
}
