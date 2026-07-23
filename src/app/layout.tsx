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

const SITE_URL = 'https://dawnchorustravel.com';
const SITE_TITLE = 'Dawn Chorus — Bespoke Golf & Culture Travel in Ireland, Scotland & England';
const SITE_DESCRIPTION =
  'Dawn Chorus designs bespoke golf and culture journeys across Ireland, Scotland and England — championship links, hidden gems, and trips shaped around rhythm, place and atmosphere.';

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
        <Nav />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
