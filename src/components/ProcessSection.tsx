import { PROCESS_STEPS } from '../data/agencyData';
import {
  Reveal,
  SectionDivider,
  SectionKicker,
  StaggerGroup,
  StaggerItem,
} from './MotionPrimitives';

export function ProcessSection() {
  return (
    <>
      <section id="process" className="relative bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <SectionKicker>Our Process</SectionKicker>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B3B2D]"
              style={{ textWrap: 'balance' }}
            >
              A Disciplined Six-Stage Workflow From Discovery to Scale
            </h2>
            <p className="mt-4 text-base text-[#354740] leading-relaxed">
              Every engagement follows a clear, transparent sequence so you always know what is being researched,
              filmed, built, and launched.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.number} className="h-full">
                <div className="h-full rounded-2xl bg-[#F2EFE9]/75 border border-[#0B3B2D]/12 hover:border-[#D4AF37]/70 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(11,59,45,0.16)] transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="font-display text-2xl font-bold text-[#82640C] tabular-nums">
                      {step.number}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[#0B3B2D]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#354740] leading-relaxed">{step.description}</p>
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
