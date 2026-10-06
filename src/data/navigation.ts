import type { NavItem } from "../types";

export const navigation: NavItem[] = [
  { label: "Home", to: "/", icon: "orbit" },
  { label: "About", to: "/about", icon: "info" },
  { label: "Businesses", to: "/services", icon: "layers", mega: "services" },
  { label: "How We Build", to: "/#our-approach", icon: "workflow" },
  { label: "Impact", to: "/impact", icon: "leaf" },
  { label: "Careers", to: "/careers", icon: "briefcase" },
  { label: "Contact", to: "/contact", icon: "mail" },
];

export const contactRoute = {
  label: "Contact",
  to: "/contact",
  icon: "mail",
};

export const footerSections = {
  businesses: [
    { label: "BharatX Infratech", to: "/services#infrastructure" },
    { label: "BharatXAgro", to: "/services#agriculture" },
    { label: "Casters Global", to: "/services#manufacturing" },
    { label: "BharatX Packaging", to: "/#what-comes-next" },
    { label: "AI Xperts Labs", to: "/services#tech-ai" },
    { label: "BharatX Sustainability", to: "/#what-comes-next" },
    { label: "BharatX Ventures", to: "/services#finance" },
    { label: "BharatX Labs Foundation", to: "/services#climate-sustainability" },
  ],
  group: [
    { label: "About", to: "/about" },
    { label: "Our Approach", to: "/#our-approach" },
    { label: "Impact", to: "/impact" },
    { label: "Leadership", to: "/leadership" },
    { label: "Insights", to: "/#inside-bharatx" },
    { label: "Careers", to: "/careers" },
  ],
  connect: [
    { label: "LinkedIn", to: "https://www.linkedin.com/company/bharatx-group", external: true },
    { label: "YouTube", to: "https://www.youtube.com/@bharatxgroup", external: true },
    { label: "Instagram", to: "https://www.instagram.com/bharatxgroup", external: true },
    { label: "X", to: "https://x.com/bharatxgroup", external: true },
  ],
  legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Use", to: "/terms" },
    { label: "Cookie Policy", to: "/privacy#cookies" },
  ],
};
