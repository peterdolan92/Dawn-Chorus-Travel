import type { Metadata } from 'next';
import BrandBand from '@/components/home/BrandBand';
import HomeHero from '@/components/home/HomeHero';
import Pillars from '@/components/home/Pillars';
import HomeDestinations from '@/components/home/HomeDestinations';
import Manifesto from '@/components/home/Manifesto';
import Reviews from '@/components/home/Reviews';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: { absolute: 'Dawn Chorus — Bespoke Golf & Culture Travel in Ireland, Scotland & England' },
  description:
    'Across Ireland, Scotland and England, we shape golf trips guided by rhythm, place and atmosphere — from celebrated links to quieter corners of the game.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <div className="home-top">
        <BrandBand />
        <HomeHero />
      </div>
      <Pillars />
      <HomeDestinations />
      <Manifesto />
      <Reviews />
      <CtaBand />
    </>
  );
}
