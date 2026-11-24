import { useEffect, useRef, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Film,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type IndustryKey = 'clinics' | 'importers';

interface IndustryProfile {
  id: IndustryKey;
  label: string;
  chartTitle: string;
  primaryLegend: string;
  secondaryLegend: string;
  growthTarget: number;
  peakLabel: string;
  metric1Label: string;
  metric1Target: number;
  metric1Suffix: string;
  metric1Delta: string;
  metric2Label: string;
  metric2Target: number;
  metric2Badge: string;
  revenueLine: string;
  revenueArea: string;
  leadsLine: string;
  nodes: { cx: number; cy: number; label: string }[];
  tickerItems: { id: string; text: string; timeAgo: string }[];
}

const INDUSTRY_PROFILES: Record<IndustryKey, IndustryProfile> = {
  clinics: {
    id: 'clinics',
    label: 'Medical Clinics',
    chartTitle: 'Revenue & Patient-Leads Trajectory',
    primaryLegend: 'Clinic Revenue',
    secondaryLegend: 'Patient Leads',
    growthTarget: 340,
    peakLabel: 'Patient Inquiries',
    metric1Label: 'TikTok Video Reach',
    metric1Target: 148.4,
    metric1Suffix: 'K+',
    metric1Delta: '+340%',
    metric2Label: 'Google Maps Actions',
    metric2Target: 4820,
    metric2Badge: 'Top 3',
    revenueLine:
      'M 10 128 C 58 122, 84 108, 128 96 C 176 82, 208 86, 256 60 C 302 36, 350 28, 410 12',
    revenueArea:
      'M 10 128 C 58 122, 84 108, 128 96 C 176 82, 208 86, 256 60 C 302 36, 350 28, 410 12 L 410 148 L 10 148 Z',
    leadsLine:
      'M 10 136 C 64 132, 102 120, 146 112 C 194 104, 232 94, 278 78 C 324 62, 366 48, 410 34',
    nodes: [
      { cx: 128, cy: 96, label: 'M2' },
      { cx: 256, cy: 60, label: 'M3' },
      { cx: 410, cy: 12, label: 'Live' },
    ],
    tickerItems: [
      {
        id: 'clinic-1',
        text: '✅ New Patient Appointment via Google Maps — Addis Ababa',
        timeAgo: 'Just now',
      },
      {
        id: 'clinic-2',
        text: '🚀 TikTok Brand Video Reached 18.4K Views',
        timeAgo: '2m ago',
      },
      {
        id: 'clinic-3',
        text: '✅ Sinotruk Spare Parts Quote Requested — Addis Ababa',
        timeAgo: '5m ago',
      },
      {
        id: 'clinic-4',
        text: '📍 Google Maps "Get Directions" Clicked — Bole, Addis Ababa',
        timeAgo: '8m ago',
      },
    ],
  },
  importers: {
    id: 'importers',
    label: 'Auto Parts & Importers',
    chartTitle: 'Wholesale Orders & B2B RFQ Trajectory',
    primaryLegend: 'Wholesale Revenue',
    secondaryLegend: 'Fleet RFQ Leads',
    growthTarget: 415,
    peakLabel: 'Fleet RFQ Velocity',
    metric1Label: 'TikTok & Catalog Reach',
    metric1Target: 92.6,
    metric1Suffix: 'K+',
    metric1Delta: '+415%',
    metric2Label: 'Google Maps & RFQ Calls',
    metric2Target: 3190,
    metric2Badge: '#1 Rank',
    revenueLine:
      'M 10 132 C 52 126, 94 114, 138 88 C 184 62, 226 68, 270 42 C 318 18, 358 16, 410 8',
    revenueArea:
      'M 10 132 C 52 126, 94 114, 138 88 C 184 62, 226 68, 270 42 C 318 18, 358 16, 410 8 L 410 148 L 10 148 Z',
    leadsLine:
      'M 10 138 C 66 134, 108 116, 154 98 C 198 82, 240 80, 286 60 C 332 40, 370 30, 410 20',
    nodes: [
      { cx: 138, cy: 88, label: 'M2' },
      { cx: 270, cy: 42, label: 'M3' },
      { cx: 410, cy: 8, label: 'Live' },
    ],
    tickerItems: [
      {
        id: 'imp-1',
        text: '✅ Sinotruk Spare Parts Quote Requested — Addis Ababa',
        timeAgo: 'Just now',
      },
      {
        id: 'imp-2',
        text: '🚀 TikTok Brand Video Reached 18.4K Views',
        timeAgo: '3m ago',
      },
      {
        id: 'imp-3',
        text: '✅ New Patient Appointment via Google Maps — Addis Ababa',
        timeAgo: '6m ago',
      },
      {
        id: 'imp-4',
        text: '📦 Bulk Fleet Parts Inquiry via Telegram Bot — Kaliti',
        timeAgo: '9m ago',
      },
    ],
  },
};

function useSmoothCounter(target: number, durationMs = 1100, shouldAnimate = true) {
  const [value, setValue] = useState(shouldAnimate ? 0 : target);
  const currentValueRef = useRef(shouldAnimate ? 0 : target);

  useEffect(() => {
    if (!shouldAnimate) {
      currentValueRef.current = target;
      setValue(target);
      return;
    }

    const startValue = currentValueRef.current;
    const delta = target - startValue;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = startValue + delta * eased;
      currentValueRef.current = next;
      setValue(next);
      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [target, durationMs, shouldAnimate]);

  return value;
}

export function HeroCommandCenter() {
  const prefersReducedMotion = useReducedMotion();
  const animateVisuals = !prefersReducedMotion;

  const [selectedIndustry, setSelectedIndustry] = useState<IndustryKey>('clinics');
  const [tickerOffset, setTickerOffset] = useState(0);

  const profile = INDUSTRY_PROFILES[selectedIndustry];

  useEffect(() => {
    setTickerOffset(0);
  }, [selectedIndustry]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setTickerOffset((prev) => (prev + 1) % profile.tickerItems.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [profile.tickerItems.length, prefersReducedMotion]);

  const growthPercent = useSmoothCounter(profile.growthTarget, 1000, animateVisuals);
  const metric1Value = useSmoothCounter(profile.metric1Target, 1100, animateVisuals);
  const metric2Value = useSmoothCounter(profile.metric2Target, 1150, animateVisuals);

  const visibleTickerItems = [
    profile.tickerItems[tickerOffset % profile.tickerItems.length],
    profile.tickerItems[(tickerOffset + 1) % profile.tickerItems.length],
  ];

  return (
    <div
      aria-label="Live Client Acquisition Simulator dashboard"
      className="relative h-full min-h-[430px] lg:min-h-[510px] rounded-2xl overflow-hidden border border-[#D4AF37]/50 bg-gradient-to-br from-[#082C22] via-[#0B3B2D] to-[#041711] shadow-[0_28px_72px_-18px_rgba(11,59,45,0.52)] p-4 sm:p-5 lg:p-6 flex flex-col justify-between gap-3.5"
    >
      {/* Architectural Grid & Ambient Gold Depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(212,175,55,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,55,0.12) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={animateVisuals ? { opacity: [0.35, 0.6, 0.35], scale: [1, 1.07, 1] } : undefined}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#D4AF37]/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={animateVisuals ? { opacity: [0.22, 0.42, 0.22] } : undefined}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-[#198764]/35 blur-3xl"
      />

      {/* Row 1: Clean Status Badge + Live Growth Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#041711]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#FAF9F6]">
            Halal Digital Marketing • Addis Ababa
          </span>
        </div>

        <motion.div
          animate={animateVisuals ? { y: [0, -2.5, 0] } : undefined}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 backdrop-blur-md border border-[#D4AF37]/55 text-[#E5C158] text-xs font-bold tabular-nums"
        >
          <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
          <span>+{Math.round(growthPercent)}% Growth</span>
        </motion.div>
      </div>

      {/* Row 2: Interactive SaaS Industry Toggle */}
      <div className="relative z-10 flex items-center justify-between gap-3 flex-wrap">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A9BEB5]">
          Live Acquisition Simulator
        </span>

        <div
          role="tablist"
          aria-label="Simulate client acquisition metrics by industry"
          className="inline-flex items-center p-1 rounded-lg bg-[#041711]/90 border border-[#D4AF37]/35 shadow-inner"
        >
          {(['clinics', 'importers'] as const).map((key) => {
            const active = selectedIndustry === key;
            const label = INDUSTRY_PROFILES[key].label;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedIndustry(key)}
                className={`relative px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                  active ? 'text-[#041711]' : 'text-[#DCE6E1] hover:text-[#D4AF37]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="heroSimulatorIndustryPill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-md bg-[#D4AF37] shadow-sm"
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 3: Animated Revenue & Leads Trajectory Graph */}
      <div className="relative z-10 rounded-xl bg-[#041711]/75 backdrop-blur-xl border border-[#D4AF37]/30 p-3.5 sm:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2.5">
          <div>
            <h2 className="font-display text-sm sm:text-base font-bold text-[#FAF9F6] tracking-tight">
              {profile.chartTitle}
            </h2>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-medium text-[#DCE6E1]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-0.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              {profile.primaryLegend}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-0.5 rounded-full bg-[#34D399]" aria-hidden="true" />
              {profile.secondaryLegend}
            </span>
          </div>
        </div>

        {/* SVG Trajectory Chart with Moving Pulse Dots */}
        <div className="relative w-full h-[132px] sm:h-[146px]">
          <svg
            viewBox="0 0 420 150"
            className="w-full h-full overflow-visible"
            role="img"
            aria-label={`${profile.chartTitle} showing +${profile.growthTarget}% growth`}
          >
            <defs>
              <linearGradient id="simGoldArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="simGoldStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C49A28" />
                <stop offset="55%" stopColor="#E5C158" />
                <stop offset="100%" stopColor="#FAF9F6" />
              </linearGradient>
              <filter id="simGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Reference Grid Lines */}
            {[36, 74, 112].map((y) => (
              <line
                key={y}
                x1="10"
                y1={y}
                x2="410"
                y2={y}
                stroke="rgba(255,255,255,0.08)"
                strokeDasharray="4 4"
              />
            ))}

            {/* Animated Gold Area Fill */}
            <motion.path
              animate={{ d: profile.revenueArea }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              fill="url(#simGoldArea)"
            />

            {/* Secondary Leads Trajectory */}
            <motion.path
              animate={{ d: profile.leadsLine }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              fill="none"
              stroke="#34D399"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeOpacity="0.85"
            />

            {/* Glowing Primary Champagne Gold Trajectory */}
            <motion.path
              key={profile.id}
              d={profile.revenueLine}
              initial={animateVisuals ? { pathLength: 0.15, opacity: 0.5 } : false}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              fill="none"
              stroke="url(#simGoldStroke)"
              strokeWidth="3.2"
              strokeLinecap="round"
              filter="url(#simGoldGlow)"
            />

            {/* Moving Pulse Dots Traveling Along the Gold Trajectory */}
            {animateVisuals && (
              <g key={`pulse-${profile.id}`}>
                <circle r="7" fill="#D4AF37" fillOpacity="0.32">
                  <animateMotion dur="3.4s" repeatCount="indefinite" path={profile.revenueLine} />
                </circle>
                <circle r="3.4" fill="#FAF9F6" stroke="#D4AF37" strokeWidth="1.5">
                  <animateMotion dur="3.4s" repeatCount="indefinite" path={profile.revenueLine} />
                </circle>
                <circle r="2.6" fill="#E5C158" fillOpacity="0.85">
                  <animateMotion
                    dur="3.4s"
                    begin="-1.7s"
                    repeatCount="indefinite"
                    path={profile.revenueLine}
                  />
                </circle>
              </g>
            )}

            {/* Milestone Anchor Dots */}
            {profile.nodes.map((node, index) => (
              <g key={`${profile.id}-${node.label}`}>
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={index === 2 ? 7 : 4.5}
                  fill="#D4AF37"
                  fillOpacity="0.28"
                  animate={
                    animateVisuals
                      ? { r: index === 2 ? [6, 10, 6] : [4, 6.5, 4], opacity: [0.45, 0.15, 0.45] }
                      : undefined
                  }
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.35 }}
                />
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={index === 2 ? 4 : 3}
                  fill="#FAF9F6"
                  stroke="#D4AF37"
                  strokeWidth="2"
                />
              </g>
            ))}
          </svg>

          {/* Floating Velocity Callout Chip */}
          <motion.div
            animate={animateVisuals ? { y: [0, -4.5, 0] } : undefined}
            transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1 left-1 rounded-lg bg-[#0B3B2D]/92 backdrop-blur-md border border-[#D4AF37]/45 px-3 py-1.5 shadow-lg"
          >
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#D4AF37]">
              <Activity className="w-3 h-3" aria-hidden="true" />
              <span>{profile.peakLabel}</span>
            </div>
            <p className="mt-0.5 font-display text-sm font-bold text-[#FAF9F6] tabular-nums">
              +{Math.round(growthPercent)}% Growth
            </p>
          </motion.div>
        </div>

        <div className="mt-1 flex items-center justify-between text-[10px] font-medium text-[#A9BEB5] px-1">
          <span>Month 1</span>
          <span>Month 2</span>
          <span>Month 3</span>
          <span className="text-[#D4AF37] font-semibold">Live Trajectory</span>
        </div>
      </div>

      {/* Row 4: Floating Animated TikTok & Google Maps Engagement Counters */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <motion.div
          animate={animateVisuals ? { y: [0, -3.5, 0] } : undefined}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="rounded-xl bg-[#041711]/80 backdrop-blur-md border border-[#D4AF37]/35 hover:border-[#D4AF37]/75 transition-colors p-3.5 flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-[#0B3B2D] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
              <Film className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-[#A9BEB5] truncate">
                {profile.metric1Label}
              </p>
              <p className="font-display text-lg font-bold text-[#FAF9F6] tabular-nums leading-tight">
                {metric1Value.toFixed(1)}
                {profile.metric1Suffix}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#34D399] shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            {profile.metric1Delta}
          </span>
        </motion.div>

        <motion.div
          animate={animateVisuals ? { y: [0, -3.5, 0] } : undefined}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          className="rounded-xl bg-[#041711]/80 backdrop-blur-md border border-[#D4AF37]/35 hover:border-[#D4AF37]/75 transition-colors p-3.5 flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-[#0B3B2D] border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-[#A9BEB5] truncate">
                {profile.metric2Label}
              </p>
              <p className="font-display text-lg font-bold text-[#FAF9F6] tabular-nums leading-tight">
                {Math.round(metric2Value).toLocaleString()}+
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E5C158] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            {profile.metric2Badge}
          </span>
        </motion.div>
      </div>

      {/* Row 5: Live Scrolling Activity Ticker */}
      <div
        aria-live="polite"
        className="relative z-10 rounded-xl bg-[#041711]/85 backdrop-blur-md border border-[#D4AF37]/30 px-3.5 py-2.5 overflow-hidden"
      >
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
            Live Client Activity Feed
          </span>
          <span className="text-[10px] font-medium text-[#34D399]">Auto-Syncing</span>
        </div>

        <div className="relative h-[44px] flex flex-col gap-1 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleTickerItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={animateVisuals ? { opacity: 0, y: 14 } : false}
                animate={{ opacity: idx === 0 ? 1 : 0.65, y: 0 }}
                exit={animateVisuals ? { opacity: 0, y: -14 } : undefined}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-between gap-2 text-[11px] sm:text-xs leading-tight"
              >
                <span className="text-[#FAF9F6] font-medium truncate">{item.text}</span>
                <span className="text-[10px] text-[#A9BEB5] shrink-0 tabular-nums">
                  {item.timeAgo}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
