'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import RegionCard, { OpenPayload } from '@/components/RegionCard';
import RegionDetail from '@/components/RegionDetail';
import Reveal from '@/components/Reveal';
import { DESTINATIONS } from '@/lib/destinations';

const TEASER_ORDER: [string, string][] = [
  ['ireland', 'southwest'],
  ['england', 'london'],
  ['ireland', 'northwest'],
  ['scotland', 'lothian'],
  ['scotland', 'highlands'],
  ['england', 'kent'],
  ['scotland', 'standrews'],
  ['ireland', 'ni'],
  ['scotland', 'ayrshire'],
  ['england', 'liverpool'],
  ['ireland', 'east'],
  ['scotland', 'westcoast'],
  ['scotland', 'aberdeenshire'],
];

export default function HomeDestinations() {
  const [open, setOpen] = useState<OpenPayload | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = TEASER_ORDER.map(([countryId, regionId]) => {
    const country = DESTINATIONS.find((c) => c.id === countryId);
    const region = country?.regions.find((r) => r.id === regionId);
    return country && region ? { country, region } : null;
  }).filter((x): x is { country: (typeof DESTINATIONS)[number]; region: (typeof DESTINATIONS)[number]['regions'][number] } => Boolean(x));

  const scrollByCard = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.region-card');
    const step = card ? card.getBoundingClientRect().width + 12 : 300;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="home-dest section-sm">
      <div className="container">
        <Reveal as="div" className="home-dest-head">
          <div>
            <div style={{ marginBottom: 14 }}>
              <Eyebrow>Destinations</Eyebrow>
            </div>
            <h2 className="home-dest-title">Explore our regions.</h2>
          </div>
          <div className="home-dest-arrows">
            <button aria-label="Previous region" onClick={() => scrollByCard(-1)}>
              ←
            </button>
            <button aria-label="Next region" onClick={() => scrollByCard(1)}>
              →
            </button>
          </div>
        </Reveal>
      </div>
      <div className="home-dest-track region-grid" ref={trackRef}>
        {items.map(({ country, region }) => (
          <RegionCard key={country.id + '-' + region.id} country={country} region={region} onOpen={setOpen} />
        ))}
      </div>
      <div className="container">
        <Link className="home-dest-all" href="/destinations">
          See all destinations →
        </Link>
      </div>
      {open && <RegionDetail country={open.country} region={open.region} onClose={() => setOpen(null)} />}
    </section>
  );
}
