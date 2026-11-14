import type { FaqItem, PageMeta } from "./types";

export const meta: PageMeta = {
  title: "FAQ",
  description: "[[PLACEHOLDER: meta description for /faq/]]",
  path: "/faq/",
};

/* Filter by tag; never duplicate. Answers use confirmed facts only; promises are claims. */
export const faq: FaqItem[] = [
  {
    q: "What do you handle for real estate agents?",
    a: "MLS listings, transaction coordination, CRM upkeep, lead follow-up and cold calling, social media, fix-and-flip support, websites, SEO and Meta ads. Lead generation is available on request.",
    tags: ["home", "file01"],
  },
  {
    q: "Do you deal with the insurance company for us?",
    a: "No. We prepare estimates and documentation for the contractor. We don't negotiate with insurance carriers, represent homeowners or act as a public adjuster.",
    tags: ["home", "file02"],
  },
  {
    q: "What hours do you work?",
    a: "The desk is open Monday to Friday, 9:00 AM to 6:00 PM US Eastern. We reply during those hours.",
    tags: ["home", "general"],
    claim: true,
  },
  {
    q: "How much does it cost?",
    a: "It depends on your hours and the work involved. Book a call and we'll quote a monthly price for your workload.",
    tags: ["home", "billing"],
  },
  {
    q: "How do I pay?",
    a: "By Wise or Payoneer.",
    tags: ["home", "billing"],
  },
  {
    q: "How do we get started?",
    a: "Book a 15-minute call. We look at your workload, agree on a plan, set up access and write a checklist for each task.",
    tags: ["home", "general"],
  },
  {
    q: "Do I need to give you my MLS and CRM logins?",
    a: "You share access through your password manager or by adding a user seat, so you can remove it anytime. We don't need your personal email password.",
    tags: ["file01", "security"],
    claim: true,
  },
  {
    q: "Which CRMs and tools do you work in?",
    a: "Follow Up Boss, HubSpot, Mojo Dialer, Zillow, DocuSign, Dotloop, SkySlope and your MLS. If you use something else, we learn it during setup.",
    tags: ["file01"],
  },
  {
    q: "Can you make cold calls for me?",
    a: "Yes. Lead follow-up and cold calling are part of File 01, and every call is logged in your CRM.",
    tags: ["file01"],
  },
  {
    q: "Is it one person or a team?",
    a: "VortexOne is founder-run. The person you talk to on the call is the person who does the work.",
    tags: ["file01", "file02", "general"],
    claim: true,
  },
  {
    q: "Which trades do you supplement for?",
    a: "Roofing contractors and water-damage restoration companies in the US.",
    tags: ["file02"],
  },
  {
    q: "What do you need from me to start a claim?",
    a: "The carrier estimate or scope of loss, your job photos, the measurement report and any notes on items you think were missed.",
    tags: ["file02"],
  },
  {
    q: "Do you submit the supplement to the carrier?",
    a: "No. We prepare the package for you to submit. You stay the point of contact with the carrier.",
    tags: ["file02"],
  },
  {
    q: "Do you work in Xactimate?",
    a: "Yes. Estimates and supplements are built in Xactimate, with photo references for each line item.",
    tags: ["file02"],
  },
  {
    q: "Why isn't there a price on the site?",
    a: "Every desk is different: hours, tools and the mix of tasks change the work. After a 15-minute call we quote a monthly price for your workload.",
    tags: ["billing", "general"],
  },
];

export const faqFor = (tag: FaqItem["tags"][number]) => faq.filter((f) => f.tags.includes(tag));
