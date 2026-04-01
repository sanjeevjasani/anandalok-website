'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const container = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax bg
      gsap.to('.bg-parallax', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
      
      // Text fade up
      gsap.from('.phil-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const textureImage = "/philosophy-texture.jpg";

  return (
    <section id="philosophy" ref={container} className="relative w-full py-24 bg-dark overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image src={textureImage} alt="Texture" fill className="bg-parallax object-cover opacity-[0.1] mix-blend-screen" sizes="100vw" />
        <div className="absolute inset-0 bg-dark/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-16 flex flex-col gap-4 md:gap-6 max-w-5xl">
        <p className="phil-text font-body text-cream/50 text-xl md:text-2xl tracking-wide">
          Most care facilities focus on <span className="text-cream">clinical isolation.</span>
        </p>
        <p className="phil-text font-drama italic text-cream text-5xl md:text-8xl leading-tight">
          We focus on unlocking the <br/> <span className="text-accent">artist inside.</span>
        </p>
        <p className="phil-text mt-8 max-w-2xl text-cream/70 font-body text-lg md:text-xl leading-relaxed">
          At Anandalok, we don't believe in managing people with autism. We believe in celebrating them. Our campus isn't a hospital. It's a canvas — where every resident finds their colour, their rhythm, their voice.
        </p>
      </div>
    </section>
  );
}
