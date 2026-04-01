'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const artworks = [
  { src: "/gallery1.jpeg", name: "Resident Artist", medium: "Painting" },
  { src: "/gallery2.jpeg", name: "Resident Artist", medium: "Craft" },
  { src: "/gallery3.jpeg", name: "Resident Artist", medium: "Painting" },
  { src: "/gallery4.jpeg", name: "Resident Artist", medium: "Sketch" },
  { src: "/gallery5.jpeg", name: "Resident Artist", medium: "Pottery" },
  { src: "/gallery6.jpeg", name: "Resident Artist", medium: "Craft" },
];

export default function ArtworkGallery() {
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.art-animate', {
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
    <section ref={container} className="py-24 px-6 md:px-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="art-animate mb-16 text-center">
          <span className="font-data text-accent tracking-widest uppercase text-xs font-bold">Proof, Not Promises</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-2 text-dark">
            Their Canvas. Their World. Their Masterpiece.
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-dark/70 font-body text-lg leading-relaxed">
            Every piece below was created by a resident of Anandalok. Not by trained professionals. Not by art students. By individuals society once dismissed as incapable. Every brushstroke is proof that autism is not the absence of ability — it is the presence of a different kind of&nbsp;brilliance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {artworks.map((art, i) => (
            <div key={i} className="art-animate group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md mb-4">
                <Image
                  src={art.src}
                  alt={`${art.medium} by ${art.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="font-heading font-bold text-dark">{art.name}</span>
                <span className="font-data text-xs text-accent uppercase tracking-widest font-bold">{art.medium}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="art-animate mt-16 text-center">
          <Link href="/gallery" className="px-10 py-5 bg-dark text-cream font-heading font-bold rounded-2xl btn-magnetic hover:scale-[1.05] transition-all inline-block">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
