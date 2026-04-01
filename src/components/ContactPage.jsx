'use client';

import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Heart, Gift, Users, Building, Mic, Send, ChevronDown, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import usePageAnimations from '../hooks/usePageAnimations';

const ContactCard = ({ icon: Icon, title, detail, subDetail, href }) => (
  <a 
    href={href}
    className="scroll-animate p-12 bg-background border border-border rounded-[3rem] hover:border-accent transition-all duration-500 group flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-xl"
  >
    <div className="w-20 h-20 bg-accent/10 rounded-[2rem] flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
      <Icon size={40} />
    </div>
    <h3 className="font-heading font-bold text-2xl text-dark">{title}</h3>
    <p className="font-heading font-bold text-xl text-dark">{detail}</p>
    <p className="text-dark/60 text-sm">{subDetail}</p>
  </a>
);

const PurposeCard = ({ icon: Icon, title, desc, actionText, actionLink }) => (
  <Link 
    href={actionLink}
    className="scroll-animate p-8 bg-background border border-border rounded-[2.5rem] hover:border-accent transition-all duration-500 group flex flex-col justify-between"
  >
    <div className="space-y-4">
      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
        <Icon size={24} />
      </div>
      <h4 className="font-heading font-bold text-lg text-dark leading-tight">{title}</h4>
      <p className="text-dark/60 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="mt-6 text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
      {actionText}
    </div>
  </Link>
);

export default function ContactPage() {
  const container = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  usePageAnimations(container, '.hero-content', { duration: 1.2, stagger: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
  };

  return (
    <div ref={container} className="bg-background min-h-screen selection:bg-accent selection:text-white">
      
      {/* SECTION 1: PAGE HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
             src="/campus1.jpg"
             alt="Contact Sanctuary"
             fill
             className="object-cover opacity-30 grayscale"
             sizes="100vw"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl space-y-12 relative z-10 hero-content">
           <span className="font-heading font-bold text-accent tracking-widest uppercase text-sm block">CONTACT US</span>
           <h1 className="font-heading font-bold text-5xl md:text-8xl text-cream leading-[0.9]">
             We Are Real People. <br/> And We Would <br/> Love to Hear <br/> From You.
           </h1>
           <p className="font-body text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto leading-relaxed">
             Whether you are a family looking for care, a donor with a generous heart, a volunteer with time to give, or someone who simply wants to know more — the door is always open.
           </p>
        </div>
      </section>

      {/* SECTION 2: PRIMARY CONTACT DETAILS */}
      <section className="py-24 px-6 md:px-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard 
              icon={Phone} 
              title="Call Us" 
              detail="+91 9433739890" 
              subDetail="Available Monday to Saturday, 9 AM to 6 PM" 
              href="tel:+919433739890"
            />
            <ContactCard 
              icon={Mail} 
              title="Email Us" 
              detail="anandalok90@gmail.com" 
              subDetail="We respond within 2-3 working days" 
              href="mailto:anandalok90@gmail.com"
            />
            <ContactCard 
              icon={Building} 
              title="City Office" 
              detail="+91 33 2562 7765" 
              subDetail="16A, Lake View Road, Kolkata 700029" 
              href="tel:+913325627765"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: QUICK ROUTING */}
      <section className="py-24 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto">
          <h2 className="scroll-animate font-heading font-bold text-4xl text-dark text-center mb-16">How Can We Help You?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <PurposeCard 
              icon={Heart} 
              title="I Am Looking for Care" 
              desc="Learn about our residential and day care programmes." 
              actionText="Go to Admissions →" 
              actionLink="/admission" 
            />
            <PurposeCard 
              icon={Gift} 
              title="I Want to Donate" 
              desc="See how your contribution changes lives." 
              actionText="Go to Donate →" 
              actionLink="/donate" 
            />
            <PurposeCard 
              icon={Users} 
              title="I Want to Volunteer" 
              desc="Find out how to share your time and skills." 
              actionText="Go to Get Involved →" 
              actionLink="/get-involved#volunteer" 
            />
            <PurposeCard 
              icon={Building} 
              title="I Represent a Company" 
              desc="Explore partnership opportunities with Anandalok." 
              actionText="Go to Partnerships →" 
              actionLink="/get-involved#corporate" 
            />
            <PurposeCard 
              icon={Mic} 
              title="I am a Journalist" 
              desc="For media enquiries or campus visits, reach out." 
              actionText="Email Directly →" 
              actionLink="mailto:anandalok90@gmail.com?subject=Media Enquiry — Anandalok" 
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT FORM */}
      <section className="py-32 px-6 md:px-16 bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            {formSubmitted ? (
              <div className="h-full flex flex-col justify-center bg-backgroundSecondary p-16 rounded-[4rem] border border-accent/20 space-y-6 text-center">
                <div className="w-20 h-20 bg-accent text-cream rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-heading font-bold text-4xl text-dark">Thank you for reaching out.</h3>
                <p className="text-dark/70 text-xl font-body leading-relaxed">
                  We have received your message and will get back to you within 2 to 3 working days. If you need an immediate response, please call <strong className="text-accent">+91 9433739890</strong>.
                </p>
                <button onClick={() => setFormSubmitted(false)} className="text-accent font-bold uppercase tracking-widest text-sm">Send another message</button>
              </div>
            ) : (
              <div className="space-y-10">
                <h2 className="scroll-animate font-heading font-bold text-4xl text-dark">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="scroll-animate space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-dark/40 ml-4">Your Name *</label>
                        <input required type="text" placeholder="Your full name" className="w-full px-8 py-5 bg-backgroundSecondary border border-border rounded-2xl focus:border-accent outline-none transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-dark/40 ml-4">Your Email *</label>
                        <input required type="email" placeholder="your.email@example.com" className="w-full px-8 py-5 bg-backgroundSecondary border border-border rounded-2xl focus:border-accent outline-none transition-colors" />
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-dark/40 ml-4">Your Phone Number</label>
                        <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-8 py-5 bg-backgroundSecondary border border-border rounded-2xl focus:border-accent outline-none transition-colors" />
                      </div>
                      <div className="space-y-2 relative">
                        <label className="text-xs font-bold uppercase tracking-widest text-dark/40 ml-4">I Am Reaching Out About *</label>
                        <select required className="w-full px-8 py-5 bg-backgroundSecondary border border-border rounded-2xl focus:border-accent outline-none transition-colors appearance-none">
                           <option value="">Select an option</option>
                           <option>Admission enquiry — residential care</option>
                           <option>Admission enquiry — day care</option>
                           <option>Making a donation</option>
                           <option>Volunteering</option>
                           <option>Corporate or CSR partnership</option>
                           <option>Media or press enquiry</option>
                           <option>General question</option>
                           <option>Other</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-6 bottom-6 text-dark/40 pointer-events-none" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-dark/40 ml-4">Your Message *</label>
                      <textarea required rows={5} placeholder="Tell us how we can help. We are listening." className="w-full px-8 py-5 bg-backgroundSecondary border border-border rounded-2xl focus:border-accent outline-none transition-colors resize-none"></textarea>
                   </div>
                   <button type="submit" className="w-full py-6 bg-accent text-cream font-heading font-bold rounded-2xl text-xl btn-magnetic">Send Message</button>
                   <p className="text-center text-dark/40 text-sm font-body px-8">Your information is safe with us. We will never share your details with anyone.</p>
                </form>
              </div>
            )}
          </div>
          <div className="lg:col-span-5 scroll-animate">
             <div className="bg-backgroundSecondary p-12 rounded-[4rem] border border-border space-y-8">
                <h3 className="font-heading font-bold text-3xl text-dark leading-tight">A Quick Note <br/> Before You Write</h3>
                <div className="space-y-6 text-dark/70 font-body text-lg leading-relaxed">
                   <p>We are a small team caring for 35 residents, so we may not reply instantly — but we read every single message and we will get back to you within 2 to 3 working days.</p>
                   <p>If your matter is urgent, please call us directly at <strong>+91 9433739890</strong>. We are always faster on the phone.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CAMPUS LOCATION AND MAP */}
      <section className="py-32 px-6 md:px-16 bg-backgroundSecondary overflow-hidden">
        <div className="container mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="scroll-animate space-y-12">
                 <div>
                   <span className="font-data text-accent tracking-widest uppercase text-xs font-bold block mb-4">FIND US</span>
                   <h2 className="font-heading font-bold text-5xl text-dark">Visit Our Campus</h2>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <h4 className="font-heading font-bold text-accent uppercase text-xs tracking-widest">Campus Address</h4>
                       <p className="text-dark/80 font-body leading-relaxed">
                          Anandalok <br/>
                          Badu Road, Madhyamgram <br/>
                          North 24 Parganas, West Bengal
                       </p>
                    </div>
                    <div className="space-y-2">
                       <h4 className="font-heading font-bold text-accent uppercase text-xs tracking-widest">City Office</h4>
                       <p className="text-dark/80 font-body leading-relaxed">
                          16A, Lake View Road <br/>
                          Kolkata — 700029
                       </p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h4 className="font-heading font-bold text-2xl text-dark">How to Reach Us</h4>
                    <div className="space-y-4 text-dark/70 font-body text-sm leading-relaxed">
                       <p><strong>From Kolkata Airport:</strong> 10 km, approximately 20 to 30 minutes by car. Head north on VIP Road toward Barasat, then follow signs toward Madhyamgram and Badu Road.</p>
                       <p><strong>From Sealdah Station:</strong> Take a local train to Barasat or Madhyamgram station, then an auto-rickshaw to Badu Road.</p>
                    </div>
                    <div className="pt-4">
                       <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=Anandalok+Autism+Care+Centre+Madhyamgram" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-8 py-4 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic inline-block"
                       >
                         Get Directions on Google Maps
                       </a>
                    </div>
                 </div>

                 <div className="p-8 bg-background rounded-3xl border border-border space-y-4">
                    <h4 className="font-heading font-bold text-dark flex items-center gap-2"><Phone size={18} className="text-accent" /> Visiting Hours</h4>
                    <p className="text-dark/60 text-sm font-body">By appointment only. Please call +91 9433739890 to schedule your visit in advance. We want to ensure someone is available to welcome you.</p>
                 </div>
              </div>
              <div className="scroll-animate relative">
                 <div className="aspect-square bg-background rounded-[4rem] overflow-hidden border border-border shadow-2xl">
                    <iframe
                      title="Anandalok Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0!2d88.5006204!3d22.7032599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a18be21ce753%3A0xed722e7956f3f3c6!2sANANDALOK!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING LINE */}
      <section className="py-24 px-6 bg-background text-center">
         <p className="scroll-animate font-body text-dark/70 text-2xl max-w-2xl mx-auto italic leading-relaxed">
           "Whatever brought you to this page — a question, an offer, a hope, a fear — we are glad you are here. Reach out. <br/> We are listening."
         </p>
      </section>

    </div>
  );
}
