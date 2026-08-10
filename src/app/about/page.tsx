import type { Metadata } from 'next';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Founded by Peter Dolan, Dawn Chorus grew from a lifelong connection to golf on the links of Donegal into a bespoke travel company built on rhythm, place and time well spent.',
  alternates: { canonical: '/about' },
};

const INTERESTS: [string, string, string, string, string?][] = [
  ['01', 'Harbour Towns', 'Working ports, quiet movement, and life by the water.', '/assets/interest-harbour-towns-opt.webp'],
  ['02', 'Castles & Ruins', 'A little history woven through the days.', '/assets/interest-castles-opt.webp'],
  ['03', 'A Good Table', 'Fresh produce, local dishes, and conversation that lingers.', '/assets/interest-good-table-opt.webp'],
  ['04', 'The Local', 'A corner pub, a warm welcome, and no need to rush.', '/assets/interest-the-local-full.webp'],
  ['05', 'Live Music', 'A session building as the evening unfolds.', '/assets/interest-live-music-opt.webp'],
  ['06', 'Morning Ritual', 'A good coffee and an unhurried start.', '/assets/interest-morning-ritual-opt.webp'],
  ['07', 'Match Day', 'Football, rugby or GAA — another way to understand a place.', '/assets/interest-match-day-v2.webp', '75% 50%'],
  ['08', 'The Long Walk', 'Cliff paths, headlands, and space to clear the mind.', '/assets/interest-long-walk-opt.webp'],
];

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 56, paddingBottom: 60 }}>
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <Eyebrow>About · Dawn Chorus</Eyebrow>
          </div>
          <Reveal
            as="h1"
            className="about-lead"
            style={{
              fontFamily: 'var(--annon-font-display)',
              fontWeight: 500,
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.08,
              letterSpacing: '-0.8px',
              maxWidth: 1000,
              margin: 0,
            }}
          >
            Dawn Chorus is a golf travel company shaped by rhythm, place, and a belief in time well spent.
          </Reveal>
        </div>
      </section>

      <section className="section-sm about-photo-section">
        <div className="container">
          <Reveal as="div" className="about-grid">
            <div className="about-portrait" style={{ backgroundImage: "url('/assets/about-portrait-v2.jpg')" }} role="img" aria-label="Peter Dolan" />
            <div className="about-body">
              <p>
                Founded by Peter Dolan, an Irish golfer and travel specialist, Dawn Chorus grew from a long-standing
                way of travelling - centred on good company, great food, and a curiosity for the places visited
                along the way.
              </p>
              <p>
                Raised in Ireland, where golf is woven into the landscape and culture, Peter grew up with some of
                the world&apos;s finest courses on his doorstep. His connection with the game began on the links of
                Donegal, spending summers playing at Narin &amp; Portnoo with his grandfather, PJ. For him, golf is
                as much about where it takes you as how you play it: a reason to explore, spend time outdoors, and
                share memorable days with good company.
              </p>
              <p>
                Long before it became a business, Peter was organising golf trips for friends and family, bringing
                together thoughtful planning, personal touches, and a deep appreciation for what makes a trip
                meaningful. Several years working in bespoke golf travel helped refine that approach, but the
                feeling has always remained the same: the best golf experiences are about far more than the game
                itself.
              </p>
              <p>
                That idea sits at the heart of Dawn Chorus: golf as one of the finest ways to discover a place worth
                knowing.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <Eyebrow>Beyond the course</Eyebrow>
          </div>
          <h2 className="subheading" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.9px', maxWidth: 900, marginBottom: 40 }}>
            The things we look for
            <br />
            along the way.
          </h2>
          <Reveal as="div" className="interests-grid" stagger>
            {INTERESTS.map(([n, t, sub, img, pos]) => (
              <div
                key={n}
                className={img ? 'interest-tile has-photo' : 'interest-tile'}
                style={img ? { backgroundImage: `url(${img})`, ...(pos ? { backgroundPosition: pos } : {}) } : undefined}
              >
                <div className="i-num">{n}</div>
                <div>
                  <div className="i-title">{t}</div>
                  <div className="i-sub" style={{ fontFamily: 'var(--annon-font-body)', fontSize: 13, marginTop: 8, lineHeight: 1.45 }}>
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section surface-muted">
        <div className="container">
          <Reveal as="div">
            <div style={{ marginBottom: 40 }}>
              <Eyebrow>What we do</Eyebrow>
            </div>
            <h2
              className="about-lead"
              style={{
                fontFamily: 'var(--annon-font-display)',
                fontWeight: 500,
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.08,
                letterSpacing: '-0.8px',
                maxWidth: 1000,
                margin: 0,
              }}
            >
              We design bespoke golf journeys across Ireland, Scotland and England, shaped around how you like to
              travel.
            </h2>
            <p className="body-lg" style={{ color: 'var(--annon-fg-2)', maxWidth: 720, marginTop: 28 }}>
              Every trip is considered in detail, from select courses and distinctive stays to dining, transfers, and
              the rhythm of each day.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
