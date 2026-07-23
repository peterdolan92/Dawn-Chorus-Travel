'use client';

import { useRef, ReactNode, ElementType, CSSProperties } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Stagger direct children instead of animating the wrapper as one block */
  stagger?: boolean;
  /** y-offset in px for the entrance */
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
};

export default function Reveal({
  children,
  as: Tag = 'div',
  className,
  style,
  stagger = false,
  y = 36,
  delay = 0,
  duration = 0.9,
  start = 'top 87%',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = stagger ? gsap.utils.toArray(ref.current.children) : ref.current;
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none reverse',
          },
        }
      );
    },
    { scope: ref }
  );

  const Comp = Tag as ElementType;
  return (
    <Comp ref={ref} className={className} style={style}>
      {children}
    </Comp>
  );
}
