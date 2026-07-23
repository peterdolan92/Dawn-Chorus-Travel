import type { Metadata } from 'next';
import Image from 'next/image';
import Eyebrow from '@/components/Eyebrow';
import CtaBand from '@/components/CtaBand';
import DestinationsExplorer from '@/components/DestinationsExplorer';

export const metadata: Metadata = {
  title: 'Destinations',
  description:
    'Ireland, Scotland and England, broken down region by region — the areas worth building a golf trip around, from championship links to hidden local courses.',
  alternates: { canonical: '/destinations' },
};

export default function DestinationsPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 36, paddingBottom: 28 }}>
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <Eyebrow>Destinations</Eyebrow>
          </div>
          <h1
            className="page-title"
            style={{
              fontFamily: 'var(--annon-font-display)',
              fontWeight: 500,
              fontSize: 'clamp(40px, 5vw, 76px)',
              lineHeight: 0.98,
              letterSpacing: '-1.6px',
              margin: 0,
              maxWidth: 1200,
            }}
          >
            Where <em style={{ fontFamily: 'var(--annon-font-serif)', fontWeight: 400 }}>we</em> go.
          </h1>
          <p className="body-lg" style={{ color: 'var(--annon-fg-2)', maxWidth: 680, marginTop: 22 }}>
            Three countries to begin — Ireland, Scotland and England — each broken down into the areas worth
            building a trip around. Click any region for a closer look.
          </p>
        </div>
        <div className="container-wide dest-hero-wrap" style={{ marginTop: 36 }}>
          <Image
            className="dest-hero-img"
            src="/assets/dest-hero-v2.webp"
            alt="Links coastline at first light"
            width={1500}
            height={942}
            priority
          />
        </div>
      </section>

      <DestinationsExplorer />

      <CtaBand />
    </>
  );
}
