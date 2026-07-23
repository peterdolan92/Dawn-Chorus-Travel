'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import RegionCard, { OpenPayload } from '@/components/RegionCard';
import RegionDetail from '@/components/RegionDetail';
import ItineraryDetail from '@/components/ItineraryDetail';
import { DESTINATIONS, type Country } from '@/lib/destinations';

export default function DestinationsExplorer() {
  const [open, setOpen] = useState<OpenPayload | null>(null);
  const [itinerary, setItinerary] = useState<Country | null>(null);

  return (
    <>
      {DESTINATIONS.map((country) => (
        <section key={country.id} className="section dest-country" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <div className="container-wide">
            <Reveal as="div" className="dest-country-head">
              <div>
                <div className="dest-num">{country.n}</div>
                <h2 className="dest-name">{country.name}</h2>
              </div>
              <p className="dest-accent">{country.accent}</p>
            </Reveal>
            <div className="swipe-hint">Swipe regions →</div>
            <Reveal as="div" className="region-grid" stagger>
              {country.regions.map((r) => (
                <RegionCard key={r.id} country={country} region={r} onOpen={setOpen} />
              ))}
            </Reveal>
            {country.itinerary && (
              <button className="itinerary-cta" onClick={() => setItinerary(country)}>
                <div className="itinerary-cta-text">
                  <span className="itinerary-cta-label">Sample itinerary</span>
                  <span className="itinerary-cta-title">See how a trip to {country.name} comes together</span>
                </div>
                <span className="itinerary-cta-arrow">→</span>
              </button>
            )}
          </div>
        </section>
      ))}

      {open && <RegionDetail country={open.country} region={open.region} onClose={() => setOpen(null)} />}
      {itinerary && <ItineraryDetail country={itinerary} onClose={() => setItinerary(null)} />}
    </>
  );
}
