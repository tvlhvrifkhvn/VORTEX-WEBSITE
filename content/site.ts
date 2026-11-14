/* Global site facts (SPEC §9.5). Unknown facts stay [[PLACEHOLDER]] — see docs/ASSETS_NEEDED.md. */
export const site = {
  name: "VortexOne",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  description: "[[PLACEHOLDER: site meta description]]",
  founder: { name: "Talha Arif", role: "Founder" },
  contact: {
    email: "talharifone@gmail.com",
    whatsapp: { display: "+92 344 9111101", href: "https://wa.me/923449111101" },
    linkedin: "https://www.linkedin.com/in/talha-arif-3a9783364/",
  },
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  location: { city: "Islamabad, Pakistan", coords: "33.6844°N 73.0479°E" },
  desk: {
    timeZone: "America/New_York",
    days: [1, 2, 3, 4, 5],
    open: "09:00",
    close: "18:00",
  },
  /* User 2026-11-14: replies follow desk hours (was a separate 4–7 PM PT window, which read as after-hours). */
  responseTime: { text: "Replies during desk hours, Monday to Friday", claim: true as const },
  primaryCta: { label: "Book a call", href: "/book-a-call" },
  features: {
    deskLog: true,
    pinnedStory: true,
    cursorLabel: true,
    newsletter: true,
    calculatorFile02: false,
  },
} as const;
