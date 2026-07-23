'use client';

import { useEffect, useRef } from 'react';

export default function HeroVideo({ src, startAt = 3 }: { src: string; startAt?: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  // Skip the first few seconds (opening frames) on load and on every loop restart,
  // so the same intro never plays twice. Wired up via a native listener in an effect
  // rather than onLoadedMetadata/onEnded props: with SSR + autoplay, the browser can
  // start loading/firing 'loadedmetadata' before React finishes hydrating and attaching
  // its synthetic listeners, so we also handle the "metadata already ready" case directly.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const jumpToStart = () => {
      try {
        v.currentTime = startAt;
      } catch {}
    };
    const handleEnded = () => {
      jumpToStart();
      v.play().catch(() => {});
    };

    if (v.readyState >= 1) {
      jumpToStart();
    } else {
      v.addEventListener('loadedmetadata', jumpToStart);
    }
    v.addEventListener('ended', handleEnded);

    return () => {
      v.removeEventListener('loadedmetadata', jumpToStart);
      v.removeEventListener('ended', handleEnded);
    };
  }, [startAt]);

  return <video ref={ref} className="hero-video" src={src} autoPlay muted playsInline />;
}
