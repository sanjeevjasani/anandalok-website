'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SuccessStory() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.success-animate', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
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
    <section id="success" ref={container} className="py-24 px-6 md:px-16 bg-backgroundSecondary">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-16 max-w-6xl">
        
        <div className="relative flex-1 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl success-animate mt-10">
          <Image
            src="/rushadru_official.jpg"
            alt="Rushadru's success story"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex-1 space-y-8">
          <div className="success-animate space-y-2">
            <span className="font-data text-accent tracking-widest uppercase text-xs font-bold">A Story of Transformation</span>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-dark">
              Rushadru Found His Stage
            </h2>
            <p className="font-drama italic text-dark/60 text-xl">
              (Name changed to protect privacy)
            </p>
          </div>

          <div className="success-animate space-y-6 text-dark/80 font-body text-lg leading-relaxed">
            <p>
              When Rushadru arrived at Anandalok, his parents were out of options. At home, he was aggressive, non-verbal, and completely isolated — unable to connect with anyone, including his own family. They hoped for even the smallest breakthrough.
            </p>
            <p>
              Within six months, Rushadru began to speak — in his own unique way. He started joining group activities, forming friendships, expressing himself.
            </p>
            <p className="font-bold text-dark italic">
              And then came the music.
            </p>
            <p>
              Now whenever a song plays at Anandalok, Rushadru does not wait for an invitation. He leaps onto the stage, lost in rhythm and movement, his smile lighting up the room. He has become the heart of every celebration.
            </p>
          </div>

          <div className="success-animate relative p-8 bg-background rounded-3xl border border-accent/20 shadow-sm">
             <span className="absolute -top-6 left-6 text-7xl font-drama text-accent opacity-20">“</span>
             <p className="font-drama italic text-2xl text-dark leading-relaxed">
               We never thought we would see him this happy. Anandalok gave us our son back.
             </p>
             <p className="mt-4 font-heading font-bold text-xs uppercase tracking-widest text-accent">— Rushadru's parents</p>
          </div>

          <p className="success-animate font-heading font-bold text-dark text-lg">
            This is what happens when you stop treating someone as a patient and start seeing them as a person.
          </p>
          <div className="pt-10">
             <Link href="/stories" className="text-accent text-sm font-heading font-bold uppercase tracking-widest flex items-center gap-3 group">
                Read More Stories <span className="group-hover:translate-x-2 transition-transform">→</span>
             </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
