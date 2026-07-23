import type { Metadata } from 'next';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';

const updated = 'June 2026';
const h2: React.CSSProperties = { fontFamily: 'var(--annon-font-display)', fontWeight: 500, fontSize: 'clamp(22px, 2.4vw, 28px)', letterSpacing: '-0.4px', lineHeight: 1.15, margin: '44px 0 14px' };
const p: React.CSSProperties = { fontFamily: 'var(--annon-font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--annon-fg-2)', margin: '0 0 16px', maxWidth: 720 };
const li: React.CSSProperties = { fontFamily: 'var(--annon-font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--annon-fg-2)', margin: '0 0 10px' };
const ul: React.CSSProperties = { margin: '0 0 16px', paddingLeft: 22, maxWidth: 720 };

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PWJD Limited, trading as Dawn Chorus, collects, uses and protects your personal information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section className="section legal-page" style={{ paddingTop: 56, paddingBottom: 80 }}>
      <div className="container">
        <div style={{ marginBottom: 24 }}>
          <Eyebrow>Legal</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--annon-font-display)', fontWeight: 500, fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.04, letterSpacing: '-1px', margin: '0 0 14px' }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: 'var(--annon-font-body)', fontSize: 14, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--annon-fg-2)', margin: '0 0 8px' }}>
          Last updated · {updated}
        </p>

        <div style={{ marginTop: 28 }}>
          <p style={p}>
            PWJD Limited, trading as Dawn Chorus (&quot;Dawn Chorus&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;), designs bespoke golf and
            travel journeys across Ireland, Scotland and England. We take the privacy of everyone who contacts us
            seriously, and this policy explains what personal information we collect, why we collect it, and the
            choices you have. It applies to this website and to any enquiry, booking or trip we arrange on your
            behalf.
          </p>

          <h2 style={h2}>Who we are</h2>
          <p style={p}>
            PWJD Limited (trading as Dawn Chorus), registered in Ireland under CRO No. 816286, is the data
            controller responsible for your personal information. We are based in Cork, Ireland. If you have any
            questions about this policy or about how we handle your data, you can reach us at{' '}
            <strong>hello@dawnchorustravel.com</strong>.
          </p>

          <h2 style={h2}>Information we collect</h2>
          <p style={p}>We only collect what we need to answer your enquiry and plan your trip well. This may include:</p>
          <ul style={ul}>
            <li style={li}>
              <strong>Information you give us</strong> — your name, email address, telephone number, and the details
              you share when you make an enquiry or book a trip, such as your party size, preferred dates, courses
              and destinations of interest, handicap or playing standard, and any accommodation, dining,
              accessibility or dietary preferences.
            </li>
            <li style={li}>
              <strong>Trip and supplier details</strong> — information needed to arrange your itinerary with golf
              clubs, hotels, transport providers, restaurants and other suppliers.
            </li>
            <li style={li}>
              <strong>Payment information</strong> — where a deposit or payment is required, this is handled by our
              payment and banking providers; we do not store full card details ourselves.
            </li>
            <li style={li}>
              <strong>Information collected automatically</strong> — basic technical data such as your browser type
              and general location may be gathered through standard website analytics and cookies (see Cookies,
              below).
            </li>
          </ul>

          <h2 style={h2}>How we use your information</h2>
          <ul style={ul}>
            <li style={li}>To respond to your enquiry and provide the information you ask for.</li>
            <li style={li}>To plan, quote, book and manage your trip, and to liaise with the suppliers involved.</li>
            <li style={li}>To keep in touch with you about your booking and to handle any changes.</li>
            <li style={li}>To meet our legal, accounting and tax obligations.</li>
            <li style={li}>Where you have agreed, to send you occasional updates about Dawn Chorus. You can opt out at any time.</li>
          </ul>

          <h2 style={h2}>Our legal bases</h2>
          <p style={p}>
            Under the General Data Protection Regulation (GDPR) we rely on the following legal bases: performance of
            a contract (to arrange and deliver your trip); your consent (for example, optional marketing emails);
            our legitimate interests (to respond to enquiries and run our business); and compliance with legal
            obligations (such as retaining financial records).
          </p>

          <h2 style={h2}>Sharing your information</h2>
          <p style={p}>
            To arrange your trip we share relevant details with the suppliers involved — for example golf clubs,
            hotels, transport providers and restaurants — and with trusted service providers who help us operate,
            such as payment processors and IT or email providers. We do not sell your personal information, and we
            only share what is necessary for the purpose.
          </p>

          <h2 style={h2}>International transfers</h2>
          <p style={p}>
            Because we arrange travel across Ireland, the United Kingdom and elsewhere, your information may be
            shared with suppliers located outside your home country. Where data is transferred outside the European
            Economic Area, we take steps to ensure it is protected by appropriate safeguards.
          </p>

          <h2 style={h2}>How long we keep it</h2>
          <p style={p}>
            We keep your personal information only for as long as necessary. Enquiry details are kept while we are
            in contact and for a reasonable period afterwards. Booking and financial records are retained for as
            long as required to meet our legal and tax obligations under Irish law.
          </p>

          <h2 style={h2}>Your rights</h2>
          <p style={p}>You have the right to:</p>
          <ul style={ul}>
            <li style={li}>Access the personal information we hold about you.</li>
            <li style={li}>Ask us to correct anything that is inaccurate or incomplete.</li>
            <li style={li}>Ask us to delete your information, or to restrict or object to how we use it.</li>
            <li style={li}>Request a copy of certain information in a portable format.</li>
            <li style={li}>Withdraw your consent at any time, where we rely on it.</li>
          </ul>
          <p style={p}>
            To exercise any of these rights, please email us at <strong>hello@dawnchorustravel.com</strong>.
          </p>

          <h2 style={h2}>Cookies</h2>
          <p style={p}>
            This website may use a small number of cookies to help it function correctly and to understand how
            visitors use the site. You can control or disable cookies through your browser settings; doing so may
            affect how parts of the site work.
          </p>

          <h2 style={h2}>Security</h2>
          <p style={p}>
            We take reasonable technical and organisational measures to protect your personal information against
            loss, misuse and unauthorised access.
          </p>

          <h2 style={h2}>Changes to this policy</h2>
          <p style={p}>
            We may update this policy from time to time. Any changes will be posted on this page with a revised
            &quot;last updated&quot; date.
          </p>

          <h2 style={h2}>Contact us</h2>
          <p style={p}>
            For any questions about this policy or your personal information, contact Dawn Chorus Ltd. at{' '}
            <strong>hello@dawnchorustravel.com</strong>.
          </p>

          <p style={{ ...p, marginTop: 40 }}>
            <Link href="/contact" style={{ cursor: 'pointer', textDecoration: 'underline', color: 'var(--annon-fg)' }}>
              ← Back to contact
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
