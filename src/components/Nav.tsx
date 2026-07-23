'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap, useGSAP } from '@/lib/gsap';

const ANNON_NAV = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'destinations', href: '/destinations', label: 'Destinations' },
  { id: 'services', href: '/services', label: 'Services' },
  { id: 'about', href: '/about', label: 'About' },
  { id: 'contact', href: '/contact', label: 'Contact' },
];

function activeId(pathname: string) {
  const hit = ANNON_NAV.find((n) => (n.href === '/' ? pathname === '/' : pathname.startsWith(n.href)));
  return hit?.id ?? '';
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerLinksRef = useRef<HTMLDivElement>(null);
  const current = activeId(pathname);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useGSAP(
    () => {
      if (!open || !drawerLinksRef.current) return;
      gsap.fromTo(
        drawerLinksRef.current.children,
        { opacity: 0, x: 24 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06, delay: 0.1 }
      );
    },
    { dependencies: [open] }
  );

  const close = () => setOpen(false);

  return (
    <header className="nav-root">
      <div className="nav-inner">
        <Link className="nav-logo" href="/">
          <span className="dot" />
          DAWN CHORUS
        </Link>
        <nav className="nav-links">
          {ANNON_NAV.map((n) => (
            <Link key={n.id} className="nav-link" data-active={current === n.id} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary btn-sm nav-cta">
          Start planning
        </Link>
        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-burger-box" data-open={open}>
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </span>
        </button>
      </div>

      <div className="nav-scrim" data-open={open} onClick={close} />

      <div className="nav-drawer" data-open={open} role="dialog" aria-modal="true">
        <nav className="nav-drawer-links" ref={drawerLinksRef}>
          {ANNON_NAV.map((n, i) => (
            <Link key={n.id} className="nav-drawer-link" data-active={current === n.id} href={n.href} onClick={close}>
              <span className="nav-drawer-num">{String(i + 1).padStart(2, '0')}</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-accent nav-drawer-cta" onClick={close}>
          Start planning
        </Link>
      </div>
    </header>
  );
}
