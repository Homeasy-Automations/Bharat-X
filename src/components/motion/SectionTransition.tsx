import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { EASINGS, DURATIONS } from "./variants";

export interface SectionTransitionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  withDivider?: boolean;
  divider?: boolean;
  className?: string;
  delay?: number;
}

export function SectionTransition({
  children,
  withDivider = false,
  divider = false,
  className,
  delay = 0,
  ...props
}: SectionTransitionProps) {
  const showDivider = withDivider || divider;
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <section className={cn("relative", className)} {...props}>
        {showDivider && <div className="h-px w-full bg-[#E3E5EF]" />}
        {children}
      </section>
    );
  }

  return (
    <section className={cn("relative", className)} {...props}>
      {showDivider && (
        <motion.div
          className="h-px w-full origin-left bg-gradient-to-r from-transparent via-[#CBD1E1] to-transparent dark:via-white/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px 0px 50px 0px" }}
          transition={{ duration: DURATIONS.reveal, ease: EASINGS.premium }}
        />
      )}
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
