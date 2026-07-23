'use client';

import Image from 'next/image';
import type { Country, Region } from '@/lib/destinations';

export type OpenPayload = { country: Country; region: Region };

export default function RegionCard({
  country,
  region,
  onOpen,
}: {
  country: Country;
  region: Region;
  onOpen: (payload: OpenPayload) => void;
}) {
  return (
    <button className="region-card" onClick={() => onOpen({ country, region })}>
      <div className="region-card-media">
        {region.cardImg ? (
          <Image
            className="region-card-img"
            src={region.cardImg}
            alt={region.name}
            width={600}
            height={400}
            style={region.cardPos ? { objectPosition: region.cardPos } : undefined}
          />
        ) : (
          <div className="region-card-img img-fallback" aria-hidden="true">
            <span>{region.name}</span>
          </div>
        )}
        {region.credit && <span className="region-card-credit">{region.credit}</span>}
      </div>
      <div className="region-meta">
        <div className="region-area">{region.area}</div>
        <h3 className="region-name">{region.name}</h3>
        <p className="region-note">{region.note}</p>
        <span className="region-more">Explore region →</span>
      </div>
    </button>
  );
}
