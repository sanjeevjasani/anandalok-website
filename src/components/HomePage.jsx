'use client';

import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Philosophy from './Philosophy';
import Truth from './Truth';
import Impact from './Impact';
import Protocol from './Protocol';
import Origin from './Origin';
import SuccessStory from './SuccessStory';
import ArtworkGallery from './ArtworkGallery';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Donation from './Donation';
import FAQ from './FAQ';

export default function HomePage() {
  return (
    <main id="home">
      {/* SECTION 2: HERO */}
      <Hero />

      {/* SECTION 3: THREE FEATURE CARDS */}
      <Features />

      {/* SECTION 4: DIFFERENTIATOR STATEMENT */}
      <Philosophy />

      {/* SECTION 5: THE TRUTH ABOUT ANANDALOK */}
      <Truth />

      {/* SECTION 6: IMPACT NUMBERS */}
      <Impact />

      {/* SECTION 7: OUR APPROACH / METHODOLOGY */}
      <Protocol />

      {/* SECTION 8: ORIGIN STORY */}
      <Origin />

      {/* SECTION 9: RESIDENT SUCCESS STORY */}
      <SuccessStory />

      {/* SECTION 10: ARTWORK GALLERY */}
      <ArtworkGallery />

      {/* SECTION 11: CAMPUS ENVIRONMENT */}
      <Gallery />

      {/* SECTION 12: FAMILY VOICES / TESTIMONIALS */}
      <Testimonials />

      {/* SECTION 13: SUPPORT / DONATE CTA */}
      <Donation />

      {/* SECTION 14: FAQ */}
      <FAQ />
    </main>
  );
}
