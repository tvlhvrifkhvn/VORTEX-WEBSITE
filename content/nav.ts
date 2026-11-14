import type { NavLink } from "./types";

export const mainNav: NavLink[] = [
  { label: "Real Estate VA", href: "/real-estate-va", file: "01" },
  { label: "Insurance Supplementing", href: "/insurance-supplementing", file: "02" },
  { label: "Pricing", href: "/pricing" },
  { label: "Work", href: "/work" },
  { label: "How we work", href: "/how-we-work" },
  { label: "About", href: "/about" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  { title: "Files", links: mainNav.filter((l) => l.file) },
  {
    title: "Company",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Savings calculator", href: "/savings-calculator" },
      { label: "Work samples", href: "/work" },
      { label: "How we work", href: "/how-we-work" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Book a call", href: "/book-a-call" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
