import type { Metadata } from 'next';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

const CONTACT_EMAIL = 'hello@dawnchorustravel.com';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Start planning your golf trip to Ireland, Scotland or England — tell us what you have in mind and we'll reply within 24 hours.",
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="container">
          <div style={{ marginBottom: 28 }}>
            <Eyebrow>Contact</Eyebrow>
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
            }}
          >
            Start the <em style={{ fontFamily: 'var(--annon-font-serif)', fontWeight: 400 }}>conversation</em>.
          </h1>
          <p className="body-lg" style={{ color: 'var(--annon-fg-2)', maxWidth: 560, marginTop: 32 }}>
            Tell us a little about the trip you have in mind — we&apos;ll take it from there.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <Reveal as="div" className="contact-grid">
            <ContactForm />

            <div className="contact-card dark">
              <h3>What happens next</h3>
              <p>However you get in touch, it&apos;s a conversation, never a checkout.</p>

              <ol className="next-steps">
                <li>
                  <span className="next-num">01</span>
                  <div>
                    <div className="next-title">You send a few lines</div>
                    <div className="next-sub">Where you&apos;d like to go, roughly when, and who&apos;s travelling.</div>
                  </div>
                </li>
                <li>
                  <span className="next-num">02</span>
                  <div>
                    <div className="next-title">We talk it through</div>
                    <div className="next-sub">A relaxed call to shape the idea, no obligation, no hard sell.</div>
                  </div>
                </li>
                <li>
                  <span className="next-num">03</span>
                  <div>
                    <div className="next-title">You get a tailored plan</div>
                    <div className="next-sub">Courses, stays, and the rhythm of each day, built around you.</div>
                  </div>
                </li>
              </ol>

              <div className="next-direct">
                <span>Prefer to talk first?</span>
                <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
                <a href="tel:+353851544125">+353 85 154 4125</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <Reveal
            as="div"
            className="contact-details"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, borderTop: '1px solid var(--annon-border)', paddingTop: 48 }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                Email
              </div>
              <div style={{ fontFamily: 'var(--annon-font-display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.3px' }}>
                {CONTACT_EMAIL}
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                Phone
              </div>
              <div style={{ fontFamily: 'var(--annon-font-display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.3px' }}>
                +353 85 15 44 125
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                Based
              </div>
              <div style={{ fontFamily: 'var(--annon-font-display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.3px' }}>
                Cork, Ireland
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
