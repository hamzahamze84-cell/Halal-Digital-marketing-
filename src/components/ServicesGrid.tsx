import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { CORE_SERVICES, ServiceItem } from '../data/agencyData';
import { ResilientVideo } from './ResilientVideo';
import {
  AmbientGlow,
  Reveal,
  SectionDivider,
  SectionKicker,
  StaggerGroup,
  StaggerItem,
} from './MotionPrimitives';

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

type CategoryFilter = 'All' | 'Web & Search' | 'Video & Content' | 'Automation & Brand' | 'Paid Ads';

export function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const visibleServices = CORE_SERVICES.filter((service) => {
    if (activeCategory === 'All') return true;
    return service.category === activeCategory;
  });

  return (
    <>
      <section id="services" className="relative overflow-hidden bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <AmbientGlow tone="light" position="top-right" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header + Category Filter */}
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <SectionKicker>Our Services</SectionKicker>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B3B2D]"
                style={{ textWrap: 'balance' }}
              >
                Ten Specialized Capabilities Under One Ethical Roof
              </h2>
              <p className="mt-4 text-base text-[#354740] leading-relaxed">
                From custom website architecture, Google Maps dominance, and ethical Meta Ads to commercial video
                shoots, short-form editing, and Telegram automation bots.
              </p>
            </div>

            <div
              role="group"
              aria-label="Filter services by discipline"
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#F2EFE9] border border-[#0B3B2D]/12 self-start lg:self-auto"
            >
              {(['All', 'Web & Search', 'Video & Content', 'Paid Ads', 'Automation & Brand'] as const).map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-3 py-2 min-h-[36px] rounded-md text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B3B2D] text-[#FAF9F6] shadow-sm'
                        : 'text-[#354740] hover:text-[#0B3B2D]'
                    }`}
                  >
                    {cat === 'All' ? 'All Services (10)' : cat}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Service Cards Grid */}
          <StaggerGroup
            key={activeCategory}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            {visibleServices.map((service) => (
              <StaggerItem key={service.id} className="h-full">
                <ServiceCard service={service} onSelect={onSelectService} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <SectionDivider variant="light" />
    </>
  );
}

function ServiceCard({
  service,
  onSelect,
}: {
  service: ServiceItem;
  onSelect: (serviceTitle: string) => void;
}) {
  return (
    <article className="group flex flex-col justify-between h-full rounded-2xl p-6 sm:p-8 bg-[#0B3B2D] text-[#FAF9F6] border border-[#D4AF37]/45 hover:border-[#D4AF37] hover:-translate-y-1 hover:shadow-[0_24px_54px_-16px_rgba(212,175,55,0.38)] transition-all duration-200">
      <div>
        {(service.videoSrc || service.imageSrc) && (
          <div className="relative mb-5 overflow-hidden rounded-xl border border-[#D4AF37]/35 bg-[#07261D] aspect-[16/10]">
            <ResilientVideo
              videoSrc={service.videoSrc}
              posterSrc={service.imageSrc}
              alt={service.imageAlt || service.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              fallbackLabel={service.title}
            />
            {/* Dark Emerald Gradient Veil */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#07261D]/85 via-[#0B3B2D]/20 to-transparent pointer-events-none"
            />
            {/* Frosted Glassmorphism Bar Over Moving Video */}
            <div className="absolute inset-x-0 bottom-0 px-4 py-2.5 bg-[#07261D]/55 backdrop-blur-md border-t border-[#D4AF37]/30 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-[#D4AF37]">{service.category}</span>
              <span className="font-display text-xs font-semibold text-white/85 tabular-nums">
                {service.number}
              </span>
            </div>
          </div>
        )}

        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-sm font-semibold text-[#D4AF37] tabular-nums">
            {service.number}
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
            {service.title}
          </h3>
        </div>

        <p className="mt-3 text-sm text-[#E3EBE7] leading-relaxed">{service.summary}</p>

        <ul className="mt-5 space-y-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
              <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onSelect(service.title)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4AF37] hover:text-white whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
        >
          <span>{service.ctaLabel}</span>
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
