'use client';

import React, { useLayoutEffect, useRef, useState, useMemo } from 'react';
import { Share2, ArrowRight, Clock, Calendar, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STORIES_DATA = [
  {
    slug: 'rushadru-found-his-stage',
    category: 'Resident Journeys',
    title: 'Rushadru Found His Stage',
    subtitle: 'Name changed to protect privacy',
    excerpt: 'From non-verbal and isolated to the boy who leaps on stage the moment music plays. A story of transformation.',
    readTime: '4 min read',
    date: 'March 2026',
    image: '/rushadru_official.jpg',
    content: (
      <>
        <p>"When Rushadru first arrived at Anandalok, his parents were desperate.</p>
        <p>At home, he was aggressive, non-verbal, and completely isolated. He could not connect with anyone — not even his own family. He could not express his feelings. He could not play with other children. He lived in a world of frustration and loneliness that no one around him knew how to reach.</p>
        <p>His guardians admitted him to our residential programme hoping for even the smallest breakthrough. A single word. A moment of eye contact. Anything.</p>
        <p>Within six months, everything changed.</p>
        <p>Rushadru started speaking — in his own unique language. He began expressing his thoughts. He started joining group activities, forming bonds with other residents, and showing a warmth that his family had never seen.</p>
        <div className="pull-quote">
           "We never thought we would see him this happy. The management's selfless efforts gave us our son back. We are so grateful he has a home where he is truly understood and loved." — Rushadru's parents
        </div>
        <p>But the most beautiful transformation was one no one expected. His love for dance.</p>
        <p>Now, whenever music plays at Anandalok — during a celebration, a cultural programme, or even just a casual moment — Rushadru does not wait for permission. He leaps onto the stage and loses himself in the joy of movement.</p>
      </>
    )
  },
  {
    slug: 'who-will-love-her-when-we-are-gone',
    category: 'Family Voices',
    title: 'Who Will Love Her When We Are Gone?',
    excerpt: 'Every parent of a child with autism faces this question. One family shares their journey from despair to hope.',
    readTime: '5 min read',
    date: 'March 2026',
    image: '/campus1.jpg',
    content: (
      <>
        <p>"She does not want to be named. She asks only that we call her Rina's mother. She is 62. Her husband is 67. Their daughter Rina is 28.</p>
        <p>For 24 years, Rina's parents were her entire world. Her mother bathed her, dressed her, fed her, taught her what she could, and protected her from a neighbourhood that whispered and stared. Her father worked overtime to afford therapists and special tutors.</p>
        <div className="pull-quote">
           "Who will love her when we are gone?"
        </div>
        <p>It is the question that every parent of a child with autism faces. And it is a question that most people around them have no idea how to answer.</p>
        <p>They searched for years. Then a family friend mentioned Anandalok. They visited, and for the first time, they saw a place that didn't feel like an institution. It felt like a home.</p>
      </>
    )
  },
  {
    slug: 'a-day-at-anandalok',
    category: 'Life at Anandalok',
    title: 'A Day at Anandalok — From Morning Assembly to Starlight',
    excerpt: 'What does an ordinary day look like for our 35 residents? Follow along from the first cup of chai to the last goodnight.',
    readTime: '6 min read',
    date: 'March 2026',
    image: '/campus2.jpg',
    content: (
      <>
        <p>"If you were to spend a single day at Anandalok, this is what you would see.</p>
        <p>By 7 AM, the campus is already stirring. Caregivers help residents with their morning routines — brushing teeth, washing up, getting dressed. Some residents are fiercely independent. Others need gentle hands. Both are met with the same unhurried warmth.</p>
        <p>Breakfast is at 8. By 9:30, the campus has the energy of a small school. Residents move to their assigned sessions — communication skills, art, music, or vocational farming.</p>
        <p>Throughout the day, the air is filled with the sound of laughter, music, and the steady work of growing skills and confidence.</p>
      </>
    )
  },
  {
    slug: 'autism-is-not-mental-illness',
    category: 'Understanding Autism',
    title: 'Autism Is Not Mental Illness. Here Is What Every Indian Family Needs to Know.',
    excerpt: 'The single biggest misconception about autism in India — and why it costs families years of lost opportunity.',
    readTime: '5 min read',
    date: 'March 2026',
    image: '/campus3.jpg',
    content: (
      <>
        <p>"Autism is not a mental illness. This distinction matters more than almost anything else in this conversation.</p>
        <p>In India, the words 'mental' and 'disability' carry enormous stigma. This misunderstanding causes real, measurable harm — not to the people doing the misunderstanding, but to the families living with autism every day.</p>
        <div className="pull-quote">
           Autism is a neurodevelopmental condition. It relates to how the brain develops, not how the mind functions emotionally.
        </div>
        <p>A person with autism is wired differently. They process sensory information and social cues in ways that others might find unusual, but they also possess unique strengths in detail, routine, and creativity.</p>
      </>
    )
  },
  {
    slug: 'the-garden-that-grew-a-gardener',
    category: 'Resident Journeys',
    title: 'The Garden That Grew a Gardener',
    excerpt: 'How one resident found his purpose in the soil. Name changed to Sumon to protect privacy.',
    readTime: '4 min read',
    date: 'March 2026',
    image: '/campus4.jpg',
    content: (
      <>
        <p>"We will call him Sumon. When he came to Anandalok, he could not sit still for five minutes. He paced. He rocked. He moved with a restless energy that exhausted everyone around him.</p>
        <p>At Anandalok, we tried to understand him instead of solving him. We noticed he slowed down in the garden. So we gave him a watering can.</p>
        <p>Within six months, Sumon was the garden's most reliable worker. The energy that once seemed to tear him apart now flows into something that grows."</p>
      </>
    )
  },
  {
    slug: 'two-brothers-one-dream',
    category: 'Life at Anandalok',
    title: 'Two Brothers, One Dream — The Founding Story of Anandalok',
    excerpt: 'In 1989, Kashinath needed a home. His brother Ashok decided to build one — not just for him, but for everyone.',
    readTime: '7 min read',
    date: 'March 2026',
    image: '/campus5.jpg',
    content: (
      <>
        <p>"The story of Anandalok begins with a problem that no one else wanted to solve. In 1989, Ashok Sengupta had a younger brother, Kashinath, who needed a permanent home for his adult life.</p>
        <p>Along with friends Mala Banerjee and Bijoy Choudhury, they built a solution for middle-class families who were quietly drowning under the weight of caring for adult children with disabilities.</p>
        <div className="pull-quote">
           "Who will take care of them when we are gone?" The answer was: We will.
        </div>
        <p>Today, 35 residents call Anandalok home. What started in a rented house is now a thriving 2.4-acre sanctuary near the airport."</p>
      </>
    )
  }
];

const StoryCard = ({ story }) => (
  <Link 
    href={`/stories/${story.slug}`}
    className="scroll-animate group bg-background border border-border rounded-[2.5rem] overflow-hidden hover:border-accent transition-all duration-500 hover:shadow-xl flex flex-col"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
       <Image
         src={story.image.startsWith('http') ? `${story.image}?q=80&w=800&auto=format&fit=crop` : story.image}
         alt={story.title}
         fill
         className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
       />
       <div className="absolute bottom-4 left-6 px-4 py-2 bg-accent text-cream text-[10px] font-data uppercase tracking-widest rounded-full">
          {story.category}
       </div>
    </div>
    <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
       <div className="space-y-4">
          <h3 className="font-heading font-bold text-2xl text-dark group-hover:text-accent transition-colors leading-tight">
            {story.title}
          </h3>
          <p className="text-dark/60 text-sm leading-relaxed line-clamp-3 font-body italic">
            {story.excerpt}
          </p>
       </div>
       <div className="pt-6 flex items-center justify-between border-t border-border mt-auto">
          <div className="flex items-center gap-2 text-dark/40 text-[10px] font-data uppercase tracking-widest">
             <Clock size={12} /> {story.readTime}
          </div>
          <div className="text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2">
             Read Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
       </div>
    </div>
  </Link>
);

export default function StoriesPage() {
  const container = useRef();
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState('All Stories');

  const categories = ['All Stories', 'Resident Journeys', 'Family Voices', 'Life at Anandalok', 'Understanding Autism'];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    let ctx = gsap.context(() => {
      gsap.from('.story-hero-content', {
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
  }, [slug]);

  const filteredStories = useMemo(() => {
    if (activeCategory === 'All Stories') return STORIES_DATA;
    return STORIES_DATA.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const currentStory = useMemo(() => {
    return STORIES_DATA.find(s => s.slug === slug);
  }, [slug]);

  const nextStory = useMemo(() => {
    if (!currentStory) return null;
    const currentIndex = STORIES_DATA.findIndex(s => s.slug === slug);
    return STORIES_DATA[(currentIndex + 1) % STORIES_DATA.length];
  }, [currentStory, slug]);

  if (slug && currentStory) {
    // DETAIL VIEW
    return (
      <div ref={container} className="bg-background min-h-screen selection:bg-accent selection:text-white pb-32">
        <article className="container mx-auto max-w-7xl px-6">
           <header className="space-y-12 mb-20 text-center">
              <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden story-hero-content shadow-2xl">
                 <Image src={currentStory.image.startsWith('http') ? `${currentStory.image}?q=100&w=2600` : currentStory.image} alt={currentStory.title} fill className="object-cover" sizes="100vw" priority />
              </div>
              <div className="max-w-4xl mx-auto space-y-6 story-hero-content">
                 <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">{currentStory.category}</span>
                 <h1 className="font-heading font-bold text-5xl md:text-8xl text-dark leading-[0.9]">{currentStory.title}</h1>
                 {currentStory.subtitle && <p className="text-dark/40 font-body text-lg italic">{currentStory.subtitle}</p>}
                 <div className="flex items-center justify-center gap-6 text-dark/40 text-xs font-data uppercase tracking-widest pt-4">
                    <span className="flex items-center gap-2"><Clock size={16} /> {currentStory.readTime}</span>
                    <span className="flex items-center gap-2"><Calendar size={16} /> {currentStory.date}</span>
                 </div>
              </div>
           </header>

           <div className="max-w-[720px] mx-auto story-hero-content">
              <div className="prose prose-xl prose-accent font-body text-dark/80 leading-[1.8] space-y-10 custom-story-content">
                 {currentStory.content}
              </div>

              <div className="mt-32 pt-16 border-t border-border flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="space-y-4">
                    <h4 className="font-heading font-bold text-dark text-xl">Share this story</h4>
                     <div className="flex gap-4">
                       <button className="w-12 h-12 bg-background-secondary border border-border rounded-full flex items-center justify-center text-dark/60 hover:text-accent hover:border-accent transition-all duration-500">
                         {/* Facebook SVG */}
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                       </button>
                       <button className="w-12 h-12 bg-background-secondary border border-border rounded-full flex items-center justify-center text-dark/60 hover:text-accent hover:border-accent transition-all duration-500">
                         {/* X/Twitter SVG */}
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                       </button>
                       <button className="w-12 h-12 bg-background-secondary border border-border rounded-full flex items-center justify-center text-dark/60 hover:text-accent hover:border-accent transition-all duration-500">
                         {/* LinkedIn SVG */}
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                       </button>
                       <button className="w-12 h-12 bg-background-secondary border border-border rounded-full flex items-center justify-center text-dark/60 hover:text-accent hover:border-accent transition-all duration-500" onClick={() => navigator.clipboard.writeText(window.location.href)}><LinkIcon size={20} /></button>
                    </div>
                 </div>
                 
                 {nextStory && (
                   <Link href={`/stories/${nextStory.slug}`} className="group p-8 bg-background-secondary border border-border rounded-[2.5rem] flex items-center gap-8 max-w-md hover:border-accent transition-all duration-500">
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                         <Image src={nextStory.image.startsWith('http') ? `${nextStory.image}?q=80&w=400&auto=format&fit=crop` : nextStory.image} alt="Next Story" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" sizes="96px" />
                      </div>
                      <div className="space-y-1">
                         <span className="text-[10px] font-data text-accent uppercase tracking-widest">Read Next</span>
                         <h5 className="font-heading font-bold text-lg text-dark group-hover:text-accent transition-colors leading-tight line-clamp-2">{nextStory.title}</h5>
                      </div>
                   </Link>
                 )}
              </div>
           </div>
        </article>
      </div>
    );
  }

  // LISTING VIEW
  return (
    <div ref={container} className="bg-background min-h-screen selection:bg-accent selection:text-white">
      
      {/* SECTION 1: PAGE HERO */}
      <section className="relative bg-dark py-32 px-6 md:px-16 text-center overflow-hidden min-h-[60dvh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/truth.jpg"
            alt="Stories from Anandalok"
            fill
            className="object-cover opacity-30 grayscale"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
        </div>
        <div className="container mx-auto max-w-5xl space-y-8 relative z-10">
           <span className="story-hero-content font-heading font-bold text-accent tracking-widest uppercase text-sm block">STORIES FROM ANANDALOK</span>
           <h1 className="story-hero-content font-heading font-bold text-5xl md:text-8xl text-cream leading-[0.9]">
             Every Person Here <br/> Has a Story That <br/> Will Change How You <br/> See the World.
           </h1>
           <p className="story-hero-content font-body text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto leading-relaxed">
             These are not case studies. They are real stories about residents who call Anandalok home, the families who trusted us, and the staff who chose this work because nothing else felt meaningful enough.
           </p>
        </div>
      </section>

      {/* SECTION 2: CATEGORY FILTER */}
      <nav className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-y border-border py-6 px-6 md:px-16">
         <div className="container mx-auto flex overflow-x-auto gap-10 no-scrollbar scroll-smooth">
            {categories.map((cat) => (
               <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 font-heading font-bold uppercase tracking-widest text-xs py-2 border-b-2 transition-all ${activeCategory === cat ? 'border-accent text-accent' : 'border-transparent text-dark/40 hover:text-dark'}`}
               >
                 {cat}
               </button>
            ))}
         </div>
      </nav>

      {/* SECTION 3: FEATURED STORY */}
      <section className="py-24 px-6 md:px-16 bg-background">
         <div className="container mx-auto max-w-7xl">
            <Link href={`/stories/${STORIES_DATA[0].slug}`} className="scroll-animate group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-border rounded-[4rem] hover:shadow-2xl transition-all duration-700 bg-backgroundSecondary">
               <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <Image src={STORIES_DATA[0].image.startsWith('http') ? `${STORIES_DATA[0].image}?q=80&w=1600&auto=format&fit=crop` : STORIES_DATA[0].image} alt="Featured Story" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute top-8 left-8 px-6 py-3 bg-accent text-cream text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">Featured Story</div>
               </div>
               <div className="p-12 md:p-20 flex flex-col justify-center space-y-8">
                  <span className="text-accent text-sm font-data font-bold uppercase tracking-[0.2em]">{STORIES_DATA[0].category}</span>
                  <h2 className="font-heading font-bold text-4xl md:text-6xl text-dark leading-tight group-hover:text-accent transition-colors">{STORIES_DATA[0].title}</h2>
                  <p className="text-dark/60 font-body text-xl italic leading-relaxed">{STORIES_DATA[0].excerpt}</p>
                  <div className="flex items-center justify-between pt-8 border-t border-border">
                     <span className="text-dark/40 text-xs font-data uppercase tracking-widest flex items-center gap-2"><Clock size={16} /> {STORIES_DATA[0].readTime}</span>
                     <span className="text-accent font-bold uppercase tracking-widest text-sm flex items-center gap-3">Read Full Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></span>
                  </div>
               </div>
            </Link>
         </div>
      </section>

      {/* SECTION 4: STORY CARDS GRID */}
      <section className="py-24 px-6 md:px-16 bg-background">
         <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredStories.map((story, i) => (
                  <StoryCard key={i} story={story} />
               ))}
            </div>
            <div className="mt-24 text-center scroll-animate">
               <p className="font-body text-dark/40 text-lg uppercase tracking-widest">More stories are coming soon.</p>
            </div>
         </div>
      </section>

      {/* SECTION 5: NEWSLETTER SIGNUP */}
      <section className="py-32 px-6 md:px-16 bg-backgroundSecondary rounded-[4rem]">
         <div className="container mx-auto max-w-3xl text-center space-y-12">
            <div className="space-y-4">
               <h2 className="scroll-animate font-heading font-bold text-4xl text-dark">Get New Stories in Your Inbox</h2>
               <p className="scroll-animate text-dark/60 font-body text-xl leading-relaxed">
                  We share a new story every month — resident journeys, campus updates, and insights about autism care. No spam. Just stories that matter.
               </p>
            </div>
            <form className="scroll-animate flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Your email address" className="flex-grow px-8 py-5 bg-background border border-border rounded-2xl focus:border-accent outline-none" />
               <button className="px-10 py-5 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic">Subscribe</button>
            </form>
         </div>
      </section>

      {/* SECTION 6: CLOSING CTA */}
      <section className="py-32 px-6 md:px-16 bg-dark text-cream">
         <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="scroll-animate font-heading font-bold text-4xl md:text-7xl leading-[0.9] tracking-tight">Every Story Here Is Proof That the Right Home Changes Everything.</h2>
            <p className="scroll-animate text-cream/50 font-body text-xl max-w-2xl mx-auto leading-relaxed">If these stories moved you, imagine what your support could do for the next story — the ones we are waiting to write.</p>
            <div className="scroll-animate flex flex-wrap justify-center gap-6 pt-12">
               <Link href="/donate" className="px-12 py-6 bg-accent text-cream font-heading font-bold rounded-2xl btn-magnetic text-xl">Donate Now</Link>
               <Link href="/contact" className="px-12 py-6 border-2 border-accent text-accent font-heading font-bold rounded-2xl btn-magnetic text-xl hover:bg-accent/10 transition-colors">Visit Anandalok</Link>
            </div>
         </div>
      </section>

    </div>
  );
}
