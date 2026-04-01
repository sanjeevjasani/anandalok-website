'use client';

import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-dark text-cream px-6 md:px-16 pt-24 pb-12 font-body relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-cream/10 pb-16">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="block">
            <Image src="/anandalok-logo.png" alt="Anandalok Logo" width={200} height={64} className="h-16 w-auto brightness-0 invert" />
          </Link>
          <p className="text-cream/60 max-w-sm leading-relaxed text-lg">
            A residential care sanctuary for individuals with autism and intellectual disabilities. Empowering lives and nurturing potential since 1989.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
             <div className="flex items-center gap-2 px-3 py-1 bg-cream/5 rounded-full border border-cream/10 text-[10px] font-data tracking-widest uppercase text-cream/40">
               80G Tax Exempt
             </div>
             <div className="flex items-center gap-2 px-3 py-1 bg-cream/5 rounded-full border border-cream/10 text-[10px] font-data tracking-widest uppercase text-cream/40">
               FCRA Approved
             </div>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-6">
          <h4 className="font-heading font-bold text-xl mb-2 text-accent">Navigation</h4>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/" className="text-cream/60 hover:text-cream transition-colors w-max text-lg">Home</Link>
            <Link href="/about" className="text-cream/60 hover:text-cream transition-colors w-max text-lg">About Us</Link>
            <Link href="/admission" className="text-cream/60 hover:text-cream transition-colors w-max text-lg">Admissions</Link>
            <Link href="/stories" className="text-cream/60 hover:text-cream transition-colors w-max text-lg">Stories</Link>
            <Link href="/gallery" className="text-cream/60 hover:text-cream transition-colors w-max text-lg">Gallery</Link>
            <Link href="/get-involved" className="text-cream/60 hover:text-cream transition-colors w-max text-lg">Get Involved</Link>
            <Link href="/contact" className="text-cream/60 hover:text-cream transition-colors w-max text-lg">Contact</Link>
            <Link href="/donate" className="text-cream/60 hover:text-cream transition-colors w-max text-lg">Donate Now</Link>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="font-heading font-bold text-xl mb-2 text-accent">Contact Information</h4>
          <Link href="/contact" className="space-y-6 block group">
            <div className="flex gap-4 items-start">
              <MapPin size={24} className="text-accent flex-shrink-0" />
              <div className="text-cream/60 leading-relaxed group-hover:text-cream transition-colors">
                <p className="text-cream font-bold">Office:</p>
                47, Kathore Road, Barasat, North 24 Parganas, 700128
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MapPin size={24} className="text-accent flex-shrink-0" />
              <div className="text-cream/60 leading-relaxed group-hover:text-cream transition-colors">
                <p className="text-cream font-bold">Campus:</p>
                Badu Road, Madhyamgram (10 km from Kolkata Airport)
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Phone size={20} className="text-accent flex-shrink-0" />
              <div className="text-cream/60 group-hover:text-cream transition-colors">+91 9433739890</div>
            </div>
            <div className="flex gap-4 items-center">
              <Mail size={20} className="text-accent flex-shrink-0" />
              <div className="text-cream/60 group-hover:text-cream transition-colors">anandalok90@gmail.com</div>
            </div>
          </Link>
        </div>

      </div>
      
      <div className="container mx-auto mt-12 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between text-cream/30 text-xs font-data tracking-wide uppercase">
        <div className="flex flex-col gap-2">
          <span>© 2026 Anandalok — A unit of Welfare Centre for the Mentally Handicapped (WCMH)</span>
          <span>Registered under West Bengal Societies Registration Act XXVI of 1961, No. 5/61096 of 1988-89</span>
        </div>
        <div className="flex gap-8">
           <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#E8632B]"></span>
             Care Active
           </div>
           <a href="#" className="hover:text-cream transition-colors">Privacy</a>
           <a href="#" className="hover:text-cream transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
}
