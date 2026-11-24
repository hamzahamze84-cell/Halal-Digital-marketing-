import { useEffect, useState } from 'react';
import { Menu, MessageCircle, Phone, Send, X } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAF9F6]/75 border-b border-[#D4AF37]/30 shadow-[0_10px_32px_-14px_rgba(11,59,45,0.18)]'
          : 'bg-[#FAF9F6]/82 border-b border-[#0B3B2D]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4 lg:gap-6">
        {/* Zone 1: Stacked HM monogram + centered brand title */}
        <a
          href="#top"
          aria-label="Halal Digital Marketing — Scroll to top"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex flex-col items-center justify-center shrink-0 py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3B2D] focus-visible:ring-offset-2 rounded-sm"
        >
          <img
            src="/assets/hm-monogram.png"
            alt="Halal Digital Marketing Monogram"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />
          <span className="mt-1 font-display text-[10px] sm:text-[11px] font-bold tracking-[0.12em] leading-none whitespace-nowrap">
            <span className="text-[#0B3B2D]">HALAL DIGITAL </span>
            <span className="text-[#9E7B16]">MARKETING</span>
          </span>
        </a>

        {/* Zone 2: Desktop single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-medium text-[#2A3B34] hover:text-[#0B3B2D] transition-colors duration-150 whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3B2D] focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Gold-bordered Call Now + Primary Consultation CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={AGENCY_CONTACT.phoneHref}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg border border-[#D4AF37]/80 bg-[#FAF9F6]/70 backdrop-blur-md text-[#0B3B2D] text-xs xl:text-sm font-semibold hover:bg-[#D4AF37]/15 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(212,175,55,0.55)] transition-all duration-200 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#82640C] shrink-0" aria-hidden="true" />
            <span>Call Now: 0929 55 41 42</span>
          </a>

          <a
            href={AGENCY_CONTACT.whatsappConsultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[40px] rounded-lg bg-[#0B3B2D] text-[#FAF9F6] text-xs xl:text-sm font-semibold border border-[#D4AF37]/30 hover:bg-[#07261D] hover:border-[#D4AF37] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_rgba(212,175,55,0.45)] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
          >
            <span>Book Free Consultation</span>
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#0B3B2D]/15 bg-[#FAF9F6]/65 backdrop-blur-md text-[#0B3B2D] hover:bg-[#0B3B2D]/5 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3B2D]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Hamburger Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden max-h-[82vh] overflow-y-auto bg-[#FAF9F6]/92 backdrop-blur-xl border-b border-[#D4AF37]/25 px-4 pt-3 pb-6 space-y-2 shadow-xl"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileNavClick(link.href);
                }}
                className="min-h-[44px] flex items-center px-3 rounded-lg text-base font-medium text-[#0B3B2D] hover:bg-[#0B3B2D]/5 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#0B3B2D]/10 grid grid-cols-1 gap-2.5">
            <a
              href={AGENCY_CONTACT.phoneHref}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#D4AF37] bg-[#FAF9F6] text-[#0B3B2D] text-sm font-semibold hover:bg-[#D4AF37]/15 transition-colors duration-150 tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#82640C]" aria-hidden="true" />
              <span>Call Now: 0929 55 41 42</span>
            </a>

            <a
              href={AGENCY_CONTACT.whatsappConsultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0B3B2D] text-[#FAF9F6] text-sm font-semibold hover:bg-[#07261D] transition-colors duration-150"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
              <span>Book Free Consultation (WhatsApp)</span>
            </a>

            <a
              href={AGENCY_CONTACT.telegramBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[#0B3B2D]/20 text-[#0B3B2D] text-sm font-semibold hover:bg-[#0B3B2D]/5 transition-colors duration-150"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Direct Telegram ({AGENCY_CONTACT.telegramHandle})</span>
            </a>

            <a
              href={AGENCY_CONTACT.telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[40px] inline-flex items-center justify-center text-xs font-semibold text-[#82640C] hover:text-[#0B3B2D] transition-colors"
            >
              Join Official Channel ({AGENCY_CONTACT.telegramChannelHandle})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
