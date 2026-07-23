import type { Metadata } from 'next';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';

const updated = 'July 2026';
const h2: React.CSSProperties = { fontFamily: 'var(--annon-font-display)', fontWeight: 500, fontSize: 'clamp(22px, 2.4vw, 28px)', letterSpacing: '-0.4px', lineHeight: 1.15, margin: '44px 0 14px' };
const p: React.CSSProperties = { fontFamily: 'var(--annon-font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--annon-fg-2)', margin: '0 0 16px', maxWidth: 720 };
const li: React.CSSProperties = { fontFamily: 'var(--annon-font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--annon-fg-2)', margin: '0 0 10px' };
const ul: React.CSSProperties = { margin: '0 0 16px', paddingLeft: 22, maxWidth: 720 };

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms that apply to enquiries, quotes and bookings made with PWJD Limited, trading as Dawn Chorus.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section className="section legal-page" style={{ paddingTop: 56, paddingBottom: 80 }}>
      <div className="container">
        <div style={{ marginBottom: 24 }}>
          <Eyebrow>Legal</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--annon-font-display)', fontWeight: 500, fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.04, letterSpacing: '-1px', margin: '0 0 14px' }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ fontFamily: 'var(--annon-font-body)', fontSize: 14, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--annon-fg-2)', margin: '0 0 8px' }}>
          Last updated · {updated}
        </p>

        <div style={{ marginTop: 28 }}>
          <p style={p}>
            These terms set out the basis on which PWJD Limited, registered in Ireland (CRO No. 816286), trading as
            Dawn Chorus (&quot;Dawn Chorus&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;), provides golf and travel
            planning services. They apply to all
            enquiries, quotes and bookings. Please read them carefully; by booking a trip with us you agree to them.
          </p>

          <h2 style={h2}>About our service</h2>
          <p style={p}>
            Dawn Chorus designs and arranges bespoke golf and travel itineraries across Ireland, Scotland and
            England. We act as an organiser and intermediary, booking courses, accommodation, transport, dining and
            other elements on your behalf with independent third-party suppliers.
          </p>

          <h2 style={h2}>Enquiries &amp; quotes</h2>
          <p style={p}>
            Any itinerary or price we propose is an estimate based on the information you give us and on supplier
            availability at the time. Prices and availability are not confirmed until a booking is made and any
            required deposit is received.
          </p>

          <h2 style={h2}>Bookings &amp; payment</h2>
          <p style={p}>
            A deposit, typically 40% of the total trip cost, is required to confirm your booking. The exact deposit
            amount and payment schedule will be detailed in your quotation and booking confirmation. The remaining
            balance is payable 90 days prior to your arrival, unless otherwise stated in your booking confirmation.
          </p>
          <ul style={ul}>
            <li style={li}>A booking is confirmed once we have agreed the itinerary with you and received the deposit or payment we specify.</li>
            <li style={li}>Quotations are subject to availability until a deposit has been received. Hotels, golf tee times, transportation and other services cannot be guaranteed until your booking has been confirmed.</li>
            <li style={li}>Prices are based on supplier rates and applicable exchange rates at the time your quotation is prepared. Should supplier costs or exchange rates change before your booking is confirmed, we reserve the right to amend your quotation accordingly.</li>
            <li style={li}>Some elements may be subject to the separate terms of the supplier providing them.</li>
          </ul>

          <h2 style={h2}>Deposits</h2>
          <p style={p}>
            Once your deposit has been received, we immediately begin securing your travel arrangements with
            hotels, golf courses, transportation providers and other suppliers. As many of our suppliers require
            deposits or advance payments to confirm reservations, your deposit is generally non-refundable once
            Dawn Chorus has confirmed your booking and commenced making payments to suppliers.
          </p>

          <h2 style={h2}>Group bookings</h2>
          <p style={p}>
            Where a trip is booked for a group, the person making the booking does so on behalf of everyone in the
            party. That lead booker is responsible for passing on all relevant information to the other members, for
            collecting and settling payments, and for ensuring the details we hold for each person are correct.
          </p>

          <h2 style={h2}>Changes, cancellations &amp; refunds</h2>
          <p style={p}>
            All cancellation requests must be submitted in writing. We act as an intermediary between you and the
            hotels, golf courses, transportation providers and other third-party suppliers included within your
            itinerary, and each supplier operates under its own booking, payment and cancellation terms.
          </p>
          <p style={p}>
            Should you need to cancel your trip, we will make every reasonable effort to recover any refundable
            amounts from our suppliers on your behalf. Any refund will depend on the cancellation policies of the
            individual suppliers and the extent to which payments have already been committed. Where funds have
            already been paid to suppliers and cannot be recovered, those amounts cannot be refunded by us.
          </p>
          <p style={p}>
            If a member of your group is unable to travel, we will, where possible, assist with transferring the
            booking to a replacement traveller, subject to supplier approval and any applicable amendment fees.
          </p>
          <p style={p}>
            Due to the bespoke nature of our itineraries, hotels, golf courses or other services may occasionally
            become unavailable between quotation and confirmation. In these circumstances, we will endeavour to
            arrange suitable alternatives of a comparable standard and will always discuss any material changes
            with you before proceeding.
          </p>

          <h2 style={h2}>Flights &amp; air travel</h2>
          <p style={p}>
            We plan and book the golf, accommodation and ground experience of your trip. Flights are arranged
            separately, by you, and are not part of our service.
          </p>
          <ul style={ul}>
            <li style={li}>
              Any flights you book are a matter between you and the airline, entirely separate from the trip we
              arrange. We have no obligations or liability in respect of your air travel.
            </li>
            <li style={li}>
              Flights are not included in our prices. Any costs, fees, delays or cancellation charges relating to
              your flights are governed by the airline&apos;s own terms, not ours.
            </li>
            <li style={li}>
              Please don&apos;t book flights until we&apos;ve confirmed your trip. If you book before confirmation
              and the trip is later changed or cancelled, we can&apos;t be responsible for the cost of your ticket.
            </li>
            <li style={li}>
              Any ground transfers you arrange yourself, beyond what&apos;s included in your itinerary, are also
              your own responsibility.
            </li>
          </ul>

          <h2 style={h2}>Your responsibilities</h2>
          <ul style={ul}>
            <li style={li}>Ensuring the names and details you provide are accurate.</li>
            <li style={li}>Holding valid travel documents and meeting any entry requirements for your destination.</li>
            <li style={li}>Observing the rules, dress codes and etiquette of the golf clubs and venues you visit.</li>
            <li style={li}>Arranging your own travel insurance, which we strongly recommend.</li>
          </ul>

          <h2 style={h2}>Travel Insurance</h2>
          <p style={p}>
            We strongly recommend that all travellers purchase comprehensive travel insurance covering
            cancellation, medical expenses, travel disruption, personal belongings and other unforeseen
            circumstances.
          </p>
          <p style={p}>
            Dawn Chorus is pleased to recommend GolfSafe Travel Insurance; however, travellers are free to arrange
            insurance with a provider of their choice.
          </p>

          <h2 style={h2}>Events beyond our control</h2>
          <p style={p}>
            We cannot be held responsible for events outside our reasonable control — such as extreme weather,
            course closures, travel disruption, or supplier failures. Where these affect your trip we will do our
            best to find a suitable alternative, but any costs charged by the suppliers involved may still apply.
          </p>

          <h2 style={h2}>Liability</h2>
          <p style={p}>
            We take care in selecting and arranging the elements of your trip. As many services are delivered by
            independent suppliers, our responsibility is limited to arranging them with reasonable skill and care.
            Nothing in these terms limits any liability that cannot be limited under applicable law.
          </p>

          <h2 style={h2}>Governing law</h2>
          <p style={p}>
            These terms are governed by the laws of Ireland, and any disputes will be subject to the jurisdiction of
            the Irish courts.
          </p>

          <h2 style={h2}>Contact us</h2>
          <p style={p}>
            For any questions about these terms, contact PWJD Limited (trading as Dawn Chorus) at{' '}
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
