import Link from 'next/link';
import Reveal from './Reveal';

export default function CtaBand() {
  return (
    <section className="section-sm">
      <div className="container">
        <Reveal as="div" className="cta-band">
          <div>
            <h2>
              Let&apos;s <em>design</em> your next trip.
            </h2>
            <p style={{ marginTop: 24 }}>
              Tell us how you like to travel; we&apos;ll take care of the rest.
            </p>
          </div>
          <div className="cta-actions" style={{ justifyContent: 'flex-end' }}>
            <Link href="/contact" className="btn btn-accent">
              Start planning
            </Link>
            <Link href="/services" className="btn btn-outlined">
              See services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
