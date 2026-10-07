"use client";

import { Check, Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import { useState, type FormEvent, type ReactNode, type SVGProps } from "react";
import { FadeIn } from "@/components/fade-in";
import { officeMapQuery, officeMapsHref } from "@/lib/office";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/types/content";

type ContactPageViewProps = {
  lang: Locale;
  content: Dictionary["contact"];
};

type NoteForm = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

type NoteErrors = Partial<Record<"name" | "phone" | "email" | "subject" | "message", string>>;

const emptyForm: NoteForm = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const fieldClass =
  "w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500";

const panelClass =
  "flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md sm:p-8";

export function ContactPageView({ lang, content }: ContactPageViewProps) {
  const [form, setForm] = useState<NoteForm>(emptyForm);
  const [errors, setErrors] = useState<NoteErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [genericError, setGenericError] = useState("");
  const copy = content.form;
  const note = content.note;
  const info = content.info;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeMapQuery)}`;
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(officeMapQuery)}&hl=${lang}&z=16&output=embed`;

  function validate(values: NoteForm) {
    const next: NoteErrors = {};
    const digits = values.phone.replace(/\D/g, "").length;
    if (values.name.trim().length < 2) next.name = copy.errorName;
    if (digits < 10 || digits > 15) next.phone = note.errorPhone;
    if (!emailPattern.test(values.email.trim())) next.email = copy.errorEmail;
    if (values.subject.trim().length < 2) next.subject = note.errorSubject;
    if (values.message.trim().length < 10) next.message = copy.errorMessage;
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenericError("");
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (form.website.trim()) {
      setSent(true);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "note",
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          locale: lang,
        }),
      });

      if (!response.ok) {
        setGenericError(copy.errorGeneric);
        return;
      }

      setSent(true);
      setForm(emptyForm);
    } catch {
      setGenericError(copy.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full bg-slate-950 px-4 py-16 text-slate-200 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FadeIn className="h-full">
            <InfoCard icon={Phone} label={info.phoneLabel}>
              <ul className="space-y-3">
                {info.phones.map((person) => (
                  <li key={person.tel}>
                    <a href={person.tel} className="group/link block rounded-lg">
                      <span className="block text-sm font-semibold tracking-tight text-white transition group-hover/link:text-brand-300">
                        {person.display}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-400">{person.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </FadeIn>

          <FadeIn className="h-full" delay={0.05}>
            <InfoCard icon={Mail} label={info.emailLabel}>
              <a
                href={`mailto:${info.email}`}
                className="text-sm font-semibold break-all text-white transition hover:text-brand-300"
              >
                {info.email}
              </a>
              <p className="mt-auto pt-4 text-sm leading-relaxed text-slate-400">{info.emailNote}</p>
            </InfoCard>
          </FadeIn>

          <FadeIn className="h-full" delay={0.1}>
            <InfoCard icon={MapPin} label={info.addressLabel}>
              <a
                href={officeMapsHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm leading-relaxed text-slate-100 transition hover:text-brand-300"
              >
                {info.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex pt-4 text-sm font-semibold text-brand-400 underline decoration-brand-500/40 underline-offset-4 transition hover:text-brand-300"
              >
                {info.directionsLabel}
              </a>
            </InfoCard>
          </FadeIn>

          <FadeIn className="h-full" delay={0.15}>
            <InfoCard icon={WhatsAppIcon} label={info.whatsappLabel}>
              <ul className="space-y-3">
                {info.phones.map((person) => (
                  <li key={person.whatsapp}>
                    <a href={person.whatsapp} target="_blank" rel="noreferrer" className="group/link block rounded-lg">
                      <span className="block text-sm font-semibold tracking-tight text-white transition group-hover/link:text-brand-300">
                        {person.display}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-400">{person.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-4 text-xs leading-relaxed text-slate-400">{info.whatsappNote}</p>
            </InfoCard>
          </FadeIn>
        </div>

        <div id="quote" className="mt-8 grid scroll-mt-36 grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <FadeIn className="h-full min-w-0">
            <div className={panelClass}>
              {sent ? (
                <div className="flex h-full min-h-80 flex-col justify-center">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">{copy.successTitle}</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">{copy.successBody}</p>
                  <button
                    type="button"
                    className="mt-6 inline-flex w-fit rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-brand-400"
                    onClick={() => setSent(false)}
                  >
                    {copy.another}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="relative flex h-full flex-col">
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(event) => setForm((current) => ({ ...current, website: event.target.value }))}
                    />
                  </div>

                  <h2 className="text-xl font-semibold tracking-tight text-white">{note.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{note.lead}</p>

                  <div className="mt-6 grid flex-1 content-start gap-5 sm:grid-cols-2">
                    <NoteField
                      id="name"
                      label={copy.name}
                      placeholder={note.namePlaceholder}
                      value={form.name}
                      error={errors.name}
                      autoComplete="name"
                      onChange={(value) => {
                        setForm((current) => ({ ...current, name: value }));
                        setErrors((current) => ({ ...current, name: undefined }));
                      }}
                    />
                    <NoteField
                      id="phone"
                      type="tel"
                      label={note.phone}
                      placeholder={note.phonePlaceholder}
                      value={form.phone}
                      error={errors.phone}
                      autoComplete="tel"
                      onChange={(value) => {
                        setForm((current) => ({ ...current, phone: value }));
                        setErrors((current) => ({ ...current, phone: undefined }));
                      }}
                    />
                    <NoteField
                      id="email"
                      type="email"
                      label={copy.email}
                      placeholder={note.emailPlaceholder}
                      value={form.email}
                      error={errors.email}
                      autoComplete="email"
                      onChange={(value) => {
                        setForm((current) => ({ ...current, email: value }));
                        setErrors((current) => ({ ...current, email: undefined }));
                      }}
                    />
                    <NoteField
                      id="subject"
                      label={note.subject}
                      placeholder={note.subjectPlaceholder}
                      value={form.subject}
                      error={errors.subject}
                      onChange={(value) => {
                        setForm((current) => ({ ...current, subject: value }));
                        setErrors((current) => ({ ...current, subject: undefined }));
                      }}
                    />
                    <div className="flex flex-col sm:col-span-2">
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                        {copy.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className={`${fieldClass} min-h-40 flex-1 resize-y`}
                        placeholder={note.messagePlaceholder}
                        value={form.message}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        onChange={(event) => {
                          const value = event.target.value;
                          setForm((current) => ({ ...current, message: value }));
                          setErrors((current) => ({ ...current, message: undefined }));
                        }}
                      />
                      {errors.message ? (
                        <p id="message-error" className="mt-2 text-sm text-rose-300">
                          {errors.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {genericError ? <p className="mt-4 text-sm text-rose-300">{genericError}</p> : null}

                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-[0_0_28px_rgba(0,166,81,0.35)] transition hover:bg-brand-400 hover:shadow-[0_0_36px_rgba(0,166,81,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={submitting}
                  >
                    {submitting ? copy.sending : note.send}
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <p className="mt-4 text-xs leading-relaxed text-slate-500">{content.privacy}</p>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn className="h-full min-w-0" delay={0.08}>
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <iframe
                title={info.address}
                src={mapEmbedSrc}
                className="absolute inset-0 h-full min-h-[400px] w-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon | ((props: SVGProps<SVGSVGElement>) => ReactNode);
  label: string;
  children: ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-500/70 hover:shadow-[0_18px_44px_-22px_rgba(0,166,81,0.75)]">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-500 ring-1 ring-brand-500/30 transition duration-300 group-hover:bg-brand-500 group-hover:text-navy-950 group-hover:shadow-[0_0_22px_rgba(0,166,81,0.45)]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h2 className="mt-5 text-[11px] font-semibold tracking-[0.18em] text-brand-500 uppercase">{label}</h2>
      <div className="mt-4 flex flex-1 flex-col">{children}</div>
    </article>
  );
}

function NoteField({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className={fieldClass}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39.12 0 .23 0 .33.01.3.01.44.03.64.49.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.27.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.2 1.36.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.14.44.2.51.31.06.12.06.67-.18 1.35Z" />
    </svg>
  );
}
