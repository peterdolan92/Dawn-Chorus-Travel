'use client';

import Link from 'next/link';
import Overlay from './Overlay';
import type { Country } from '@/lib/destinations';

export default function ItineraryDetail({ country, onClose }: { country: Country; onClose: () => void }) {
  const it = country.itinerary;

  const renderName = () => {
    if (!it.soft) return it.name;
    const idx = it.name.indexOf(it.soft);
    if (idx === -1) return it.name;
    const before = it.name.slice(0, idx);
    const after = it.name.slice(idx + it.soft.length);
    return (
      <>
        {before}
        <span className="soft">{it.soft}</span>
        {after}
      </>
    );
  };

  return (
    <Overlay onClose={onClose} className="itinerary-detail">
      <div className="region-detail-eyebrow">
        <span>{country.name}</span>
        <span className="region-detail-dot">·</span>
        <span>Sample itinerary · {it.duration}</span>
      </div>
      <h2 className="itinerary-name">{renderName()}</h2>
      <p className="itinerary-intro">{it.intro}</p>
      <div className="day-strip">
        {it.days.map((d) => (
          <div key={d.n} className="day-row">
            <div className="d-num">{d.n}</div>
            <div className="d-title">
              {d.title}
              <small>{d.sub}</small>
            </div>
            <div className="d-place">{d.where}</div>
          </div>
        ))}
      </div>
      <p className="itinerary-note">A sample trip — every Dawn Chorus trip is built from scratch, around you.</p>
      <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
        <Link className="btn btn-primary" href="/contact" onClick={onClose}>
          Plan a trip like this
        </Link>
      </div>
    </Overlay>
  );
}
