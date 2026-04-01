'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { Heart, Building2, Megaphone, MapPin, ArrowRight, Mail, Phone, Calendar, Hammer, Gift, CheckCircle2, Share2, Globe, MessageCircle, Users } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PathwayCard = ({ icon: Icon, title, desc, anchor }) => (
  <a 
    href={anchor}
    className="scroll-animate p-8 bg-background border border-border rounded-[2.5rem] hover:border-accent transition-all duration-500 group flex flex-col justify-between"
  >
    <div>
      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
      <h3 className="font-heading font-bold text-xl text-dark mb-2">{title}</h3>
      <p className="text-dark/60 text-sm leading-relaxed mb-6">{desc}</p>
    </div>
    <div className="text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2">
      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </div>
  </a>
);

export default function GetInvolvedPage() {
  const container = useRef();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    let ctx = gsap.context(() => {
      gsap.from('.hero-content', {
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
           <img 
             src="/campus7.jpg" 
             alt="Community Sanctuary" 
             className="w-full h-full object-cover opacity-30 grayscale" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl space-y-12 relative z-10 hero-content">
           <span className="font-heading font-bold text-accent tracking-widest uppercase text-sm block">GET INVOLVED</span>
           <h1 className="font-heading font-bold text-5xl md:text-8xl text-cream leading-[0.9]">
             You Do Not Need to <br/> Write a Cheque to <br/> Change a Life.
           </h1>
           <p className="font-body text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto leading-relaxed">
             Your time, your skills, your network, your voice — every one of them has the power to give someone with autism a better tomorrow.
           </p>
        </div>
      </section>

      {/* SECTION 2: PATHWAY OVERVIEW */}
      <section className="py-24 px-6 md:px-16 bg-background">
        <div className="container mx-auto">
          <h2 className="scroll-animate font-heading font-bold text-4xl text-dark text-center mb-16">Find Your Way In</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PathwayCard icon={Heart} title="Volunteer" desc="Give your time and skills to our residents" anchor="#volunteer" />
            <PathwayCard icon={Building2} title="Corporate Partnerships" desc="Align your company's purpose with real impact" anchor="#corporate" />
            <PathwayCard icon={Megaphone} title="Spread Awareness" desc="Help change how India thinks about autism" anchor="#awareness" />
            <PathwayCard icon={MapPin} title="Visit Anandalok" desc="See the magic for yourself" anchor="#visit" />
          </div>
        </div>
      </section>

      {/* SECTION 3: VOLUNTEER */}
      <section id="volunteer" className="py-32 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-12 mb-8">
              <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block">VOLUNTEER WITH US</span>
           </div>
           <div className="lg:col-span-7 space-y-12">
              <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl text-dark leading-tight">Share Your Time. It Is the <br/> Most Valuable Thing You Own.</h2>
              
              <div className="scroll-animate space-y-8 font-body text-dark/80 text-lg md:text-xl leading-relaxed">
                <p>
                  You do not need a degree in special education to make a difference at Anandalok. You just need to show up with an open heart.
                </p>
                <p>
                  Our residents light up when new faces visit. A fresh voice reading a story. A new pair of hands helping in the garden. These small acts of connection are not small to the people who receive them.
                </p>
              </div>

              <div className="scroll-animate space-y-8 pt-8">
                 <h4 className="font-heading font-bold text-2xl text-dark">How You Can Help</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {[
                     { title: "Spend time with residents", desc: "Join them for art, music, or just conversation" },
                     { title: "Teach a skill", desc: "Paint, play an instrument, cook, or do yoga" },
                     { title: "Professional expertise", desc: "Psychologists, therapists, and educators" },
                     { title: "Event support", desc: "Help organise cultural programmes" },
                     { title: "Administrative help", desc: "Accounting, technology, or management" },
                     { title: "Campus improvement", desc: "Handy with tools? Good at organising?" }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                       <CheckCircle2 size={24} className="text-accent flex-shrink-0" />
                       <div>
                         <p className="font-heading font-bold text-dark">{item.title}</p>
                         <p className="text-sm text-dark/60">{item.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

              <div className="scroll-animate bg-background p-10 rounded-[3rem] border border-border space-y-6">
                 <h4 className="font-heading font-bold text-2xl text-dark">How to Sign Up</h4>
                 <p className="text-dark/70 leading-relaxed font-body">Call us at <strong>+91 9433739890</strong> or email with a brief note about yourself and your availability. We will get back to you within a few days to schedule your first visit.</p>
                 <a href="mailto:anandalok90@gmail.com?subject=I Would Like to Volunteer at Anandalok" className="px-8 py-4 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic inline-block">Email Us to Volunteer</a>
              </div>
           </div>
           <div className="lg:col-span-5 scroll-animate">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
                 <img src="/campus8.jpg" alt="Interaction" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 4: CORPORATE PARTNERSHIPS */}
      <section id="corporate" className="py-32 px-6 md:px-16 bg-background">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-20 space-y-4">
              <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block">CORPORATE PARTNERSHIPS</span>
              <h2 className="scroll-animate font-heading font-bold text-4xl md:text-5xl text-dark">Turn Your Company's CSR Budget <br/> Into Someone's Forever Home.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {[
                { icon:Calendar, title: "Annual Sponsorship", desc: "Sponsor the complete annual care of one or more residents. Personal connection and regular reports." },
                { icon:Hammer, title: "Infrastructure Projects", desc: "Fund classrooms, therapy rooms, or garden developments. Tangible projects your team can visit." },
                { icon:Users, title: "Employee Engagement", desc: "Bring your team to Anandalok for volunteering and creative workshops that inspire purpose." },
                { icon:Gift, title: "In-Kind Support", desc: "Donate materials, food, medical supplies, or technology your company already provides." }
              ].map((card, i) => (
                <div key={i} className="scroll-animate p-10 bg-backgroundSecondary border border-border rounded-3xl hover:border-accent transition-all duration-500">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                    <card.icon size={28} />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-dark mb-4">{card.title}</h4>
                  <p className="text-dark/70 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
           </div>

           <div className="scroll-animate grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h4 className="font-heading font-bold text-2xl text-dark">Why Companies Partner With Us</h4>
                <div className="space-y-4">
                   {["80G Tax Exemption - All contributions are tax-deductible", "FCRA Approved - International legally compliant", "Complete Transparency - Audited and open door policy", "36 Years Track Record - Oldest autism sanctuary in the region"].map((point, i) => (
                      <div key={i} className="flex gap-3 text-dark/70 font-body"><CheckCircle2 size={18} className="text-accent flex-shrink-0" /> {point}</div>
                   ))}
                </div>
                <div className="pt-8">
                  <a href="mailto:anandalok90@gmail.com?subject=Corporate Partnership Enquiry — Anandalok" className="px-8 py-4 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic inline-block">Email Our Partnership Team</a>
                </div>
              </div>
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-xl border border-border">
                 <img src="/campus9.jpg" alt="Corporate Partnership" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 5: SPREAD AWARENESS */}
      <section id="awareness" className="py-32 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto max-w-4xl text-center">
           <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block mb-4">SPREAD THE WORD</span>
           <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl text-dark leading-tight mb-8">The Biggest Barrier Our Residents Face Is Not Autism. It Is Misunderstanding.</h2>
           
           <div className="scroll-animate space-y-6 text-dark/70 font-body text-lg leading-relaxed mb-12">
              <p>Most people in India still confuse autism with mental illness. You can help change that. Not with money. With your voice.</p>
              <p>Share our story. Talk about Anandalok. Forward our website. Tell your family what autism actually is. One shared post can shift understanding from fear to compassion.</p>
           </div>

           {/* Social Sharing Icons using SVG for brands */}
           <div className="scroll-animate flex flex-wrap justify-center gap-4 mb-20">
              <button className="w-14 h-14 bg-accent text-cream rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"><Share2 size={24} /></button>
              <button className="w-14 h-14 bg-background border border-border text-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </button>
              <button className="w-14 h-14 bg-background border border-border text-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
              </button>
              <button className="w-14 h-14 bg-background border border-border text-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                 <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554V15.034c0-1.291-.022-2.954-1.801-2.954-1.801 0-2.078 1.408-2.078 2.859v5.513H9.462V9h3.41v1.561h.046c.474-.9 1.636-1.85 3.367-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </button>
              <button className="w-14 h-14 bg-background border border-border text-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-sm">
                 <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.419.419-.818.679-1.381.896-.422.164-1.056.36-2.226.414-1.266.058-1.646.07-4.852.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.413-.418.812-.678 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.553-.788.306-1.457.715-2.122 1.381-.665.665-1.075 1.334-1.381 2.122-.295.763-.496 1.634-.553 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.553 2.911.306.788.715 1.457 1.381 2.122.665.665 1.334 1.075 2.122 1.381.763.295 1.634.496 2.911.553 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.553.788-.306 1.457-.715 2.122-1.381.665-.665 1.075-1.334 1.381-2.122.763-.295 1.634-.496 2.911-.553 1.28-.058 1.688-.072 4.947-.072s3.667.014 4.947.072c1.277.057 2.148.258 2.911.553.788.306 1.457.715 2.122 1.381.665.665 1.075 1.334 1.381 2.122.763.295 1.634.496 2.911.553 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </button>
           </div>

           <div className="scroll-animate grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left border-t border-dark/10 pt-16">
              {[
                "Share this website with the hashtag #ArtistsNotPatients",
                "Follow Anandalok and engage with our artistic posts",
                "Start the conversation at home about neurodiversity",
                "Nominate Anandalok for community awards or media",
                "Print and share our leaflet in your local community",
                "Organise a small fundraiser - turn your network into hope"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start font-body text-dark/70">
                   <div className="w-8 h-8 rounded-full bg-accent text-cream flex-shrink-0 flex items-center justify-center text-xs font-bold">{i+1}</div>
                   {item}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 6: VISIT ANANDALOK */}
      <section id="visit" className="py-32 px-6 md:px-16 bg-background">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="scroll-animate space-y-8">
                 <span className="font-data text-accent tracking-widest uppercase text-xs font-bold block">COME SEE FOR YOURSELF</span>
                 <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark leading-tight">No One Leaves <br/> Anandalok Unchanged.</h2>
                 <p className="text-dark/70 font-body text-lg leading-relaxed">
                    Nothing we write will match the experience of walking through our gates. We welcome visitors—because every person who steps inside leaves with a different understanding of <br/> ability and home.
                 </p>
                 
                 <div className="p-10 bg-backgroundSecondary border border-border rounded-[3rem] space-y-6 text-sm">
                    <h4 className="font-heading font-bold text-xl text-accent">Visiting Details</h4>
                    <div className="space-y-4 font-body text-dark/80">
                       <p><strong>Location:</strong> Badu Road, Madhyamgram, North 24 Parganas</p>
                       <p><strong>Appointment:</strong> Required. Please call ahead.</p>
                       <p><strong>Contact:</strong> +91 9433739890</p>
                       <p><strong>Typical Visit:</strong> 1-2 hours including a campus tour.</p>
                    </div>
                    <a href="mailto:anandalok90@gmail.com?subject=I Would Like to Visit Anandalok" className="px-8 py-4 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic inline-block">Schedule a Visit</a>
                 </div>
              </div>
              <div className="scroll-animate relative">
                 <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                    <img src="/campus3.jpg" alt="Campus environment" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full p-8 hidden xl:flex items-center text-center text-cream font-heading font-bold text-lg leading-tight uppercase tracking-widest">
                   10km From Airport
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING CTA */}
      <section className="py-32 px-6 md:px-16 bg-dark text-cream">
         <div className="container mx-auto max-w-4xl text-center space-y-12">
            <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl tracking-tight">However You Show Up, <br/> You Matter.</h2>
            <p className="scroll-animate text-cream/60 font-body text-xl max-w-2xl mx-auto leading-relaxed">A rupee. An hour. A shared post. There is no contribution too small when it comes to giving someone a life of dignity. Find your way in.</p>
            <div className="scroll-animate flex flex-wrap justify-center gap-6">
               <Link href="/donate" className="px-10 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl">Donate Now</Link>
               <a href="mailto:anandalok90@gmail.com" className="px-10 py-5 border-2 border-cream/20 text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-cream/10 transition-colors">Email Us</a>
               <a href="tel:+919433739890" className="px-10 py-5 border-2 border-accent text-accent font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-accent/10 transition-colors">Call Support</a>
            </div>
         </div>
      </section>

    </div>
  );
}
