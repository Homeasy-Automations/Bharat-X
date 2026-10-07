import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { trackPageView } from "../../services/analytics";
import { useLenis } from "../scroll/SmoothScrollProvider";
import { BackToTop } from "../common/BackToTop";
import { ScrollProgress } from "../common/ScrollProgress";
import { ExecutiveAtmosphereCanvas } from "./ExecutiveAtmosphereCanvas";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Preloader } from "./Preloader";

export function Layout() {
  const location = useLocation();
  const reduced = useReducedMotion();
  const { scrollTo } = useLenis();

  // Reset scroll on navigation or scroll smoothly to hash target
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          scrollTo(el, { offset: -80 });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      scrollTo(0, { immediate: true });
    }
    trackPageView(location.pathname);
  }, [location.pathname, location.hash, scrollTo]);

  return (
    <div className="relative min-h-screen bg-night-950 text-ink-100">
      {/* ── Static Global Background (Fixed across entire site) ── */}
      <div aria-hidden="true" className="global-static-bg">
        <div className="global-static-bg-image" />
        <div className="global-static-bg-aurora" />
        <div className="global-static-bg-vignette" />
        <ExecutiveAtmosphereCanvas />
        <div className="global-static-bg-gradient" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Preloader />
        <ScrollProgress />
        <Navbar />
        {/* Fast, subtle route transition (entrance-only, keyed by path) */}
        <motion.div
          key={location.pathname}
          className="flex flex-1 flex-col"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex-1">
            <Outlet />
          </div>
        </motion.div>
        {/* {location.pathname !== "/" && <FooterCTA />} */}
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
