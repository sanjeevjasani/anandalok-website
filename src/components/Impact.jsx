'use client';

import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ endValue, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 90%',
      onEnter: () => {
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentCount = progress * endValue;

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(endValue);
          }
        };

        requestAnimationFrame(animate);
      }
    });
    return () => trigger.kill();
  }, [endValue]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="font-heading font-bold text-5xl md:text-7xl text-cream mb-2">
        {endValue % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
      </div>
      <div className="font-data text-accent tracking-widest uppercase text-xs font-bold px-4">
        {label}
      </div>
    </div>
  );
};

export default function Impact() {
  const container = useRef();

  return (
    <section ref={container} className="py-24 bg-dark">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="font-heading font-bold text-3xl text-cream text-center mb-16 opacity-50 tracking-tight">
          36 Years of Love in Numbers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4">
          <StatItem endValue={36} label="Years of Continuous Care" suffix="+" />
          <StatItem endValue={35} label="Residents Who Call Anandalok Home" />
          <StatItem endValue={16} label="Full-Time Residential Staff" />
          <StatItem endValue={11} label="Visiting Professionals and Educators" />
          <StatItem endValue={2.4} label="Acres of Green Thriving Campus" />
          <StatItem endValue={1} label="Extraordinary Family" />
        </div>
      </div>
    </section>
  );
}
