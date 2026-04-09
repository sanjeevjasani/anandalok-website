'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Truth() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.truth-animate', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 px-6 md:px-16 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <div className="flex-1 space-y-8">
          <div className="truth-animate space-y-2">
            <span className="font-data text-accent tracking-widest uppercase text-sm font-bold">Let's Clear Something Up</span>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-dark leading-tight">
              Anandalok Is a Sanctuary for Neurodiverse Individuals. Not a Mental Asylum.
            </h2>
          </div>

          <div className="truth-animate space-y-6 text-dark/80 font-body text-lg leading-relaxed max-w-2xl">
            <p>
              Our residents are not mentally ill. They are not dangerous. They are not broken. They have autism and intellectual disabilities — neurological differences they were born with that make them experience the world in extraordinary ways.
            </p>
            <p>
              They are artists who paint in colours most of us never notice. Musicians who feel rhythm before they hear it. Gardeners who coax life from soil with a patience that humbles everyone around them.
            </p>
            <p>
              But because society still confuses these conditions with mental illness, families hide their children in shame. Neighbours whisper. Doors close.
            </p>
            <p className="font-bold text-dark italic">
              We open them.
            </p>
            <p>
              For over 36 years, Anandalok has been the home that says: come as you are. You belong here.
            </p>
          </div>
        </div>

        <div className="relative flex-1 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl truth-animate">
          <Image
            src="/community_meals_official.jpg"
            alt="Anandalok residents enjoying a community meal"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
