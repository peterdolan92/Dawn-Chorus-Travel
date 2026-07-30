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
            These Terms &amp; Conditions set out the basis on which PWJD Limited, registered in Ireland (CRO No.
            816286), trading as Dawn Chorus (&quot;Dawn Chorus&quot;, &quot;we&quot;, &quot;us&quot; or
            &quot;our&quot;), provides bespoke golf travel services. They apply to all enquiries, quotations and
            bookings. By making a booking with us, you confirm that you have read, understood and accepted these
            Terms &amp; Conditions.
          </p>

          <h2 style={h2}>About our service</h2>
          <p style={p}>
            Dawn Chorus designs and arranges bespoke golf travel itineraries across Ireland, Scotland and England.
            We act as an organiser and intermediary, arranging golf, accommodation, transport, dining and other
            elements of your itinerary with independent third-party suppliers on your behalf.
          </p>

          <h2 style={h2}>Enquiries &amp; Quotations</h2>
          <p style={p}>
            Any itinerary or price we provide is an estimate based on the information you give us and on supplier
            availability at the time. Prices and availability are not confirmed until your booking has been
            confirmed and any required deposit has been received.
          </p>

          <h2 style={h2}>Bookings &amp; Payment</h2>
          <p style={p}>
            A deposit, typically 40% of the total trip cost, is required to confirm your booking. The exact deposit
            amount and payment schedule will be detailed in your quotation and booking confirmation. The remaining
            balance is payable 90 days prior to your arrival, unless otherwise stated in your booking confirmation.
          </p>
          <p style={p}>
            A booking is confirmed once we have agreed the itinerary with you and received the deposit or other
            payment specified in your quotation. Until then, all quotations remain subject to availability, and
            hotels, golf tee times, transportation and other services cannot be guaranteed.
          </p>
          <p style={p}>
            Prices are based on supplier rates and applicable exchange rates at the time your quotation is
            prepared. Should supplier costs or exchange rates change before your booking is confirmed, we reserve
            the right to amend your quotation accordingly.
          </p>
          <p style={p}>
            Some elements of your itinerary may be subject to the separate terms and conditions of the suppliers
            providing those services.
          </p>
          <p style={p}>
            By making a booking and submitting payment, you confirm that you have read, understood and accepted
            these Terms &amp; Conditions on behalf of yourself and, where applicable, all members of your
            travelling party.
          </p>

          <h2 style={h2}>Deposits</h2>
          <p style={p}>
            Once your deposit has been received, we immediately begin securing your travel arrangements with
            hotels, golf courses, transportation providers and other suppliers.
          </p>
          <p style={p}>
            As many of our suppliers require deposits or advance payments to secure reservations, your deposit will
            generally become non-refundable once Dawn Chorus has confirmed your booking and commenced making
            payments to suppliers.
          </p>

          <h2 style={h2}>Group Bookings</h2>
          <p style={p}>
            Where a trip is booked for a group, the person making the booking does so on behalf of everyone in the
            party. The lead booker is responsible for passing on all relevant information we provide, including
            payment deadlines and booking updates, and for ensuring the details we hold for each traveller are
            accurate.
          </p>

          <h2 style={h2}>Late Payment</h2>
          <p style={p}>
            If payment is not received by the due date, we reserve the right to cancel the booking or release any
            reservations held with our suppliers. We cannot be held responsible for the loss of accommodation, tee
            times or other services resulting from late payment, and any additional costs required to reinstate a
            booking will be the responsibility of the traveller.
          </p>

          <h2 style={h2}>Changes, Cancellations &amp; Refunds</h2>
          <p style={p}>All cancellation requests must be submitted in writing.</p>
          <p style={p}>
            We act as an intermediary between you and the hotels, golf courses, transportation providers and other
            third-party suppliers included within your itinerary, each of which operates under its own booking,
            payment and cancellation terms.
          </p>
          <p style={p}>
            Should you need to cancel your trip, we will make every reasonable effort to recover any refundable
            amounts from our suppliers on your behalf.
          </p>
          <p style={p}>
            Any refund will depend on the cancellation policies of the individual suppliers and the extent to which
            payments have already been committed. Where payments have already been made to suppliers and cannot be
            recovered, we are unfortunately unable to refund those amounts.
          </p>
          <p style={p}>
            If a member of your group is unable to travel, we will, where possible, assist with transferring the
            booking to a replacement traveller, subject to supplier approval and any applicable amendment fees.
          </p>
          <p style={p}>
            Due to the bespoke nature of our itineraries, hotels, golf courses or other services may occasionally
            become unavailable after a quotation has been issued but before a booking is confirmed. In these
            circumstances, we will endeavour to arrange suitable alternatives of a comparable standard and will
            always discuss any material changes with you before proceeding.
          </p>

          <h2 style={h2}>Flights &amp; Air Travel</h2>
          <p style={p}>
            We plan and book the golf, accommodation and ground experience of your trip. Flights are arranged
            separately by you and are not part of our service.
          </p>
          <p style={p}>
            Any flights you book are a matter between you and the airline and are entirely separate from the trip
            we arrange. We have no responsibility or liability in respect of your air travel.
          </p>
          <p style={p}>
            Flights are not included in our prices. Any costs, fees, delays or cancellation charges relating to
            your flights are governed by the airline&apos;s own terms and conditions.
          </p>
          <p style={p}>
            Please do not book flights until we have confirmed your trip. If you choose to book flights before your
            itinerary has been confirmed and the trip is subsequently changed or cancelled, Dawn Chorus cannot be
            responsible for any costs incurred.
          </p>
          <p style={p}>
            Any ground transfers you arrange yourself, beyond those included within your itinerary, are also your
            own responsibility.
          </p>

          <h2 style={h2}>Your Responsibilities</h2>
          <p style={p}>You are responsible for:</p>
          <ul style={ul}>
            <li style={li}>Ensuring the names and personal details you provide are accurate.</li>
            <li style={li}>Holding valid passports, visas and any other travel documents required for your destination.</li>
            <li style={li}>Meeting all entry and health requirements applicable to your destination.</li>
            <li style={li}>Observing the rules, dress codes and etiquette of the golf clubs and venues you visit.</li>
            <li style={li}>Arranging appropriate travel insurance, which we strongly recommend.</li>
          </ul>
          <p style={p}>
            Dawn Chorus cannot be held responsible for any costs, delays or losses arising from a traveller&apos;s
            failure to meet these requirements.
          </p>

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

          <h2 style={h2}>Events Beyond Our Control</h2>
          <p style={p}>
            We cannot be held responsible for events beyond our reasonable control, including but not limited to
            extreme weather, course closures, transport disruption, industrial action, government restrictions or
            supplier failures.
          </p>
          <p style={p}>
            Where such events affect your trip, we will do everything reasonably possible to assist and identify
            suitable alternatives; however, any additional costs imposed by suppliers may still apply.
          </p>

          <h2 style={h2}>Liability</h2>
          <p style={p}>
            We take care in selecting and arranging the elements of your trip. As many services are delivered by
            independent third-party suppliers, our responsibility is limited to arranging those services with
            reasonable skill and care.
          </p>
          <p style={p}>
            Nothing in these Terms &amp; Conditions excludes or limits any liability that cannot be excluded or
            limited under applicable law.
          </p>

          <h2 style={h2}>Governing Law</h2>
          <p style={p}>
            These Terms &amp; Conditions are governed by the laws of Ireland. Any dispute arising in connection
            with them shall be subject to the exclusive jurisdiction of the Irish courts.
          </p>

          <h2 style={h2}>Contact Us</h2>
          <p style={p}>
            For any questions regarding these Terms &amp; Conditions, please contact PWJD Limited (trading as Dawn
            Chorus) at <strong>hello@dawnchorustravel.com</strong>.
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
