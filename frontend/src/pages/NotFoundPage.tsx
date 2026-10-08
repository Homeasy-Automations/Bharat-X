import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "../utils/icons";
import { AnimatedHeading } from "../components/motion/AnimatedHeading";
import { MagneticButton } from "../components/common/MagneticButton";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFoundPage() {
  usePageMeta({
    title: "404 - Page Not Found",
    description: "The page you're looking for has moved, been renamed, or does not exist on BharatX Group.",
    path: "/404",
  });

  return (
    <section className="aurora noise relative flex min-h-screen items-center overflow-hidden pt-24">
      <div aria-hidden className="grid-bg grid-bg-fade absolute inset-0 opacity-60" />
      <div className="container-x relative text-center">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto -mb-8 select-none font-display text-[7.5rem] xs:text-[9.5rem] sm:text-[11rem] font-bold leading-none text-white/[0.04] md:text-[18rem] fx-float"
        >
          404
        </motion.div>
        <AnimatedHeading
          as="h1"
          effect="words"
          hover="gradient"
          className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink-50 md:text-6xl"
        >
          This route does not exist.
        </AnimatedHeading>
        <p className="mx-auto mt-6 max-w-md text-[14.5px] sm:text-[15px] leading-relaxed text-ink-400">
          The page you're looking for has moved, been renamed, or was never
          part of the ecosystem. The rest of it is still here.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <MagneticButton>
            <Link
              to="/"
              data-cursor="button"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gold-400 px-8 py-4 text-[15px] font-semibold text-night-950 transition-all duration-300 hover:bg-gold-300 fx-shine"
            >
              Return to BharatX Group
              <Icon name="arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
          <Link
            to="/services"
            data-cursor="button"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 text-[15px] font-semibold text-ink-100 transition-colors hover:border-white/35 hover:bg-white/5 fx-lift"
          >
            Explore our services
          </Link>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-600">
          <Link to="/services" data-cursor="link" className="transition-colors hover:text-ink-300 fx-underline">Services</Link>
          <span aria-hidden>·</span>
          <Link to="/industries" data-cursor="link" className="transition-colors hover:text-ink-300 fx-underline">Industries</Link>
          <span aria-hidden>·</span>
          <Link to="/contact" data-cursor="link" className="transition-colors hover:text-ink-300 fx-underline">Contact</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
