import { ReactNode } from 'react';
import { motion } from 'motion/react';

const STUDIO_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay, ease: STUDIO_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.065,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: STUDIO_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionDivider({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full ${variant === 'dark' ? 'bg-[#07261D]' : 'bg-[#FAF9F6]'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          <div className="h-px w-full gold-gradient-divider" />
          <span className="absolute h-1.5 w-1.5 rotate-45 bg-[#D4AF37]/80 shadow-[0_0_10px_rgba(212,175,55,0.65)]" />
        </div>
      </div>
    </div>
  );
}

export function AmbientGlow({
  tone = 'light',
  position = 'top-right',
}: {
  tone?: 'light' | 'dark';
  position?: 'top-right' | 'top-left' | 'center';
}) {
  const positionClass =
    position === 'top-left'
      ? '-top-32 -left-32'
      : position === 'center'
        ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        : '-top-32 -right-28';

  const radial =
    tone === 'dark'
      ? 'radial-gradient(circle, rgba(212,175,55,0.14) 0%, rgba(11,59,45,0.08) 45%, transparent 72%)'
      : 'radial-gradient(circle, rgba(212,175,55,0.11) 0%, rgba(11,59,45,0.05) 45%, transparent 72%)';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${positionClass} w-[520px] h-[520px] rounded-full`}
      style={{ background: radial }}
    />
  );
}

export function SectionKicker({
  children,
  tone = 'light',
}: {
  children: ReactNode;
  tone?: 'light' | 'dark';
}) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span className="h-px w-6 bg-[#D4AF37]" aria-hidden="true" />
      <p
        className={`text-xs sm:text-sm font-semibold tracking-wide ${
          tone === 'dark' ? 'text-[#D4AF37]' : 'text-[#82640C]'
        }`}
      >
        {children}
      </p>
    </div>
  );
}
