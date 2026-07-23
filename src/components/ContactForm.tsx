'use client';

import { useState, FormEvent } from 'react';

const CONTACT_EMAIL = 'hello@dawnchorustravel.com';
const WEB3FORMS_KEY = '996c5758-822f-4ddc-9957-f8cca4d2812a';

export default function ContactForm() {
  const [tripType, setTripType] = useState<'bespoke' | 'consult'>('bespoke');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append('trip_type', tripType === 'bespoke' ? 'Bespoke trip' : 'Consultancy call');

    const hasKey = WEB3FORMS_KEY && !WEB3FORMS_KEY.startsWith('REPLACE');
    if (hasKey) {
      setStatus('sending');
      fd.append('access_key', WEB3FORMS_KEY);
      fd.append('subject', 'New Dawn Chorus enquiry');
      fd.append('from_name', 'Dawn Chorus website');
      try {
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.success) {
          setStatus('ok');
          form.reset();
        } else setStatus('error');
      } catch {
        setStatus('error');
      }
    } else {
      const g = (k: string) => (fd.get(k) || '').toString().trim();
      const lines = [
        'Enquiry type: ' + (tripType === 'bespoke' ? 'Bespoke trip' : 'Consultancy call'),
        'Name: ' + g('name'),
        'Email: ' + g('email'),
        'Phone: ' + g('phone'),
      ];
      if (tripType === 'bespoke') {
        lines.push(
          'Destination: ' + g('destination'),
          'Party size: ' + g('party_size'),
          'Ideal month: ' + g('month'),
          'Accommodation: ' + g('accommodation')
        );
      }
      lines.push('', g('message'));
      window.location.href =
        'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Website enquiry') + '&body=' + encodeURIComponent(lines.join('\n'));
    }
  };

  return (
    <div className="contact-card">
      <h3>Plan a trip</h3>
      <p>I&apos;ll reply within 24 hours with a time to talk properly.</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <button type="button" className="tweak-chip" data-active={tripType === 'bespoke'} onClick={() => setTripType('bespoke')}>
          Bespoke trip
        </button>
        <button type="button" className="tweak-chip" data-active={tripType === 'consult'} onClick={() => setTripType('consult')}>
          Consultancy call
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input name="name" placeholder="John Doe" required />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input name="email" type="email" placeholder="you@domain.com" required />
        </div>
        {tripType === 'bespoke' && (
          <>
            <div className="form-row-2">
              <div className="form-row">
                <label>Destination</label>
                <select name="destination" defaultValue="scotland">
                  <option value="scotland">Scotland</option>
                  <option value="ireland">Ireland</option>
                  <option value="england">England</option>
                  <option value="both">Multiple / not sure</option>
                </select>
              </div>
              <div className="form-row">
                <label>Party size</label>
                <select name="party_size" defaultValue="4">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10+</option>
                </select>
              </div>
            </div>
            <div className="form-row-2">
              <div className="form-row">
                <label>Ideal month</label>
                <input name="month" placeholder="e.g. May 2027" />
              </div>
              <div className="form-row">
                <label>Accommodation</label>
                <select name="accommodation" defaultValue="5star">
                  <option value="5star">5 star</option>
                  <option value="4star">4 star</option>
                  <option value="bnb">Bed &amp; Breakfast (Guesthouse)</option>
                  <option value="undecided">Undecided (please advise)</option>
                </select>
              </div>
            </div>
          </>
        )}
        {tripType === 'consult' && (
          <div className="form-row">
            <label>
              Phone <span style={{ fontWeight: 400, opacity: 0.6 }}>(optional)</span>
            </label>
            <input name="phone" type="tel" placeholder="For the video call, if easier than email" />
          </div>
        )}
        <div className="form-row">
          <label>What do you want the trip to feel like?</label>
          <textarea
            name="message"
            placeholder="Courses you'd love, things you'd hate, anyone worth impressing, anything off-limits…"
          />
        </div>
        <button type="submit" className="btn btn-accent" style={{ width: '100%', marginTop: 8 }} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
        <p style={{ fontSize: 12, color: 'var(--annon-fg-3)', marginTop: 10, textAlign: 'center' }}>
          No obligation, no planning fee, no strings: only a conversation about the trip.
        </p>
        {status === 'ok' ? (
          <p style={{ fontSize: 13, color: 'var(--accent)', marginTop: 16, textAlign: 'center', fontWeight: 500 }}>
            Thank you — your enquiry is on its way. I&apos;ll reply within 24 hours.
          </p>
        ) : status === 'error' ? (
          <p style={{ fontSize: 13, color: '#b23b3b', marginTop: 16, textAlign: 'center' }}>
            Something went wrong. Please email{' '}
            <a href={'mailto:' + CONTACT_EMAIL} style={{ color: 'inherit', textDecoration: 'underline' }}>
              {CONTACT_EMAIL}
            </a>{' '}
            directly.
          </p>
        ) : (
          <p style={{ fontSize: 12, color: 'var(--annon-fg-3)', marginTop: 16, textAlign: 'center' }}>
            No newsletter, no drip sequence, just a reply.
          </p>
        )}
      </form>
    </div>
  );
}
