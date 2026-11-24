import { AGENCY_CONTACT, buildWhatsAppUrl } from '../data/agencyData';
import { AmbientGlow, SectionDivider } from './MotionPrimitives';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07261D] text-[#FAF9F6]">
      <SectionDivider variant="dark" />
      <AmbientGlow tone="dark" position="top-right" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 sm:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-8 border-b border-white/15">
          <div className="flex flex-col items-start">
            <a
              href="#top"
              aria-label="Halal Digital Marketing — Back to top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex flex-col items-center text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
            >
              <span className="inline-flex items-center justify-center rounded-xl bg-[#FAF9F6] px-4 py-2 border border-[#D4AF37]/45 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all duration-200">
                <img
                  src="/assets/hm-monogram.png"
                  alt="Halal Digital Marketing Monogram"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </span>
              <span className="mt-3 font-display text-sm sm:text-base font-bold tracking-[0.14em] leading-tight whitespace-nowrap">
                <span className="text-white">HALAL DIGITAL </span>
                <span className="text-[#D4AF37]">MARKETING</span>
              </span>
            </a>

            <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#D4AF37]">
              <span>{AGENCY_CONTACT.tagline}</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span className="text-[#DCE6E1]">{AGENCY_CONTACT.city}</span>
            </div>

            {/* Direct Official Contact Links in Footer */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#DCE6E1]">
              <a
                href={AGENCY_CONTACT.phoneHref}
                className="hover:text-[#D4AF37] transition-colors tabular-nums"
              >
                Phone: {AGENCY_CONTACT.phoneDisplay}
              </a>
              <span aria-hidden="true" className="text-white/25">
                ·
              </span>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors tabular-nums"
              >
                WhatsApp: {AGENCY_CONTACT.phoneDisplay}
              </a>
              <span aria-hidden="true" className="text-white/25">
                ·
              </span>
              <a
                href={AGENCY_CONTACT.telegramBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline"
              >
                Telegram: {AGENCY_CONTACT.telegramHandle}
              </a>
              <span aria-hidden="true" className="text-white/25">
                ·
              </span>
              <a
                href={AGENCY_CONTACT.telegramChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline"
              >
                Channel: {AGENCY_CONTACT.telegramChannelHandle}
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#DCE6E1]">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              About
            </a>
            <a href="#services" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              Services
            </a>
            <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              Portfolio
            </a>
            <a href="#team" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              Team
            </a>
            <a href="#process" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              Process
            </a>
            <a href="#values" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              Values
            </a>
            <a href="#packages" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              Packages
            </a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors whitespace-nowrap">
              Contact
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#B9C8C1]">
          <p>
            © {new Date().getFullYear()} {AGENCY_CONTACT.brandName}. All rights reserved.
          </p>
          <p>{AGENCY_CONTACT.city}</p>
        </div>
      </div>
    </footer>
  );
}
