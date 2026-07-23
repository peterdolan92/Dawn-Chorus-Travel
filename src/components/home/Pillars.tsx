import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';

const PILLARS = [
  {
    n: '01',
    title: 'The Golf.',
    cap: 'Championship links and hidden local gems alike, set among dunes, heathland and rugged coastline. Courses full of character, shaped by the land they sit on.',
    img: '/assets/pillar-01-golf-v3-opt.webp',
  },
  {
    n: '02',
    title: 'Where the Locals Gather.',
    cap: 'The quiet local, the corner snug, the late session of trad music. The spots that belong to the community, where the day winds down and the welcome is always warm.',
    img: '/assets/pillar-02-pubs-v3.jpg',
  },
  {
    n: '03',
    title: "Insider's Guide To Food & Culture.",
    cap: 'The food, the people and the traditions that belong to a place. Authentic experiences, opened up by those who know it best.',
    img: '/assets/pillar-03-food-opt.webp',
  },
  {
    n: '04',
    title: 'Cliffs To Castles.',
    cap: 'From dramatic coastlines to ancient ruins, the scenery is half the journey. There is always time to stop, explore, and take it in.',
    img: '/assets/pillar-04-castles-v3-opt.webp',
  },
];

export default function Pillars() {
  return (
    <section className="section" style={{ background: '#f4f1ea', paddingBottom: 32 }}>
      <div className="container">
        <Reveal as="div" style={{ marginBottom: 64 }}>
          <div style={{ marginBottom: 20 }}>
            <Eyebrow>What&apos;s on the card</Eyebrow>
          </div>
          <h2 className="subheading" style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.02, letterSpacing: '-1.2px' }}>
            Golf is the <em style={{ fontFamily: 'var(--annon-font-serif)', fontWeight: 400 }}>excuse.</em>
            <br />
            The rest is why you stay.
          </h2>
          <p className="body-lg" style={{ maxWidth: 480, color: 'var(--annon-fg-2)', marginTop: 20 }}>
            Every trip we plan is shaped by four threads.
          </p>
        </Reveal>

        <Reveal as="div" className="pillars" stagger>
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="pillar"
              style={p.img ? { backgroundImage: `url('${p.img}')` } : undefined}
            >
              {!p.img && (
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(120% 140% at 85% 0%, rgba(255,255,255,0.12) 0%, transparent 55%), linear-gradient(135deg, #2f3b30, #1a2e1f)',
                  }}
                />
              )}
              <div className="pillar-num">{p.n}</div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-caption">{p.cap}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
