"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Forklift,
  HardHat,
  Loader2,
  Sparkles,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { getSupabaseBrowserClient } from "@/lib/supabase";
import { ghostButtonClass, glowButtonClass } from "@/lib/styles";
import type { Dictionary } from "@/types/content";

type WizardContent = Dictionary["joinApplication"];

type JoinApplicationWizardProps = {
  lang: Locale;
  content: WizardContent;
};

type FormState = {
  name: string;
  phone: string;
  location: string;
  roles: string[];
  experience: string;
  license: string;
  schedule: string;
  notes: string;
  website: string;
};

type StepOneErrors = Partial<Record<"name" | "phone" | "location", string>>;
type StepTwoErrors = Partial<Record<"roles" | "experience" | "license", string>>;

const roleIcons: Record<string, LucideIcon> = {
  loading: Truck,
  warehouse: Warehouse,
  cleaning: Sparkles,
  forklift: Forklift,
  other: HardHat,
};

const emptyForm: FormState = {
  name: "",
  phone: "",
  location: "",
  roles: [],
  experience: "",
  license: "",
  schedule: "",
  notes: "",
  website: "",
};

function optionLabel(options: { id: string; label: string }[], id: string) {
  return options.find((option) => option.id === id)?.label ?? id;
}

function toHasExperience(id: string, label: string) {
  const values = [id, label].map((value) => value.trim().toLocaleLowerCase("tr-TR"));
  if (values.some((value) => value === "evet" || value === "yes")) return true;
  if (values.some((value) => value === "hayır" || value === "hayir" || value === "no")) return false;
  return null;
}

const slide = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 28 : -28 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -28 : 28 }),
};

const fieldClass =
  "min-h-14 w-full rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500";

const nextClass = `${glowButtonClass} min-h-14 w-full px-6 py-4 text-base sm:w-auto disabled:hover:bg-brand-500 disabled:hover:shadow-[0_0_0_1px_rgba(0,166,81,0.85),0_0_28px_rgba(0,166,81,0.45)]`;
const backClass = `${ghostButtonClass} min-h-14 w-full px-6 py-4 text-base sm:w-auto`;

export function JoinApplicationWizard({ lang, content }: JoinApplicationWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [stepOneErrors, setStepOneErrors] = useState<StepOneErrors>({});
  const [stepTwoErrors, setStepTwoErrors] = useState<StepTwoErrors>({});
  const [scheduleError, setScheduleError] = useState("");
  const [genericError, setGenericError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stepCount = content.steps.length;
  const progress = (Math.min(currentStep, stepCount) / stepCount) * 100;

  function goTo(step: number) {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  }

  function validateStepOne(values: FormState) {
    const next: StepOneErrors = {};
    const digits = values.phone.replace(/\D/g, "").length;
    if (values.name.trim().length < 2) next.name = content.errorName;
    if (digits < 10 || digits > 15) next.phone = content.errorPhone;
    if (!values.location) next.location = content.errorLocation;
    return next;
  }

  function validateStepTwo(values: FormState) {
    const next: StepTwoErrors = {};
    if (values.roles.length === 0) next.roles = content.errorRoles;
    if (!values.experience) next.experience = content.errorExperience;
    if (!values.license) next.license = content.errorLicense;
    return next;
  }

  function continueFromPersonal() {
    const next = validateStepOne(form);
    setStepOneErrors(next);
    if (Object.keys(next).length === 0) goTo(2);
  }

  function continueFromExperience() {
    const next = validateStepTwo(form);
    setStepTwoErrors(next);
    if (Object.keys(next).length === 0) goTo(3);
  }

  function toggleRole(id: string) {
    setForm((current) => ({
      ...current,
      roles: current.roles.includes(id) ? current.roles.filter((role) => role !== id) : [...current.roles, id],
    }));
    setStepTwoErrors((current) => ({ ...current, roles: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenericError("");
    if (!form.schedule) {
      setScheduleError(content.errorSchedule);
      return;
    }
    if (form.notes.trim().length > 4000) {
      setGenericError(content.errorGeneric);
      return;
    }

    if (form.website.trim()) {
      goTo(4);
      return;
    }

    const hasExperience = toHasExperience(
      form.experience,
      optionLabel(content.experienceOptions, form.experience),
    );
    if (hasExperience === null) {
      setGenericError(content.errorGeneric);
      return;
    }

    setIsSubmitting(true);
    try {
      const supabase = getSupabaseBrowserClient();
      // Anonymous clients may insert, but cannot read the new row back.
      const { error } = await supabase.from("job_applications").insert({
        full_name: form.name.trim(),
        phone_number: form.phone.trim(),
        location: optionLabel(content.locations, form.location),
        desired_fields: form.roles.map((roleId) => optionLabel(content.roles, roleId)),
        has_experience: hasExperience,
        driving_license: optionLabel(content.licenses, form.license),
        work_preference: optionLabel(content.schedules, form.schedule),
        additional_notes: form.notes.trim() ? form.notes.trim() : null,
      });

      if (error) {
        setGenericError(content.errorGeneric);
        return;
      }

      goTo(4);
    } catch {
      setGenericError(content.errorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-36 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_320px_at_50%_0%,rgba(0,166,81,0.16),transparent_68%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{content.title}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
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
                      className={`mx-auto grid h-11 w-11 place-items-center rounded-full text-base font-semibold transition ${
                        complete || current
                          ? "bg-emerald-500 text-slate-950 shadow-[0_0_18px_rgba(16,185,129,0.45)]"
                          : "border border-slate-800 bg-slate-900/50 text-slate-400"
                      }`}
                    >
                      {complete ? <Check className="h-5 w-5" /> : number}
                    </span>
                    <p
                      className={`mt-2 truncate text-sm font-medium sm:text-base ${
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
                className="h-full rounded-full bg-emerald-500"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
          </nav>
        ) : null}

        <div className="mt-8 overflow-x-clip rounded-3xl border border-slate-800 bg-slate-900/50 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_-40px_rgba(0,166,81,0.55)] backdrop-blur-md sm:p-8">
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
                <PersonalStep
                  content={content}
                  form={form}
                  errors={stepOneErrors}
                  onChange={(patch) => {
                    setForm((current) => ({ ...current, ...patch }));
                    const key = Object.keys(patch)[0] as keyof StepOneErrors;
                    if (key in stepOneErrors) {
                      setStepOneErrors((current) => ({ ...current, [key]: undefined }));
                    }
                  }}
                  onNext={continueFromPersonal}
                />
              ) : null}

              {currentStep === 2 ? (
                <ExperienceStep
                  content={content}
                  form={form}
                  errors={stepTwoErrors}
                  onToggleRole={toggleRole}
                  onChange={(patch) => {
                    setForm((current) => ({ ...current, ...patch }));
                    const key = Object.keys(patch)[0] as keyof StepTwoErrors;
                    if (key in stepTwoErrors) {
                      setStepTwoErrors((current) => ({ ...current, [key]: undefined }));
                    }
                  }}
                  onBack={() => goTo(1)}
                  onNext={continueFromExperience}
                />
              ) : null}

              {currentStep === 3 ? (
                <PreferenceStep
                  content={content}
                  form={form}
                  scheduleError={scheduleError}
                  genericError={genericError}
                  isSubmitting={isSubmitting}
                  onChange={(patch) => {
                    setForm((current) => ({ ...current, ...patch }));
                    if ("schedule" in patch) setScheduleError("");
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
    </section>
  );
}

function PersonalStep({
  content,
  form,
  errors,
  onChange,
  onNext,
}: {
  content: WizardContent;
  form: FormState;
  errors: StepOneErrors;
  onChange: (patch: Partial<FormState>) => void;
  onNext: () => void;
}) {
  return (
    <div>
      <StepHeading title={content.personalTitle} />
      <div className="mt-6 space-y-5">
        <Field
          id="fullName"
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
          inputMode="tel"
          onChange={(phone) => onChange({ phone })}
        />
        <div>
          <label htmlFor="location" className="mb-2 block text-base font-medium text-slate-200">
            {content.locationLabel}
          </label>
          <div className="relative">
            <select
              id="location"
              name="location"
              value={form.location}
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? "location-error" : undefined}
              onChange={(event) => onChange({ location: event.target.value })}
              className={`${fieldClass} scheme-dark appearance-none pr-12`}
            >
              <option value="">{content.locationPlaceholder}</option>
              {content.locations.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
          </div>
          {errors.location ? (
            <p id="location-error" className="mt-2 text-sm text-rose-300">
              {errors.location}
            </p>
          ) : null}
        </div>
      </div>
      <StepActions>
        <button type="button" className={`${nextClass} sm:ml-auto`} onClick={onNext}>
          {content.next}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </StepActions>
    </div>
  );
}

function ExperienceStep({
  content,
  form,
  errors,
  onToggleRole,
  onChange,
  onBack,
  onNext,
}: {
  content: WizardContent;
  form: FormState;
  errors: StepTwoErrors;
  onToggleRole: (id: string) => void;
  onChange: (patch: Partial<FormState>) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <StepHeading title={content.experienceTitle} hint={content.rolesHint} />
      <fieldset className="mt-6">
        <legend className="text-base font-medium text-slate-200">{content.rolesLabel}</legend>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {content.roles.map((role) => {
            const selected = form.roles.includes(role.id);
            const Icon = roleIcons[role.id] ?? Warehouse;
            return (
              <label
                key={role.id}
                className={`flex min-h-16 cursor-pointer items-center gap-3 rounded-2xl border bg-slate-900/50 px-4 py-4 transition focus-within:ring-2 focus-within:ring-emerald-500 ${
                  selected
                    ? "border-emerald-500 shadow-[0_0_0_1px_rgba(16,185,129,0.85),0_0_24px_rgba(16,185,129,0.28)]"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <input
                  type="checkbox"
                  name="roles"
                  value={role.id}
                  checked={selected}
                  onChange={() => onToggleRole(role.id)}
                  className="sr-only"
                />
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                    selected ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-emerald-400"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-base font-semibold text-white">{role.label}</span>
                <span
                  className={`ml-auto grid h-6 w-6 shrink-0 place-items-center rounded-md border ${
                    selected ? "border-emerald-500 bg-emerald-500 text-slate-950" : "border-slate-600"
                  }`}
                  aria-hidden="true"
                >
                  {selected ? <Check className="h-4 w-4" /> : null}
                </span>
              </label>
            );
          })}
        </div>
        {errors.roles ? (
          <p className="mt-2 text-sm text-rose-300" role="alert">
            {errors.roles}
          </p>
        ) : null}
      </fieldset>

      <ChoiceGroup
        legend={content.experienceLabel}
        name="experience"
        value={form.experience}
        options={content.experienceOptions}
        error={errors.experience}
        onChange={(experience) => onChange({ experience })}
      />
      <ChoiceGroup
        legend={content.licenseLabel}
        name="license"
        value={form.license}
        options={content.licenses}
        error={errors.license}
        onChange={(license) => onChange({ license })}
      />

      <StepActions>
        <button type="button" className={backClass} onClick={onBack}>
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          {content.back}
        </button>
        <button type="button" className={nextClass} onClick={onNext}>
          {content.next}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </StepActions>
    </div>
  );
}

function PreferenceStep({
  content,
  form,
  scheduleError,
  genericError,
  isSubmitting,
  onChange,
  onBack,
  onSubmit,
}: {
  content: WizardContent;
  form: FormState;
  scheduleError: string;
  genericError: string;
  isSubmitting: boolean;
  onChange: (patch: Partial<FormState>) => void;
  onBack: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <StepHeading title={content.preferenceTitle} />
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
      <ChoiceGroup
        legend={content.scheduleLabel}
        name="schedule"
        value={form.schedule}
        options={content.schedules}
        error={scheduleError}
        onChange={(schedule) => onChange({ schedule })}
      />
      <div className="mt-6">
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <label htmlFor="notes" className="text-base font-medium text-slate-200">
            {content.notesLabel}
          </label>
          <span className="text-sm text-slate-500">{content.notesOptional}</span>
        </div>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={form.notes}
          maxLength={4000}
          placeholder={content.notesPlaceholder}
          onChange={(event) => onChange({ notes: event.target.value })}
          className={`${fieldClass} min-h-32 resize-y`}
        />
      </div>
      {genericError ? (
        <p className="mt-4 text-sm text-rose-300" role="alert">
          {genericError}
        </p>
      ) : null}
      <StepActions>
        <button type="button" className={backClass} onClick={onBack} disabled={isSubmitting}>
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          {content.back}
        </button>
        <button type="submit" className={nextClass} disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : null}
          {isSubmitting ? content.submitting : content.submit}
          {isSubmitting ? null : <ArrowRight className="h-5 w-5" aria-hidden="true" />}
        </button>
      </StepActions>
    </form>
  );
}

function SuccessStep({ lang, content }: { lang: Locale; content: WizardContent }) {
  return (
    <div className="px-2 py-10 text-center sm:py-14">
      <div className="relative mx-auto grid h-24 w-24 place-items-center">
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 blur-xl" aria-hidden="true" />
        <CircleCheck
          className="relative h-20 w-20 text-emerald-400 drop-shadow-[0_0_18px_rgba(52,211,153,0.9)]"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed font-medium text-white sm:text-xl">
        {content.successMessage}
      </p>
      <Link href={`/${lang}`} className={`${glowButtonClass} mt-8 min-h-14 px-6 py-4 text-base`}>
        {content.home}
      </Link>
    </div>
  );
}

function ChoiceGroup({
  legend,
  name,
  value,
  options,
  error,
  onChange,
}: {
  legend: string;
  name: string;
  value: string;
  options: { id: string; label: string }[];
  error?: string;
  onChange: (id: string) => void;
}) {
  const errorId = `${name}-error`;

  return (
    <fieldset className="mt-6">
      <legend className="text-base font-medium text-slate-200">{legend}</legend>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2" role="radiogroup" aria-label={legend}>
        {options.map((option) => {
          const selected = value === option.id;
          return (
            <label
              key={option.id}
              className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border bg-slate-900/50 px-4 py-4 transition focus-within:ring-2 focus-within:ring-emerald-500 ${
                selected
                  ? "border-emerald-500 shadow-[0_0_0_1px_rgba(16,185,129,0.85),0_0_24px_rgba(16,185,129,0.28)]"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={selected}
                aria-describedby={error ? errorId : undefined}
                onChange={() => onChange(option.id)}
                className="sr-only"
              />
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                  selected ? "border-emerald-500 bg-emerald-500" : "border-slate-600"
                }`}
                aria-hidden="true"
              >
                {selected ? <span className="h-2 w-2 rounded-full bg-slate-950" /> : null}
              </span>
              <span className="text-base font-semibold text-white">{option.label}</span>
            </label>
          );
        })}
      </div>
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-rose-300" role="alert">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

function StepHeading({ title, hint }: { title: string; hint?: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h2>
      {hint ? <p className="mt-1 text-base text-slate-400">{hint}</p> : null}
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
  inputMode,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  autoComplete: string;
  type?: "text" | "tel";
  inputMode?: "tel";
  onChange: (value: string) => void;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-base font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
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
