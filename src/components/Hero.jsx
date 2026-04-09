'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  // Using user provided image
  const heroImage = "/hero.jpg";

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 pb-20 bg-dark overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <Image src={heroImage} alt="Anandalok Campus" fill className="object-cover opacity-40 grayscale" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
      </div>
      
      {/* Centered Content */}
      <div className="container mx-auto max-w-5xl space-y-12 relative z-10 hero-content">
        <div className="hero-elem font-heading font-bold text-accent tracking-widest uppercase text-sm block">
          Since 1989. Kolkata's First Residential Sanctuary <br className="hidden md:block" /> for Individuals with Autism, Down Syndrome, ADHD & More.
        </div>
        
        <h1 className="hero-elem font-heading font-bold text-5xl md:text-7xl text-cream leading-[0.9]">
          They Are <br/> Extraordinary Artists. <br/> Not Just Patients.
        </h1>
        
        <p className="hero-elem max-w-3xl mx-auto text-cream/70 font-body text-xl md:text-2xl leading-relaxed">
          Anandalok is a home where 35 extraordinary people live, learn, create, and thrive on a lush 2.4-acre campus near Kolkata.
        </p>

        <div className="hero-elem flex flex-wrap justify-center gap-6 pt-8">
          <a href="#gallery" className="px-10 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl">
            See Their World
          </a>
          <Link href="/donate" className="px-10 py-5 border-2 border-cream/20 text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-cream/10 transition-colors">
            Support an Artist
          </Link>
        </div>
      </div>
    </section>
  );
}
