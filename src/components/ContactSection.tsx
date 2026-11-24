import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Radio,
  Send,
} from 'lucide-react';
import {
  AGENCY_CONTACT,
  buildTelegramUrl,
  buildWhatsAppUrl,
  INQUIRY_OPTIONS,
} from '../data/agencyData';
import { AmbientGlow, Reveal, SectionKicker } from './MotionPrimitives';

interface ContactSectionProps {
  selectedInterest: string;
  onInterestChange: (value: string) => void;
  focusTrigger: number;
}

interface FormState {
  fullName: string;
  businessName: string;
  contactHandle: string;
  interest: string;
  notes: string;
}

export function ContactSection({
  selectedInterest,
  onInterestChange,
  focusTrigger,
}: ContactSectionProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [copiedField, setCopiedField] = useState<'phone' | 'telegram' | 'email' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    businessName: '',
    contactHandle: '',
    interest: selectedInterest,
    notes: '',
  });

  useEffect(() => {
    setFormState((prev) => ({ ...prev, interest: selectedInterest }));
    setSubmitted(false);
  }, [selectedInterest]);

  useEffect(() => {
    if (focusTrigger > 0 && nameInputRef.current) {
      nameInputRef.current.focus({ preventScroll: true });
    }
  }, [focusTrigger]);

  const handleCopy = async (value: string, field: 'phone' | 'telegram' | 'email') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2200);
    } catch {
      setCopiedField(null);
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (formState.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (formState.contactHandle.trim().length < 4) {
      nextErrors.contactHandle = 'Enter a valid phone number, email, or Telegram @username.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const composedMessage = `Assalamu Alaikum Hamza, my name is ${formState.fullName.trim()}${
    formState.businessName.trim() ? ` from ${formState.businessName.trim()}` : ''
  }. I am interested in: ${formState.interest}.${
    formState.notes.trim() ? ` Notes: ${formState.notes.trim()}` : ''
  } Reach me at: ${formState.contactHandle.trim()}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F2EFE9]/60 py-16 sm:py-20 lg:py-24">
      <AmbientGlow tone="light" position="top-left" />
      <AmbientGlow tone="light" position="top-right" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Official Contact Channels */}
          <Reveal className="lg:col-span-5 space-y-8">
            <div>
              <SectionKicker>Contact Us</SectionKicker>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B3B2D]"
                style={{ textWrap: 'balance' }}
              >
                Connect With Us Directly in Addis Ababa
              </h2>
              <p className="mt-4 text-base text-[#354740] leading-relaxed">
                Reach out to Founder <strong className="font-semibold text-[#0B3B2D]">{AGENCY_CONTACT.founderName}</strong>{' '}
                directly on WhatsApp or Telegram, follow our official channel for updates and video samples, or call us
                directly.
              </p>
            </div>

            {/* Official Contact Card */}
            <div className="rounded-2xl bg-[#0B3B2D] text-[#FAF9F6] p-6 sm:p-8 border border-[#D4AF37]/40 shadow-[0_22px_50px_-16px_rgba(7,38,29,0.45)] space-y-5">
              <div className="pb-5 border-b border-white/15">
                <p className="text-xs font-medium text-[#D4AF37]">{AGENCY_CONTACT.founderTitle}</p>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-[#FAF9F6]">
                  {AGENCY_CONTACT.founderName}
                </h3>
                <div className="mt-2.5 flex items-center gap-2 text-sm text-[#DCE6E1]">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                  <span>{AGENCY_CONTACT.city}</span>
                </div>
              </div>

              {/* Direct Phone & WhatsApp Number: +251 92 955 4142 */}
              <div>
                <p className="text-xs font-medium text-[#DCE6E1]">Direct Phone & WhatsApp</p>
                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <a
                    href={AGENCY_CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 font-display text-lg font-semibold text-[#FAF9F6] hover:text-[#D4AF37] transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                    <span>{AGENCY_CONTACT.phoneDisplay}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(AGENCY_CONTACT.phoneDisplay, 'phone')}
                    aria-label="Copy phone number"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[34px] rounded-md border border-white/20 text-xs font-medium text-[#FAF9F6] hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Telegram Handle: @lasteday */}
              <div>
                <p className="text-xs font-medium text-[#DCE6E1]">Direct Telegram Contact</p>
                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <a
                    href={AGENCY_CONTACT.telegramBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[#FAF9F6] hover:text-[#D4AF37] transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                    <span>{AGENCY_CONTACT.telegramHandle}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(AGENCY_CONTACT.telegramHandle, 'telegram')}
                    aria-label="Copy Telegram handle"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[34px] rounded-md border border-white/20 text-xs font-medium text-[#FAF9F6] hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'telegram' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Official Telegram Channel: @HalalDigitalMarketing */}
              <div>
                <p className="text-xs font-medium text-[#DCE6E1]">
                  Official Telegram Channel (Updates & Video Samples)
                </p>
                <div className="mt-1.5">
                  <a
                    href={AGENCY_CONTACT.telegramChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[#D4AF37] hover:text-[#FAF9F6] transition-colors"
                  >
                    <Radio className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{AGENCY_CONTACT.telegramChannelHandle}</span>
                  </a>
                </div>
              </div>

              {/* Business Email */}
              <div>
                <p className="text-xs font-medium text-[#DCE6E1]">Business Email</p>
                <div className="mt-1.5 flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${AGENCY_CONTACT.emailPlaceholder}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#FAF9F6] hover:text-[#D4AF37] transition-colors truncate"
                  >
                    <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                    <span className="truncate">{AGENCY_CONTACT.emailPlaceholder}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(AGENCY_CONTACT.emailPlaceholder, 'email')}
                    aria-label="Copy business email"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[34px] rounded-md border border-white/20 text-xs font-medium text-[#FAF9F6] hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  href={AGENCY_CONTACT.phoneHref}
                  className="w-full min-h-[54px] flex items-center justify-between gap-4 px-5 py-3.5 rounded-xl bg-[#07261D] border border-[#D4AF37] text-[#FAF9F6] hover:bg-[#D4AF37] hover:text-[#0B3B2D] group transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3B2D]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 group-hover:bg-[#0B3B2D]/15 flex items-center justify-center shrink-0">
                      <Phone
                        className="w-4 h-4 text-[#D4AF37] group-hover:text-[#0B3B2D]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-left">
                      <span className="block text-sm font-bold leading-tight">Call Us Directly</span>
                      <span className="block text-xs opacity-85 tabular-nums mt-0.5">
                        {AGENCY_CONTACT.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold whitespace-nowrap shrink-0">Tap to Call →</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={AGENCY_CONTACT.whatsappConsultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#D4AF37] text-[#0B3B2D] text-sm font-semibold hover:bg-[#E2C04B] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3B2D]"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>WhatsApp Chat</span>
                  </a>

                  <a
                    href={AGENCY_CONTACT.telegramBaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/25 bg-white/5 text-[#FAF9F6] text-sm font-semibold hover:bg-white/15 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF9F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B3B2D]"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                    <span>Telegram DM</span>
                  </a>
                </div>

                <a
                  href={AGENCY_CONTACT.telegramChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-semibold hover:bg-[#D4AF37]/10 transition-colors whitespace-nowrap"
                >
                  <Radio className="w-4 h-4" aria-hidden="true" />
                  <span>Join Our Telegram Channel</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Book Free Consultation Form */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#0B3B2D]/15 hover:border-[#D4AF37]/50 shadow-[0_18px_45px_-20px_rgba(11,59,45,0.12)] transition-colors duration-200 p-6 sm:p-8 lg:p-10">
              <div className="pb-6 border-b border-[#0B3B2D]/10">
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#0B3B2D]">
                  Book a Free Consultation
                </h3>
                <p className="mt-1.5 text-sm text-[#4A5C54]">
                  Tell us about your Ethiopian business and goals—we will prepare a clear, tailored roadmap.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0B3B2D] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h4 className="font-display text-xl font-bold text-[#0B3B2D]">
                        Consultation Inquiry Ready
                      </h4>
                      <p className="mt-1 text-sm text-[#354740] leading-relaxed">
                        Thank you, <span className="font-semibold">{formState.fullName}</span>. Your brief for{' '}
                        <span className="font-semibold">{formState.interest}</span> is ready to send via WhatsApp or
                        Telegram DM ({AGENCY_CONTACT.telegramHandle}) for immediate response.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#FAF9F6] border border-[#0B3B2D]/12 p-4 text-sm text-[#24352E] space-y-1.5">
                    <p>
                      <span className="font-semibold text-[#0B3B2D]">Interest:</span> {formState.interest}
                    </p>
                    {formState.businessName && (
                      <p>
                        <span className="font-semibold text-[#0B3B2D]">Business:</span> {formState.businessName}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-[#0B3B2D]">Contact:</span> {formState.contactHandle}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={buildWhatsAppUrl(composedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0B3B2D] text-[#FAF9F6] text-sm font-semibold hover:bg-[#07261D] transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={buildTelegramUrl(composedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#0B3B2D]/20 text-[#0B3B2D] text-sm font-semibold hover:bg-[#0B3B2D]/5 transition-colors whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send to {AGENCY_CONTACT.telegramHandle}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="min-h-[48px] inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-[#4A5C54] hover:text-[#0B3B2D] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="consultation-full-name"
                        className="block text-sm font-semibold text-[#0B3B2D] mb-1.5"
                      >
                        Full Name <span className="text-[#82640C]">*</span>
                      </label>
                      <input
                        ref={nameInputRef}
                        id="consultation-full-name"
                        type="text"
                        required
                        value={formState.fullName}
                        onChange={(e) => {
                          setFormState((prev) => ({ ...prev, fullName: e.target.value }));
                          if (errors.fullName) {
                            setErrors((prev) => ({ ...prev, fullName: undefined }));
                          }
                        }}
                        placeholder="Your full name"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] border text-sm text-[#111C18] placeholder:text-[#6B7A73] focus:outline-none focus:ring-2 focus:ring-[#0B3B2D] ${
                          errors.fullName ? 'border-red-600' : 'border-[#0B3B2D]/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="consultation-business-name"
                        className="block text-sm font-semibold text-[#0B3B2D] mb-1.5"
                      >
                        Business or Organization
                      </label>
                      <input
                        id="consultation-business-name"
                        type="text"
                        value={formState.businessName}
                        onChange={(e) =>
                          setFormState((prev) => ({ ...prev, businessName: e.target.value }))
                        }
                        placeholder="Clinic, company, hotel, or brand"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] border border-[#0B3B2D]/20 text-sm text-[#111C18] placeholder:text-[#6B7A73] focus:outline-none focus:ring-2 focus:ring-[#0B3B2D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="consultation-contact"
                        className="block text-sm font-semibold text-[#0B3B2D] mb-1.5"
                      >
                        Phone, WhatsApp, or Telegram <span className="text-[#82640C]">*</span>
                      </label>
                      <input
                        id="consultation-contact"
                        type="text"
                        required
                        value={formState.contactHandle}
                        onChange={(e) => {
                          setFormState((prev) => ({ ...prev, contactHandle: e.target.value }));
                          if (errors.contactHandle) {
                            setErrors((prev) => ({ ...prev, contactHandle: undefined }));
                          }
                        }}
                        placeholder="+251 9XX XXX XXX or @username"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] border text-sm text-[#111C18] placeholder:text-[#6B7A73] focus:outline-none focus:ring-2 focus:ring-[#0B3B2D] ${
                          errors.contactHandle ? 'border-red-600' : 'border-[#0B3B2D]/20'
                        }`}
                      />
                      {errors.contactHandle && (
                        <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                          {errors.contactHandle}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="consultation-interest"
                        className="block text-sm font-semibold text-[#0B3B2D] mb-1.5"
                      >
                        Service or Package
                      </label>
                      <select
                        id="consultation-interest"
                        value={formState.interest}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormState((prev) => ({ ...prev, interest: val }));
                          onInterestChange(val);
                        }}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] border border-[#0B3B2D]/20 text-sm text-[#111C18] focus:outline-none focus:ring-2 focus:ring-[#0B3B2D]"
                      >
                        {!INQUIRY_OPTIONS.includes(formState.interest) && (
                          <option value={formState.interest}>{formState.interest}</option>
                        )}
                        {INQUIRY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="consultation-notes"
                      className="block text-sm font-semibold text-[#0B3B2D] mb-1.5"
                    >
                      Project Details (Optional)
                    </label>
                    <textarea
                      id="consultation-notes"
                      rows={3}
                      value={formState.notes}
                      onChange={(e) => setFormState((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Share your target industry, goals, or timeline in Addis Ababa."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF9F6] border border-[#0B3B2D]/20 text-sm text-[#111C18] placeholder:text-[#6B7A73] focus:outline-none focus:ring-2 focus:ring-[#0B3B2D]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      type="submit"
                      className="min-h-[48px] inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0B3B2D] text-[#FAF9F6] text-sm font-semibold border border-[#D4AF37]/35 hover:bg-[#07261D] hover:border-[#D4AF37] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.45)] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                    >
                      Submit Consultation Request
                    </button>
                    <p className="text-xs text-[#4A5C54]">
                      Direct response via {AGENCY_CONTACT.phoneDisplay} or {AGENCY_CONTACT.telegramHandle}.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
