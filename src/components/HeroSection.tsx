import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENCY_CONTACT, HERO_CAPABILITIES } from '../data/agencyData';
import { HeroCommandCenter } from './HeroCommandCenter';
import { AmbientGlow, SectionDivider, StaggerGroup, StaggerItem } from './MotionPrimitives';

export function HeroSection() {

  return (
    <>
      <section
        id="top"
        className="relative overflow-hidden bg-[#FAF9F6] pt-10 pb-16 lg:pt-16 lg:pb-20"
      >
        <AmbientGlow tone="light" position="top-right" />
        <AmbientGlow tone="light" position="top-left" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Balanced 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Proposition & Official CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col justify-between py-2"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#82640C] tracking-wide">
                  <span className="inline-block h-px w-6 bg-[#D4AF37]" aria-hidden="true" />
                  <span>{AGENCY_CONTACT.city}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-[#0B3B2D]">{AGENCY_CONTACT.tagline}</span>
                </div>

                <h1
                  className="mt-5 font-display font-bold tracking-tight text-[#0B3B2D] leading-[1.06]"
                  style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', textWrap: 'balance' }}
                >
                  Your Full-Stack Digital Growth Collective in Ethiopia.
                </h1>

                <p className="mt-6 text-base sm:text-lg text-[#354740] leading-relaxed max-w-xl">
                  An agile, dedicated team of digital specialists helping Ethiopian businesses—from clinics and
                  automotive suppliers to hotels, importers, and real estate brands—scale through custom websites,
                  Google Maps visibility, Facebook &amp; Instagram Ads, video production, and Telegram automation.
                </p>
              </div>

              <div className="mt-8 sm:mt-10">
                <div className="flex flex-wrap items-center gap-3.5">
                  {/* Primary Button: Book a Free Consultation */}
                  <a
                    href={AGENCY_CONTACT.whatsappConsultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg bg-[#0B3B2D] text-[#FAF9F6] text-sm sm:text-base font-semibold border border-[#D4AF37]/40 hover:bg-[#07261D] hover:border-[#D4AF37] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(212,175,55,0.48)] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                    <span>Book a Free Consultation</span>
                  </a>

                  {/* Secondary Button: View Our Work */}
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-lg border border-[#D4AF37] bg-[#FAF9F6]/85 backdrop-blur-sm text-[#0B3B2D] text-sm sm:text-base font-semibold hover:bg-[#D4AF37]/15 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(212,175,55,0.42)] transition-all duration-200 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                  >
                    <span>View Our Work</span>
                    <ArrowRight
                      className="w-4 h-4 text-[#82640C] transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column (Below headline & buttons on mobile): Live-Animated Digital Growth Command Center */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <HeroCommandCenter />
            </motion.div>
          </div>

          {/* Full-Width 5-Column Capability Strip Below Hero Split */}
          <StaggerGroup className="mt-12 lg:mt-16 pt-8 border-t border-[#D4AF37]/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HERO_CAPABILITIES.map((cap) => (
              <StaggerItem key={cap.number}>
                <div className="group flex items-start gap-3 p-3 -m-3 rounded-xl hover:bg-[#F2EFE9]/70 transition-colors duration-200">
                  <span className="font-display text-sm font-semibold text-[#82640C] tabular-nums pt-0.5">
                    {cap.number}.
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-[#0B3B2D] group-hover:text-[#07261D]">
                      {cap.label}
                    </p>
                    <p className="mt-1 text-sm text-[#4A5C54]">{cap.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <SectionDivider variant="light" />
    </>
  );
}
