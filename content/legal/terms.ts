import type { PageMeta } from "../types";
import { site } from "../site";

const contact = `${site.name} · ${site.location.city} · ${site.contact.email}`;

export const meta: PageMeta = {
  title: "Terms of Service",
  description: "Terms for using the VortexOne website and services. Draft pending legal review.",
  path: "/terms/",
};

/* DRAFT — needs legal review before launch (docs/ASSETS_NEEDED.md §C). */
export const doc = {
  label: "Legal · Terms",
  title: "Terms of service",
  draft: "Draft — pending legal review",
  updated: "Last updated: [[PLACEHOLDER: date of legal review]]",
  sections: [
    {
      title: "Services",
      body: [
        "VortexOne provides remote back-office support in two areas: real estate administration (File 01) and insurance supplement documentation for contractors (File 02). The scope of each engagement is agreed in writing before work starts.",
      ],
    },
    {
      title: "Insurance supplementing",
      body: [
        "We prepare estimates and documentation for contractors. We don't negotiate with insurance carriers, represent homeowners or act as a public adjuster.",
        "We don't guarantee any insurance claim outcome, approval or payment amount. Decisions are made by the carrier.",
      ],
    },
    {
      title: "Real estate work",
      body: ["Any activity that requires a real estate license stays with you and your broker. You remain responsible for reviewing work before it is published or signed."],
    },
    {
      title: "Fees and payment",
      body: ["[[PLACEHOLDER: payment terms — invoicing schedule, due dates, notice period]]", "Payments are accepted by Wise or Payoneer."],
    },
    {
      title: "Confidentiality",
      body: ["We keep your business information, client data and logins confidential and use them only to deliver the agreed services. Access you grant can be removed by you at any time."],
    },
    {
      title: "Limitation of liability",
      body: ["[[PLACEHOLDER: limitation of liability wording]]"],
    },
    {
      title: "Governing law",
      body: ["[[PLACEHOLDER: governing law and venue]]"],
    },
    {
      title: "Contact",
      body: [contact],
    },
  ],
};
