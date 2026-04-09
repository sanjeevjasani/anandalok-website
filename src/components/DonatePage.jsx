'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Users, Share2, Building2, MapPin, CheckCircle2, Shield, Globe, FileText, Eye, Copy, Check } from 'lucide-react';
import usePageAnimations from '../hooks/usePageAnimations';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button 
      onClick={handleCopy}
      className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied!" : "Copy Details"}
    </button>
  );
};

export default function DonatePage() {
  const container = useRef();
  
  usePageAnimations(container, '.donate-elem');

  return (
    <div ref={container} className="bg-background min-h-screen">
      
      {/* SECTION 1: HERO / EMOTIONAL OPENING */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
             src="/campus2.jpg"
             alt="Gift of Sanctuary"
             fill
             className="object-cover opacity-30 grayscale"
             sizes="100vw"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl space-y-12 relative z-10 hero-content">
           <span className="donate-elem font-heading font-bold text-accent tracking-widest uppercase text-sm block">DONATE</span>
           <h1 className="donate-elem font-heading font-bold text-4xl md:text-7xl text-cream leading-[0.9]">
             Every Family That Calls Us <br/> Has the Same Fear. <br/> Every Gift You Give <br/> Is the Answer.
           </h1>
           <p className="donate-elem font-body text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto leading-relaxed">
             Every week, a parent calls Anandalok with a breaking voice. The fear is always the same — who will love my child when I am gone? Your donation funds the answer.
           </p>
        </div>
      </section>

      {/* SECTION 2: THE NEED — WHY NOW */}
      <section className="py-32 px-6 md:px-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="scroll-animate space-y-8">
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-dark leading-tight">
              We Have the Land. <br/> We Have the Love. <br/> We Need You.
            </h2>
            <div className="space-y-6 text-dark/80 font-body text-lg leading-relaxed">
              <p>
                Right now, 35 individuals with intellectual disabilities call Anandalok home. They live, learn, create, and thrive on our 2.4-acre campus near Kolkata. Sixteen full-time staff members care for them every single day.
              </p>
              <p>
                But our campus can hold many more. And the families who need us are not running out.
              </p>
              <p>
                Every month, we turn away desperate families because we do not have the infrastructure to welcome their children. Parents who have spent years searching for a safe place. Siblings who lie awake wondering what happens when their parents are gone. Families who have been told their child is a burden — and who refuse to believe it.
              </p>
              <p>
                Our goal is to expand from 35 residents to 100. To do that, we need to build new residential wings, hire additional trained staff, equip new classrooms and therapy spaces, and create the infrastructure that transforms empty rooms into someone's forever home.
              </p>
              <p className="font-bold text-dark italic">
                That is where you come in.
              </p>
            </div>
          </div>
          <div className="scroll-animate relative rounded-[3rem] overflow-hidden bg-backgroundSecondary p-12 flex flex-col items-center justify-center text-center">
             <div className="text-8xl font-heading font-bold text-accent mb-4">100</div>
             <p className="font-data text-dark tracking-widest uppercase text-sm font-bold mb-12">Our Goal residents</p>
             <div className="w-full bg-dark/10 h-4 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-accent w-[35%]"></div>
             </div>
             <div className="flex justify-between w-full mt-4 font-data text-xs text-dark/50 font-bold uppercase tracking-widest">
                <span>35 Residents Today</span>
                <span>65 To Go</span>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DONATION IMPACT TIERS */}
      <section className="py-24 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl text-dark tracking-tight">Your Gift, Their World</h2>
            <p className="scroll-animate max-w-2xl mx-auto text-dark/70 font-body text-xl">
              Every rupee you give has a name, a face, and a story attached to it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              { amount: "₹5,000", title: "A Month of Meals", desc: "Three nutritious meals a day for one resident for an entire month. That is 90 moments of nourishment, community, and the simple dignity of a full plate." },
              { amount: "₹15,000", title: "A Month of Complete Care", desc: "Meals, medical support, therapeutic sessions, creative activities, and round-the-clock supervision for one resident for one month. Everything that turns a building into a home." },
              { amount: "₹30,000", title: "A Year of Learning", desc: "Art supplies, educational materials, computer training resources, and vocational tools for one resident for an entire year. The materials that help someone find their voice." },
              { amount: "₹50,000", title: "One Full Year of Life", desc: "Complete annual support for one resident — meals, care, medical attention, education, creative programmes, and a place to belong. Fifty thousand rupees is the difference between isolation and purpose." },
              { amount: "₹1,00,00,000", title: "40 New Homes", desc: "Fund the infrastructure to welcome 40 more residents to Anandalok. New residential wings, trained staff, equipped classrooms, and therapy spaces. This is a legacy." },
            ].map((tier, i) => (
              <div key={i} className="scroll-animate p-8 bg-background border border-border rounded-3xl flex flex-col hover:border-accent hover:shadow-xl transition-all duration-500 group">
                <div className="font-heading font-bold text-2xl text-accent mb-4 group-hover:scale-105 transition-transform origin-left tracking-tighter">{tier.amount}</div>
                <h4 className="font-heading font-bold text-xl mb-4 text-dark leading-tight">{tier.title}</h4>
                <p className="text-sm text-dark/70 font-body leading-relaxed flex-1">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <p className="font-body text-dark/70 mb-10 text-lg">Every amount matters. If none of these tiers fit, give what your heart tells you. There is no minimum.</p>
            <button className="px-12 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl shadow-2xl flex items-center gap-3 mx-auto">
               Donate Now <Heart size={20} fill="currentColor" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW TO GIVE — BANK DETAILS */}
      <section className="py-32 px-6 md:px-16 container mx-auto">
        <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl text-dark text-center mb-16 tracking-tight">How to Send Your Contribution</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Indian Donations */}
          <div className="scroll-animate p-10 bg-backgroundSecondary border border-border rounded-[3rem] space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-data text-accent tracking-widest uppercase text-xs font-bold block mb-2">INR Contributions</span>
                <h3 className="font-heading font-bold text-3xl text-dark">Indian Donations</h3>
              </div>
              <div className="p-3 bg-accent/15 rounded-2xl text-accent"><Building2 size={24} /></div>
            </div>
            
            <div className="space-y-4 font-body">
              <div>
                <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">Bank Name</p>
                <p className="text-lg font-bold text-dark">Canara Bank, Sarat Bose Road Branch</p>
              </div>
              <div>
                <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">Account Name</p>
                <p className="text-lg font-bold text-dark">Welfare Centre for the Mentally Handicapped</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">Account No</p>
                  <p className="text-lg font-bold text-dark">0323101028321</p>
                </div>
                <div>
                  <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">IFSC Code</p>
                  <p className="text-lg font-bold text-dark">CNRB0000323</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-dark/50 italic border-t border-dark/10 pt-6">All remittances must be drawn in favour of Welfare Centre for the Mentally Handicapped</p>
            <CopyButton text="Canara Bank, Sarat Bose Road. Account Name: Welfare Centre for the Mentally Handicapped. A/C No: 0323101028321. IFSC: CNRB0000323" />
          </div>

          {/* International Donations */}
          <div className="scroll-animate p-10 bg-backgroundSecondary border border-border rounded-[3rem] space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-data text-accent tracking-widest uppercase text-xs font-bold block mb-2">FCRA Contributions</span>
                <h3 className="font-heading font-bold text-3xl text-dark">International Donations</h3>
              </div>
              <div className="p-3 bg-accent/15 rounded-2xl text-accent"><Globe size={24} /></div>
            </div>
            
            <div className="space-y-4 font-body">
              <div>
                <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">Bank Name</p>
                <p className="text-lg font-bold text-dark">State Bank of India, New Delhi Main Branch</p>
              </div>
              <div>
                <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">Account Name</p>
                <p className="text-lg font-bold text-dark">Welfare Centre for the Mentally Handicapped</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">Account No</p>
                  <p className="text-lg font-bold text-dark">40177091192</p>
                </div>
                <div>
                  <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">IFSC Code</p>
                  <p className="text-lg font-bold text-dark">SBIN0000691</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-dark/40 font-bold uppercase tracking-widest mb-1">SWIFT Code</p>
                <p className="text-lg font-bold text-dark">SBININBB183</p>
              </div>
            </div>
            
            <p className="text-sm text-dark/50 italic border-t border-dark/10 pt-6">Anandalok is registered under FCRA to receive foreign contributions</p>
            <CopyButton text="SBI, New Delhi Main. Account Name: Welfare Centre for the Mentally Handicapped. A/C No: 40177091192. IFSC: SBIN0000691. SWIFT: SBININBB183" />
          </div>
        </div>
        
        <p className="scroll-animate mt-12 text-center text-dark/60 font-body text-lg max-w-2xl mx-auto">
          After making your transfer, please email your transaction details to <a href="mailto:anandalok90@gmail.com" className="text-accent font-bold">anandalok90@gmail.com</a> so we can send you a receipt and 80G tax exemption certificate.
        </p>
      </section>

      {/* SECTION 5: TRUST AND TRANSPARENCY */}
      <section className="py-24 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="scroll-animate font-heading font-bold text-4xl text-dark text-center mb-16 tracking-tight">Your Trust Matters to Us</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "80G Tax Exemption", desc: "All contributions are exempt under Section 80G of the Income Tax Act 1961." },
              { icon: Globe, title: "FCRA Approved", desc: "We are registered to receive international donations legally and transparently." },
              { icon: FileText, title: "Since 1988", desc: "Registered under WB Societies Act XXVI of 1961, No. 5/61096 of 1988-89." },
              { icon: Eye, title: "Transparency", desc: "Every rupee is accounted for. We maintain audited financial records for all funds." },
            ].map((badge, i) => (
              <div key={i} className="scroll-animate flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                  <badge.icon size={32} />
                </div>
                <h4 className="font-heading font-bold text-lg text-dark">{badge.title}</h4>
                <p className="text-sm text-dark/60 font-body leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OTHER WAYS TO HELP */}
      <section className="py-32 px-6 md:px-16 container mx-auto">
        <h2 className="scroll-animate font-heading font-bold text-4xl md:text-5xl text-dark text-center mb-16 tracking-tight">Not Ready to Donate? <br className="hidden md:block" /> There Are Other Ways Your Heart Can Help.</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Volunteer", desc: "Share your time, your skills, and your presence. Our residents light up when new faces visit.", link: "Learn More →", url: "/get-involved#volunteer" },
              { icon: Share2, title: "Spread Awareness", desc: "Share our story with your family and friends. One post can reach the one family that needs us most.", link: "Share Our Story →", url: "/get-involved#awareness" },
              { icon: Building2, title: "Corporate Partnerships", desc: "We welcome CSR partnerships with companies that want their impact to have a face and a name.", link: "Partner With Us →", url: "/get-involved#corporate" },
              { icon: MapPin, title: "Visit Anandalok", desc: "Come see it for yourself. Walk through the campus, meet the residents, watch them paint and dance.", link: "Plan a Visit →", url: "/contact" },
            ].map((way, i) => (
              <div key={i} className="scroll-animate p-8 bg-background border border-border rounded-3xl flex flex-col hover:border-accent/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <way.icon size={24} />
                </div>
                <h4 className="font-heading font-bold text-xl mb-4 text-dark">{way.title}</h4>
                <p className="text-sm text-dark/60 font-body leading-relaxed mb-6 flex-1">
                  {way.desc}
                </p>
                <Link href={way.url} className="font-data text-xs font-bold uppercase tracking-widest text-accent hover:translate-x-1 transition-transform inline-block">
                  {way.link}
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* SECTION 7: CLOSING EMOTIONAL CTA */}
      <section className="py-24 px-6 md:px-16 bg-dark text-cream relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
          <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl leading-tight tracking-tight">
            They Are Not Asking for Pity. <br/> They Are Asking for a Canvas.
          </h2>
          <p className="scroll-animate max-w-2xl mx-auto text-cream/70 font-body text-xl md:text-2xl leading-relaxed">
            Somewhere in Kolkata right now, a parent is lying awake staring at the ceiling, wondering what happens to their child when they are gone. Your donation is the answer they are praying for. It does not matter if it is five thousand or fifty thousand. What matters is that you showed up.
          </p>
          <div className="scroll-animate pt-8">
            <button className="px-12 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl shadow-2xl flex items-center gap-3 mx-auto">
               Donate Now <Heart size={20} fill="currentColor" />
            </button>
            <a href="tel:+919433739890" className="inline-block mt-8 text-cream/50 hover:text-cream transition-colors font-body">Or call us at +91 9433739890 to discuss how you can help</a>
          </div>
        </div>
      </section>

      {/* SECTION 8: MICRO FOOTER */}
      <section className="py-12 bg-dark border-t border-cream/5 text-center px-6">
        <p className="text-cream/30 text-xs font-data tracking-widest uppercase max-w-3xl mx-auto leading-relaxed">
          Anandalok is a unit of Welfare Centre for the Mentally Handicapped (WCMH). All donations are tax exempt under 80G. Foreign contributions accepted under FCRA. Registration No. 5/61096 of 1988-89.
        </p>
      </section>

    </div>
  );
}
