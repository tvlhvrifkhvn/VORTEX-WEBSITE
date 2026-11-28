/* Time-zone helpers (pure, no deps). Times are "HH:mm" 24h strings. */

const TZ_ABBR: Record<string, string> = {
  "America/New_York": "ET",
  "America/Chicago": "CT",
  "America/Denver": "MT",
  "America/Los_Angeles": "PT",
  "Asia/Karachi": "PKT",
};
export const tzAbbr = (tz: string) => TZ_ABBR[tz] ?? tz;

/** Wall-clock parts of `date` in `timeZone`. */
export function zonedParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone, hourCycle: "h23", weekday: "short", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { year: +get("year"), month: +get("month"), day: +get("day"), hour: +get("hour"), minute: +get("minute"), weekday };
}

/** Minutes the zone is ahead of UTC at `date` (DST-aware). */
export function tzOffset(date: Date, timeZone: string) {
  const p = zonedParts(date, timeZone);
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute);
  return Math.round((asUtc - date.getTime()) / 60000 / 15) * 15;
}

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const fromMin = (min: number) => {
  const m = ((min % 1440) + 1440) % 1440;
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
};

/** "17:00" → "5:00 PM" */
export function format12(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`;
}

/** Convert a wall-clock time from one zone to another, for the given day (DST-correct). */
export function convertTime(hhmm: string, fromTz: string, toTz: string, date = new Date()) {
  return fromMin(toMin(hhmm) - tzOffset(date, fromTz) + tzOffset(date, toTz));
}

export interface DeskConfig { timeZone: string; days: readonly number[]; open: string; close: string }

/** Desk open/closed state plus the next opening label, e.g. "OPENS MON 9:00 AM ET". */
export function deskState(desk: DeskConfig, now = new Date()) {
  const p = zonedParts(now, desk.timeZone);
  const minutes = p.hour * 60 + p.minute;
  const workday = desk.days.includes(p.weekday);
  const open = workday && minutes >= toMin(desk.open) && minutes < toMin(desk.close);
  const later = workday && minutes < toMin(desk.open);
  let next = p.weekday;
  if (!later) {
    for (let i = 1; i <= 7; i++) {
      next = (p.weekday + i) % 7;
      if (desk.days.includes(next)) break;
    }
  }
  const day = later ? "" : ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][next] + " ";
  return { open, opensLabel: `OPENS ${day}${format12(desk.open)} ${tzAbbr(desk.timeZone)}` };
}
