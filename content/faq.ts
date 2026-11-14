import type { FaqItem, FaqTag, PageMeta } from "./types";
import { fromText } from "@/lib/pricing";

export const meta: PageMeta = {
  title: "FAQ",
  description:
    "Answers about VortexOne: where we’re based, who does the work, desk hours, real estate VA tasks, Xactimate supplements, billing and security.",
  path: "/faq/",
};

export const page = {
  label: "FAQ",
  lines: ["Questions."],
  lead: "Short answers from the desk. If yours isn’t here, ask on a 15-minute call.",
  filterLabel: "FAQ category",
  listTitle: "All questions",
};

export const categories: { value: FaqTag; label: string }[] = [
  { value: "general", label: "General" },
  { value: "file01", label: "File 01" },
  { value: "file02", label: "File 02" },
  { value: "billing", label: "Pricing & billing" },
  { value: "security", label: "Security" },
];

/* One list, filtered by tag; never duplicated. Answers use confirmed facts; promises and unknowns are claims. */
export const faq: FaqItem[] = [
  // General
  { q: "Where are you based?", a: "Islamabad, Pakistan. The desk works US business hours, Monday to Friday.", tags: ["general"] },
  { q: "Who actually does the work?", a: "VortexOne is founder-run. The person you talk to on the call is the person who does the work.", tags: ["general", "file01", "file02"], claim: true },
  { q: "What hours do you work?", a: "The desk is open Monday to Friday, 9:00 AM to 6:00 PM US Eastern. We reply during those hours.", tags: ["home", "general"], claim: true },
  { q: "How do we communicate?", a: "By email for anything that needs a record, WhatsApp for quick questions, or your Slack if your team uses it. You also get a written report at the end of every day.", tags: ["general"], claim: true },
  { q: "Do you work with clients outside the US?", a: "The services are built for US agents and contractors. If you’re elsewhere, ask on a call and we’ll tell you honestly if it fits.", tags: ["general"] },
  { q: "How do we get started?", a: "Book a 15-minute call. We look at your workload, agree on a plan, set up access and write a checklist for each task.", tags: ["home", "general"] },
  // File 01
  { q: "What do you handle for real estate agents?", a: "MLS listings, transaction coordination, CRM upkeep, lead follow-up and cold calling, social media, fix-and-flip support, websites, SEO and Meta ads. Lead generation is available on request.", tags: ["home", "file01"] },
  { q: "Which MLS systems can you work in?", a: "We work in your MLS through the access you give us and learn your board’s system during setup.", tags: ["file01"], claim: true },
  { q: "Do you make follow-up and cold calls?", a: "Yes. Lead follow-up and cold calling are part of File 01, and every call is logged in your CRM.", tags: ["file01"] },
  { q: "Can you coordinate transactions in my state?", a: "We track deadlines and documents for your transactions. Anything that needs a real estate license stays with you and your broker.", tags: ["file01"], claim: true },
  { q: "Can you work inside my CRM?", a: "Yes. We work in Follow Up Boss, HubSpot, Mojo Dialer, Zillow, DocuSign, Dotloop, SkySlope and your MLS. If you use something else, we learn it during setup.", tags: ["file01"] },
  // File 02
  { q: "Do you write in Xactimate?", a: "Yes. Estimates and supplements are built in Xactimate, with photo references for each line item.", tags: ["file02"] },
  { q: "What do you need from me for a supplement?", a: "The carrier estimate or scope of loss, your job photos, the measurement report and any notes on items you think were missed.", tags: ["file02"] },
  { q: "Do you talk to the insurance carrier?", a: "No. We prepare estimates and documentation for the contractor. We don’t negotiate with insurance carriers, represent homeowners or act as a public adjuster. You submit the package and stay the point of contact.", tags: ["home", "file02"] },
  { q: "How fast is turnaround?", a: "[[PLACEHOLDER: supplement turnaround time]]", tags: ["file02"], claim: true },
  { q: "Which trades do you supplement for?", a: "Roofing contractors and water-damage restoration companies in the US.", tags: ["file02"] },
  // Billing
  { q: "How much does it cost?", a: `File 01: ${fromText("01").toLowerCase()}. File 02: ${fromText("02").toLowerCase()}. Book a call and we confirm the price for your workload.`, tags: ["home", "billing"], claim: true },
  { q: "Why do you confirm prices on a call?", a: "Listed prices are starting points. Hours, tools and the mix of tasks change the work, so we confirm a monthly price after a 15-minute call.", tags: ["billing"] },
  { q: "Is there a contract?", a: "[[PLACEHOLDER: contract and notice terms]]", tags: ["billing"], claim: true },
  { q: "Can I start part-time?", a: "Yes. The Studio plan covers 20 hours a week, and you can move to Townhouse (40 hours) later.", tags: ["billing"] },
  { q: "How do I pay?", a: "By Wise or Payoneer.", tags: ["home", "billing"] },
  { q: "What if it isn’t working?", a: "Tell us. We fix the checklist or the scope first. If it still isn’t right, you can stop: [[PLACEHOLDER: notice period]].", tags: ["billing"], claim: true },
  // Security
  { q: "Do you sign an NDA?", a: "Yes. We sign your NDA before you share any logins.", tags: ["security"], claim: true },
  { q: "How do you handle my logins?", a: "You share access through your password manager or by adding a user seat, so you can remove it anytime. We don’t need your personal email password.", tags: ["security", "file01"], claim: true },
  { q: "Where is my data kept?", a: "In your own systems: your CRM, MLS, inbox and drive. We don’t keep client files on personal devices.", tags: ["security"], claim: true },
];

export const faqFor = (tag: FaqTag) => faq.filter((f) => f.tags.includes(tag));
