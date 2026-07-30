'use client';

import { useState, FormEvent } from 'react';

const CONTACT_EMAIL = 'hello@dawnchorustravel.com';
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

function validate(fd: FormData): string | null {
  const name = (fd.get('name') || '').toString().trim();
  const email = (fd.get('email') || '').toString().trim();
  const message = (fd.get('message') || '').toString().trim();

  if (!name) return 'Please enter your name.';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.';
  if (!message) return 'Let us know a little about the trip you have in mind.';
  return null;
}

export default function ContactForm() {
  const [tripType, setTripType] = useState<'bespoke' | 'consult'>('bespoke');
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [fieldError, setFieldError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot: real visitors never fill this in, bots that auto-fill every input do.
    if ((fd.get('botcheck') || '').toString().trim() !== '') return;

    const validationMessage = validate(fd);
    setFieldError(validationMessage);
    if (validationMessage) return;

    if (!WEB3FORMS_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    fd.append('trip_type', tripType === 'bespoke' ? 'Bespoke trip' : 'Consultancy call');
    fd.append('access_key', WEB3FORMS_KEY);
    fd.append('subject', 'New Dawn Chorus enquiry');
    fd.append('from_name', 'Dawn Chorus website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
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

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
        />
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
            required
            placeholder="Courses you'd love, things you'd hate, anyone worth impressing, anything off-limits…"
          />
        </div>
        {fieldError && (
          <p style={{ fontSize: 13, color: '#b23b3b', marginTop: 10, textAlign: 'center' }}>{fieldError}</p>
        )}
        <button type="submit" className="btn btn-accent" style={{ width: '100%', marginTop: 8 }} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
        <p style={{ fontSize: 12, color: 'var(--annon-fg-3)', marginTop: 10, textAlign: 'center' }}>
          No obligation, no planning fee, no strings: only a conversation about the trip.
        </p>
        {status === 'ok' ? (
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--annon-font-display)',
                fontSize: 22,
                fontWeight: 600,
                lineHeight: 1.3,
                color: 'var(--accent)',
                margin: 0,
              }}
            >
              Thank you for your query — we&apos;ll endeavour to respond quickly during working hours.
            </p>
          </div>
        ) : status === 'error' ? (
          <p style={{ fontSize: 13, color: '#b23b3b', marginTop: 16, textAlign: 'center' }}>
            Something went wrong sending your enquiry. Please try again, or email{' '}
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
