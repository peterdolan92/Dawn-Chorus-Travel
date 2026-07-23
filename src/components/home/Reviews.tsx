import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';

const REVIEWS = [
  {
    stars: 5,
    text: "A brilliant Ireland trip, with a couple of rounds we'll never forget, playing Waterville and Ballybunion alongside my dad. We finished it off with a stay at the beautiful Dromoland Castle. Certainly, we'll be back.",
    who: 'Sean S.',
    trip: 'Southwest Ireland · 2026',
    cls: 'accent',
    wide: true,
  },
  {
    stars: 5,
    text: 'Peter sorted our golf in Kinsale and Killarney. We appreciated the sightseeing suggestions beyond golf too, which really helped round out the trip.',
    who: "Susan O'C",
    trip: 'Kinsale & Killarney · 2026',
  },
  {
    stars: 5,
    text: 'Peter took care of it all: where we stayed, how we got around, the meals, the golf. We just turned up and enjoyed ourselves.',
    who: 'Lee W.',
    trip: 'Ireland · 2024',
    cls: 'dark',
  },
  {
    stars: 5,
    text: 'Our itinerary changed several times, including a trip to the emergency room, and the help was always timely and exactly what we needed.',
    who: 'Mindy L.',
    trip: 'Scotland · 2024',
  },
  {
    stars: 5,
    text: 'Superb from start to finish. Peter booked us into great hotels and the golf was everything we could have wished for.',
    who: 'Daniel D.',
    trip: 'Scotland · 2026',
  },
  {
    stars: 5,
    text: 'Peter set up a week-long golf trip for 16 of us and it went off without a hitch. 10/10. Our gang would love to do another trip soon, maybe Scotland next time!',
    who: 'Tim S.',
    trip: 'Ireland · 2024',
    cls: 'accent',
    wide: true,
  },
  {
    stars: 5,
    text: 'Thirty of us across three generations. Peter managed every detail, and even tracked down our Irish relatives to arrange a reunion.',
    who: 'Gail B.',
    trip: 'Family trip · 2024',
  },
];

export default function Reviews() {
  return (
    <section className="section surface-muted">
      <div className="container">
        <Reveal as="div" className="reviews-head">
          <div>
            <div style={{ marginBottom: 20 }}>
              <Eyebrow>Working with Peter</Eyebrow>
            </div>
            <h2
              style={{
                fontFamily: 'var(--annon-font-display)',
                fontWeight: 500,
                fontSize: 'clamp(40px, 5vw, 72px)',
                lineHeight: 1.02,
                letterSpacing: '-1.2px',
                margin: 0,
              }}
            >
              What people say about working with{' '}
              <em style={{ fontFamily: 'var(--annon-font-serif)', fontWeight: 400 }}>Peter</em>
            </h2>
          </div>
          <div>
            <div className="reviews-score">
              <div className="google-g">G</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <div className="score-num">5.0</div>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="swipe-hint">Swipe for more →</div>
        <Reveal as="div" className="reviews-grid" stagger>
          {REVIEWS.map((r, i) => (
            <article key={i} className={`review-card ${r.cls || ''} ${r.wide ? 'wide' : ''}`}>
              <div className="review-stars">{'★'.repeat(r.stars)}</div>
              <p className="review-text">&quot;{r.text}&quot;</p>
              <div className="review-author">
                <div className="review-avatar">
                  {r.who
                    .split(' ')
                    .map((s) => s[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div className="review-meta-line">
                  <div className="review-author-name">{r.who}</div>
                  <div className="review-author-trip">{r.trip.split('·')[0].trim()}</div>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
