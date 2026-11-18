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
  cta: { label: "Book a call", href: "/book-a-call" },
  menu: "Menu",
  close: "Close",
  search: "Search",
  searchKey: "/",
};

/* Header dropdown groups (revision 2026-11-18). Desktop: Swiss ink panels; mobile: collapsible groups. */
export interface NavItem { label: string; href: string; text?: string }
export const navGroups = {
  files: { label: "Files", openFile: "Open file", allServices: { label: "All services", href: "/services" } },
  how: {
    label: "How we work",
    href: "/how-we-work",
    items: [
      { label: "Process & onboarding", text: "From first call to a steady rhythm.", href: "/how-we-work#onboarding-title" },
      { label: "Daily reports & desk log", text: "A written report at the end of every day.", href: "/how-we-work#report-title" },
      { label: "Security", text: "Your logins, your data, your rules.", href: "/how-we-work#security-title" },
      { label: "Work samples", text: "Anonymized deliverables, labelled SAMPLE.", href: "/work" },
      { label: "Resources", text: "Free checklists for agents and contractors.", href: "/resources" },
    ] as NavItem[],
  },
  pricing: {
    label: "Pricing",
    href: "/pricing",
    items: [
      { label: "Plans", text: "Studio, Townhouse, Estate · per supplement, volume.", href: "/pricing" },
      { label: "Savings calculator", text: "What an in-house assistant really costs.", href: "/savings-calculator" },
      { label: "Compare options", text: "VortexOne vs in-house vs freelance.", href: "/pricing#comps" },
    ] as NavItem[],
  },
  links: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ] as NavLink[],
};

/* Visitor mode ("Viewing as"): set by the hero's I'm an agent / I'm a contractor buttons. */
export const viewing = {
  prefix: "Viewing as",
  "01": "Agent",
  "02": "Contractor",
  clear: "Stop viewing as",
  yourFile: "Your file",
  cta: {
    "01": { label: "Schedule a showing", href: "/book-a-call?file=01" },
    "02": { label: "Send a claim", href: "/book-a-call?file=02" },
  },
};

/* Next-page pager at the end of inner pages (above the footer). Order lives here. */
export const pager: Record<string, { label: string; title: string; href: string }> = {
  "/real-estate-va": { label: "Next file", title: "02 Insurance Supplementing", href: "/insurance-supplementing" },
  "/insurance-supplementing": { label: "Next", title: "Pricing", href: "/pricing" },
  "/pricing": { label: "Next", title: "Savings calculator", href: "/savings-calculator" },
  "/savings-calculator": { label: "Next", title: "All services", href: "/services" },
  "/services": { label: "Next", title: "How we work", href: "/how-we-work" },
  "/how-we-work": { label: "Next", title: "About", href: "/about" },
  "/about": { label: "Next", title: "Book a call", href: "/book-a-call" },
  "/work": { label: "Next", title: "Resources", href: "/resources" },
  "/resources": { label: "Next", title: "FAQ", href: "/faq" },
  "/faq": { label: "Next", title: "Book a call", href: "/book-a-call" },
};

/* Desk search (command palette). */
export const deskSearch = {
  label: "Desk search",
  hint: "↑ ↓ to move · Enter to open · Esc to close",
  placeholder: "Search the desk",
  empty: "Nothing on the desk matches that. Try a service, a tool or a question.",
  close: "Close",
  groups: { Pages: "Pages", Services: "Services", FAQ: "FAQ", Tools: "Tools" },
};

export const mobileBar = { whatsapp: "WhatsApp", label: "Quick actions" };
export const backToTop = "Back to the desk";

export const mobileMenu = {
  label: "Site menu",
  contactLabel: "Contact",
};

export const footer = {
  /* Differs from the CTA band headline so the two never repeat back to back. */
  title: "Talk to the desk.",
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
    success: "Received. You’re on the list.",
    errorEmail: "Enter an email like name@company.com",
    errorSend: "That didn’t go through. Try again, or email us.",
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
