'use client';

import Image from 'next/image';
import Overlay from './Overlay';
import type { Country, Region } from '@/lib/destinations';

export default function RegionDetail({
  country,
  region,
  onClose,
}: {
  country: Country;
  region: Region;
  onClose: () => void;
}) {
  return (
    <Overlay onClose={onClose}>
      <div className="region-detail-grid">
        <div className="region-detail-media">
          {region.detailImg ? (
            <Image
              className="region-detail-img"
              src={region.detailImg}
              alt={region.name}
              width={1200}
              height={600}
              style={region.detailPos ? { objectPosition: region.detailPos } : undefined}
            />
          ) : (
            <div className="region-detail-img img-fallback" aria-hidden="true">
              <span>{region.name}</span>
            </div>
          )}
          {(region.detailCredit || region.credit) && (
            <span className="region-detail-credit">{region.detailCredit || region.credit}</span>
          )}
        </div>
        <div className="region-detail-body">
          <div className="region-detail-eyebrow">
            <span>{country.name}</span>
            <span className="region-detail-dot">·</span>
            <span>{region.area}</span>
          </div>
          <h2 className="region-detail-name">{region.name}</h2>
          <p className="region-detail-title">{region.blurbTitle}</p>
          <p className="region-detail-text">{region.blurb}</p>
          <div className="region-detail-courses">
            <div className="region-detail-courses-label">Courses we love here</div>
            <p className="region-detail-courses-list">{region.note}</p>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
