'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import HeroVideo from './HeroVideo';
import { gsap, useGSAP } from '@/lib/gsap';

export default function HomeHero() {
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (innerRef.current) {
      const targets = gsap.utils.toArray(innerRef.current.querySelectorAll('[data-hero-anim]'));
      gsap.fromTo(
        targets,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.15 }
      );
    }
  }, []);

  return (
    <section className="hero" data-variant="video">
      <div className="hero-video-placeholder">
        <HeroVideo src="/assets/hero.mp4" />
      </div>
      <div className="video-tag">
        <span className="dot" /> Reel · Ballyliffin
      </div>

      <div className="container-wide">
        <div className="hero-inner" ref={innerRef}>
          <div style={{ marginBottom: 28 }} data-hero-anim>
            <Eyebrow>Ireland · Scotland · England</Eyebrow>
          </div>
          <h1 className="hero-title" data-hero-anim>
            A round,
            <br />
            a <span className="soft">story,</span>
            <br />
            a place worth
            <br />
            <span className="accent-word">knowing.</span>
          </h1>
          <p className="hero-sub" data-hero-anim>
            Across Ireland, Scotland &amp; England, we shape journeys guided by rhythm, place, and atmosphere, from
            celebrated links to quieter corners of the game.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap' }} data-hero-anim>
            <Link href="/contact" className="btn btn-accent">
              Plan my trip
            </Link>
            <Link href="/services" className="btn btn-ghost-dark">
              How we can help
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
