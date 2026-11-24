import { MessageCircle, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { AGENCY_CONTACT, buildWhatsAppUrl } from '../data/agencyData';

export function FloatingWhatsAppButton() {
  const whatsappHref = buildWhatsAppUrl(
    'Assalamu Alaikum Hamza, I would like to chat with Halal Digital Marketing.'
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Quick direct contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 p-1.5 rounded-full bg-[#FAF9F6]/65 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_16px_40px_-10px_rgba(7,38,29,0.28)]"
    >
      {/* Direct Call Now (Mobile & Desktop 1-Tap) */}
      <a
        href={AGENCY_CONTACT.phoneHref}
        aria-label={`Call Now (${AGENCY_CONTACT.phoneDisplay})`}
        title={`Call Now: ${AGENCY_CONTACT.phoneDisplay}`}
        className="h-11 px-3.5 rounded-full bg-[#FAF9F6]/80 backdrop-blur-md text-[#0B3B2D] border border-[#D4AF37]/75 hover:bg-[#D4AF37]/20 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-8px_rgba(212,175,55,0.5)] transition-all duration-200 inline-flex items-center justify-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
      >
        <Phone className="w-4 h-4 text-[#82640C] shrink-0" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Call Now</span>
      </a>

      {/* Direct Telegram DM (@lasteday) */}
      <a
        href={AGENCY_CONTACT.telegramBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message ${AGENCY_CONTACT.telegramHandle} on Telegram`}
        title={`Telegram: ${AGENCY_CONTACT.telegramHandle}`}
        className="h-11 px-3.5 rounded-full bg-[#FAF9F6]/80 backdrop-blur-md text-[#0B3B2D] border border-[#0B3B2D]/20 hover:border-[#D4AF37] hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-8px_rgba(11,59,45,0.22)] transition-all duration-200 inline-flex items-center justify-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3B2D] focus-visible:ring-offset-2"
      >
        <Send className="w-4 h-4 text-[#0B3B2D] shrink-0" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Telegram</span>
      </a>

      {/* Direct WhatsApp (+251 92 955 4142) */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp (${AGENCY_CONTACT.phoneDisplay})`}
        title={`WhatsApp: ${AGENCY_CONTACT.phoneDisplay}`}
        className="h-11 px-3.5 rounded-full bg-[#0B3B2D]/90 backdrop-blur-md text-[#FAF9F6] border border-[#D4AF37]/75 hover:bg-[#07261D] hover:border-[#D4AF37] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-6px_rgba(212,175,55,0.45)] transition-all duration-200 inline-flex items-center justify-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
      >
        <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </a>
    </motion.div>
  );
}
