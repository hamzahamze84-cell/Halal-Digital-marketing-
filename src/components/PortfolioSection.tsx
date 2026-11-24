import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  Film,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  Send,
  Wrench,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  buildTelegramUrl,
  buildWhatsAppUrl,
  PORTFOLIO_PROJECTS,
  PortfolioProject,
} from '../data/agencyData';
import { ResilientImage } from './ResilientImage';
import {
  AmbientGlow,
  Reveal,
  SectionDivider,
  SectionKicker,
  StaggerGroup,
  StaggerItem,
} from './MotionPrimitives';

interface PortfolioSectionProps {
  onDiscussProject: (contextLabel: string) => void;
}

type StatusFilter = 'All' | 'Featured Client' | 'Concept/Demo';

export function PortfolioSection({ onDiscussProject }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<StatusFilter>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    if (filter === 'All') return true;
    return project.status === filter;
  });

  return (
    <>
      <section id="portfolio" className="relative overflow-hidden bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <AmbientGlow tone="light" position="top-left" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + Filter Controls */}
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <SectionKicker>Our Portfolio</SectionKicker>
              <h2
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B3B2D]"
                style={{ textWrap: 'balance' }}
              >
                Our Featured Work &amp; Live Demos
              </h2>
              <p className="mt-4 text-base text-[#354740] leading-relaxed">
                Explore our featured client work for Alif Medium Clinic alongside our interactive Sino Truck Parts
                Hub and Modern Business &amp; Real Estate Showcase demos.
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div
              role="group"
              aria-label="Filter portfolio projects by stage"
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#F2EFE9] border border-[#0B3B2D]/12 self-start lg:self-auto"
            >
              {(['All', 'Featured Client', 'Concept/Demo'] as const).map((tab) => {
                const active = filter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilter(tab)}
                    aria-pressed={active}
                    className={`px-3.5 py-2 min-h-[36px] rounded-md text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#0B3B2D] text-[#FAF9F6] shadow-sm'
                        : 'text-[#354740] hover:text-[#0B3B2D]'
                    }`}
                  >
                    {tab === 'All' ? `All Projects (${PORTFOLIO_PROJECTS.length})` : tab}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* 3-Project Showcase Grid (Featured Client Card spans full row above 2 Concept Cards) */}
          <StaggerGroup
            key={filter}
            className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            {filteredProjects.map((project) => (
              <StaggerItem
                key={project.id}
                className={`h-full ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <PortfolioCard
                  project={project}
                  onAction={() => setActiveModalProject(project)}
                  onInquire={() => onDiscussProject(`Inquiry about: ${project.title}`)}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Interactive Case Study / Live Preview Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07261D]/75 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="portfolio-modal-title"
              onClick={() => setActiveModalProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 12 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#FAF9F6] text-[#111C18] border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#0B3B2D]/12">
                  <div>
                    <p className="text-xs font-semibold text-[#82640C]">
                      {activeModalProject.category} · {activeModalProject.status}
                    </p>
                    <h3
                      id="portfolio-modal-title"
                      className="mt-1 font-display text-2xl font-bold tracking-tight text-[#0B3B2D]"
                    >
                      {activeModalProject.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    aria-label="Close project preview"
                    onClick={() => setActiveModalProject(null)}
                    className="w-10 h-10 rounded-lg border border-[#0B3B2D]/15 flex items-center justify-center text-[#0B3B2D] hover:bg-[#0B3B2D]/5 cursor-pointer shrink-0"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>

                {activeModalProject.actionType === 'case-study' ? (
                  <div className="mt-6 space-y-6">
                    {activeModalProject.serviceTag && (
                      <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#0B3B2D]/6 border border-[#D4AF37]/45 text-xs font-semibold text-[#0B3B2D]">
                        {activeModalProject.serviceTag}
                      </div>
                    )}

                    <p className="text-sm sm:text-base text-[#354740] leading-relaxed">
                      {activeModalProject.description}
                    </p>

                    <div className="rounded-xl bg-[#FFFFFF] border border-[#0B3B2D]/12 p-5 space-y-3">
                      <h4 className="font-display text-base font-bold text-[#0B3B2D]">
                        Featured Deliverables &amp; Growth Scope
                      </h4>
                      <ul className="space-y-2.5">
                        {activeModalProject.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-[#24352E]">
                            <Check className="w-4 h-4 text-[#0B3B2D] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {activeModalProject.externalLinks && activeModalProject.externalLinks.length > 0 && (
                      <div className="flex flex-wrap items-center gap-3">
                        {activeModalProject.externalLinks.map((extLink) => (
                          <a
                            key={extLink.label}
                            href={extLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                              extLink.kind === 'website'
                                ? 'bg-[#D4AF37] text-[#0B3B2D] hover:bg-[#E2C04B]'
                                : 'bg-[#FFFFFF] text-[#0B3B2D] border border-[#0B3B2D]/20 hover:border-[#D4AF37]'
                            }`}
                          >
                            {extLink.kind === 'tiktok' ? (
                              <Film className="w-4 h-4 shrink-0" aria-hidden="true" />
                            ) : (
                              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                            )}
                            <span>{extLink.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mt-6 space-y-5">
                    {/* Interactive Concept Preview */}
                    <div className="rounded-xl bg-[#0B3B2D] text-[#FAF9F6] p-5 border border-[#D4AF37]/35">
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/15">
                        <div>
                          <p className="text-xs font-medium text-[#D4AF37]">Interactive Portal Concept</p>
                          <p className="font-display text-lg font-bold text-[#FAF9F6]">
                            {activeModalProject.id === 'modern-business-real-estate-showcase'
                              ? 'Modern Business & Real Estate Portal'
                              : 'Sino Truck Parts Hub — E-Catalog'}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#DCE6E1]">
                          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                          {activeModalProject.id === 'modern-business-real-estate-showcase'
                            ? 'Addis Ababa Property & Corporate'
                            : 'Addis Ababa Distribution Hub'}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {(activeModalProject.id === 'modern-business-real-estate-showcase'
                          ? [
                              {
                                title: 'Interactive Unit Showcase',
                                spec: 'Filterable Commercial & Residential Listings',
                              },
                              {
                                title: 'Bilingual Trust Framing',
                                spec: 'Verified Specifications, Floor Plans & Pricing',
                              },
                              {
                                title: 'Instant Viewing Funnel',
                                spec: 'One-Tap Telegram & WhatsApp Consultation Booking',
                              },
                            ]
                          : [
                              {
                                title: 'Engine & Drivetrain',
                                spec: 'HOWO / Sinotruk Pistons, Filters & Clutches',
                              },
                              {
                                title: 'Braking & Chassis',
                                spec: 'Heavy-Duty Brake Drums, Springs & Axles',
                              },
                              {
                                title: 'Electrical & Cabin',
                                spec: 'Alternators, Sensors & Cabin Mirrors',
                              },
                            ]
                        ).map((cat) => (
                          <div
                            key={cat.title}
                            className="rounded-lg bg-[#07261D] border border-white/10 p-3.5"
                          >
                            <Wrench className="w-4 h-4 text-[#D4AF37] mb-2" aria-hidden="true" />
                            <p className="font-display text-sm font-semibold text-[#FAF9F6]">{cat.title}</p>
                            <p className="mt-1 text-xs text-[#DCE6E1] leading-snug">{cat.spec}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {activeModalProject.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#24352E]">
                          <Check className="w-4 h-4 text-[#0B3B2D] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 pt-5 border-t border-[#0B3B2D]/12 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={buildWhatsAppUrl(
                        `Assalamu Alaikum, I would like to discuss a project similar to "${activeModalProject.title}".`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B3B2D] text-[#FAF9F6] text-sm font-semibold hover:bg-[#07261D] transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                      <span>Discuss via WhatsApp</span>
                    </a>
                    <a
                      href={buildTelegramUrl(
                        `Assalamu Alaikum, I would like to discuss a project similar to "${activeModalProject.title}".`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#0B3B2D]/20 text-[#0B3B2D] text-sm font-semibold hover:bg-[#0B3B2D]/5 transition-colors whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Discuss via Telegram</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="text-sm font-semibold text-[#4A5C54] hover:text-[#0B3B2D] cursor-pointer"
                  >
                    Close
                  </button>
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

function PortfolioCard({
  project,
  onAction,
  onInquire,
}: {
  project: PortfolioProject;
  onAction: () => void;
  onInquire: () => void;
}) {
  const hasExternalLinks = Boolean(project.externalLinks && project.externalLinks.length > 0);
  const isFeatured = Boolean(project.featured);

  return (
    <article
      className={`group flex flex-col justify-between h-full rounded-2xl bg-[#FFFFFF] border transition-all duration-200 overflow-hidden ${
        isFeatured
          ? 'lg:grid lg:grid-cols-12 border-[#D4AF37]/65 shadow-[0_18px_46px_-18px_rgba(212,175,55,0.28)] hover:border-[#D4AF37] hover:-translate-y-1 hover:shadow-[0_24px_52px_-16px_rgba(212,175,55,0.38)]'
          : 'border-[#0B3B2D]/12 hover:border-[#D4AF37]/75 hover:-translate-y-1 hover:shadow-[0_22px_48px_-16px_rgba(11,59,45,0.2)]'
      }`}
    >
      {/* Project Visual */}
      <div
        className={`relative bg-[#07261D] overflow-hidden ${
          isFeatured
            ? 'lg:col-span-5 min-h-[340px] lg:min-h-[400px] border-b lg:border-b-0 lg:border-r border-[#0B3B2D]/10'
            : 'aspect-[16/10] w-full border-b border-[#0B3B2D]/10'
        }`}
      >
        {project.imageSrc ? (
          project.isScreenshotPreview ? (
            <div className="w-full h-full flex items-center justify-center p-5 sm:p-7 bg-gradient-to-br from-[#07261D] via-[#0B3B2D] to-[#062018]">
              <ResilientImage
                src={project.imageSrc}
                alt={project.imageAlt || project.title}
                className="w-auto max-w-full max-h-[380px] sm:max-h-[420px] object-contain object-top rounded-xl border border-[#D4AF37]/45 shadow-[0_22px_50px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                fallbackLabel={project.title}
              />
            </div>
          ) : (
            <>
              <ResilientImage
                src={project.imageSrc}
                alt={project.imageAlt || project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                fallbackLabel={project.title}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#07261D]/80 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 px-5 py-3 bg-[#07261D]/65 backdrop-blur-md border-t border-[#D4AF37]/30 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-[#D4AF37]">{project.category}</span>
                <span className="text-xs font-semibold text-[#FAF9F6]">{project.status}</span>
              </div>
            </>
          )
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F2EFE9] via-[#FAF9F6] to-[#EAE5DA]">
            <div className="w-12 h-12 rounded-xl border border-[#0B3B2D]/15 bg-white flex items-center justify-center mb-3">
              <ImageIcon className="w-5 h-5 text-[#0B3B2D]" aria-hidden="true" />
            </div>
            <p className="font-display text-sm font-semibold text-[#0B3B2D]">{project.title}</p>
            <p className="mt-1 text-xs text-[#4A5C54] max-w-xs">{project.placeholderNote}</p>
          </div>
        )}
      </div>

      {/* Right / Body Container */}
      <div className={`flex flex-col justify-between ${isFeatured ? 'lg:col-span-7' : 'flex-1'}`}>
        {/* Card Content */}
        <div className="p-6 sm:p-8">
          {project.isScreenshotPreview && (
            <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
              <span className="text-[#82640C]">{project.category}</span>
              <span className="text-[#0B3B2D]">{project.status}</span>
            </div>
          )}

          <div className="flex items-baseline gap-2">
            <span className="font-display text-sm font-semibold text-[#82640C] tabular-nums">
              {project.number}
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-[#0B3B2D]">
              {project.title}
            </h3>
          </div>

          {project.serviceTag && (
            <div className="mt-2.5">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#0B3B2D]/[0.05] border border-[#D4AF37]/45 text-xs font-semibold text-[#0B3B2D]">
                {project.serviceTag}
              </span>
            </div>
          )}

          <p className="mt-3 text-sm sm:text-base text-[#354740] leading-relaxed">
            {project.description}
          </p>

          {isFeatured && project.highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-[#24352E]">
                  <Check className="w-4 h-4 text-[#82640C] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Buttons */}
        <div className="px-6 sm:px-8 pb-6 pt-4 border-t border-[#0B3B2D]/10 flex flex-wrap items-center justify-between gap-3">
          {hasExternalLinks ? (
            <>
              <div className="flex flex-wrap items-center gap-2.5">
                {project.externalLinks!.map((extLink) => {
                  const isWebsite = extLink.kind === 'website';
                  return (
                    <a
                      key={extLink.label}
                      href={extLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                        isWebsite
                          ? 'bg-[#0B3B2D] text-[#FAF9F6] border border-[#D4AF37]/40 hover:bg-[#07261D] hover:border-[#D4AF37] hover:shadow-[0_10px_24px_-8px_rgba(212,175,55,0.45)]'
                          : 'bg-[#FAF9F6] text-[#0B3B2D] border border-[#0B3B2D]/20 hover:border-[#D4AF37] hover:bg-[#F2EFE9]'
                      }`}
                    >
                      {extLink.kind === 'tiktok' ? (
                        <Film className="w-4 h-4 text-[#82640C]" aria-hidden="true" />
                      ) : (
                        <ExternalLink className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                      )}
                      <span>{extLink.label}</span>
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={onInquire}
                className="text-sm font-semibold text-[#0B3B2D] hover:text-[#82640C] transition-colors cursor-pointer whitespace-nowrap"
              >
                Request Similar Build
              </button>
            </>
          ) : (
            <>
              {project.actionHref ? (
                <a
                  href={project.actionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B3B2D] text-[#FAF9F6] text-sm font-semibold border border-[#D4AF37]/30 hover:bg-[#07261D] hover:border-[#D4AF37] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(212,175,55,0.45)] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>{project.actionLabel}</span>
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onAction}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B3B2D] text-[#FAF9F6] text-sm font-semibold border border-[#D4AF37]/30 hover:bg-[#07261D] hover:border-[#D4AF37] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(212,175,55,0.45)] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <span>{project.actionLabel}</span>
                  {project.actionType === 'live-preview' ? (
                    <ExternalLink className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                  )}
                </button>
              )}

              <button
                type="button"
                onClick={onInquire}
                className="text-sm font-semibold text-[#0B3B2D] hover:text-[#82640C] transition-colors cursor-pointer whitespace-nowrap"
              >
                Request Similar Build
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
