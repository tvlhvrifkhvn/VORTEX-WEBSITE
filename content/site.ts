/* Global site facts (SPEC §9.5). Unknown facts stay [[PLACEHOLDER]] — see docs/ASSETS_NEEDED.md. */
export const site = {
  name: "VortexOne",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  description: "[[PLACEHOLDER: site meta description]]",
  founder: { name: "[[PLACEHOLDER: founder name]]", role: "Founder" },
  contact: {
    email: "[[PLACEHOLDER: contact email]]",
    whatsapp: "[[PLACEHOLDER: WhatsApp number]]",
    linkedin: "[[PLACEHOLDER: LinkedIn URL]]",
  },
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  location: { city: "Islamabad, Pakistan", coords: "33.6844°N 73.0479°E" },
  desk: {
    timeZone: "America/New_York",
    days: [1, 2, 3, 4, 5],
    open: "09:00",
    close: "18:00",
    claim: true as const,
  },
  responseTime: { text: "[[PLACEHOLDER: reply time you can promise]]", claim: true as const },
  primaryCta: { label: "Book a call", href: "/book-a-call" },
  features: {
    deskLog: true,
    pinnedStory: true,
    cursorLabel: true,
    newsletter: true,
    calculatorFile02: false,
  },
} as const;
