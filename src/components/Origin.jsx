'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Origin() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.origin-animate', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
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
    <section id="origin" ref={container} className="py-24 px-6 md:px-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="origin-animate mb-12">
          <span className="font-data text-accent tracking-widest uppercase text-xs font-bold">How It All Began</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-2 text-dark">
            Two Brothers. One Question. <br className="hidden md:block" /> A Lifetime of Answers.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="origin-animate space-y-6 text-dark/80 font-body text-lg leading-relaxed">
            <p>
              In 1989, two families in Kolkata faced the same terrifying question every parent of a child with autism eventually asks — who will take care of them when we are gone?
            </p>
            <p>
              Kashinath was Ashok Sengupta's younger brother. Jayanta was Mala Banerjee's cousin. Both had intellectual disabilities. Both needed lifelong care. And both families knew that one day they would not be there to provide it.
            </p>
            <p className="font-bold text-dark italic">
              That shared fear became a shared purpose.
            </p>
            <p>
              Ashok, his friend Bijoy Choudhury, and Mala Banerjee — a consumer activist and social worker — came together with a simple radical idea: build a permanent home where people like Kashinath and Jayanta could live safely, joyfully, and with dignity.
            </p>
            <div className="pt-4">
              <Link href="/about" className="text-accent font-heading font-bold hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                Read Our Full Story →
              </Link>
            </div>
          </div>

          <div className="origin-animate relative rounded-[3rem] overflow-hidden group shadow-xl">
             <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/5 transition-colors duration-500"></div>
             <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop" 
                alt="Anandalok history" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
               <span className="font-heading font-bold text-cream text-2xl">Since 1989</span>
               <p className="text-cream/80 text-sm mt-1">Founding families on our 2.4-acre campus.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
