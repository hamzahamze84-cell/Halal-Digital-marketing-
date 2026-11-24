import { useEffect, useState } from 'react';
import { Check, MessageCircle, Send, ShieldCheck, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { AGENCY_CONTACT, SERVICE_PACKAGES, ServicePackage } from '../data/agencyData';
import {
  AmbientGlow,
  Reveal,
  SectionDivider,
  SectionKicker,
  StaggerGroup,
  StaggerItem,
} from './MotionPrimitives';

export function PackagesSection() {
  const [selectedQuotePackage, setSelectedQuotePackage] = useState<ServicePackage | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedQuotePackage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <section id="packages" className="relative overflow-hidden bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <AmbientGlow tone="light" position="center" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <SectionKicker>Service Packages</SectionKicker>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B3B2D]"
              style={{ textWrap: 'balance' }}
            >
              Tailored Growth Packages
            </h2>
            <p className="mt-4 text-base text-[#354740] leading-relaxed">
              Whether you run a clinic, import business, retail showroom, hospitality venue, or service company,
              choose a complete digital growth tier tailored to your business goals and scope.
            </p>
          </Reveal>

          {/* 3-Tier Custom Quote Grid */}
          <StaggerGroup className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {SERVICE_PACKAGES.map((pkg) => {
              const isFeatured = Boolean(pkg.featured);

              return (
                <StaggerItem key={pkg.id} className="h-full">
                  <div
                    className={`relative flex flex-col justify-between h-full rounded-2xl p-6 sm:p-8 transition-all duration-200 ${
                      isFeatured
                        ? 'bg-[#0B3B2D] text-[#FAF9F6] border-2 border-[#D4AF37] shadow-[0_20px_50px_-14px_rgba(212,175,55,0.48)] hover:shadow-[0_26px_58px_-12px_rgba(212,175,55,0.62)] lg:-translate-y-2 hover:lg:-translate-y-3'
                        : 'bg-[#FFFFFF] text-[#111C18] border border-[#0B3B2D]/15 hover:border-[#D4AF37]/75 hover:-translate-y-1 hover:shadow-[0_18px_42px_-16px_rgba(11,59,45,0.18)]'
                    }`}
                  >
                    <div>
                      {pkg.highlightTag && (
                        <div className="mb-3">
                          <span className="font-display text-xs font-bold tracking-widest text-[#D4AF37]">
                            {pkg.highlightTag}
                          </span>
                        </div>
                      )}

                      <h3
                        className={`font-display text-2xl font-bold tracking-tight ${
                          isFeatured ? 'text-[#FAF9F6]' : 'text-[#0B3B2D]'
                        }`}
                      >
                        {pkg.name}
                      </h3>

                      <p
                        className={`mt-1 text-sm font-medium ${
                          isFeatured ? 'text-[#D4AF37]' : 'text-[#82640C]'
                        }`}
                      >
                        {pkg.subtitle}
                      </p>

                      {/* Clean Custom Pricing Label */}
                      <div className="mt-5">
                        <p
                          className={`font-display text-lg sm:text-xl font-semibold tracking-tight leading-snug ${
                            isFeatured ? 'text-[#D4AF37]' : 'text-[#0B3B2D]'
                          }`}
                        >
                          {pkg.pricingLabel}
                        </p>
                      </div>

                      <div
                        className={`my-6 border-t ${
                          isFeatured ? 'border-white/15' : 'border-[#0B3B2D]/10'
                        }`}
                      />

                      <ul className="space-y-3.5">
                        {pkg.deliverables.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-2.5 text-sm leading-snug ${
                              isFeatured ? 'text-[#FAF9F6]/95' : 'text-[#24352E]'
                            }`}
                          >
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isFeatured ? 'text-[#D4AF37]' : 'text-[#0B3B2D]'
                              }`}
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4">
                      <button
                        type="button"
                        onClick={() => setSelectedQuotePackage(pkg)}
                        className={`w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          isFeatured
                            ? 'bg-[#D4AF37] text-[#0B3B2D] hover:bg-[#E2C04B] hover:shadow-[0_12px_28px_-8px_rgba(212,175,55,0.65)] focus-visible:ring-[#D4AF37] focus-visible:ring-offset-[#0B3B2D]'
                            : 'bg-[#0B3B2D] text-[#FAF9F6] border border-[#D4AF37]/30 hover:bg-[#07261D] hover:border-[#D4AF37] hover:shadow-[0_12px_26px_-8px_rgba(212,175,55,0.4)] focus-visible:ring-[#0B3B2D]'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>{pkg.ctaLabel}</span>
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>

          {/* Bottom Reassuring Halal & Transparent Pricing Note */}
          <Reveal delay={0.12}>
            <div className="mt-10 rounded-2xl bg-[#F2EFE9]/85 border border-[#D4AF37]/35 p-6 sm:p-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B3B2D] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <p className="text-sm sm:text-base text-[#1E2E27] leading-relaxed">
                <strong className="font-semibold text-[#0B3B2D]">100% Halal &amp; Transparent Pricing:</strong>{' '}
                Tailored for any business size with zero hidden fees. All projects require a 50% advance payment to
                begin, with the remaining 50% paid only after full delivery and your complete satisfaction.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Custom Quote Channel Chooser Modal (WhatsApp 0929554142 or Telegram @lasteday) */}
        <AnimatePresence>
          {selectedQuotePackage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="custom-quote-modal-title"
              onClick={() => setSelectedQuotePackage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#041711]/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg rounded-2xl bg-[#0B3B2D] text-[#FAF9F6] border border-[#D4AF37]/50 shadow-[0_28px_70px_-15px_rgba(0,0,0,0.75)] p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/15">
                  <div>
                    <p className="text-xs font-semibold text-[#D4AF37]">
                      {selectedQuotePackage.pricingLabel}
                    </p>
                    <h3
                      id="custom-quote-modal-title"
                      className="mt-1 font-display text-2xl font-bold tracking-tight text-white"
                    >
                      Request Custom Quote: {selectedQuotePackage.name}
                    </h3>
                  </div>

                  <button
                    type="button"
                    aria-label="Close quote modal"
                    onClick={() => setSelectedQuotePackage(null)}
                    className="w-9 h-9 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-[#FAF9F6] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer shrink-0"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  <p className="text-sm text-[#DCE6E1] leading-relaxed">
                    Choose your preferred channel below—your inquiry message for the{' '}
                    <span className="font-semibold text-[#D4AF37]">{selectedQuotePackage.name}</span> is
                    automatically pre-filled:
                  </p>

                  <div className="rounded-xl bg-[#07261D] border border-[#D4AF37]/30 p-4 text-xs sm:text-sm text-[#FAF9F6]/90 leading-relaxed italic">
                    “{selectedQuotePackage.inquiryMessage}”
                  </div>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={selectedQuotePackage.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSelectedQuotePackage(null)}
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#D4AF37] text-[#0B3B2D] text-sm font-semibold hover:bg-[#E2C04B] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-8px_rgba(212,175,55,0.65)] transition-all duration-200 whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>WhatsApp (0929 55 41 42)</span>
                    </a>

                    <a
                      href={selectedQuotePackage.telegramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSelectedQuotePackage(null)}
                      className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#07261D] text-[#FAF9F6] border border-[#D4AF37]/60 text-sm font-semibold hover:bg-[#07261D]/80 hover:border-[#D4AF37] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
                    >
                      <Send className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                      <span>Telegram ({AGENCY_CONTACT.telegramHandle})</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <SectionDivider variant="light" />
    </>
  );
}
