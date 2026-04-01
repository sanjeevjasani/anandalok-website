'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = ({ mobile }) => (
    <>
      <Link href="/" className={`hover:-translate-y-[1px] transition-transform ${mobile ? 'text-2xl font-bold py-2' : ''}`}>Home</Link>
      <Link href="/about" className={`hover:-translate-y-[1px] transition-transform ${mobile ? 'text-2xl font-bold py-2' : ''}`}>About Us</Link>
      <a href="/#protocol" className={`hover:-translate-y-[1px] transition-transform ${mobile ? 'text-2xl font-bold py-2' : ''}`}>Our Approach</a>
      <Link href="/admission" className={`hover:-translate-y-[1px] transition-transform ${mobile ? 'text-2xl font-bold py-2' : ''}`}>Admissions</Link>
      <Link href="/stories" className={`hover:-translate-y-[1px] transition-transform ${mobile ? 'text-2xl font-bold py-2' : ''}`}>Stories</Link>
      <Link href="/gallery" className={`hover:-translate-y-[1px] transition-transform ${mobile ? 'text-2xl font-bold py-2' : ''}`}>Gallery</Link>
      <Link href="/get-involved" className={`hover:-translate-y-[1px] transition-transform ${mobile ? 'text-2xl font-bold py-2' : ''}`}>Get Involved</Link>
      <Link href="/contact" className={`hover:-translate-y-[1px] transition-transform ${mobile ? 'text-2xl font-bold py-2' : ''}`}>Contact</Link>
    </>
  );

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-3xl w-[90%] max-w-6xl ${
        scrolled || isOpen
          ? 'bg-background/95 backdrop-blur-xl border border-border shadow-lg text-dark' 
          : 'bg-transparent text-cream'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="cursor-pointer z-50 flex items-center">
          <Image
            src="/anandalok-logo.png"
            alt="Anandalok Logo"
            width={160}
            height={40}
            className={`h-10 transition-all duration-500 ${!scrolled && !isOpen ? 'brightness-0 invert' : ''}`}
            style={{ width: 'auto' }}
          />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 text-sm font-medium">
          <NavLinks mobile={false} />
        </div>

        <div className="flex items-center gap-4 z-50">
          <Link href="/donate" className={`hidden md:flex flex-shrink-0 px-5 py-2 rounded-2xl text-sm font-bold items-center gap-2 btn-magnetic bg-accent text-cream btn-layer-dark shadow-sm`}>
             <span className="btn-content-dark relative z-10 flex items-center gap-2">
               Donate Now <ArrowRight size={16} />
             </span>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -mr-2 text-current focus:outline-none" 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden px-6 pt-4 pb-8 flex flex-col items-center text-center space-y-4 font-heading border-t border-border mt-2 animate-in slide-in-from-top-4 fade-in duration-300">
          <NavLinks mobile={true} />
          <Link href="/donate" className="mt-8 px-10 py-4 w-full justify-center rounded-2xl text-lg font-bold flex items-center gap-2 bg-accent text-cream shadow-sm">
             Donate Now <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </nav>
  );
}
