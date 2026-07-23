'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { gsap, useGSAP } from '@/lib/gsap';

export default function Overlay({
  onClose,
  className = '',
  children,
}: {
  onClose: () => void;
  className?: string;
  children: ReactNode;
}) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const requestClose = () => {
    if (closing) return;
    setClosing(true);
  };

  useGSAP(() => {
    gsap.set(backdropRef.current, { opacity: 0 });
    gsap.set(cardRef.current, { opacity: 0, y: 28, scale: 0.98 });
    gsap.to(backdropRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    gsap.to(cardRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: 0.05 });
  }, []);

  useGSAP(
    () => {
      if (!closing) return;
      gsap.to(cardRef.current, { opacity: 0, y: 18, scale: 0.98, duration: 0.25, ease: 'power2.in' });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        delay: 0.05,
        onComplete: onClose,
      });
    },
    { dependencies: [closing] }
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') requestClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="region-overlay" ref={backdropRef} onClick={requestClose} style={{ animation: 'none' }}>
      <div
        className={`region-detail ${className}`}
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'none' }}
      >
        <button className="region-close" onClick={requestClose} aria-label="Close">
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
