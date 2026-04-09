'use client';

import React, { useState, useLayoutEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Is Anandalok a mental asylum?",
    a: "No. Anandalok is a residential care sanctuary for individuals with autism and intellectual disabilities. These are neurological differences, not mental illnesses. Our residents are artists, musicians, gardeners, and craftspeople who live, learn, and create in a safe, loving environment."
  },
  {
    q: "What is the difference between autism and mental illness?",
    a: "Autism is a neurodevelopmental condition — people are born with it. It affects how someone communicates, interacts, and processes the world. Mental illness refers to conditions like depression, anxiety, or psychosis that can develop at any point in life. They are fundamentally different."
  },
  {
    q: "How can I admit a family member to Anandalok?",
    a: "Download the admission form from our website or call us at 9433739890. We accept both residential and day care admissions on a first-come first-served basis."
  },
  {
    q: "Is Anandalok only for children?",
    a: "No. Our residents range from young adults to individuals over 50. Anandalok provides lifelong care — which is precisely what makes us different."
  },
  {
    q: "Are donations tax-exempt?",
    a: "Yes. All contributions are exempt under Section 80G of the Income Tax Act 1961. We are also registered under FCRA to receive foreign contributions."
  },
  {
    q: "Can I visit Anandalok?",
    a: "Absolutely. We welcome visitors. Call 9433739890 to schedule a visit to our campus in Madhyamgram near Kolkata."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-border last:border-0">
      <button 
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`font-heading font-bold text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-dark group-hover:text-accent'}`}>
          {faq.q}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={24} className="text-accent" /> : <Plus size={24} className="text-dark/40 group-hover:text-accent" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="font-body text-dark/70 text-lg leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const container = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.faq-animate', {
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
    <section ref={container} className="py-24 px-6 md:px-16 bg-backgroundSecondary">
      <div className="container mx-auto max-w-4xl">
        <h2 className="faq-animate font-heading font-bold text-4xl md:text-6xl text-center mb-16 text-dark tracking-tight">
          Questions People Ask
        </h2>
        
        <div className="faq-animate bg-background rounded-[3rem] p-8 md:p-12 shadow-sm border border-border">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openIndex === i} 
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
