import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "../../utils/cn";
import { Icon } from "../../utils/icons";
import { Logo, LogoMark } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { contactRoute, navigation } from "../../data/navigation";
import { servicesData } from "../../data/servicesData";
import { MagneticButton } from "../common/MagneticButton";
import { SearchModal } from "../common/SearchModal";

type MegaKey = "services" | "companies" | "ecosystem" | null;

const liveMetrics = [
  "6 CORE INDUSTRIAL SECTORS • SOVEREIGN ASSETS",
  "OPERATING IN AI • INFRASTRUCTURE • MANUFACTURING • AGRI • FOOD",
  "NATION-FIRST SCALE & COMPOUND ENTERPRISE VALUE",
  "COMMITTED TO ADVANCING BHARAT'S INDUSTRIAL CORE",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState<MegaKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  const location = useLocation();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Ticker rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % liveMetrics.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setMega(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setMega(null);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-500",
          scrolled || mega
            ? "bg-white shadow-[0_4px_20px_-5px_rgba(48,38,179,0.08)]"
            : "bg-transparent",
        )}
        style={{ borderBottom: (scrolled || mega) ? "1px solid #E3E5EF" : "none" }}
        onMouseLeave={() => setMega(null)}
      >
        {/* Tier 1: Executive Conglomerate Status Deck (Inspired by Reliance Ticker Deck) */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="border-b border-white/10 bg-black/25 hidden md:block"
            >
              <div className="container-x flex h-8 items-center justify-between text-[11px] font-mono">
                {/* Left Live Indicator & Ticker */}
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300 font-semibold tracking-wider text-[10px]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    ECOSYSTEM LIVE
                  </span>

                  <span className="h-3 w-px bg-white/20" />

                  {/* Smooth rotating ticker */}
                  <div className="relative h-4 overflow-hidden min-w-[280px] lg:min-w-[380px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={tickerIndex}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -12, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 truncate tracking-wide text-white/80"
                      >
                        {liveMetrics[tickerIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Corporate Utility Portals */}
                <div className="flex items-center gap-5 text-white/70">
                  <Link
                    to="/services"
                    className="hover:text-[#FFB000] transition-colors flex items-center gap-1.5"
                  >
                    <Icon name="layers" width={11} height={11} />
                    <span>Our Services</span>
                  </Link>

                  <Link
                    to="/about"
                    className="hover:text-[#FFB000] transition-colors"
                  >
                    Governance
                  </Link>

                  <Link
                    to="/contact"
                    className="hover:text-[#FFB000] transition-colors text-[#FFB000] font-medium"
                  >
                    Quick Inquire →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tier 2: Main Executive Navigation Command Deck */}
        <div className="container-x flex h-[68px] sm:h-[72px] items-center justify-between gap-3">
          {/* Logo */}
          <Link
            to="/"
            aria-label="BharatX Group — home"
            className="group relative z-10 flex items-center rounded-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src="/bharatxgroup.png"
              alt="BharatX Group"
              className="h-12 sm:h-14 w-auto object-contain"
              style={{ filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.45))" }}
            />
          </Link>

          {/* Desktop nav with dropdown chevrons */}
          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <NavItem
                key={item.to}
                item={item}
                active={
                  location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to))
                }
                mega={item.mega}
                isMegaOpen={mega === item.mega}
                onEnter={() => setMega(item.mega ?? null)}
                scrolled={scrolled || Boolean(mega)}
              />
            ))}
          </nav>

          {/* Right Action Suite (Search, Audio, Theme, CTA) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={cn(
                "flex h-9 items-center gap-2 rounded-full border px-3 text-xs transition-all duration-300 hover:scale-105",
                scrolled || mega
                  ? "border-[#E3E5EF] bg-white text-[#111827] shadow-xs hover:border-[#3026B3] hover:text-[#3026B3]"
                  : "border-white/30 bg-black/45 text-white backdrop-blur-md hover:border-[#FFB000] hover:text-[#FFB000] shadow-sm",
              )}
              aria-label="Search BharatX ecosystem"
              title="Search BharatX (Ctrl+K / ⌘K)"
            >
              <Icon name="search" width={14} height={14} />
              <span className="hidden sm:inline font-mono text-[11px] font-medium">Search</span>
              <kbd className={cn(
                "hidden lg:inline-block rounded border px-1.5 py-0.2 font-mono text-[9px] font-medium",
                scrolled || mega
                  ? "border-[#E3E5EF] bg-slate-50 text-[#596579]"
                  : "border-white/20 bg-white/10 text-white/90"
              )}>
                ⌘K
              </kbd>
            </button>

            {/* Ambient Sound / Audio Feedback Toggle */}
            <button
              type="button"
              onClick={() => setAudioActive((v) => !v)}
              className={cn(
                "hidden sm:flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-300 hover:scale-105",
                audioActive
                  ? "border-[#00B8D9]/70 bg-[#00B8D9]/20 text-[#00B8D9] shadow-[0_0_12px_rgba(0,184,217,0.4)]"
                  : scrolled || mega
                    ? "border-[#E3E5EF] bg-white text-[#111827] hover:border-[#3026B3] hover:text-[#3026B3] shadow-xs"
                    : "border-white/30 bg-black/45 text-white backdrop-blur-md hover:border-[#FFB000] hover:text-[#FFB000] shadow-sm",
              )}
              aria-label={audioActive ? "Mute ambient pulse" : "Enable ecosystem soundscape"}
              title={audioActive ? "Ecosystem Soundscape Active" : "Enable Ambient Soundscape"}
            >
              <Icon name="headphones" width={14} height={14} />
            </button>

            {/* Talk to BharatX / Contact CTA Button */}
            <MagneticButton
              as="Link"
              className="hidden lg:!inline-flex !flex-row flex-nowrap items-center justify-center whitespace-nowrap gap-2 rounded-full bg-[#3026B3] hover:bg-[#211B72] text-white px-4 lg:px-5 py-2 text-[13px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 shrink-0"
              buttonProps={{
                to: contactRoute.to,
              }}
            >
              <Icon name="mail" width={13} height={13} strokeWidth={1.8} className="shrink-0 text-[#FFB000]" />
              <span className="whitespace-nowrap leading-none">Contact</span>
            </MagneticButton>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={cn(
                "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition-colors xl:hidden",
                scrolled || mega
                  ? "border-[#E3E5EF] bg-white text-[#111827] shadow-xs"
                  : "border-white/30 bg-black/45 text-white backdrop-blur-md"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Icon name={mobileOpen ? "x" : "menu"} width={18} height={18} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        {/* Mega menus */}
        <AnimatePresence>
          {mega && !reduced && (
            <motion.div
              key={mega}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-2xl shadow-xl xl:block dark:border-white/8 dark:bg-night-950/95"
            >
              <MegaPanel kind={mega} />
            </motion.div>
          )}
        </AnimatePresence>
        {mega && reduced && (
          <MegaPanel
            kind={mega}
            className="absolute inset-x-0 top-full hidden border-b border-slate-200/80 bg-white/95 xl:block shadow-xl dark:border-white/8 dark:bg-night-950/95"
          />
        )}
      </header>

      {/* Global Command / Spotlight Search Modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Drawer Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function NavItem({
  item,
  active,
  onEnter,
  mega,
  isMegaOpen,
  scrolled,
}: {
  item: (typeof navigation)[number];
  active: boolean;
  onEnter: () => void;
  mega?: MegaKey;
  isMegaOpen?: boolean;
  scrolled: boolean;
}) {
  return (
    <div onMouseEnter={onEnter} className="relative">
      <NavLink
        to={item.to}
        className={cn(
          "group relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-300",
          scrolled
            ? active
              ? "text-[#3026B3] font-bold bg-[#3026B3]/10"
              : "text-[#111827] hover:text-[#3026B3] hover:bg-[#3026B3]/8"
            : active
              ? "text-[#FFB000] font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
              : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] hover:text-[#FFB000] hover:bg-white/10",
        )}
      >
        <Icon
          name={item.icon}
          width={13.5}
          height={13.5}
          strokeWidth={1.8}
          className={cn(
            "transition-transform duration-300 group-hover:scale-110",
            scrolled
              ? active ? "text-[#3026B3]" : "text-[#596579] group-hover:text-[#3026B3]"
              : active ? "text-[#FFB000]" : "text-[#FFB000] group-hover:text-white",
          )}
        />
        <span>{item.label}</span>
        {item.mega && (
          <Icon
            name="chevron-down"
            width={11}
            height={11}
            strokeWidth={2}
            className={cn(
              "transition-transform duration-200 opacity-70 group-hover:opacity-100",
              isMegaOpen ? "rotate-180 text-[#FFB000]" : "",
            )}
          />
        )}
        <span
          aria-hidden
          className={cn(
            "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left transition-transform duration-300 rounded-full",
            scrolled ? "bg-[#3026B3]" : "bg-[#FFB000]",
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
          )}
        />
      </NavLink>
    </div>
  );
}

function MegaPanel({ kind, className }: { kind: Exclude<MegaKey, null>; className?: string }) {
  return (
    <div className={className}>
      <ServicesMega />
    </div>
  );
}

function ServicesMega() {
  const [preview, setPreview] = useState(0);
  const activeSvc = servicesData[preview] ?? servicesData[0];
  const accentColors = ["#3026B3", "#FFB000", "#00B8D9", "#15966B", "#211B72", "#3026B3"];

  return (
    <div className="container-x grid grid-cols-[1fr_340px] gap-8 py-8">
      <div className="grid grid-cols-2 gap-2">
        {servicesData.map((svc, i) => {
          const accent = accentColors[i % accentColors.length];
          return (
            <Link
              key={svc.id}
              to={`/services#${svc.id}`}
              onMouseEnter={() => setPreview(i)}
              onFocus={() => setPreview(i)}
              className="group flex items-start gap-3.5 rounded-xl border border-transparent p-3.5 transition-all duration-300 hover:border-[#E3E5EF] hover:bg-[#F7F7FC] hover:shadow-sm"
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm mt-0.5 transition-all duration-300 group-hover:shadow-md"
                style={{ boxShadow: preview === i ? `0 0 0 2px ${accent}30` : undefined }}
              >
                <img src={svc.companyLogo} alt={svc.companyName} className="h-full w-full object-contain" />
              </span>
              <span className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className="truncate font-display text-[14px] font-semibold text-[#111827] transition-colors block"
                    style={{ color: preview === i ? accent : undefined }}
                  >
                    {svc.name}
                  </span>
                </div>
                <span className="mt-0.5 line-clamp-1 block text-[11.5px] text-[#596579] group-hover:text-[#111827] transition-colors">
                  {svc.descriptor}
                </span>
              </span>
              <Icon
                name="arrow-up-right"
                width={14}
                height={14}
                className="mt-1 shrink-0 text-[#596579] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: preview === i ? accent : undefined } as React.CSSProperties}
              />
            </Link>
          );
        })}
      </div>

      {/* Right Image Preview Deck */}
      <div className="relative hidden h-[260px] overflow-hidden rounded-2xl border border-[#E3E5EF] shadow-sm lg:block">
        {servicesData.map((svc, i) => (
          <img
            key={svc.id}
            src={svc.image}
            alt=""
            aria-hidden
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-500",
              preview === i ? "scale-100 opacity-100" : "scale-105 opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFB000] block">
            {activeSvc.shortLabel}
          </span>
          <span className="text-white text-xs line-clamp-1 mt-0.5 font-medium">
            {activeSvc.descriptor}
          </span>
        </div>
      </div>
    </div>
  );
}
