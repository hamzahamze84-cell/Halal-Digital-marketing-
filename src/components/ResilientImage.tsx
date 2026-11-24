import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Halal Digital Marketing',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B3B2D] via-[#0E4A38] to-[#07261D] text-[#FAF9F6] p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center mb-3">
          <Building2 className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-semibold tracking-tight text-[#FAF9F6]">
          {fallbackLabel}
        </span>
        <span className="mt-1 text-xs text-[#D4AF37]">Addis Ababa, Ethiopia</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
