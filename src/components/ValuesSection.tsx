import { Scale, ShieldCheck, Users } from 'lucide-react';
import { AGENCY_CONTACT, AGENCY_VALUES, ValuePillar } from '../data/agencyData';
import { ResilientImage } from './ResilientImage';
import {
  AmbientGlow,
  Reveal,
  SectionDivider,
  SectionKicker,
  StaggerGroup,
  StaggerItem,
} from './MotionPrimitives';

function ValueIcon({ icon }: { icon: ValuePillar['icon'] }) {
  switch (icon) {
    case 'amanah':
      return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />;
    case 'shura':
      return <Users className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />;
    case 'adl':
      return <Scale className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />;
  }
}

export function ValuesSection() {
  return (
    <>
      <section id="values" className="relative overflow-hidden bg-[#0B3B2D] text-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <AmbientGlow tone="dark" position="top-right" />
        <AmbientGlow tone="dark" position="top-left" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Halal Business Ethics & Studio Visual */}
            <Reveal className="lg:col-span-5">
              <SectionKicker tone="dark">Our Values · Halal Business Ethics</SectionKicker>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9F6]"
                style={{ textWrap: 'balance' }}
              >
                Three Core Islamic Principles Behind Every Campaign
              </h2>
              <p className="mt-4 text-base text-[#DCE6E1] leading-relaxed">
                Every strategy, website, and campaign is guided by timeless Islamic commercial ethics and our
                collective standard: <span className="font-semibold text-[#D4AF37]">{AGENCY_CONTACT.tagline}</span>.
              </p>

              <div className="group mt-8 overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#07261D] aspect-[4/3] shadow-[0_22px_50px_-16px_rgba(0,0,0,0.55)]">
                <ResilientImage
                  src="/src/assets/images/sunlit_executive_boardroom_1795500388471.jpg"
                  alt="Handsome young Ethiopian businessman with neat curly hair, well-groomed beard, and a tailored charcoal suit collaborating with an Ethiopian Muslim businesswoman wearing an elegant beige hijab and emerald green blazer in a modern sunlit executive boardroom"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fallbackLabel="Halal Business Ethics"
                />
              </div>
            </Reveal>

            {/* Right Column: Amanah, Shura, Adl with Clean Icons */}
            <StaggerGroup className="lg:col-span-7 divide-y divide-white/15 border-t border-b border-[#D4AF37]/35">
              {AGENCY_VALUES.map((pillar) => (
                <StaggerItem key={pillar.number}>
                  <div className="py-8 first:pt-6 last:pb-6 group">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#07261D] border border-[#D4AF37]/35 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-200 flex items-center justify-center shrink-0 mt-0.5">
                        <ValueIcon icon={pillar.icon} />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                          <h3 className="font-display text-2xl font-bold tracking-tight text-[#FAF9F6]">
                            {pillar.title}
                          </h3>
                          <span className="text-sm font-semibold text-[#D4AF37]">
                            ({pillar.subtitle})
                          </span>
                        </div>
                        <p className="mt-2.5 text-base text-[#DCE6E1] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>
      <SectionDivider variant="dark" />
    </>
  );
}
