/** First day counted as a full year of service: 7 October 2020 (6+ on 7 October 2026). */
const SERVICE_START = { year: 2020, month: 10, day: 7 };

/**
 * Completed years of service in Turkey.
 * Stays at 6 through 6 October 2027, then becomes 7 on 7 October 2027, and so on.
 */
export function getYearsOfService(now: Date = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  let years = year - SERVICE_START.year;
  const beforeAnniversary =
    month < SERVICE_START.month || (month === SERVICE_START.month && day < SERVICE_START.day);
  if (beforeAnniversary) years -= 1;

  return Math.max(years, 0);
}
