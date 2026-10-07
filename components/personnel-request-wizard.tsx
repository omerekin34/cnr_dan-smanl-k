"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { ghostButtonClass, glowButtonClass } from "@/lib/styles";
import type { Dictionary } from "@/types/content";

type WizardContent = Dictionary["personnelRequest"];

type PersonnelRequestWizardProps = {
  lang: Locale;
  content: WizardContent;
};

type FormState = {
  category: string;
  headcount: string;
  duration: string;
  notes: string;
  companyName: string;
  name: string;
  phone: string;
  email: string;
  website: string;
};

type ContactErrors = Partial<Record<"companyName" | "name" | "phone" | "email", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const categoryIcons: Record<string, LucideIcon> = {
  "warehouse-logistics": Warehouse,
  "loading-team": Truck,
  "facility-cleaning": Sparkles,
  "payroll-ohs": ShieldCheck,
};

const emptyForm: FormState = {
  category: "",
  headcount: "",
  duration: "",
  notes: "",
  companyName: "",
  name: "",
  phone: "",
  email: "",
  website: "",
};

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 28 : -28 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -28 : 28 }),
};

const fieldClass =
  "w-full rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500";

const actionClass = `${glowButtonClass} w-full sm:w-auto disabled:hover:bg-brand-500 disabled:hover:shadow-[0_0_0_1px_rgba(0,166,81,0.85),0_0_28px_rgba(0,166,81,0.45)]`;

export function PersonnelRequestWizard({ lang, content }: PersonnelRequestWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [genericError, setGenericError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const stepCount = content.steps.length;
  const progress = (Math.min(currentStep, stepCount) / stepCount) * 100;

  function goTo(step: number) {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  }

  function validateContact(values: FormState) {
    const next: ContactErrors = {};
    const digits = values.phone.replace(/\D/g, "").length;
    if (values.companyName.trim().length < 2) next.companyName = content.errorCompany;
    if (values.name.trim().length < 2) next.name = content.errorName;
    if (digits < 10 || digits > 15) next.phone = content.errorPhone;
    if (!emailPattern.test(values.email.trim())) next.email = content.errorEmail;
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenericError("");
    const nextErrors = validateContact(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (form.notes.trim().length > 4000) {
      setGenericError(content.errorGeneric);
      return;
    }

    if (form.website.trim()) {
      goTo(4);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "personnel",
          category: form.category,
          headcount: form.headcount,
          duration: form.duration,
          notes: form.notes.trim(),
          companyName: form.companyName.trim(),
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          locale: lang,
        }),
      });

      if (!response.ok) {
        setGenericError(content.errorGeneric);
        return;
      }

      goTo(4);
    } catch {
      setGenericError(content.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-36 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_320px_at_50%_0%,rgba(0,166,81,0.16),transparent_68%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.title}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {content.subtitle}
          </p>
        </header>

        {currentStep <= stepCount ? (
          <nav className="mt-10" aria-label={content.progressLabel}>
            <ol className="grid grid-cols-3 gap-2">
              {content.steps.map((step, index) => {
                const number = index + 1;
                const complete = currentStep > number;
                const current = currentStep === number;
                return (
                  <li key={step.label} className="min-w-0 text-center" aria-current={current ? "step" : undefined}>
                    <span
                      aria-hidden="true"
                      className={`mx-auto grid h-9 w-9 place-items-center rounded-full text-sm font-semibold transition ${
                        complete || current
                          ? "bg-brand-500 text-navy-950 shadow-[0_0_18px_rgba(0,166,81,0.45)]"
                          : "border border-slate-800 bg-slate-900/50 text-slate-400"
                      }`}
                    >
                      {complete ? <Check className="h-4 w-4" /> : number}
                    </span>
                    <p
                      className={`mt-2 truncate text-xs font-medium sm:text-sm ${
                        complete || current ? "text-white" : "text-slate-500"
                      }`}
                    >
                      {step.label}
                    </p>
                  </li>
                );
              })}
            </ol>
            <div
              className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={stepCount}
              aria-valuenow={currentStep}
              aria-label={content.progressLabel}
            >
              <motion.div
                className="h-full rounded-full bg-brand-500"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
          </nav>
        ) : null}

        <div className="mt-8 overflow-x-clip rounded-3xl border border-slate-800 bg-slate-900/50 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_-40px_rgba(0,166,81,0.55)] backdrop-blur-md sm:p-8">
          <div>
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                {currentStep === 1 ? (
                  <CategoryStep
                    content={content}
                    value={form.category}
                    onChange={(category) => setForm((current) => ({ ...current, category }))}
                    onNext={() => goTo(2)}
                  />
                ) : null}

                {currentStep === 2 ? (
                  <DetailsStep
                    content={content}
                    form={form}
                    onChange={(patch) => setForm((current) => ({ ...current, ...patch }))}
                    onBack={() => goTo(1)}
                    onNext={() => goTo(3)}
                  />
                ) : null}

                {currentStep === 3 ? (
                  <ContactStep
                    content={content}
                    form={form}
                    errors={errors}
                    genericError={genericError}
                    submitting={submitting}
                    onChange={(patch) => {
                      setForm((current) => ({ ...current, ...patch }));
                      const key = Object.keys(patch)[0] as keyof ContactErrors;
                      if (key in errors) {
                        setErrors((current) => ({ ...current, [key]: undefined }));
                      }
                    }}
                    onBack={() => goTo(2)}
                    onSubmit={onSubmit}
                  />
                ) : null}

                {currentStep === 4 ? <SuccessStep lang={lang} content={content} /> : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryStep({
  content,
  value,
  onChange,
  onNext,
}: {
  content: WizardContent;
  value: string;
  onChange: (id: string) => void;
  onNext: () => void;
}) {
  return (
    <div>
      <StepHeading title={content.categoriesTitle} hint={content.categoriesHint} />
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" role="radiogroup" aria-label={content.categoriesTitle}>
        {content.categories.map((category) => {
          const Icon = categoryIcons[category.id] ?? Warehouse;
          const selected = value === category.id;
          return (
            <label
              key={category.id}
              className={`group relative cursor-pointer rounded-2xl border bg-slate-900/50 p-4 transition duration-300 focus-within:ring-2 focus-within:ring-brand-500 sm:p-5 ${
                selected
                  ? "border-brand-500 bg-brand-500/10 shadow-[0_0_0_1px_rgba(0,166,81,0.85),0_0_28px_rgba(0,166,81,0.35)]"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selected}
                onChange={() => onChange(category.id)}
                className="sr-only"
              />
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl ${
                  selected ? "bg-brand-500 text-navy-950" : "bg-slate-800 text-brand-400"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="mt-4 block text-sm font-semibold text-white sm:text-base">{category.title}</span>
              <span className="mt-1.5 block text-sm leading-relaxed text-slate-400">{category.description}</span>
            </label>
          );
        })}
      </div>
      <StepActions>
        <button type="button" className={`${actionClass} sm:ml-auto`} disabled={!value} onClick={onNext}>
          {content.next}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </StepActions>
    </div>
  );
}

function DetailsStep({
  content,
  form,
  onChange,
  onBack,
  onNext,
}: {
  content: WizardContent;
  form: FormState;
  onChange: (patch: Partial<FormState>) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const ready = Boolean(form.headcount && form.duration);

  return (
    <div>
      <StepHeading title={content.detailsTitle} />
      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="headcount" className="mb-2 block text-sm font-medium text-slate-200">
            {content.headcountLabel}
          </label>
          <div className="relative">
            <select
              id="headcount"
              name="headcount"
              value={form.headcount}
              onChange={(event) => onChange({ headcount: event.target.value })}
              className={`${fieldClass} scheme-dark appearance-none pr-10`}
            >
              <option value="">{content.headcountPlaceholder}</option>
              {content.headcountOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-slate-200">{content.durationLabel}</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {content.durations.map((option) => {
              const selected = form.duration === option.id;
              return (
                <label
                  key={option.id}
                  className={`relative cursor-pointer rounded-2xl border bg-slate-900/50 p-4 transition focus-within:ring-2 focus-within:ring-brand-500 ${
                    selected
                      ? "border-brand-500 shadow-[0_0_0_1px_rgba(0,166,81,0.85),0_0_24px_rgba(0,166,81,0.28)]"
                      : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="duration"
                    value={option.id}
                    checked={selected}
                    onChange={() => onChange({ duration: option.id })}
                    className="sr-only"
                  />
                  <span className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border ${
                        selected ? "border-brand-500 bg-brand-500" : "border-slate-600"
                      }`}
                      aria-hidden="true"
                    >
                      {selected ? <span className="h-1.5 w-1.5 rounded-full bg-navy-950" /> : null}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{option.label}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-slate-400">{option.description}</span>
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <label htmlFor="notes" className="text-sm font-medium text-slate-200">
              {content.notesLabel}
            </label>
            <span className="text-xs text-slate-500">{content.notesOptional}</span>
          </div>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={form.notes}
            maxLength={4000}
            placeholder={content.notesPlaceholder}
            onChange={(event) => onChange({ notes: event.target.value })}
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>
      <StepActions>
        <button type="button" className={`${ghostButtonClass} w-full sm:w-auto`} onClick={onBack}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {content.back}
        </button>
        <button type="button" className={actionClass} disabled={!ready} onClick={onNext}>
          {content.next}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </StepActions>
    </div>
  );
}

function ContactStep({
  content,
  form,
  errors,
  genericError,
  submitting,
  onChange,
  onBack,
  onSubmit,
}: {
  content: WizardContent;
  form: FormState;
  errors: ContactErrors;
  genericError: string;
  submitting: boolean;
  onChange: (patch: Partial<FormState>) => void;
  onBack: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <StepHeading title={content.contactTitle} />
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => onChange({ website: event.target.value })}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          id="companyName"
          label={content.companyLabel}
          placeholder={content.companyPlaceholder}
          value={form.companyName}
          error={errors.companyName}
          autoComplete="organization"
          onChange={(companyName) => onChange({ companyName })}
        />
        <Field
          id="contactName"
          label={content.nameLabel}
          placeholder={content.namePlaceholder}
          value={form.name}
          error={errors.name}
          autoComplete="name"
          onChange={(name) => onChange({ name })}
        />
        <Field
          id="phone"
          type="tel"
          label={content.phoneLabel}
          placeholder={content.phonePlaceholder}
          value={form.phone}
          error={errors.phone}
          autoComplete="tel"
          onChange={(phone) => onChange({ phone })}
        />
        <Field
          id="email"
          type="email"
          label={content.emailLabel}
          placeholder={content.emailPlaceholder}
          value={form.email}
          error={errors.email}
          autoComplete="email"
          onChange={(email) => onChange({ email })}
        />
      </div>
      {genericError ? (
        <p className="mt-4 text-sm text-rose-300" role="alert">
          {genericError}
        </p>
      ) : null}
      <StepActions>
        <button type="button" className={`${ghostButtonClass} w-full sm:w-auto`} onClick={onBack} disabled={submitting}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {content.back}
        </button>
        <button type="submit" className={actionClass} disabled={submitting}>
          {submitting ? content.submitting : content.submit}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </StepActions>
    </form>
  );
}

function SuccessStep({ lang, content }: { lang: Locale; content: WizardContent }) {
  return (
    <div className="px-2 py-8 text-center sm:py-12">
      <CircleCheck className="mx-auto h-20 w-20 text-brand-500" strokeWidth={1.5} aria-hidden="true" />
      <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{content.successTitle}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">{content.successBody}</p>
      <Link href={`/${lang}`} className={`${glowButtonClass} mt-8`}>
        {content.home}
      </Link>
    </div>
  );
}

function StepHeading({ title, hint }: { title: string; hint?: string }) {
  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h2>
      {hint ? <p className="mt-1 text-sm text-slate-400">{hint}</p> : null}
    </div>
  );
}

function StepActions({ children }: { children: ReactNode }) {
  return <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">{children}</div>;
}

function Field({
  id,
  label,
  placeholder,
  value,
  error,
  autoComplete,
  type = "text",
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  autoComplete: string;
  type?: "text" | "email" | "tel";
  onChange: (value: string) => void;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={fieldClass}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
