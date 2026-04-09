'use client';

import React, { useRef } from 'react';
import { Home, Sun, Heart, Paintbrush, Sprout, Users, Building2, Shield, Globe, FileText, Eye, CheckCircle2, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import usePageAnimations from '../hooks/usePageAnimations';

const TimelineNode = ({ year, title, desc, align }) => (
  <div className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 group ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    {/* Node Dot */}
    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10 border-4 border-background group-hover:scale-150 transition-transform duration-300"></div>
    
    <div className={`w-full md:w-1/2 px-8 flex flex-col ${align === 'right' ? 'md:items-start text-left' : 'md:items-end text-right'}`}>
      <span className="font-heading font-bold text-3xl text-accent mb-2">{year}</span>
      <p className="font-body text-dark/80 text-lg leading-relaxed max-w-sm">
        {desc}
      </p>
    </div>
    <div className="hidden md:block w-1/2"></div>
  </div>
);

export default function AboutPage() {
  const container = useRef();

  usePageAnimations(container, '.about-elem');

  return (
    <div ref={container} className="bg-background min-h-screen selection:bg-accent selection:text-white">
      
      {/* SECTION 1: PAGE HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
             src="/hero-about.jpg"
             alt="Two Families, One Question"
             fill
             className="object-cover opacity-40 grayscale"
             sizes="100vw"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl space-y-12 relative z-10 hero-content">
           <span className="about-elem font-heading font-bold text-accent tracking-widest uppercase text-sm block">ABOUT ANANDALOK</span>
           <h1 className="about-elem font-heading font-bold text-5xl md:text-8xl text-cream leading-[0.9]">
             It Started With <br/> Two Families <br/> and One <br/> Terrifying Question.
           </h1>
           <p className="about-elem font-body text-xl md:text-3xl text-cream/70 italic max-w-3xl mx-auto leading-relaxed">
             "Who will love our children when we are gone?"
           </p>
        </div>
      </section>

      {/* SECTION 2: THE FULL ORIGIN STORY */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-[720px] space-y-12">
          <div className="text-center space-y-4 mb-20">
            <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block">How It All Began</span>
            <h2 className="scroll-animate font-heading font-bold text-4xl md:text-6xl text-dark">The Story of Anandalok</h2>
          </div>

          <div className="scroll-animate prose prose-lg prose-charcoal max-w-none space-y-8 font-body text-dark/80 text-lg leading-relaxed">
            <p>
              In the late 1980s, in a middle-class neighbourhood in Kolkata, two families were fighting the same quiet battle.
            </p>
            <p>
              Ashok Sengupta's younger brother Kashinath had an intellectual disability. So did Mala Banerjee's cousin Jayanta. Both young men needed constant care, structured routines, and patient supervision. Both families gave them everything they had.
            </p>
            <p>
              But one question kept both families awake at night. It was the question no one wanted to say out loud but every parent in their situation thinks about every single day — who will take care of them when we are no longer here?
            </p>
            <p>
              Kashinath had been living in a children's home for individuals with intellectual disabilities in Kankurgachhi, Kolkata. But he was growing up. He needed a place built for adults — a permanent home with the kind of specialised, lifelong care that simply did not exist in the region.
            </p>
            <p className="font-bold text-dark italic">
              That shared desperation became a shared mission.
            </p>
          </div>

          <div className="relative scroll-animate w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-accent/10">
            <Image src="/about-us-group.jpg" alt="Founder Story" fill className="object-cover" sizes="(max-width: 720px) 100vw, 720px" />
          </div>

          <div className="scroll-animate space-y-8 font-body text-dark/80 text-lg leading-relaxed">
            <p>
              Ashok, his close friend Bijoy Choudhury — a man with deep social conviction who was not personally affected but refused to stand by — and Mala Banerjee, a consumer activist and social worker, came together. They started reaching out to other families facing the same crisis. What they found was staggering. Dozens of families across Kolkata were quietly struggling, hiding their children from a society that did not understand the difference between autism and madness, between intellectual disability and mental illness.
            </p>
            <p>
              These families had nowhere to turn.
            </p>
            <p>
              So Ashok, Bijoy, and Mala decided to build the place that nowhere. They formed the Welfare Centre for the Mentally Handicapped — a name that reflected the language of its time — and registered it as a society in 1988-89 under the West Bengal Societies Registration Act.
            </p>
            <p className="font-bold text-dark italic">
              The dream had a name. Now it needed a home.
            </p>
            <p>
              On 7th January 1990, Anandalok opened its doors in a small rented house in Bhadreshwar, Hooghly, West Bengal. Seven residents. Four caregivers. No funding. No infrastructure. Just an unshakeable belief that these young men deserved more than the world was offering them.
            </p>
            <p>
              The name Anandalok means 'a world of joy.' It was not aspirational. It was a promise.
            </p>
          </div>

          <div className="relative scroll-animate w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-accent/10">
            <Image src="/about-us-img.jpg" alt="Expansion phase" fill className="object-cover" sizes="(max-width: 720px) 100vw, 720px" />
          </div>

          <div className="scroll-animate space-y-8 font-body text-dark/80 text-lg leading-relaxed">
            <p>
              Within a year, something remarkable happened. Through the efforts of Dr P K Ghosh — a friend of Mala Banerjee — a connection was made with Mahajeevan Sadhan Sangh, an organisation that owned a 2.39-acre property with an old single-storey house in Badu, Barasat, about 10 kilometres from Dum Dum Airport. The property was gifted to Anandalok.
            </p>
            <p>
              Renovations began immediately. And on 14th February 1992 — Valentine's Day, fittingly — Anandalok moved to its permanent home. The same 7 residents. The same 4 caregivers. But now, for the first time, they had land under their feet that was truly theirs.
            </p>
            <p>
              What followed was three decades of quiet, determined growth. Families kept coming to the gate with the same question the founders had once asked — will you take care of my child?
            </p>
            <p className="font-bold text-dark">
              And year by year, Anandalok found a way to say yes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: ANANDALOK TODAY */}
      <section className="py-32 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="scroll-animate space-y-8">
            <span className="font-data text-accent tracking-widest uppercase text-xs font-bold block">Anandalok Today</span>
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-dark leading-tight">36 Years Later, <br/> the Promise Still Holds</h2>
            <div className="space-y-6 text-dark/80 font-body text-lg leading-relaxed">
              <p>
                Today, Anandalok is home to 35 residents — men and women living with autism, Down syndrome, ADHD, epilepsy, and other intellectual disabilities — on a lush 2.4-acre campus in Madhyamgram, North 24 Parganas.
              </p>
              <p>
                It is, to our knowledge, the oldest continuously running residential care sanctuary for individuals with autism in the Kolkata region.
              </p>
              <p>
                But what makes Anandalok different is not its age. It is what happens inside its walls every single day. Our residents do not sit in rooms waiting for the day to pass. They wake up to a structured routine filled with purpose.
              </p>
              <p className="font-bold text-dark italic">
                They are not patients in our care. They are artists in their element.
              </p>
              <p>
                The accommodation may be simple. The love is not.
              </p>
            </div>
          </div>
          <div className="scroll-animate grid grid-cols-2 gap-6">
             <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-border"><Image src="/gallery1.jpeg" alt="Resident Art" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
             <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-border"><Image src="/gallery2.jpeg" alt="Resident Skill" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
             <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-border"><Image src="/gallery3.jpeg" alt="Creativity" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
             <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-border"><Image src="/gallery4.jpeg" alt="Campus Life" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" /></div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MISSION, VISION, AND VALUES */}
      <section className="py-24 px-6 md:px-16 bg-dark text-cream">
        <div className="container mx-auto">
          <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block text-center mb-16">What Guides Us</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Our Mission", text: "To provide lifelong residential care, creative development, and vocational training in a safe, loving, family-style environment — celebrating every single day." },
              { title: "Our Vision", text: "A world where no family lies awake wondering who will care for their child when they are gone. A world where every mind has a home and a canvas." },
              { title: "Our Values", text: "Dignity over pity. Ability over limitation. Home over institution. Family over facility. Art over isolation. Love over everything." },
            ].map((item, i) => (
              <div key={i} className="scroll-animate space-y-6">
                 <h3 className="font-heading font-bold text-4xl text-accent">{item.title}</h3>
                 <p className="font-body text-cream/70 text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT WE DO — SERVICES OVERVIEW */}
      <section className="py-32 px-6 md:px-16 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20 space-y-4">
            <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block">What We Provide</span>
            <h2 className="scroll-animate font-heading font-bold text-4xl md:text-5xl text-dark">Comprehensive Care for the Whole Person</h2>
            <p className="scroll-animate max-w-3xl mx-auto text-dark/60 font-body text-lg">Every service at Anandalok is designed around one belief — our residents are complete human beings who deserve a complete life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Residential Care", desc: "Full-time living facilities with 24/7 staff, structured daily routines, and the warmth of a permanent home." },
              { icon: Sun, title: "Day Care Centre", desc: "Structured daytime support (10:30 AM - 4:30 PM) for individuals living at home in the Kolkata region." },
              { icon: Heart, title: "Medical & Therapy", desc: "Physiotherapy, psychological support, and regular health check-ups to ensure holistic wellbeing." },
              { icon: Paintbrush, title: "Creative Expression", desc: "Art, music, dance, and craft-making — the heart of life at Anandalok. They are artists, not patients." },
              { icon: Sprout, title: "Life Skills Training", desc: "Farming, cooking, computer training, and independent living skills that give residents agency and self-respect." },
              { icon: Users, title: "Community Support", desc: "Assistance with disability certification, legal guardianship, and community awareness workshops for families." },
            ].map((service, i) => (
              <div key={i} className="scroll-animate p-10 bg-backgroundSecondary border border-border rounded-3xl hover:border-accent transition-all duration-500">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <service.icon size={28} />
                </div>
                <h4 className="font-heading font-bold text-xl text-dark mb-4">{service.title}</h4>
                <p className="text-dark/70 font-body leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR TEAM AND STAFF */}
      <section className="py-32 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <div className="scroll-animate space-y-8">
                <span className="font-data text-accent tracking-widest uppercase text-xs font-bold block">The People Behind Anandalok</span>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark">A Family of Professionals Who Chose to Stay</h2>
                <div className="space-y-6 text-dark/80 font-body text-lg leading-relaxed">
                  <p>
                    Caring for individuals with autism, Down syndrome, ADHD, and epilepsy is not a 9-to-5 job. It is a calling. The people who work at Anandalok did not end up here by accident. They chose this work. Many have stayed for decades. They are not staff. They are family.
                  </p>
                  <p className="font-bold text-dark italic">
                    Today, Anandalok is run by a dedicated team.
                  </p>
                  <div className="pt-6 border-t border-dark/10">
                    <p className="text-sm text-dark/50 italic mb-4">Are you a special educator or therapist? join our family.</p>
                    <a href="mailto:wcmh90@gmail.com" className="px-6 py-3 bg-dark text-cream font-heading font-bold rounded-xl btn-magnetic inline-block">Send CV</a>
                  </div>
                </div>
             </div>
             
             <div className="scroll-animate space-y-12 bg-background p-10 rounded-[3rem] border border-border">
                <div className="space-y-6">
                   <h4 className="font-heading font-bold text-2xl text-accent">Professional Staff</h4>
                   <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-dark/70 font-body">
                      <li>• Psychologists</li>
                      <li>• Special Educators</li>
                      <li>• Art Therapists</li>
                      <li>• Music Instructors</li>
                      <li>• Vocational Teachers</li>
                      <li>• Physiotherapists</li>
                   </ul>
                </div>
                <div className="space-y-6">
                   <h4 className="font-heading font-bold text-2xl text-accent">Residential Staff</h4>
                   <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-dark/70 font-body">
                      <li>• 16 Caregivers</li>
                      <li>• Nutrition Staff</li>
                      <li>• Campus Maintenance</li>
                      <li>• Social Workers</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: MILESTONES TIMELINE */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-24 space-y-4">
             <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block">Our Journey</span>
             <h2 className="scroll-animate font-heading font-bold text-4xl md:text-5xl text-dark">36 Years. One Unbroken Promise.</h2>
          </div>

          <div className="relative scroll-animate">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-accent/20"></div>
            
            <TimelineNode year="1989" desc="WCMH is registered. Founders reunite around a shared mission." align="left" />
            <TimelineNode year="1990" desc="Opening in Bhadreshwar with 7 residents and 4 caregivers." align="right" />
            <TimelineNode year="1992" desc="Land gift in Badu Road. 2.4-acre permanent campus begins." align="left" />
            <TimelineNode year="1996" desc="German Govt funds female wing. Anandalok becomes inclusive." align="right" />
            <TimelineNode year="2010" desc="Day Care launched. Visiting faculty and computer training added." align="left" />
            <TimelineNode year="Today" desc="36 years of love. 35 residents. A green, thriving sanctuary." align="right" />
          </div>
        </div>
      </section>

      {/* SECTION 8: UNDERSTANDING AUTISM — EDUCATIONAL SECTION */}
      <section className="py-32 px-6 md:px-16 bg-backgroundSecondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div className="scroll-animate space-y-8">
                <span className="font-data text-accent tracking-widest uppercase text-xs font-bold block">Understanding the Conditions We Support</span>
                <h2 className="font-heading font-bold text-4xl md:text-6xl text-dark leading-tight">These Conditions Are Not Mental Illness. <br/> Here Is What They Actually Are.</h2>
                <div className="space-y-6 text-dark/80 font-body text-lg leading-relaxed">
                  <p>
                    One of the biggest obstacles facing individuals with autism, Down syndrome, ADHD, and epilepsy in India is not the condition itself. It is the way society misunderstands it.
                  </p>
                  <p>
                    These are neurodevelopmental conditions — people are born with them. They are not caused by bad parenting or bad luck. They are not something to be cured. They are different ways of experiencing the world.
                  </p>
                  <p className="font-bold text-dark italic">
                    The problem is not the condition. The problem is a society that still confuses it with madness. That ends here.
                  </p>
                </div>
             </div>
             
             <div className="scroll-animate grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background p-8 rounded-[3rem] border border-border">
                   <h4 className="font-heading font-bold text-xl text-accent mb-6">These Conditions ARE</h4>
                   <ul className="space-y-4 text-sm text-dark/70 font-body">
                      {[
                        "Neurodevelopmental — present from birth",
                        "A spectrum — every person is different",
                        "Varied: autism, Down syndrome, ADHD, epilepsy & more",
                        "Manageable with support, structure, and love",
                        "Accompanied by extraordinary creative abilities"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3"><CheckCircle2 size={16} className="text-accent flex-shrink-0" /> {item}</li>
                      ))}
                   </ul>
                </div>
                <div className="bg-background p-8 rounded-[3rem] border border-border">
                   <h4 className="font-heading font-bold text-xl text-accent mb-6">These Conditions are NOT</h4>
                   <ul className="space-y-4 text-sm text-dark/70 font-body">
                      {[
                        "A mental illness",
                        "Contagious",
                        "Result of vaccines or parenting",
                        "Something that needs a 'cure'",
                        "A reason to hide or institutionalise"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3"><span className="text-accent flex-shrink-0 font-bold scale-150">×</span> {item}</li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: LEGAL AND GOVERNANCE INFORMATION */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16 space-y-4">
              <span className="scroll-animate font-data text-accent tracking-widest uppercase text-xs font-bold block">Governance and Registration</span>
              <h2 className="scroll-animate font-heading font-bold text-4xl text-dark">Transparent. Accountable. Registered.</h2>
              <p className="scroll-animate text-dark/50 max-w-2xl mx-auto">Anandalok operates under WCMH, a registered society with 36 years of legal compliance.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Society Registration", detail: "Registered under West Bengal Societies Act XXVI of 1961, No. 5/61096 of 1988-89" },
                { title: "Income Tax Exemption", detail: "All contributions are exempt under Section 80G of the Income Tax Act 1961." },
                { title: "FCRA Approved", detail: "Registered to receive legal international donations and foreign organisation funding." },
                { title: "Registered Office", detail: "47, Kathore Road, Barasat, North 24 Parganas, WB — 700128" },
                { title: "Campus Address", detail: "Badu Road, Madhyamgram (10 km from Kolkata Airport)" },
                { title: "Contact Details", detail: "91 9433739890 | anandalok90@gmail.com" },
              ].map((card, i) => (
                <div key={i} className="scroll-animate p-8 bg-backgroundSecondary border border-border rounded-3xl space-y-2 group hover:border-accent transition-all">
                   <h4 className="font-heading font-bold text-accent text-sm uppercase tracking-widest">{card.title}</h4>
                   <p className="font-body text-dark/70 leading-relaxed">{card.detail}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* SECTION 10: CLOSING CTA */}
      <section className="py-32 px-6 md:px-16 bg-dark text-cream relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="scroll-animate font-heading font-bold text-4xl md:text-7xl leading-tight tracking-tight">
            Now You Know Our Story. <br/> Will You Be Part of <br/> the Next Chapter?
          </h2>
          <p className="scroll-animate max-w-2xl mx-auto text-cream/70 font-body text-xl md:text-2xl leading-relaxed">
            Whether you give, volunteer, visit, or share — you have the power to change a life. Not in theory. In practice. Today.
          </p>
          <div className="scroll-animate flex flex-wrap justify-center gap-6">
            <Link href="/donate" className="px-10 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl shadow-lg">
               Donate Now
            </Link>
            <a href="tel:+919433739890" className="px-10 py-5 border-2 border-cream/20 text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-cream/5 transition-colors">
               Call Us
            </a>
            <Link href="/contact" className="px-10 py-5 border-2 border-accent text-accent font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-accent/5 transition-colors">
               Visit Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
