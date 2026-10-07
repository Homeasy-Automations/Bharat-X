import type { Variants } from "framer-motion";

/**
 * Standardized easing curves and durations for BharatX
 * Based on --ease-premium and --ease-snappy
 */
export const EASINGS = {
  premium: [0.22, 1, 0.36, 1] as const,
  snappy: [0.34, 1.56, 0.64, 1] as const,
  gentle: [0.16, 1, 0.3, 1] as const,
};

export const DURATIONS = {
  fast: 0.18,
  base: 0.3,
  slow: 0.6,
  reveal: 0.8,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: EASINGS.premium },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.slow, ease: EASINGS.premium },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.slow, ease: EASINGS.premium },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.slow, ease: EASINGS.premium },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.slow, ease: EASINGS.premium },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: DURATIONS.reveal, ease: EASINGS.premium },
  },
};

export const clipReveal: Variants = {
  hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: 0 },
  visible: {
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    transition: { duration: DURATIONS.reveal, ease: EASINGS.premium },
  },
};

export const staggerParent = (staggerDelay = 0.08, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: EASINGS.premium },
  },
};

export const hoverLift: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.01,
    transition: { duration: DURATIONS.base, ease: EASINGS.premium },
  },
};

export const hoverTilt = (rx = 5, ry = 5): Variants => ({
  rest: { rotateX: 0, rotateY: 0 },
  hover: {
    rotateX: rx,
    rotateY: ry,
    transition: { duration: DURATIONS.base, ease: EASINGS.premium },
  },
});

export const tapPress: Variants = {
  rest: { scale: 1 },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: EASINGS.premium } },
};
