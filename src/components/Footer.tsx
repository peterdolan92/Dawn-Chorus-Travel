import Link from 'next/link';

const ANNON_NAV = [
  { id: 'home', href: '/', label: 'Home' },
  { id: 'destinations', href: '/destinations', label: 'Destinations' },
  { id: 'services', href: '/services', label: 'Services' },
  { id: 'about', href: '/about', label: 'About' },
  { id: 'contact', href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              Dawn Chorus
              <span className="dot" />
            </div>
            <div className="footer-line">
              Bespoke golf &amp; culture journeys across Ireland, Scotland and England. Thoughtfully planned, personal
              throughout.
            </div>
          </div>
          <div>
            <div className="footer-head">Site</div>
            <ul className="footer-list">
              {ANNON_NAV.map((n) => (
                <li key={n.id}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-head">Contact</div>
            <ul className="footer-list">
              <li>
                <a href="mailto:hello@dawnchorustravel.com">hello@dawnchorustravel.com</a>
              </li>
              <li>
                <a href="tel:+353851544125">+353 (0)85 154 4125</a>
              </li>
              <li>
                <span>Cork, Ireland.</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-head">Follow</div>
            <ul className="footer-list">
              <li>
                <a href="https://www.instagram.com/dawnchorustravel" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a>Journal</a>
              </li>
              <li>
                <a>Google reviews</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Dawn Chorus · Peter Dolan ·{' '}
            <Link className="footer-legal" href="/privacy">
              Privacy Policy
            </Link>{' '}
            ·{' '}
            <Link className="footer-legal" href="/terms">
              Terms
            </Link>{' '}
            ·{' '}
            <Link className="footer-legal" href="/cookies">
              Cookies
            </Link>
          </div>
          <div>A round, a story, a place worth knowing.</div>
          <div className="footer-entity">
            Dawn Chorus is a business name of PWJD Limited, registered in Ireland (CRO No. 816286).
          </div>
        </div>
      </div>
    </footer>
  );
}
