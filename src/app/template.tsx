'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // clearProps on complete: a lingering `transform` (even an identity one) makes this div a
      // containing block for any position:fixed descendant (e.g. modal overlays), breaking them.
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'transform' }
      );
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
