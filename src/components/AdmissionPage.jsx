'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { FileDown, Phone, Mail, CheckCircle2, ChevronDown, Home, Sun, Info, ArrowRight, Users, MapPin, Shield, Calendar } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-dark/10 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h4 className="font-heading font-bold text-xl text-dark group-hover:text-accent transition-colors">{question}</h4>
        <ChevronDown size={24} className={`text-accent transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="font-body text-dark/70 leading-relaxed text-lg">{answer}</p>
      </div>
    </div>
  );
};

const AdmissionStep = ({ number, title, desc }) => (
  <div className="flex gap-6 scroll-animate mb-12 last:mb-0">
    <div className="w-12 h-12 rounded-full bg-accent text-cream flex-shrink-0 flex items-center justify-center font-heading font-bold text-xl shadow-lg border-4 border-backgroundSecondary">
      {number}
    </div>
    <div className="space-y-2">
      <h4 className="font-heading font-bold text-xl text-dark">{title}</h4>
      <p className="font-body text-dark/70 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function AdmissionPage() {
  const container = useRef();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    let ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
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

  return (
    <div ref={container} className="bg-background min-h-screen selection:bg-accent selection:text-white">
      
      {/* SECTION 1: PAGE HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2670&auto=format&fit=crop" alt="Sanctuary Home" className="w-full h-full object-cover opacity-30 grayscale" />
           <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl space-y-12">
          <span className="hero-text font-heading font-bold text-accent tracking-widest uppercase text-sm block">ADMISSIONS</span>
          <h1 className="hero-text font-heading font-bold text-5xl md:text-8xl text-cream leading-[0.9]">
            You Have Been <br/> Carrying This Alone <br/> for Too Long. <br/> Let Us Help.
          </h1>
          <p className="hero-text font-body text-xl md:text-2xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Whether you are looking for a permanent home or daily support for your loved one with autism, Anandalok is here. We have been welcoming families just like yours since 1989.
          </p>
          <div className="hero-text flex flex-wrap justify-center gap-6">
             <a href="#residential" className="px-10 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl">Residential Care</a>
             <a href="#daycare" className="px-10 py-5 border-2 border-accent text-accent font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-accent/10 transition-colors">Day Care Programme</a>
          </div>
        </div>
      </section>

      {/* SECTION 2: A MESSAGE TO FAMILIES */}
      <section className="py-32 px-6 md:px-16 bg-background">
        <div className="container mx-auto max-w-[720px] text-center space-y-12">
           <h2 className="scroll-animate font-heading font-bold text-4xl md:text-5xl text-dark leading-tight">Before We Talk About Forms and Processes, We Want You to Know This.</h2>
           <div className="scroll-animate font-body text-dark/80 text-xl leading-relaxed space-y-8">
              <p>If you are reading this page, you are probably exhausted.</p>
              <p>You have spent months or years trying to find the right place for your son, daughter, or sibling. You have visited facilities that felt cold. You have been turned away. You have lain awake at night wondering if you are doing the <br/> right thing.</p>
              <p className="font-bold text-dark italic">We want you to know: you are not failing your loved one by seeking help. You are fighting for them.</p>
              <p>Anandalok is not an institution. It is a home—a family of 35 residents and the staff who love them. Our residents paint, dance, sing, and garden. Not as patients, but as human beings living lives of dignity.</p>
           </div>
        </div>
      </section>

      {/* SECTION 3: RESIDENTIAL CARE */}
      <section id="residential" className="py-32 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-8 space-y-12">
                 <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block">RESIDENTIAL CARE</span>
                 <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl text-dark">A Permanent Home Where <br/> Your Loved One Is Understood.</h2>
                 
                 <div className="scroll-animate space-y-8">
                    <h4 className="font-heading font-bold text-2xl text-dark">What Residential Life Looks Like</h4>
                    <p className="font-body text-dark/70 text-lg leading-relaxed">
                       Residential care at Anandalok means your loved one lives with us permanently—or for as long as they need. Every resident has a bed in a shared residential wing (separate wings for men and women) with 24/7 care.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-body text-dark/70">
                       {[
                         "Morning: assembly and personal care",
                         "Mid-morning: structured special education",
                         "Midday: nutritious on-campus lunch",
                         "Afternoon: vocational farming & crafts",
                         "Evening: recreation & social interaction",
                         "Night: supported bedtime routine"
                       ].map((item, i) => (
                         <div key={i} className="flex gap-3"><CheckCircle2 size={16} className="text-accent flex-shrink-0" /> {item}</div>
                       ))}
                    </div>
                 </div>

                 <div className="scroll-animate space-y-8">
                    <h4 className="font-heading font-bold text-2xl text-dark">The Admission Process</h4>
                    <div className="bg-background p-10 rounded-[3rem] border border-border">
                       <AdmissionStep number="1" title="Initial Contact" desc="Call +91 9433739890 or email to express interest. We will listen and providing honest guidance." />
                       <AdmissionStep number="2" title="Submit Forms" desc="Download the admission form and submit supporting medical reports and identification." />
                       <AdmissionStep number="3" title="Assessment Visit" desc="We invite you and your ward to visit the campus. No obligation, just understanding needs." />
                       <AdmissionStep number="4" title="Decision & Welcoming" desc="We confirm capacity and design a settling-in period for emotional adjustment." />
                    </div>
                    <div className="flex flex-row items-center justify-center md:justify-start gap-3 md:gap-4 pt-4">
                       <a href="#" className="px-4 md:px-8 py-4 bg-accent text-cream font-heading font-bold rounded-2xl flex items-center gap-2 md:gap-3 btn-magnetic text-sm md:text-base">
                          <FileDown size={18} /> Download Form
                       </a>
                       <a href="tel:+919433739890" className="px-4 md:px-8 py-4 border-2 border-dark/20 text-dark font-heading font-bold rounded-2xl btn-magnetic text-sm md:text-base whitespace-nowrap">Call to Discuss</a>
                    </div>
                 </div>

                 <div className="scroll-animate space-y-8 pt-12">
                   <h4 className="font-heading font-bold text-3xl text-dark mb-8">Common Questions</h4>
                   <div className="space-y-4">
                     <FAQItem question="How much does residential care cost?" answer="Fees are structured to be accessible to middle-class families. The exact amount depends on the level of care required. Please contact us for details." />
                     <FAQItem question="Can I visit my child after admission?" answer="Absolutely. We encourage family visits and host regular Guardians' Days. Your involvement deepens, it doesn't end." />
                     <FAQItem question="What medical facilities are available?" answer="Regular health check-ups and physiotherapy are built-in. For emergencies, we coordinate with major Kolkata hospitals." />
                   </div>
                 </div>
              </div>

              <div className="lg:col-span-4 scroll-animate lg:sticky lg:top-32 h-fit">
                 <div className="bg-background p-12 rounded-[4rem] border border-border shadow-2xl space-y-8">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-cream">
                       <Home size={32} />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-dark leading-tight">Residential Care at a Glance</h4>
                    <ul className="space-y-6 font-body text-sm text-dark/70">
                       <li className="flex gap-4"><Info size={18} className="text-accent flex-shrink-0" /> Adults/Young Adults with intellectual disabilities</li>
                       <li className="flex gap-4"><MapPin size={18} className="text-accent flex-shrink-0" /> 2.4-acre Madhyamgram campus</li>
                       <li className="flex gap-4"><Users size={18} className="text-accent flex-shrink-0" /> 24/7 staff support</li>
                       <li className="flex gap-4"><Shield size={18} className="text-accent flex-shrink-0" /> Lifelong commitment</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 4: DAY CARE PROGRAMME */}
      <section id="daycare" className="py-32 px-6 md:px-16 bg-background">
         <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-4 scroll-animate lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                 <div className="bg-backgroundSecondary p-12 rounded-[4rem] border border-border shadow-lg space-y-8">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-cream">
                       <Sun size={32} />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-dark leading-tight">Day Care at a Glance</h4>
                    <ul className="space-y-6 font-body text-sm text-dark/70">
                       <li className="flex gap-4"><Info size={18} className="text-accent flex-shrink-0" /> Children & Adults with autism</li>
                       <li className="flex gap-4"><Calendar size={18} className="text-accent flex-shrink-0" /> Mon-Fri | 10:30 AM - 4:30 PM</li>
                       <li className="flex gap-4"><Users size={18} className="text-accent flex-shrink-0" /> Professional Therapy & Art</li>
                       <li className="flex gap-4"><CheckCircle2 size={18} className="text-accent flex-shrink-0" /> Lunch & Snacks provided</li>
                    </ul>
                 </div>
              </div>
              
              <div className="lg:col-span-8 space-y-12 order-1 lg:order-2">
                 <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block">DAY CARE PROGRAMME</span>
                 <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl text-dark">Daily Support That Brings <br/> You Home Stronger.</h2>
                 
                 <div className="scroll-animate space-y-8 font-body text-dark/80 text-lg leading-relaxed">
                    <p>Not every family is ready for residential care. Some families want their loved one to live at home but need professional daytime support—structured learning, therapeutic intervention, and creative engagement.</p>
                    <p>Individuals arrive at our campus at 10:30 AM and return home at 4:30 PM. In between, they experience a full day of guided activities designed by therapists and music instructors.</p>
                 </div>

                 <div className="scroll-animate space-y-8">
                    <h4 className="font-heading font-bold text-2xl text-dark">Enrolment Process</h4>
                    <div className="bg-backgroundSecondary p-10 rounded-[3rem] border border-border">
                       <AdmissionStep number="1" title="Contact Us" desc="Call to discuss whether day care is the right fit. We answer all practical transport and scheduling questions." />
                       <AdmissionStep number="2" title="Campus Visit" desc="Bring your loved one so our team can understand their abilities and interests to design a programme." />
                       <AdmissionStep number="3" title="Settling In" desc="Your loved one begins their journey with a gentle orientation focused on comfort and social bonds." />
                    </div>
                    <div className="flex flex-row items-center justify-center md:justify-start gap-3 md:gap-4 pt-4">
                       <a href="#" className="px-4 md:px-8 py-4 bg-accent text-cream font-heading font-bold rounded-2xl flex items-center gap-2 md:gap-3 btn-magnetic text-sm md:text-base">
                          <FileDown size={18} /> Download Form
                       </a>
                       <a href="tel:+919433739890" className="px-4 md:px-8 py-4 border-2 border-dark/20 text-dark font-heading font-bold rounded-2xl btn-magnetic text-sm md:text-base whitespace-nowrap">Call to Discuss</a>
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* SECTION 5: COMPARISON */}
      <section className="py-32 px-6 md:px-16 bg-backgroundSecondary">
         <div className="container mx-auto max-w-5xl">
            <h2 className="scroll-animate font-heading font-bold text-4xl text-dark text-center mb-16">Which Programme Is Right?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="scroll-animate p-12 bg-background border border-border rounded-[3rem] space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Home size={120} /></div>
                  <h4 className="font-heading font-bold text-2xl text-dark">Best for Residential...</h4>
                  <ul className="space-y-4 font-body text-dark/70 text-sm">
                     <li>• Need lifelong full-time support</li>
                     <li>• Thriving in a collective community</li>
                     <li>• Family cannot provide full-time home care</li>
                     <li>• Looking for a permanent sanctuary</li>
                  </ul>
               </div>
               <div className="scroll-animate p-12 bg-background border border-border rounded-[3rem] space-y-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Sun size={120} /></div>
                  <h4 className="font-heading font-bold text-2xl text-dark">Best for Day Care...</h4>
                  <ul className="space-y-4 font-body text-dark/70 text-sm">
                     <li>• Want to live at home every evening</li>
                     <li>• Need daily creative & social stimulation</li>
                     <li>• Transitioning out of special schooling</li>
                     <li>• Seeking professional daily therapy</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 6: AFFORDABILITY */}
      <section className="py-32 px-6 md:px-16 bg-background">
         <div className="container mx-auto max-w-3xl text-center space-y-8">
            <h2 className="scroll-animate font-heading font-bold text-4xl text-dark leading-tight">Cost Should Never Be the Reason <br/> a Family Gives Up.</h2>
            <p className="scroll-animate text-dark/70 font-body text-xl leading-relaxed">
               Anandalok was built by and for middle-class families. We have structured our fees to be as accessible as possible. If you are in a difficult financial situation, please talk to us. We would rather find a way to make it work.
            </p>
            <div className="scroll-animate pt-8">
               <a href="tel:+919433739890" className="text-accent font-heading font-bold text-2xl hover:translate-x-2 transition-transform inline-flex items-center gap-3">
                  Discuss Support Options <ArrowRight />
               </a>
            </div>
         </div>
      </section>

      {/* SECTION 7: CLOSING CTA */}
      <section className="py-32 px-6 md:px-16 bg-dark text-cream">
         <div className="container mx-auto max-w-4xl text-center space-y-12">
            <h2 className="scroll-animate font-heading font-bold text-4xl md:text-7xl leading-[0.9] tracking-tight">Everything After <br/> That First Call <br/> Gets Easier.</h2>
            <p className="scroll-animate text-cream/70 font-body text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">We know this decision is enormous. Take your time. Visit the campus. Talk to our staff. And when you are ready—whenever that is—we will be here.</p>
            <div className="scroll-animate flex flex-wrap justify-center gap-6">
               <a href="tel:+919433739890" className="px-10 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl">Call +91 9433739890</a>
               <a href="mailto:anandalok90@gmail.com?subject=Enquiry regarding Admission" className="px-10 py-5 border-2 border-cream/20 text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-cream/10 transition-colors">Email Us</a>
            </div>
            <div className="scroll-animate flex items-center justify-center gap-3 text-sm font-data text-cream/40 uppercase tracking-widest">
               <Shield size={16} /> All conversations are strictly confidential
            </div>
         </div>
      </section>

    </div>
  );
}
