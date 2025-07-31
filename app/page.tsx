'use client';
import { HeroSection } from '@/components/hero-section';
import { IntroSection } from '@/components/intro-section';
import { SponsorsSection } from '@/components/sponsors-section';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <SponsorsSection />
    </div>
  );
}
