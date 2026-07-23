'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileCtaBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const eligible = pathname === '/' || pathname === '/destinations';

  useEffect(() => {
    if (!eligible) {
      setVisible(false);
      return;
    }
    let raf: number | null = null;
    const check = () => {
      raf = null;
      const el = pathname === '/' ? document.querySelector('.home-top .hero') : document.querySelector('.dest-hero-wrap');
      if (!el) return;
      const bottom = el.getBoundingClientRect().bottom;
      setVisible(bottom <= 120);
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(check);
    };
    const t = setTimeout(check, 150);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      clearTimeout(t);
      if (raf !== null) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname, eligible]);

  if (!eligible) return null;

  return (
    <div className={'mobile-cta-bar' + (visible ? ' is-visible' : '')}>
      <Link href="/contact" className="btn btn-accent">
        Plan My Trip
      </Link>
    </div>
  );
}
