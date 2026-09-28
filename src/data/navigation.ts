import type { NavItem } from "../types";

export const navigation: NavItem[] = [
  { label: "About", to: "/about", icon: "info" },
  { label: "Services", to: "/services", icon: "layers", mega: "services" },
  { label: "Industries", to: "/industries", icon: "factory" },
  { label: "Innovation", to: "/innovation", icon: "sparkles" },
  { label: "Impact", to: "/impact", icon: "leaf" },
  { label: "Leadership", to: "/leadership", icon: "users" },
  { label: "Careers", to: "/careers", icon: "briefcase" },
];

export const contactRoute = {
  label: "Contact",
  to: "/contact",
  icon: "mail",
};

export const footerColumns = {
  explore: [
    { label: "About Group", to: "/about" },
    { label: "Our Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    { label: "Innovation", to: "/innovation" },
    { label: "Impact & ESG", to: "/impact" },
  ],
  services: [
    { label: "Technology & AI", to: "/services#tech-ai" },
    { label: "Infrastructure", to: "/services#infrastructure" },
    { label: "Manufacturing", to: "/services#manufacturing" },
    { label: "Agriculture", to: "/services#agriculture" },
    { label: "Climate & Sustainability", to: "/services#climate-sustainability" },
    { label: "Finance", to: "/services#finance" },
  ],
  company: [
    { label: "Leadership", to: "/leadership" },
    { label: "Careers", to: "/careers" },
    { label: "Start an Inquiry", to: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ],
};
