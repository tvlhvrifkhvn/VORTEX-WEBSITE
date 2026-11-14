import type { PageMeta } from "../types";
import { site } from "../site";

const contact = `${site.name} · ${site.location.city} · ${site.contact.email}`;

export const meta: PageMeta = {
  title: "Privacy Policy",
  description: "How VortexOne handles information you send through this website, including SMS consent. Draft pending legal review.",
  path: "/privacy/",
};

/* DRAFT — needs legal review before launch (docs/ASSETS_NEEDED.md §C). */
export const doc = {
  label: "Legal · Privacy",
  title: "Privacy policy",
  draft: "Draft — pending legal review",
  updated: "Last updated: [[PLACEHOLDER: date of legal review]]",
  sections: [
    {
      title: "Who we are",
      body: [`VortexOne is a back-office service run from Islamabad, Pakistan, for clients in the United States. Questions about this policy go to ${site.contact.email}.`],
    },
    {
      title: "What we collect",
      body: [
        "Information you type into our forms: your name, email address, phone number (optional), your role, which service you're interested in, hours per week and your message.",
        "If you request a checklist or join the newsletter, we collect your email address.",
        "Our forms also record the page you came from and campaign tags in the link (such as utm_source), so we know which pages bring inquiries.",
      ],
    },
    {
      title: "Why we collect it",
      body: ["To reply to your inquiry, schedule a call, send the checklist or newsletter you asked for, and quote our services. We don't sell your information."],
    },
    {
      title: "Text messages (SMS)",
      body: [
        "If you check the SMS box on our booking form, we may text you about your inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase.",
        "We don't share mobile numbers or SMS consent with third parties or affiliates for marketing purposes.",
      ],
    },
    {
      title: "Cookies and analytics",
      body: ["This website doesn't use advertising cookies or analytics tools. Your browser may store small settings, such as your motion preference, on your own device. If we add analytics later, we'll update this policy first."],
    },
    {
      title: "How long we keep it",
      body: ["[[PLACEHOLDER: data retention period]]"],
    },
    {
      title: "Your rights",
      body: [`You can ask us to show, correct or delete the information we hold about you. Email ${site.contact.email} and we'll reply during desk hours.`],
    },
    {
      title: "Contact",
      body: [contact],
    },
  ],
};
