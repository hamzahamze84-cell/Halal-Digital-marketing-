import { useEffect, useRef, useState } from 'react';
import { ResilientImage } from './ResilientImage';

interface ResilientVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ResilientVideo({
  videoSrc,
  posterSrc,
  alt,
  className = '',
  fallbackLabel,
}: ResilientVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [videoSrc]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || hasError) return;
    el.muted = true;
    el.defaultMuted = true;
    const playPromise = el.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Autoplay gracefully waits for browser gesture or falls back to poster
      });
    }
  }, [videoSrc, hasError]);

  if (!videoSrc || hasError) {
    return (
      <ResilientImage
        src={posterSrc || ''}
        alt={alt}
        className={`${className} animate-ken-burns`}
        fallbackLabel={fallbackLabel || alt}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={posterSrc}
      aria-label={alt}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
