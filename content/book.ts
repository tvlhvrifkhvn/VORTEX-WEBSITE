import type { PageMeta } from "./types";

export const meta: PageMeta = {
  title: "Book a Call",
  description: "Book a 15-minute call with VortexOne, or send a note about your listings, transactions or supplements. We reply during US desk hours.",
  path: "/book-a-call/",
};

export const page = {
  label: "Schedule a showing / Send a claim",
  lines: ["Book a", "15-min call."],
  lead: "Pick a time, or send a note. You’ll hear back **during desk hours**, Monday to Friday.",
  leadClaim: true as const,
};

export const calendar = {
  label: "Calendar",
  title: "Pick a time",
  load: "Load calendar",
  privacy: "The calendar loads from Calendly only after you click.",
  frameTitle: "Book a time with VortexOne",
  emptyTitle: "Online booking opens soon.",
  emptyText: "Until then, send the form or email us and we’ll reply with times that suit you.",
  email: "Email the desk",
};

export const leadForm = {
  label: "Send a note",
  name: "Full name",
  email: "Email",
  phone: "Phone",
  optional: "Optional",
  role: "I am a…",
  rolePlaceholder: "Choose one",
  roles: ["Real estate agent", "Team lead / broker", "Investor / flipper", "Roofing contractor", "Restoration contractor", "Other"],
  file: "Which file",
  files: [
    { value: "01", label: "File 01 · Real estate VA" },
    { value: "02", label: "File 02 · Supplementing" },
    { value: "unsure", label: "Not sure" },
  ],
  hours: "Hours per week",
  message: "Message",
  messageHint: "Your workload, tools, and anything we should know.",
  /* DRAFT — needs legal review before launch (claim). */
  sms: "I agree to receive text messages from VortexOne about my inquiry. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our Privacy Policy.",
  smsDraft: "Draft",
  submit: "Send",
  submitting: "Sending",
  required: "Required",
  errors: { name: "Enter your name", email: "Enter an email like name@company.com", role: "Choose what describes you", send: "That didn’t go through. Try again, or email us." },
  successLabel: "Received",
  success: "Thanks. We’ll reply during desk hours, Monday to Friday.",
  prefill: {
    calculator: (hours: string, wage: string) => `From the savings calculator: ${hours} hours a week at $${wage} an hour.`,
    plan: (name: string) => `Interested in the ${name} plan.`,
  },
};

export const direct = {
  label: "Or reach us directly",
  whatsapp: "WhatsApp",
  linkedin: "LinkedIn",
};
