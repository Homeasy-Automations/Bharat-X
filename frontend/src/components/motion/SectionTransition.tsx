import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { EASINGS, DURATIONS } from "./variants";

export interface SectionTransitionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Rendered straight inside the <section>, outside the reveal wrapper, so it spans the whole section (e.g. <SectionPhoto>). */
  backdrop?: ReactNode;
}

export function SectionTransition({
  children,
  className,
  delay = 0,
  backdrop,
  ...props
}: SectionTransitionProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section className={cn("relative", className)} {...props}>
        {backdrop}
        {children}
      </section>
    );
  }

  return (
    <section className={cn("relative", className)} {...props}>
      {backdrop}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px 40px 0px" }}
        transition={{ duration: DURATIONS.slow, delay, ease: EASINGS.premium }}
      >
        {children}
      </motion.div>
    </section>
  );
}
