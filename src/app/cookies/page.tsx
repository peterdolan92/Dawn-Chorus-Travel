import type { Metadata } from 'next';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';

const updated = 'June 2026';
const h2: React.CSSProperties = { fontFamily: 'var(--annon-font-display)', fontWeight: 500, fontSize: 'clamp(22px, 2.4vw, 28px)', letterSpacing: '-0.4px', lineHeight: 1.15, margin: '44px 0 14px' };
const p: React.CSSProperties = { fontFamily: 'var(--annon-font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--annon-fg-2)', margin: '0 0 16px', maxWidth: 720 };
const li: React.CSSProperties = { fontFamily: 'var(--annon-font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'var(--annon-fg-2)', margin: '0 0 10px' };
const ul: React.CSSProperties = { margin: '0 0 16px', paddingLeft: 22, maxWidth: 720 };

export const metadata: Metadata = {
  title: 'Cookie Notice',
  description: 'How PWJD Limited, trading as Dawn Chorus, uses cookies and similar technologies on this website.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <section className="section legal-page" style={{ paddingTop: 56, paddingBottom: 80 }}>
      <div className="container">
        <div style={{ marginBottom: 24 }}>
          <Eyebrow>Legal</Eyebrow>
        </div>
        <h1 style={{ fontFamily: 'var(--annon-font-display)', fontWeight: 500, fontSize: 'clamp(38px, 5vw, 64px)', lineHeight: 1.04, letterSpacing: '-1px', margin: '0 0 14px' }}>
          Cookie Notice
        </h1>
        <p style={{ fontFamily: 'var(--annon-font-body)', fontSize: 14, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--annon-fg-2)', margin: '0 0 8px' }}>
          Last updated · {updated}
        </p>

        <div style={{ marginTop: 28 }}>
          <p style={p}>
            This notice explains how PWJD Limited, trading as Dawn Chorus, uses cookies and similar technologies on
            this website. It should be read alongside our{' '}
            <Link href="/privacy" style={{ cursor: 'pointer', textDecoration: 'underline', color: 'var(--annon-fg)' }}>
              Privacy Policy
            </Link>
            .
          </p>

          <h2 style={h2}>What cookies are</h2>
          <p style={p}>
            Cookies are small text files placed on your device when you visit a website. They are widely used to
            make sites work, to improve your experience, and to provide information to the site owners about how
            the site is used.
          </p>

          <h2 style={h2}>How we use cookies</h2>
          <ul style={ul}>
            <li style={li}>
              <strong>Essential cookies</strong> — needed for the website to function and to remember basic
              preferences as you browse.
            </li>
            <li style={li}>
              <strong>Analytics cookies</strong> — where used, these help us understand how visitors find and use
              the site so we can improve it. They collect information in an aggregated way.
            </li>
          </ul>
          <p style={p}>We do not use cookies to sell your information, and we only use non-essential cookies where permitted.</p>

          <h2 style={h2}>Managing cookies</h2>
          <p style={p}>
            You can control and delete cookies through your browser settings, and set most browsers to refuse them.
            Please note that disabling certain cookies may affect how parts of this website work. For more detail on
            managing cookies, see the help pages of your browser.
          </p>

          <h2 style={h2}>Contact us</h2>
          <p style={p}>
            If you have any questions about our use of cookies, contact PWJD Limited (trading as Dawn Chorus) at{' '}
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
