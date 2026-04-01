'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { Share2, ArrowRight, ChevronRight, ChevronLeft, X, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'artwork', name: 'Artwork' },
  { id: 'performances', name: 'Performances' },
  { id: 'campus', name: 'Campus Life' },
  { id: 'vocational', name: 'Farming and Vocational' },
  { id: 'events', name: 'Events and Celebrations' },
  { id: 'people', name: 'Our People' }
];

const GALLERY_IMAGES = [
  { id: 1, category: 'artwork', url: '/gallery1.jpeg', title: 'Life in Colour', artist: 'Resident Artist', medium: 'Acrylic on Canvas' },
  { id: 2, category: 'campus', url: '/gallery2.jpeg', title: 'The Sunlit Garden', artist: 'Campus View', medium: 'Natural Light' },
  { id: 3, category: 'performances', url: '/rushadru_official.jpg', title: 'Dancers of Joy', artist: 'Rushadru', medium: 'Cultural Performance' },
  { id: 4, category: 'vocational', url: '/gallery3.jpeg', title: 'First Harvest', artist: 'Sumon', medium: 'Organic Farming' },
  { id: 5, category: 'events', url: '/gallery4.jpeg', title: 'Puja Celebration', artist: 'Festive Moment', medium: 'Community Event' },
  { id: 6, category: 'people', url: '/gallery5.jpeg', title: 'Our Dedicated Team', artist: 'Staff', medium: 'Behind the Scenes' },
  { id: 7, category: 'artwork', url: '/gallery6.jpeg', title: 'Silent Expressions', artist: 'Resident', medium: 'Watercolour' },
  { id: 8, category: 'campus', url: '/campus1.jpg', title: 'Main Sanctuary Entrance', artist: 'Anandalok Grounds', medium: 'Campus View' },
  { id: 9, category: 'campus', url: '/campus2.jpg', title: 'A Sunlight Walkway', artist: 'Anandalok Grounds', medium: 'Campus View' },
  { id: 10, category: 'campus', url: '/campus3.jpg', title: 'Spaces for Reflection', artist: 'Anandalok Grounds', medium: 'Campus View' },
  { id: 11, category: 'vocational', url: '/campus4.jpg', title: 'The Organic Harvest', artist: 'Anandalok Farm', medium: 'Vocational Training' },
  { id: 12, category: 'campus', url: '/campus5.jpg', title: 'Morning Perspective', artist: 'Anandalok Grounds', medium: 'Campus View' },
  { id: 13, category: 'campus', url: '/campus6.jpg', title: 'Aerial Horizon', artist: 'Anandalok Grounds', medium: 'Campus View' },
  { id: 14, category: 'campus', url: '/campus7.jpg', title: 'The Community Hub', artist: 'Anandalok Grounds', medium: 'Campus View' },
  { id: 15, category: 'campus', url: '/campus8.jpg', title: 'A Moment of Quiet', artist: 'Anandalok Grounds', medium: 'Campus View' },
  { id: 16, category: 'vocational', url: '/campus9.jpg', title: 'Growing Together', artist: 'Anandalok Farm', medium: 'Vocational Training' }
];

export default function GalleryPage() {
  const container = useRef();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    let ctx = gsap.context(() => {
      gsap.from('.hero-mosaic-img', {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'power3.out'
      });

      gsap.from('.gallery-header', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out'
      });

      gsap.utils.toArray('.scroll-animate').forEach((elem) => {
        gsap.from(elem, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
          }
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const filteredImages = activeCategory === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div ref={container} className="bg-background min-h-screen selection:bg-accent selection:text-white">
      
      {/* SECTION 1: PAGE HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
             src="/campus6.jpg"
             alt="Gallery Sanctuary"
             fill
             className="object-cover opacity-30 grayscale"
             sizes="100vw"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl space-y-12 relative z-10 gallery-header">
           <span className="font-heading font-bold text-accent tracking-widest uppercase text-sm block">THE VISUAL ARCHIVE</span>
           <h1 className="font-heading font-bold text-5xl md:text-8xl text-cream leading-[0.9]">
             See Their World. <br/> Then Tell Us They <br/> Are Not Artists.
           </h1>
           <p className="font-body text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto leading-relaxed">
             Everything on this page was made, grown, performed, or lived by the residents of Anandalok. These are not stock photos. These are not staged moments. This is what happens when you give extraordinary people the space to be themselves.
           </p>
        </div>
      </section>

      {/* SECTION 2: CATEGORY NAVIGATION (Tabs) */}
      <nav className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-y border-border py-4 px-6 md:px-16">
         <div className="container mx-auto flex overflow-x-auto gap-8 no-scrollbar scroll-smooth">
            {GALLERY_CATEGORIES.map((cat) => (
               <button 
                key={cat.id} 
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 font-heading font-bold uppercase tracking-widest text-xs py-2 border-b-2 transition-all ${activeCategory === cat.id ? 'border-accent text-accent' : 'border-transparent text-dark/40 hover:text-dark'}`}
               >
                 {cat.name}
               </button>
            ))}
         </div>
      </nav>

      {/* SECTION 3-8: GALLERY GRIDS (Categorized Masonry) */}
      <section className="py-24 px-6 md:px-16 bg-background">
        <div className="container mx-auto">
           {/* Section Headings depending on active category */}
           <div className="mb-16 scroll-animate">
              {activeCategory === 'all' ? (
                <div className="space-y-4">
                   <h2 className="font-heading font-bold text-4xl text-dark uppercase tracking-tight">Galleries</h2>
                   <div className="w-20 h-1 bg-accent rounded-full"></div>
                </div>
              ) : (
                <div className="space-y-4">
                   <span className="font-data text-accent tracking-widest uppercase text-xs font-bold block">
                      {GALLERY_CATEGORIES.find(c => c.id === activeCategory)?.name}
                   </span>
                   <h2 className="font-heading font-bold text-4xl md:text-6xl text-dark leading-tight max-w-3xl">
                      {activeCategory === 'artwork' && 'Their Canvas. Their Voice.'}
                      {activeCategory === 'performances' && 'Dance. Music. Drama. Joy.'}
                      {activeCategory === 'campus' && 'A Sanctuary Built for Life.'}
                      {activeCategory === 'vocational' && 'Growing Hope. Building Skills.'}
                      {activeCategory === 'events' && 'Every Day Is a Celebration.'}
                      {activeCategory === 'people' && 'The Hearts Behind Anandalok.'}
                   </h2>
                </div>
              )}
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((img) => (
                <div 
                  key={img.id} 
                  className="scroll-animate group cursor-pointer space-y-4"
                  onClick={() => openLightbox(img)}
                >
                   <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-border bg-backgroundSecondary">
                      <Image
                        src={img.url.startsWith('http') ? `${img.url}?q=80&w=1200&auto=format&fit=crop` : img.url}
                        alt={img.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                   </div>
                   <div className="px-6 space-y-1">
                      <h4 className="font-heading font-bold text-lg text-dark group-hover:text-accent transition-colors">{img.title}</h4>
                      <p className="text-dark/40 text-sm font-body uppercase tracking-wider">{img.artist} · {img.medium}</p>
                   </div>
                </div>
              ))}
           </div>

           {activeCategory === 'artwork' && (
             <div className="mt-20 scroll-animate text-center bg-backgroundSecondary py-16 px-8 rounded-[4rem] border border-border">
                <p className="font-body text-dark/70 text-xl max-w-lg mx-auto leading-relaxed">
                   Some of these artists have never spoken a sentence. But look at what they have said.
                </p>
                <div className="mt-12 text-dark/40 text-xs font-data uppercase tracking-[0.2em]">
                   Postcards of these artworks available for donors. <a href="mailto:anandalok90@gmail.com" className="text-accent underline underline-offset-4 ml-2">Ask us how</a>
                </div>
             </div>
           )}
        </div>
      </section>

      {/* SECTION 9: SHARING CTA */}
      <section className="py-32 px-6 md:px-16 bg-background">
         <div className="container mx-auto max-w-4xl text-center space-y-12">
            <h2 className="scroll-animate font-heading font-bold text-4xl text-dark">Seen Something That Moved You?</h2>
            <p className="scroll-animate text-dark/60 font-body text-xl max-w-2xl mx-auto leading-relaxed">
               Share it. Every image you share helps someone understand what autism really looks like — not as a diagnosis, but as a life full of <br/> colour and purpose.
            </p>
            <div className="scroll-animate flex flex-wrap justify-center gap-6">
               <button className="px-8 py-4 border border-border rounded-2xl font-heading font-bold flex items-center gap-3 hover:bg-accent hover:text-cream transition-all duration-500">
                  <Share2 size={20} /> Share #ArtistsNotPatients
               </button>
            </div>
         </div>
      </section>

      {/* SECTION 10: CLOSING CTA */}
      <section className="py-32 px-6 md:px-16 bg-dark text-cream">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
           <h2 className="scroll-animate font-heading font-bold text-4xl md:text-7xl leading-[0.9] tracking-tight">Now You Have Seen Their World. Will You Help Them Keep Creating?</h2>
           <div className="scroll-animate flex flex-wrap justify-center gap-6">
              <Link href="/donate" className="px-12 py-6 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl">Donate Now</Link>
              <Link href="/contact" className="px-12 py-6 border-2 border-accent text-accent font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-accent/10 transition-colors">Visit Anandalok</Link>
           </div>
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-500">
           <button onClick={closeLightbox} className="absolute top-8 right-8 text-cream/40 hover:text-accent transition-colors">
              <X size={48} />
           </button>
           
           <div className="container mx-auto px-6 flex flex-col items-center gap-8">
              <div className="relative w-full max-w-4xl aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                 <Image
                   src={selectedImage.url.startsWith('http') ? `${selectedImage.url}?q=100&w=1600` : selectedImage.url}
                   alt={selectedImage.title}
                   fill
                   className="object-contain"
                   sizes="100vw"
                 />
              </div>
              <div className="text-center space-y-4">
                 <span className="text-accent font-data uppercase tracking-widest text-xs">{selectedImage.artist} · {selectedImage.medium}</span>
                 <h3 className="text-cream font-heading font-bold text-4xl">{selectedImage.title}</h3>
                 <div className="flex gap-4 justify-center pt-8">
                    <button className="p-4 bg-cream/10 text-cream rounded-full hover:bg-accent transition-colors"><Share2 size={24} /></button>
                    <button className="p-4 bg-cream/10 text-cream rounded-full hover:bg-accent transition-colors"><ExternalLink size={24} /></button>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}
