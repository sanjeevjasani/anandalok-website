'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { X, ZoomIn } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/campus1.jpg",
  "/campus2.jpg",
  "/campus3.jpg",
  "/campus4.jpg",
  "/campus5.jpg",
  "/campus6.jpg",
  "/campus7.jpg",
  "/campus8.jpg",
  "/campus9.jpg",
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.gallery-img', {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 md:px-16 container mx-auto">
      <div className="mb-12">
        <span className="font-data text-accent tracking-widest uppercase text-xs">A Home, Not a Hospital</span>
        <h2 className="font-heading font-bold text-4xl md:text-5xl mt-2">Campus Environment.</h2>
        <p className="mt-4 max-w-3xl text-dark/70 font-body text-lg">
          Spread across 2.4 acres of green, tree-lined campus in Madhyamgram — just 10 km from Kolkata Airport — Anandalok feels more like a family home than a care facility. Organic gardens, open spaces, classrooms, a digital learning centre, and dedicated areas for art, music, and dance.
        </p>
        <div className="mt-6">
           <Link href="/gallery#campus" className="text-accent text-sm font-heading font-bold uppercase tracking-widest flex items-center gap-2 group">
              See More Photos <span className="group-hover:translate-x-2 transition-transform">→</span>
           </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((src, i) => (
          <div 
            key={i} 
            className="gallery-img relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group bg-backgroundSecondary"
            onClick={() => openLightbox(i)}
          >
            <img src={src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-cream/50 hover:text-cream transition-colors">
            <X size={32} />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden">
            <img src={images[currentIndex]} alt="Lightbox" className="w-full h-full object-contain" />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            {images.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-accent w-6' : 'bg-cream/30'}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
