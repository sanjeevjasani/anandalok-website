'use client';

import React, { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProtocolCard = ({ step, title, desc, SVGAnimation, isLast }) => {
  return (
    <div className={`protocol-card md:sticky top-24 md:top-32 min-h-screen md:h-[calc(100dvh-8rem)] w-full flex items-start justify-center bg-background transform-gpu pt-4 md:pt-20 pb-20 md:pb-0 ${!isLast ? 'border-b border-border' : ''}`}>
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 w-full max-w-6xl">
        
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <span className="font-data text-accent tracking-widest uppercase text-xs">Phase // {step}</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark leading-tight">{title}</h2>
          <p className="font-body text-dark/70 text-sm md:text-lg max-w-md mx-auto md:mx-0">{desc}</p>
        </div>

        <div className="flex-1 w-full max-w-[240px] md:max-w-md aspect-square rounded-[2rem] md:rounded-[3rem] bg-backgroundSecondary flex items-center justify-center border border-border shadow-inner overflow-hidden relative mt-4 md:mt-0">
          <SVGAnimation />
        </div>

      </div>
    </div>
  );
};

const MotifRotating = () => {
  const svgRef = useRef();
  useEffect(() => {
    gsap.to(svgRef.current, { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
  }, []);
  return (
    <svg ref={svgRef} className="w-3/4 h-3/4 opacity-80" viewBox="0 0 100 100" fill="none" stroke="#E8632B" strokeWidth="1">
      <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
      <circle cx="50" cy="50" r="30" />
      <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
      <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" strokeWidth="0.5" />
    </svg>
  );
};

const LineScanning = () => {
  const lineRef = useRef();
  useEffect(() => {
    gsap.fromTo(lineRef.current, 
      { top: '0%' }, 
      { top: '100%', y: '-100%', duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut' }
    );
  }, []);
  return (
    <div className="w-full h-full relative p-8">
      <div className="grid grid-cols-10 grid-rows-10 gap-2 w-full h-full opacity-30">
        {Array.from({length: 100}).map((_, i) => (
          <div key={i} className="w-full h-full bg-dark/20 rounded-full"></div>
        ))}
      </div>
      <div ref={lineRef} className="anim-scan absolute top-0 left-0 w-full h-1 bg-accent blur-[2px] shadow-[0_0_10px_#E8632B]"></div>
    </div>
  );
};

const WavePulse = () => {
  const pathRef = useRef();
  useEffect(() => {
    gsap.fromTo(pathRef.current, 
      { strokeDashoffset: 600 }, 
      { strokeDashoffset: 0, duration: 3, repeat: -1, ease: 'none' }
    );
  }, []);
  return (
    <svg className="w-3/4 h-3/4 opacity-80" viewBox="0 0 200 100" fill="none" stroke="#E8632B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path ref={pathRef} d="M10 50 L40 50 L50 20 L70 80 L80 50 L110 50 L120 30 L140 70 L150 50 L190 50" strokeDasharray="600" strokeDashoffset="600" />
    </svg>
  );
};

export default function Protocol() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: 'top 128px',
          endTrigger: cards[index + 1],
          end: 'top 128px',
          pin: window.innerWidth > 768,
          pinSpacing: false,
          scrub: true,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: 'blur(20px)',
            ease: 'none'
          })
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={container} className="relative w-full bg-background">
      <div className="w-full pt-20 md:pt-40 pb-6 md:pb-10 text-center">
        <h2 className="font-drama italic text-dark/10 text-6xl md:text-8xl tracking-tighter">The Methodology</h2>
      </div>

      <ProtocolCard 
        step="01"
        title="Residential Living"
        desc="Every resident at Anandalok has a bed, a routine, a purpose, and people who know their name. Our residential programme provides 24/7 care with full-time staff, psychologists, and special educators — all within a warm, family-style environment on our green 2.4-acre campus in Madhyamgram, just 10 km from Kolkata Airport. This is not assisted living. This is life — with dignity, joy, and belonging."
        SVGAnimation={MotifRotating}
        isLast={false}
      />
      
      <ProtocolCard 
        step="02"
        title="Creative and Vocational Training"
        desc="Every morning our campus comes alive. In one room, brushes meet canvas. In another, hands shape clay. Outside, residents tend the organic vegetable garden they planted themselves. Our structured daily programmes include art and music therapy, dance, computer training, farming, cooking, and craft-making — all guided by trained professionals. These are not just activities. They are how our residents find their voice."
        SVGAnimation={LineScanning}
        isLast={false}
      />

      <ProtocolCard 
        step="03"
        title="Day Care Support"
        desc="Not every family is ready for residential care — and they do not have to be. Our day care programme offers professional support, structured learning, creative activities, and therapeutic interventions for individuals with autism, Down syndrome, ADHD, epilepsy, and other intellectual disabilities living at home in the Kolkata region. Children and adults arrive each morning and return home each evening — better supported and more connected than the day before."
        SVGAnimation={WavePulse}
        isLast={true}
      />

    </section>
  );
}
