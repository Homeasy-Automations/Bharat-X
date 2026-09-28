import { usePageMeta } from "../hooks/usePageMeta";
import { RilHeroSection } from "../components/home/RilHeroSection";
import { ConglomerateManifesto } from "../components/home/ConglomerateManifesto";
import { StatsStrip } from "../components/home/StatsStrip";
import { SectorMarquee } from "../components/common/Marquee";
import { RilServicesSection } from "../components/home/RilServicesSection";
import { StrategicTriadTabs } from "../components/home/StrategicTriadTabs";
import { LeadershipKeynote } from "../components/home/LeadershipKeynote";
import { InstitutionalNewsroom } from "../components/home/InstitutionalNewsroom";
import { WhyBharatXBand } from "../components/home/WhyBharatXBand";
import { ContactCTAStrip } from "../components/home/ContactCTAStrip";

export default function HomePage() {
  usePageMeta({
    title: "BharatX Group — Building Bharat's Future",
    description:
      "A diversified industrial group operating across Technology & AI, Infrastructure, Manufacturing, Agriculture, Climate & Sustainability, and Finance.",
    path: "/",
  });

  return (
    <main className="w-full bg-night-950 text-white min-h-screen">
      {/* ── 1. RIL-STYLE FULL-BLEED HERO (3-5 words, 4-5s image crossfade) ── */}
      <RilHeroSection />

      {/* ── 2. CONGLOMERATE SCALE MANIFESTO (RIL 'We Care' & Scale Statement) ── */}
      <ConglomerateManifesto />

      {/* ── 3. STATS STRIP (Authentic numbers & portfolio strip) ─────────── */}
      <StatsStrip />

      {/* ── 3B. OPERATING ENTERPRISES MARQUEE STRIP (Logos & Sectors) ─────── */}
      <SectorMarquee />

      {/* ── 4. RIL-STYLE SERVICES & SECTORS (Side index, full-bleed images) ── */}
      <RilServicesSection />

      {/* ── 5. STRATEGIC STORY PILLARS (RIL Sustainability, Innovation, Impact) ── */}
      <StrategicTriadTabs />

      {/* ── 6. ANNUAL EXECUTIVE ADDRESS & TRANSCRIPT (RIL AGM Style) ──────── */}
      <LeadershipKeynote />

      {/* ── 7. INSTITUTIONAL NEWSROOM & ANNOUNCEMENTS (RIL Disclosures) ───── */}
      <InstitutionalNewsroom />

      {/* ── 8. IMAGE-LED "WHY BHARATX" BAND (3 clean pillars) ──────────────── */}
      <WhyBharatXBand />

      {/* ── 9. SHORT CONTACT CTA BAND ─────────────────────────────────────── */}
      <ContactCTAStrip />
    </main>
  );
}
