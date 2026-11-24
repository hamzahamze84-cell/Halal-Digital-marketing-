import { MessageSquareQuote } from 'lucide-react';
import { TESTIMONIAL_SLOTS } from '../data/agencyData';
import {
  Reveal,
  SectionDivider,
  SectionKicker,
  StaggerGroup,
  StaggerItem,
} from './MotionPrimitives';

interface TestimonialsSectionProps {
  onBookConsultation: () => void;
}

export function TestimonialsSection({ onBookConsultation }: TestimonialsSectionProps) {
  return (
    <>
      <section id="testimonials" className="relative bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <SectionKicker>Client Testimonials</SectionKicker>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B3B2D]"
                style={{ textWrap: 'balance' }}
              >
                Verified Client Endorsements
              </h2>
              <p className="mt-4 text-base text-[#354740] leading-relaxed">
                In keeping with our commitment to honesty and transparency, we never publish fabricated reviews. These
                slots are structured to feature verified feedback from our Ethiopian business partners as projects
                complete.
              </p>
            </div>

            <button
              type="button"
              onClick={onBookConsultation}
              className="self-start lg:self-auto min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[#D4AF37]/65 text-sm font-semibold text-[#0B3B2D] hover:bg-[#D4AF37]/15 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-8px_rgba(212,175,55,0.4)] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Become a Partner Client
            </button>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {TESTIMONIAL_SLOTS.map((slot) => (
              <StaggerItem key={slot.id} className="h-full">
                <div className="h-full rounded-2xl bg-[#F2EFE9]/55 border border-dashed border-[#0B3B2D]/25 hover:border-[#D4AF37]/75 hover:-translate-y-1 hover:shadow-[0_16px_36px_-16px_rgba(11,59,45,0.14)] transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-sm font-semibold text-[#82640C] tabular-nums">
                        {slot.slotNumber}
                      </span>
                      <MessageSquareQuote className="w-5 h-5 text-[#0B3B2D]/45" aria-hidden="true" />
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-[#0B3B2D]">
                      {slot.sectorLabel}
                    </h3>
                    <p className="mt-3 text-sm text-[#4A5C54] leading-relaxed">
                      {slot.placeholderPrompt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#0B3B2D]/12 text-xs text-[#4A5C54]">
                    Client Name &amp; Role · Ready for Verified Feedback
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
