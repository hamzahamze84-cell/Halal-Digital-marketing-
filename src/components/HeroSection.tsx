import { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { AGENCY_CONTACT, HERO_CAPABILITIES } from '../data/agencyData';
import { ResilientVideo } from './ResilientVideo';
import { AmbientGlow, SectionDivider, StaggerGroup, StaggerItem } from './MotionPrimitives';

const HERO_MONTAGE_CLIPS = [
  {
    id: 'web-design',
    label: 'Web Design & Code',
    videoSrc: 'https://assets.mixkit.co/videos/46635/46635-720.mp4',
    posterSrc: '/src/assets/images/service_web_engineering_1795359904732.jpg',
    alt: 'Custom web design and clean code engineering in motion',
  },
  {
    id: 'video-production',
    label: 'Video Production',
    videoSrc: 'https://assets.mixkit.co/videos/48529/48529-720.mp4',
    posterSrc: '/src/assets/images/service_video_studio_clean_1795359921417.jpg',
    alt: 'Cinema camera lens and commercial video production in motion',
  },
  {
    id: 'creative-editing',
    label: 'Editing & Growth',
    videoSrc: 'https://assets.mixkit.co/videos/21546/21546-720.mp4',
    posterSrc: '/src/assets/images/service_video_editing_1795406031774.jpg',
    alt: 'Creative video editing timeline and digital production workflow in motion',
  },
] as const;

export function HeroSection() {
  const [activeClipIndex, setActiveClipIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveClipIndex((prev) => (prev + 1) % HERO_MONTAGE_CLIPS.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const currentClip = HERO_MONTAGE_CLIPS[activeClipIndex];

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

            {/* Right Column: Dynamic Auto-Playing Creative Craft Video Montage */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="group relative h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[470px] rounded-2xl overflow-hidden border border-[#D4AF37]/45 hover:border-[#D4AF37] shadow-[0_24px_56px_-18px_rgba(11,59,45,0.34)] hover:shadow-[0_26px_60px_-14px_rgba(212,175,55,0.3)] transition-all duration-300 bg-[#07261D]">
                <AnimatePresence mode="sync">
                  <motion.div
                    key={currentClip.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <ResilientVideo
                      videoSrc={currentClip.videoSrc}
                      posterSrc={currentClip.posterSrc}
                      alt={currentClip.alt}
                      className="w-full h-full object-cover"
                      fallbackLabel={currentClip.label}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Deep Emerald Dark Gradient Overlay for Crisp Subtitle Contrast */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#041711]/95 via-[#07261D]/55 to-[#07261D]/20 pointer-events-none"
                />

                {/* Top-Left Montage Stage Switcher (Interactive Frosted Glass) */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
                  <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-[#041711]/65 backdrop-blur-md border border-[#D4AF37]/35">
                    {HERO_MONTAGE_CLIPS.map((clip, idx) => {
                      const isActive = idx === activeClipIndex;
                      return (
                        <button
                          key={clip.id}
                          type="button"
                          onClick={() => setActiveClipIndex(idx)}
                          className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                            isActive
                              ? 'bg-[#D4AF37] text-[#07261D]'
                              : 'text-[#FAF9F6]/85 hover:text-[#D4AF37]'
                          }`}
                        >
                          {clip.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Frosted Glassmorphism Caption Card Over Moving Montage */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                  <div className="rounded-xl bg-[#041711]/78 backdrop-blur-xl border border-[#D4AF37]/45 p-4 sm:p-5 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7)]">
                    <p className="text-xs sm:text-sm font-semibold text-[#E5C158] tracking-wide">
                      Addis Ababa, Ethiopia • Digital Growth Collective
                    </p>
                    <p className="mt-1.5 font-display text-base sm:text-lg font-semibold text-[#FAF9F6] leading-snug">
                      Websites • Google Maps SEO • Video • Meta Ads (FB &amp; IG) • Telegram Automation
                    </p>
                  </div>
                </div>
              </div>
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
