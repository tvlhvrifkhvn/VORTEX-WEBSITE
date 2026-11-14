import type { NavLink } from "./types";

/* Header, mobile menu and footer copy (SPEC §11.0). Labels are written in normal case; CSS uppercases them. */
export const files: (NavLink & { line: string })[] = [
  { label: "Real Estate VA", href: "/real-estate-va", file: "01", line: "Listings, transactions and follow-up." },
  { label: "Insurance Supplementing", href: "/insurance-supplementing", file: "02", line: "Xactimate supplements, line by line." },
];

export const header = {
  skip: "Skip to content",
  home: "VortexOne home",
  primary: "Primary",
  filesLabel: "Files",
  nav: [
    { label: "Pricing", href: "/pricing" },
    { label: "Calculator", href: "/savings-calculator" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ] as NavLink[],
  cta: { label: "Book a call", href: "/book-a-call" },
  menu: "Menu",
  close: "Close",
};

export const mobileMenu = {
  label: "Site menu",
  links: [
    { label: "Real Estate VA", href: "/real-estate-va" },
    { label: "Insurance Supplementing", href: "/insurance-supplementing" },
    { label: "Pricing", href: "/pricing" },
    { label: "Calculator", href: "/savings-calculator" },
    { label: "Work", href: "/work" },
    { label: "How we work", href: "/how-we-work" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ] as NavLink[],
  contactLabel: "Contact",
};

export const footer = {
  title: "Hand off the back office.",
  cta: { label: "Book a call", href: "/book-a-call" },
  columns: [
    { title: "Files", links: files.map(({ label, href }) => ({ label, href })) },
    {
      title: "Company",
      links: [
        { label: "How we work", href: "/how-we-work" },
        { label: "About", href: "/about" },
        { label: "Work samples", href: "/work" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "Pricing", href: "/pricing" },
        { label: "Savings calculator", href: "/savings-calculator" },
        { label: "Resources", href: "/resources" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ] as { title: string; links: NavLink[] }[],
  contactTitle: "Contact",
  whatsapp: "WhatsApp",
  linkedin: "LinkedIn",
  bookCall: "Book a call",
  newsletter: {
    title: "Desk notes",
    text: "Occasional notes on real estate admin and supplementing. No spam.",
    label: "Email",
    submit: "Subscribe",
    submitting: "Sending",
    success: "Received. You're on the list.",
    errorEmail: "Enter an email like name@company.com",
    errorSend: "That didn't go through. Try again, or email us.",
  },
  deskHours: "Desk Mon–Fri · 9:00 AM–6:00 PM ET",
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ] as NavLink[],
  motion: "Motion",
};

export const ctaBand = {
  label: "Next step",
  title: "Hand off the back office.",
  text: "15 minutes. No pitch deck. We look at your workload and tell you honestly if we can help.",
  primary: { label: "Book a call", href: "/book-a-call" },
  secondary: { label: "See pricing", href: "/pricing" },
};
