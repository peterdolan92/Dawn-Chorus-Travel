import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500'],
});

const SITE_URL = 'https://www.dawnchorustravel.com';
const SITE_TITLE = 'Dawn Chorus — Bespoke Golf & Culture Travel in Ireland, Scotland & England';
const SITE_DESCRIPTION =
  'Across Ireland, Scotland & England, we shape journeys guided by rhythm, place, and atmosphere, from celebrated links to quieter corners of the game.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${SITE_URL}/#organization`,
  name: 'Dawn Chorus',
  alternateName: ['Dawn Chorus Travel', 'dawnchorustravel.com'],
  legalName: 'PWJD Limited',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/assets/dest-hero-v2.webp`,
  description:
    'Bespoke golf and culture tour operator designing private journeys across Ireland, Scotland and England.',
  email: 'hello@dawnchorustravel.com',
  telephone: '+353 85 15 44 125',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cork',
    addressCountry: 'IE',
  },
  areaServed: ['Ireland', 'Scotland', 'England'],
  knowsAbout: ['Golf travel', 'Links golf', 'Luxury travel in Ireland', 'Bespoke itineraries'],
  founder: {
    '@type': 'Person',
    name: 'Peter Dolan',
    sameAs: ['https://www.instagram.com/peterdolangolf/'],
  },
  sameAs: ['https://www.instagram.com/dawnchorustravel/'],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Dawn Chorus',
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: SITE_URL,
    siteName: 'Dawn Chorus',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: '/assets/dest-hero-v2.webp', width: 1500, height: 942, alt: 'Links coastline at first light' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/assets/dest-hero-v2.webp'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Nav />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
