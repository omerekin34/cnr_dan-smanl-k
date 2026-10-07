"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, MessageCircle, Send, User, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { getOfficePhones } from "@/lib/office";

type Contact = {
  name: string;
  display: string;
  phone: string;
};
type Step = "contacts" | "messages" | "compose";

const quickMessages = {
  tr: [
    "Personel tedariği hizmetleriniz hakkında detaylı bilgi almak istiyorum.",
    "Yükleme, boşaltma ve depo yönetimi için fiyat teklifi alabilir miyim?",
    "Bordrolama ve İSG süreçleri hakkında görüşmek istiyorum.",
  ],
  en: [
    "I would like detailed information about your staffing services.",
    "Could I get a quote for loading, unloading, and warehouse management?",
    "I would like to discuss payroll and occupational safety processes.",
  ],
} as const;

const labels = {
  tr: {
    title: "Canlı Destek",
    subtitle: "Ekibimiz WhatsApp üzerinden yanıtlar",
    openLabel: "WhatsApp canlı desteği aç",
    closeLabel: "Kapat",
    choose: "Mesajınızı kime iletelim?",
    back: "Geri",
    own: "Kendim yazmak istiyorum...",
    placeholder: "Mesajınızı buraya yazın...",
    send: "WhatsApp'a Git",
    sendLabel: "Mesajı WhatsApp'ta aç",
  },
  en: {
    title: "Live Support",
    subtitle: "Our team replies on WhatsApp",
    openLabel: "Open WhatsApp live support",
    closeLabel: "Close",
    choose: "Who should receive your message?",
    back: "Back",
    own: "I want to write it myself...",
    placeholder: "Write your message here...",
    send: "Go to WhatsApp",
    sendLabel: "Open message in WhatsApp",
  },
} as const;

function whatsappHref(phone: string, text: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function WhatsAppWidget({ lang }: { lang: Locale }) {
  const copy = labels[lang];
  const messages = quickMessages[lang];
  const contacts: Contact[] = getOfficePhones(lang).map((person) => ({
    name: person.name,
    display: person.display,
    phone: person.whatsapp.replace("https://wa.me/", ""),
  }));
  const titleId = useId();
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("contacts");
  const [contact, setContact] = useState<Contact | null>(null);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  function closePanel() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function selectContact(next: Contact) {
    setContact(next);
    setDraft("");
    setStep("messages");
  }

  function goBack() {
    if (step === "compose") {
      setStep("messages");
      return;
    }
    setContact(null);
    setDraft("");
    setStep("contacts");
  }

  function sendCustom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!contact || !text) return;
    window.open(whatsappHref(contact.phone, text), "_blank", "noopener,noreferrer");
  }

  return (
    <div ref={rootRef} className="print:hidden">
      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="false"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 flex w-[min(22.5rem,calc(100vw-3rem))] max-h-[min(34rem,calc(100dvh-11rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/98 shadow-[0_24px_64px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

            <header className="flex items-start justify-between gap-3 border-b border-slate-800 px-4 py-3.5">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="relative grid h-2.5 w-2.5 place-items-center" aria-hidden="true">
                    <span className="absolute inset-0 rounded-full bg-brand-500/50 motion-safe:animate-ping" />
                    <span className="relative h-2 w-2 rounded-full bg-brand-500" />
                  </span>
                  <h2 id={titleId} className="text-sm font-semibold tracking-tight text-white">
                    {copy.title}
                  </h2>
                </div>
                <p className="mt-1 truncate text-xs text-slate-400">{copy.subtitle}</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closePanel}
                aria-label={copy.closeLabel}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-3.5 py-3.5">
              <AnimatePresence mode="wait" initial={false}>
                {step === "contacts" ? (
                  <motion.div
                    key="contacts"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="px-1 pb-2.5 text-xs font-medium tracking-wide text-slate-400 uppercase">
                      {copy.choose}
                    </p>
                    <ul className="space-y-2">
                      {contacts.map((person) => (
                        <li key={person.phone}>
                          <button
                            type="button"
                            onClick={() => selectContact(person)}
                            className="flex w-full items-center gap-3 rounded-xl border border-slate-800 bg-white/[0.03] px-3 py-2.5 text-left transition hover:border-brand-500/60 hover:bg-brand-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30">
                              <User className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-semibold text-white">{person.name}</span>
                              <span className="mt-0.5 block text-xs text-slate-400">{person.display}</span>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}

                {step === "messages" && contact ? (
                  <motion.div
                    key="messages"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <button
                      type="button"
                      onClick={goBack}
                      className="mb-3 inline-flex items-center gap-1 rounded-full px-1 py-1 text-xs font-semibold text-brand-300 transition hover:text-brand-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      {copy.back}
                    </button>
                    <p className="px-1 pb-3 text-xs text-slate-400">
                      <span className="font-semibold text-slate-200">{contact.name}</span>
                      <span className="mx-1.5 text-slate-600">·</span>
                      {contact.display}
                    </p>
                    <div className="space-y-2">
                      {messages.map((message) => (
                        <a
                          key={message}
                          href={whatsappHref(contact.phone, message)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl rounded-bl-md border border-slate-800 bg-slate-800/70 px-3.5 py-3 text-sm leading-relaxed text-slate-100 transition hover:border-brand-500/60 hover:bg-brand-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                        >
                          {message}
                        </a>
                      ))}
                      <button
                        type="button"
                        onClick={() => setStep("compose")}
                        className="block w-full rounded-2xl rounded-bl-md border border-dashed border-brand-500/45 bg-brand-500/5 px-3.5 py-3 text-left text-sm font-medium text-brand-300 transition hover:border-brand-400 hover:bg-brand-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                      >
                        {copy.own}
                      </button>
                    </div>
                  </motion.div>
                ) : null}

                {step === "compose" && contact ? (
                  <motion.form
                    key="compose"
                    onSubmit={sendCustom}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <button
                      type="button"
                      onClick={goBack}
                      className="mb-3 inline-flex items-center gap-1 rounded-full px-1 py-1 text-xs font-semibold text-brand-300 transition hover:text-brand-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      {copy.back}
                    </button>
                    <p className="px-1 pb-3 text-xs text-slate-400">
                      <span className="font-semibold text-slate-200">{contact.name}</span>
                      <span className="mx-1.5 text-slate-600">·</span>
                      {contact.display}
                    </p>
                    <label htmlFor={`${panelId}-draft`} className="sr-only">
                      {copy.placeholder}
                    </label>
                    <textarea
                      id={`${panelId}-draft`}
                      value={draft}
                      onChange={(event) => setDraft(event.target.value)}
                      placeholder={copy.placeholder}
                      rows={4}
                      autoFocus
                      className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/70 px-3.5 py-3 text-sm leading-relaxed text-white outline-none transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-2 focus:ring-brand-500"
                    />
                    <button
                      type="submit"
                      disabled={!draft.trim()}
                      aria-label={copy.sendLabel}
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-navy-950 shadow-[0_0_24px_rgba(0,166,81,0.35)] transition hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      {copy.send}
                    </button>
                  </motion.form>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={copy.openLabel}
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-navy-950 shadow-[0_10px_30px_rgba(0,166,81,0.45)] transition hover:bg-brand-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        {!open ? (
          <span
            className="pointer-events-none absolute inset-0 rounded-full bg-brand-500/45 motion-safe:animate-ping"
            aria-hidden="true"
          />
        ) : null}
        <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  );
}
