export const serviceIds = [
  "permanent-staffing",
  "loading-unloading",
  "warehouse-management",
  "payroll",
  "cleaning",
  "hr-consulting",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export function isServiceId(value: string): value is ServiceId {
  return (serviceIds as readonly string[]).includes(value);
}
