import { useCallback, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import { IconBadge } from "../components/common/IconBadge";
import { Link } from "react-router-dom";
import { useLenis } from "../components/scroll/SmoothScrollProvider";
import { MaskReveal, Reveal } from "../components/common/Reveal";
import { SectionHeader } from "../components/common/SectionHeader";
import { EcosystemSwitcher } from "../components/ecosystem/EcosystemSwitcher";
import { IframeViewer } from "../components/ecosystem/IframeViewer";
import { PageHero } from "../components/common/PageHero";
import { track } from "../services/analytics";
import { usePageMeta } from "../hooks/usePageMeta";
import { companies } from "../data/companies";
import { ecosystemSites, getEcosystemSite } from "../data/ecosystem";
import { Icon } from "../utils/icons";
import { SectionTransition } from "../components/motion/SectionTransition";
import { Stagger, StaggerItem } from "../components/motion/Stagger";
import { AnimatedHeading } from "../components/motion/AnimatedHeading";

const EcosystemSpatialMap = lazy(() => import("../components/three/objects/EcosystemSpatialMap"));

export default function EcosystemPage() {
  usePageMeta({
    title: "The Ecosystem Viewer — BharatX Group",
    description:
      "Explore BharatX business websites live, inside one place — switch between portfolio companies, go fullscreen, or open any official site directly.",
    path: "/ecosystem",
  });

  const [params, setParams] = useSearchParams();
  const { scrollTo, active: lenisActive } = useLenis();
  const raw = params.get("company");
  const active = (raw && getEcosystemSite(raw)) || ecosystemSites[0];

  const select = useCallback(
    (id: string) => {
      track("ecosystem_company_selected", { company: id });
      setParams({ company: id }, { replace: false });
      // keep the viewer in view (lenis-native when available)
      const el = document.getElementById("viewer-anchor");
      if (!el) return;
      if (lenisActive) scrollTo(el as HTMLElement, { offset: -88, duration: 0.7 });
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [setParams, scrollTo, lenisActive],
  );

  return (
    <>
      <PageHero
        icon="orbit"
        eyebrow="BharatX Ecosystem"
        title={["Every business.", "One place."]}
        lede="The ecosystem viewer loads each company's real website inside BharatX Group. Switch between portfolio companies, go fullscreen, or jump straight to any official site — without losing your place in the group."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Ecosystem" }]}
        visual={<EcosystemSpatialMap onSelectCompany={(slug) => select(slug)} />}
        visualPlacement="right"
      />

      {/* ── SWITCHER + VIEWER ────────────────────────────────── */}
      <SectionTransition divider={false} className="scroll-mt-24 py-12 sm:py-16">
        <div id="viewer-anchor" className="container-x">
          <Reveal>
            <EcosystemSwitcher activeId={active.id} onSelect={select} />
          </Reveal>

          {/* Selected company indicator */}
          <div data-cursor="card" className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-2xl border border-slate-200/80 bg-white/70 dark:border-white/8 dark:bg-night-850/70 fx-lift transition-all">
            <div className="flex items-center gap-4">
              <IconBadge
                icon={companies.find((c) => c.id === active.id)?.icon ?? "orbit"}
                accent={companies.find((c) => c.id === active.id)?.accentColor}
              />
              <div>
                <div className="font-display text-xl font-semibold text-ink-50">{active.name}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-500">
                  {active.category} · {active.url.replace("https://", "")}
                </div>
              </div>
            </div>
            <a
              href={active.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gold-500/40 bg-gold-400/15 px-5 py-2.5 text-[13px] font-semibold text-gold-600 transition-all hover:border-gold-500/70 hover:bg-gold-400/25 dark:border-gold-400/40 dark:bg-gold-400/10 dark:text-gold-300 dark:hover:border-gold-400/70 dark:hover:bg-gold-400/20 fx-shine"
            >
              Open Website
              <Icon name="external-link" width={14} height={14} />
            </a>
          </div>

          <Reveal delay={0.1} className="mt-6">
            <IframeViewer site={active} />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 flex items-start gap-2.5 text-[12.5px] leading-relaxed text-ink-500">
              <Icon name="shield-check" width={14} height={14} className="mt-0.5 shrink-0 text-ink-600" />
              Some websites prevent embedded viewing using browser security headers (X-Frame-Options,
              Content-Security-Policy). We never bypass those protections — when a site can't be
              embedded, we offer the official website in a new tab instead.
            </p>
          </Reveal>
        </div>
      </SectionTransition>

      {/* ── WHAT IS THE ECOSYSTEM ────────────────────────────── */}
      <SectionTransition divider className="border-t border-slate-200/80 bg-white/40 py-12 sm:py-16 dark:border-white/5 dark:bg-night-850/50">
        <div className="container-x">
          <SectionHeader
            icon="network"
            eyebrow="What is the BharatX ecosystem"
            title="Not a directory. A working network."
            lede="A directory lists links. An ecosystem behaves like one system — shared standards, deliberate connections, and a single place to see how the pieces relate."
          />
          <Stagger className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "orbit",
                t: "One viewer, unified ecosystem",
                d: "Each company keeps its own site, brand and teams. The viewer gives every one of them a first-class home inside the group, with loading states and honest fallbacks.",
              },
              {
                icon: "shield-check",
                t: "Standards that travel",
                d: "Quality, documentation and security baselines apply across all businesses — so a customer who knows one BharatX business already knows what the others stand for.",
              },
              {
                icon: "trending-up",
                t: "Built to grow",
                d: "Adding a company means adding a row to the data model and a card to the viewer. The architecture is designed to scale dynamically as the group expands.",
              },
            ].map((c) => (
              <StaggerItem key={c.t}>
                <div data-cursor="card" className="h-full rounded-2xl border border-slate-200/90 bg-white/85 p-7 shadow-xs dark:border-white/8 dark:bg-night-900/70 dark:shadow-none fx-lift transition-all hover:border-slate-300 dark:hover:border-white/20">
                  <IconBadge icon={c.icon} />
                  <AnimatedHeading as="h3" effect="blur" hover="shift" className="mt-5 font-display text-lg font-semibold text-ink-50">
                    {c.t}
                  </AnimatedHeading>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-400">{c.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </SectionTransition>

      {/* ── CROSS-LINKS ──────────────────────────────────────── */}
      <SectionTransition divider className="py-12 sm:py-16">
        <div className="container-x">
          <SectionHeader
            icon="building-2"
            eyebrow="The businesses"
            title="Deep-dive into any company profile."
            lede="Full capabilities, applications, how we work and the live website — in one profile each."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c) => (
              <StaggerItem key={c.id}>
                <div data-cursor="card" className="group flex h-full items-center gap-4 rounded-xl border border-slate-200/90 bg-white/85 p-5 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-white/8 dark:bg-night-850 dark:hover:border-white/18 dark:hover:bg-night-800 dark:shadow-none fx-lift">
                  <Link to={`/companies/${c.slug}`} className="flex min-w-0 flex-1 items-center gap-4">
                    {c.logo ? (
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={c.logo}
                          alt={c.name}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ) : (
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center font-mono text-[13px] font-semibold text-ink-300"
                      >
                        {c.monogram}
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="block truncate font-display text-[15.5px] font-semibold text-ink-50">
                        {c.name}
                      </span>
                      <span className="block truncate font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                        {c.category}
                      </span>
                    </span>
                  </Link>
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${c.name} website`}
                    data-cursor="button"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-white text-ink-400 shadow-2xs transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:bg-transparent dark:hover:border-pulse-400/50 dark:hover:text-pulse-300 dark:shadow-none fx-lift"
                  >
                    <Icon name="external-link" width={14} height={14} />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </SectionTransition>

      {/* ── STATEMENT ────────────────────────────────────────── */}
      <SectionTransition divider={false} className="noise relative overflow-hidden border-t border-slate-200/80 bg-white/50 backdrop-blur-sm py-12 sm:py-16 dark:border-white/5 dark:bg-night-950/60">
        <div aria-hidden className="grid-bg grid-bg-fade absolute inset-0 opacity-40" />
        <div className="container-x relative text-center">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink-50 md:text-5xl">
            <MaskReveal>Independent websites are a list.</MaskReveal>
            <MaskReveal delay={0.12}>
              <span className="text-gold-400">A connected ecosystem is a promise.</span>
            </MaskReveal>
          </h2>
        </div>
      </SectionTransition>
    </>
  );
}
