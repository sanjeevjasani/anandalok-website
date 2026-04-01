'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Our daughter is 25. We were losing sleep over who would care for her after us. Anandalok did not just take her in — they gave her a life we never thought possible.",
    author: "Parent of a resident"
  },
  {
    text: "The staff do not treat this like a job. They treat our son like family. That is something no amount of money can buy.",
    author: "Family member"
  },
  {
    text: "We visited dozens of facilities. Anandalok was the only one where we saw the residents smiling.",
    author: "Guardian of a resident"
  }
];

export default function Testimonials() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.test-animate', {
        y: 40,
        opacity: 0,
        duration: 1,
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
    <section ref={container} className="py-24 px-6 md:px-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="test-animate font-heading font-bold text-4xl md:text-5xl text-center mb-16 text-dark tracking-tight">
          What Families Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="test-animate flex flex-col p-10 bg-backgroundSecondary rounded-[2.5rem] border border-border shadow-sm transition-transform duration-500 hover:-translate-y-2">
              <Quote className="text-accent mb-6" size={40} fill="currentColor" fillOpacity={0.1} />
              <p className="flex-1 font-body text-dark/80 text-xl leading-relaxed mb-8">
                {item.text}
              </p>
              <div className="font-heading font-bold text-xs uppercase tracking-widest text-accent">
                — {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
