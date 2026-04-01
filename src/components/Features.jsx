'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Home, Palette, Sun, Check } from 'lucide-react';
import gsap from 'gsap';

// ------------------------------------
// Card 1: Diagnostic Shuffler
// ------------------------------------
const CardShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, label: 'Family Atmosphere', icon: Home },
    { id: 2, label: '24/7 Professional Staff', icon: Check },
    { id: 3, label: 'Nutritious Meals', icon: Check },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full flex items-center justify-center bg-backgroundSecondary/30 border border-border/50 rounded-2xl overflow-hidden shadow-sm">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className="absolute p-6 rounded-2xl border border-border bg-background shadow-lg flex items-center gap-4 transition-all duration-700 w-72"
            style={{
              zIndex: 10 - i,
              transform: `translateY(${i * 14}px) scale(${1 - i * 0.05})`,
              opacity: 1 - i * 0.2,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className="p-3 bg-accent/20 rounded-xl text-accent"><Icon size={20} /></div>
            <span className="font-heading font-bold text-sm text-dark">{card.label}</span>
          </div>
        );
      })}
    </div>
  );
};

// ------------------------------------
// Card 2: Telemetry Typewriter
// ------------------------------------
const CardTypewriter = () => {
  const codeString = `> CREATIVE_WORKSPACE
[✓] Painting & Sculpting
[✓] Music & Dance Therapy
[✓] Farming & Crafting...
`;
  const [text, setText] = useState('');
  
  useEffect(() => {
    let current = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < codeString.length) {
        current += codeString[i];
        setText(current);
        i++;
      } else {
        // Reset to re-type
        setTimeout(() => { current = ''; setText(''); i = 0; }, 3000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-dark rounded-2xl p-6 h-48 flex flex-col text-cream">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        <span className="font-data text-xs opacity-50 tracking-widest uppercase">Live Feed</span>
      </div>
      <pre className="font-data text-sm whitespace-pre-wrap flex-1 text-accent">
        {text}<span className="animate-pulse bg-accent w-2 h-4 inline-block ml-1 align-middle"></span>
      </pre>
    </div>
  );
};

// ------------------------------------
// Card 3: Cursor Protocol Scheduler
// ------------------------------------
const CardScheduler = () => {
  const containerRef = useRef();
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.set('.cursor', { x: 0, y: 0, opacity: 0 })
        .to('.cursor', { opacity: 1, duration: 0.3 })
        .to('.cursor', { x: 140, y: 50, duration: 1, ease: 'power2.inOut' })
        // click
        .to('.cursor', { scale: 0.8, duration: 0.1 })
        .to('.day-cell.active', { backgroundColor: '#E8632B', color: '#FFF8F0', duration: 0.1 }, '<')
        .to('.cursor', { scale: 1, duration: 0.1 })
        // move to save
        .to('.cursor', { x: 220, y: 120, duration: 0.8, ease: 'power2.inOut', delay: 0.5 })
        // click
        .to('.cursor', { scale: 0.8, duration: 0.1 })
        .to('.save-btn', { scale: 0.95, duration: 0.1 }, '<')
        .to('.cursor', { scale: 1, duration: 0.1 })
        .to('.save-btn', { scale: 1, duration: 0.1 }, '<')
        .to('.cursor', { opacity: 0, duration: 0.3, delay: 0.5 });
        
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-48 rounded-2xl bg-backgroundSecondary border border-border p-6 flex flex-col justify-between">
      <div className="grid grid-cols-7 gap-1">
        {['S','M','T','W','T','F','S'].map((day, i) => (
          <div key={i} className={`day-cell h-8 rounded text-xs font-mono flex items-center justify-center transition-colors ${i > 0 && i < 6 ? 'bg-background border border-border' : 'bg-transparent opacity-30'} ${i === 3 ? 'active' : ''}`}>
            {day}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-end mt-4">
        <div className="font-data text-xs text-dark/60">
          10:30 AM - 4:30 PM
        </div>
        <button className="save-btn px-4 py-2 bg-dark text-cream rounded font-heading text-xs">
          Schedule
        </button>
      </div>
      
      {/* SVG Cursor mapping x,y absolutely */}
      <div className="cursor absolute top-0 left-0 w-5 h-5 z-20 pointer-events-none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2L20 10.4L12.5 12.5L10.4 20L4 2Z" fill="#FFF8F0" stroke="#2D2D2D" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-16 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Feature 1 */}
        <div className="flex flex-col gap-6">
          <CardShuffler />
          <div>
            <h3 className="font-heading font-bold text-xl mb-2 text-dark">24/7 Residential Care</h3>
            <p className="font-body text-dark/70 text-sm">A safe, loving home — not a facility. Full-time staff, round-the-clock supervision, nutritious meals, medical support, and the kind of warmth only family can give.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col gap-6">
          <CardTypewriter />
          <div>
            <h3 className="font-heading font-bold text-xl mb-2 text-dark">Creative Expression</h3>
            <p className="font-body text-dark/70 text-sm">Our residents paint, sing, dance, farm, and craft. Every day, they prove that autism is not a limitation — it is a different kind of brilliance.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col gap-6">
          <CardScheduler />
          <div>
            <h3 className="font-heading font-bold text-xl mb-2 text-dark">Day Care Programme</h3>
            <p className="font-body text-dark/70 text-sm">Structured day care for families in the Kolkata region — professional therapy, skill-building, and creative activities. A bridge between home and community.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
