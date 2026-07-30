import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Services',
  description:
    "Two ways to work with Dawn Chorus: fully managed bespoke trip planning across Ireland, Scotland and England, or a focused hour of consultancy to sharpen a trip you're already planning.",
  alternates: { canonical: '/services' },
};

const PROCESS = [
  ['Step 01', 'The brief', 'A proper conversation. What you want the trip to feel like, not just which courses.'],
  ['Step 02', 'The draft', 'We take it away and return with an itinerary: options laid out, with honest trade-offs.'],
  ['Step 03', 'The bookings', 'Once you sign off, we handle every booking and confirmation. You handle packing.'],
  ['Step 04', 'The trip', "We're on the end of a phone from the minute you arrive to the minute you're back home."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="container">
          <div style={{ marginBottom: 28 }}>
            <Eyebrow>Services</Eyebrow>
          </div>
          <h1
            className="page-title"
            style={{
              fontFamily: 'var(--annon-font-display)',
              fontWeight: 500,
              fontSize: 'clamp(40px, 6vw, 84px)',
              lineHeight: 1.0,
              letterSpacing: '-1.6px',
              margin: 0,
              maxWidth: 1200,
            }}
          >
            Two ways to <em style={{ fontFamily: 'var(--annon-font-serif)', fontWeight: 400 }}>work</em>{' '}with Dawn&nbsp;Chorus.
          </h1>
          <p className="body-lg" style={{ color: 'var(--annon-fg-2)', maxWidth: 680, marginTop: 32 }}>
            One end-to-end and fully managed. The other, a focused hour of advice. Both start with a real conversation.
          </p>

          <Reveal as="div" className="svc-hero-grid" stagger>
            <div className="svc-deep-card dark">
              <Eyebrow>01 · Full-service</Eyebrow>
              <h2 style={{ marginTop: 16 }}>
                Bespoke <em>trip</em>
                <br />
                planning.
              </h2>
              <p style={{ fontFamily: 'var(--annon-font-body)', fontSize: 16, lineHeight: 1.6, opacity: 0.8, maxWidth: 420 }}>
                A tailored itinerary across Ireland, Scotland or England, built around your group. Courses,
                transport, stays, dining and the experiences in between — we plan it, manage it, and stay on hand
                throughout.
              </p>
              <div className="price-line">Solo travellers to large groups · all welcome</div>
              <ul className="includes-list">
                <li>
                  <span>90-minute intake call to shape the trip</span>
                </li>
                <li>
                  <span>Course selection &amp; tee-time management</span>
                </li>
                <li>
                  <span>Hotels, castle stays and accommodation full of character</span>
                </li>
                <li>
                  <span>Private drivers and ground transport, end to end</span>
                </li>
                <li>
                  <span>Restaurant recommendations, distilleries with private tastings and unique food experiences</span>
                </li>
                <li>
                  <span>Cultural half-days: sightseeing, local heritage and time to explore</span>
                </li>
                <li>
                  <span>A detailed itinerary and support throughout your trip</span>
                </li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <Link href="/contact" className="btn btn-accent">
                  Start planning
                </Link>
              </div>
            </div>

            <div className="svc-deep-card">
              <Eyebrow>02 · Consultancy</Eyebrow>
              <h2 style={{ marginTop: 16 }}>
                Pick my <em>brain</em>
                <br />
                for an hour.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--annon-font-body)',
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: 'var(--annon-fg-2)',
                  maxWidth: 420,
                }}
              >
                For the DIY planner. Bring your draft itinerary, your shortlist, or just a notebook — we&apos;ll
                spend an hour working through it together. And if you go on to book a full trip, the consultation
                fee comes straight off the price.
              </p>
              <div className="price-line" style={{ color: 'var(--annon-fg-2)' }}>
                €180 · 60 minutes · video call
              </div>
              <ul className="includes-list">
                <li>
                  <span>An honest read on your course list — what to keep, swap or skip</span>
                </li>
                <li>
                  <span>Routing and driving times that actually work</span>
                </li>
                <li>
                  <span>Where to stay in each town, and where to avoid</span>
                </li>
                <li>
                  <span>Restaurants, distilleries and food experiences</span>
                </li>
                <li>
                  <span>Local know-how you won&apos;t find online</span>
                </li>
                <li>
                  <span>Written follow-up notes within 48 hours</span>
                </li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <Link href="/contact" className="btn btn-primary">
                  Book a call
                </Link>
              </div>
            </div>
          </Reveal>
          <div className="page-photo-band">
            <Image
              src="/assets/services-photo-band-v2.jpg"
              alt="Clubhouse smoking room"
              width={1920}
              height={1256}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <Eyebrow>How it goes</Eyebrow>
          </div>
          <h2 className="subheading" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.8px', maxWidth: 900, margin: 0 }}>
            Four steps. All of them personal.
          </h2>
          <Reveal as="div" className="process" stagger>
            {PROCESS.map(([n, t, p]) => (
              <div key={n} className="process-step">
                <div className="p-num">{n}</div>
                <h4>{t}</h4>
                <p>{p}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section surface-muted">
        <div className="container">
          <Reveal
            as="div"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 40, flexWrap: 'wrap' }}
          >
            <div style={{ maxWidth: 620 }}>
              <div style={{ marginBottom: 20 }}>
                <Eyebrow>Destinations</Eyebrow>
              </div>
              <h2
                className="section-head"
                style={{
                  fontFamily: 'var(--annon-font-display)',
                  fontWeight: 500,
                  fontSize: 'clamp(36px, 4.5vw, 56px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.8px',
                  margin: '0 0 20px',
                }}
              >
                Where we go.
              </h2>
              <p className="body-lg" style={{ color: 'var(--annon-fg-2)', maxWidth: 520, margin: 0 }}>
                Ireland, Scotland and England, broken down region by region.
              </p>
            </div>
            <Link href="/destinations" className="btn btn-primary">
              Explore destinations →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
