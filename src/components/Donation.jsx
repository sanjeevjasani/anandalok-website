'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Heart, Users, Share2, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  { amount: "₹5,000", label: "One month of nutritious\u00A0meals" },
  { amount: "₹15,000", label: "One month of complete\u00A0care" },
  { amount: "₹30,000", label: "A year of educational\u00A0materials" },
  { amount: "₹50,000", label: "Full annual support for one\u00A0resident" },
  { amount: "₹1,00,00,000", label: "Infrastructure for 40 more\u00A0residents" },
];

const waysToHelp = [
  { icon: Users, title: "Volunteer", desc: <>Share your time, skills,<br/>and heart</>, anchor: "/get-involved#volunteer" },
  { icon: Share2, title: "Spread Awareness", desc: <>Change how India thinks<br/>about autism</>, anchor: "/get-involved#awareness" },
  { icon: Building2, title: "Corporate Partnerships", desc: <>CSR programmes with<br/>real impact</>, anchor: "/get-involved#corporate" },
  { icon: MapPin, title: "Visit Us", desc: <>Come see the magic<br/>yourself</>, anchor: "/contact" },
];

export default function Donation() {
  const containerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.donate-animate', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="donate" ref={containerRef} className="py-24 px-6 md:px-16 bg-dark text-cream">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <span className="donate-animate inline-block font-data text-accent tracking-widest uppercase text-xs font-bold">
            Be the reason someone finds a home
          </span>
          <h2 className="donate-animate font-heading font-bold text-4xl md:text-6xl tracking-tight">
            They Are Not Asking for Pity. <br/> They Are Asking for a Canvas.
          </h2>
          <p className="donate-animate max-w-3xl mx-auto text-cream/70 font-body text-lg md:text-xl leading-relaxed mt-6">
            Right now Anandalok serves 35 residents. But every week families call with breaking voices, hoping we can take one more. Our dream is to welcome 100 individuals who need us. We have the land. We have the love. What we need is you.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {tiers.map((tier, i) => (
            <Link key={i} href="/donate" className="p-6 bg-cream/10 border border-cream/20 rounded-2xl flex flex-col justify-between group hover:bg-accent transition-all duration-500 hover:border-accent shadow-sm">
               <div>
                 <div className="font-heading font-bold text-2xl mb-2 text-cream group-hover:text-cream transition-colors">{tier.amount}</div>
                 <p className="text-sm text-cream/80 group-hover:text-cream/90 transition-colors leading-snug">{tier.label}</p>
               </div>
               <div className="mt-6 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-cream flex items-center gap-2">
                 Select <ArrowRight size={14} />
               </div>
            </Link>
          ))}
        </div>

        <div className="donate-animate flex justify-center mb-16">
          <Link href="/donate" className="px-12 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl shadow-2xl flex items-center gap-3">
             Donate Now <Heart size={20} fill="currentColor" />
          </Link>
        </div>

        {/* Other ways to help */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {waysToHelp.map((way, i) => (
            <a key={i} href={way.anchor} className="donate-animate flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-cream/5 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-cream transition-all duration-500 border border-cream/10">
                <way.icon size={28} />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2">{way.title}</h4>
              <p className="text-sm text-cream/50 leading-relaxed max-w-[200px]">{way.desc}</p>
              <div className="mt-4 text-accent group-hover:translate-x-2 transition-transform">
                <ArrowRight size={18} />
              </div>
            </a>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="donate-animate pt-12 border-t border-cream/10 flex flex-wrap justify-center gap-x-12 gap-y-6">
           <div className="flex items-center gap-2 text-xs font-data text-cream/40 tracking-widest uppercase">
             <CheckCircle2 size={16} className="text-accent" />
             80G Tax Exemption
           </div>
           <div className="flex items-center gap-2 text-xs font-data text-cream/40 tracking-widest uppercase">
             <CheckCircle2 size={16} className="text-accent" />
             FCRA Approved
           </div>
           <div className="flex items-center gap-2 text-xs font-data text-cream/40 tracking-widest uppercase">
             <CheckCircle2 size={16} className="text-accent" />
             Transparent Use of Funds
           </div>
           <div className="flex items-center gap-2 text-xs font-data text-cream/40 tracking-widest uppercase">
             <CheckCircle2 size={16} className="text-accent" />
             Registered Since 1988
           </div>
        </div>

      </div>
    </section>
  );
}
