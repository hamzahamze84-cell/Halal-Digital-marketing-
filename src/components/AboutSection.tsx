import { Check } from 'lucide-react';
import { AGENCY_CONTACT, TARGET_INDUSTRIES } from '../data/agencyData';
import { AmbientGlow, Reveal, SectionDivider, SectionKicker } from './MotionPrimitives';

export function AboutSection() {
  return (
    <>
      <section id="about" className="relative overflow-hidden bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <AmbientGlow tone="light" position="top-left" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Who We Are & Philosophy */}
            <Reveal className="lg:col-span-6">
              <SectionKicker>About Us</SectionKicker>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B3B2D]"
                style={{ textWrap: 'balance' }}
              >
                An Ethical, Agile Digital Growth Collective Built for Ethiopia
              </h2>
              <p className="mt-5 text-base text-[#354740] leading-relaxed">
                Based in {AGENCY_CONTACT.city},{' '}
                <strong className="font-semibold text-[#0B3B2D]">Halal Digital Marketing</strong> is a specialized
                collective of digital practitioners—founded to bridge the gap between world-class digital execution and
                honest, accountable business relationships in Ethiopia.
              </p>
              <p className="mt-4 text-base text-[#354740] leading-relaxed">
                Too many local companies get stuck choosing between disconnected solo contractors or slow, bloated
                traditional agencies. As a tight-knit, agile collective, we unite strategy, web engineering, Google Maps
                visibility, video production, and Telegram automation under one direct team.
              </p>

              {/* Mission & Vision separated by subtle hairlines (no cards-within-cards) */}
              <div className="mt-8 border-t border-[#D4AF37]/30 divide-y divide-[#0B3B2D]/12">
                <div className="py-5">
                  <h3 className="font-display text-lg font-bold text-[#0B3B2D]">Our Mission</h3>
                  <p className="mt-1.5 text-sm text-[#354740] leading-relaxed">
                    To help Ethiopian businesses earn lasting customer trust and steady commercial growth through
                    ethical marketing, modern web engineering, and high-craft visual storytelling.
                  </p>
                </div>
                <div className="py-5">
                  <h3 className="font-display text-lg font-bold text-[#0B3B2D]">Our Vision</h3>
                  <p className="mt-1.5 text-sm text-[#354740] leading-relaxed">
                    To set the benchmark in Addis Ababa and across Ethiopia for agile, full-stack digital collectives
                    that operate with complete Amanah (trust), clarity, and measurable accountability.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right: Target Industries We Serve */}
            <Reveal delay={0.08} className="lg:col-span-6">
              <div className="rounded-2xl bg-[#F2EFE9]/80 border border-[#D4AF37]/25 p-6 sm:p-8 lg:p-10 hover:border-[#D4AF37]/55 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(11,59,45,0.14)] transition-all duration-200">
                <p className="text-xs font-semibold text-[#82640C] tracking-wide">Who We Partner With</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B3B2D]">
                  Tailored for Ambitious Ethiopian Sectors
                </h3>
                <p className="mt-3 text-sm text-[#354740] leading-relaxed">
                  Whether patients are searching Google Maps for a trusted clinic, fleet buyers are sourcing spare
                  parts, or guests are booking hospitality experiences in Addis Ababa, we tailor every system to your
                  real buyer journey.
                </p>

                <div className="mt-6 pt-6 border-t border-[#0B3B2D]/12 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {TARGET_INDUSTRIES.map((industry) => (
                    <div key={industry} className="flex items-start gap-2.5 text-sm text-[#1E2E27]">
                      <Check className="w-4 h-4 text-[#0B3B2D] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-medium">{industry}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#0B3B2D]/12 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-[#0B3B2D] tracking-wide">
                    {AGENCY_CONTACT.tagline}
                  </span>
                  <a
                    href="#services"
                    className="text-sm font-semibold text-[#0B3B2D] hover:text-[#82640C] transition-colors whitespace-nowrap"
                  >
                    Explore our 10 core services →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <SectionDivider variant="light" />
    </>
  );
}
