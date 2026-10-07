import { NextResponse } from "next/server";
import { isServiceId } from "@/lib/service-ids";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const personnelCategories = [
  "warehouse-logistics",
  "loading-team",
  "facility-cleaning",
  "payroll-ohs",
] as const;

const personnelHeadcounts = ["1-5", "5-10", "10-50", "50-plus"] as const;
const personnelDurations = ["seasonal", "permanent"] as const;

const applicationLocations = ["gebze", "darica", "cayirova", "tuzla-sifa", "sekerpinar", "other"] as const;
const applicationRoles = ["loading", "warehouse", "cleaning", "forklift", "other"] as const;
const applicationExperience = ["yes", "no"] as const;
const applicationLicenses = ["none", "b", "g"] as const;
const applicationSchedules = ["permanent", "seasonal"] as const;

function acceptPersonnel(fields: Record<string, unknown>) {
  const { category, headcount, duration, notes, companyName, name, phone, email, locale } = fields;

  if (typeof category !== "string" || !personnelCategories.includes(category as (typeof personnelCategories)[number])) {
    return NextResponse.json({ ok: false, field: "category" }, { status: 400 });
  }

  if (typeof headcount !== "string" || !personnelHeadcounts.includes(headcount as (typeof personnelHeadcounts)[number])) {
    return NextResponse.json({ ok: false, field: "headcount" }, { status: 400 });
  }

  if (typeof duration !== "string" || !personnelDurations.includes(duration as (typeof personnelDurations)[number])) {
    return NextResponse.json({ ok: false, field: "duration" }, { status: 400 });
  }

  if (notes !== undefined && notes !== null && typeof notes !== "string") {
    return NextResponse.json({ ok: false, field: "notes" }, { status: 400 });
  }

  if (typeof notes === "string" && notes.trim().length > 4000) {
    return NextResponse.json({ ok: false, field: "notes" }, { status: 400 });
  }

  if (
    typeof companyName !== "string" ||
    companyName.trim().length < 2 ||
    companyName.trim().length > 160
  ) {
    return NextResponse.json({ ok: false, field: "companyName" }, { status: 400 });
  }

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 120) {
    return NextResponse.json({ ok: false, field: "name" }, { status: 400 });
  }

  const digits = typeof phone === "string" ? phone.replace(/\D/g, "").length : 0;
  if (typeof phone !== "string" || digits < 10 || digits > 15 || phone.trim().length > 24) {
    return NextResponse.json({ ok: false, field: "phone" }, { status: 400 });
  }

  if (typeof email !== "string" || !emailPattern.test(email.trim()) || email.trim().length > 160) {
    return NextResponse.json({ ok: false, field: "email" }, { status: 400 });
  }

  console.info("Personnel request accepted", {
    locale: typeof locale === "string" ? locale : "unknown",
    category,
    headcount,
    duration,
  });

  return NextResponse.json({ ok: true });
}

function includesId<T extends string>(values: readonly T[], value: string): value is T {
  return values.includes(value as T);
}

function acceptApplication(fields: Record<string, unknown>) {
  const { name, phone, location, roles, experience, license, schedule, notes, locale } = fields;

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 120) {
    return NextResponse.json({ ok: false, field: "name" }, { status: 400 });
  }

  const digits = typeof phone === "string" ? phone.replace(/\D/g, "").length : 0;
  if (typeof phone !== "string" || digits < 10 || digits > 15 || phone.trim().length > 24) {
    return NextResponse.json({ ok: false, field: "phone" }, { status: 400 });
  }

  if (typeof location !== "string" || !includesId(applicationLocations, location)) {
    return NextResponse.json({ ok: false, field: "location" }, { status: 400 });
  }

  if (
    !Array.isArray(roles) ||
    roles.length === 0 ||
    roles.length > applicationRoles.length ||
    new Set(roles).size !== roles.length ||
    roles.some((role) => typeof role !== "string" || !includesId(applicationRoles, role))
  ) {
    return NextResponse.json({ ok: false, field: "roles" }, { status: 400 });
  }

  if (typeof experience !== "string" || !includesId(applicationExperience, experience)) {
    return NextResponse.json({ ok: false, field: "experience" }, { status: 400 });
  }

  if (typeof license !== "string" || !includesId(applicationLicenses, license)) {
    return NextResponse.json({ ok: false, field: "license" }, { status: 400 });
  }

  if (typeof schedule !== "string" || !includesId(applicationSchedules, schedule)) {
    return NextResponse.json({ ok: false, field: "schedule" }, { status: 400 });
  }

  if (notes !== undefined && notes !== null && typeof notes !== "string") {
    return NextResponse.json({ ok: false, field: "notes" }, { status: 400 });
  }

  if (typeof notes === "string" && notes.trim().length > 4000) {
    return NextResponse.json({ ok: false, field: "notes" }, { status: 400 });
  }

  console.info("Job application accepted", {
    locale: typeof locale === "string" ? locale : "unknown",
    location,
    schedule,
  });

  return NextResponse.json({ ok: true });
}

function acceptNote(fields: {
  name: unknown;
  phone: unknown;
  email: unknown;
  subject: unknown;
  message: unknown;
  locale: unknown;
}) {
  const { name, phone, email, subject, message, locale } = fields;

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 120) {
    return NextResponse.json({ ok: false, field: "name" }, { status: 400 });
  }

  const digits = typeof phone === "string" ? phone.replace(/\D/g, "").length : 0;
  if (typeof phone !== "string" || digits < 10 || digits > 15 || phone.trim().length > 24) {
    return NextResponse.json({ ok: false, field: "phone" }, { status: 400 });
  }

  if (typeof email !== "string" || !emailPattern.test(email.trim()) || email.trim().length > 160) {
    return NextResponse.json({ ok: false, field: "email" }, { status: 400 });
  }

  if (typeof subject !== "string" || subject.trim().length < 2 || subject.trim().length > 160) {
    return NextResponse.json({ ok: false, field: "subject" }, { status: 400 });
  }

  if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 4000) {
    return NextResponse.json({ ok: false, field: "message" }, { status: 400 });
  }

  console.info("Contact note accepted", {
    locale: typeof locale === "string" ? locale : "unknown",
  });

  return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, companyName, email, service, message, locale, website, source, phone, subject } =
    payload as Record<string, unknown>;

  if (typeof website === "string" && website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (source === "note") {
    return acceptNote({ name, phone, email, subject, message, locale });
  }

  if (source === "personnel") {
    return acceptPersonnel(payload as Record<string, unknown>);
  }

  if (source === "application") {
    return acceptApplication(payload as Record<string, unknown>);
  }

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 120) {
    return NextResponse.json({ ok: false, field: "name" }, { status: 400 });
  }

  if (
    typeof companyName !== "string" ||
    companyName.trim().length < 2 ||
    companyName.trim().length > 160
  ) {
    return NextResponse.json({ ok: false, field: "companyName" }, { status: 400 });
  }

  if (typeof email !== "string" || !emailPattern.test(email.trim()) || email.trim().length > 160) {
    return NextResponse.json({ ok: false, field: "email" }, { status: 400 });
  }

  if (typeof service !== "string" || !isServiceId(service)) {
    return NextResponse.json({ ok: false, field: "service" }, { status: 400 });
  }

  if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 4000) {
    return NextResponse.json({ ok: false, field: "message" }, { status: 400 });
  }

  console.info("Personnel request accepted", {
    locale: typeof locale === "string" ? locale : "unknown",
    service,
  });

  return NextResponse.json({ ok: true });
}
