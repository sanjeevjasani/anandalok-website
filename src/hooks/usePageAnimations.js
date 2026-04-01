'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared page animation hook used by all full-page components.
 * Scrolls to top, animates hero elements, then scroll-triggers
 * all .scroll-animate elements as they enter the viewport.
 *
 * @param {React.RefObject} containerRef - ref attached to the page root element
 * @param {string} heroClass - CSS class selector for hero elements (e.g. '.about-elem')
 * @param {object} heroOptions - optional overrides for the hero gsap.from() call
 */
export default function usePageAnimations(containerRef, heroClass, heroOptions = {}) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const defaults = {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    };

    let ctx = gsap.context(() => {
      gsap.from(heroClass, { ...defaults, ...heroOptions });

      gsap.utils.toArray('.scroll-animate').forEach((elem) => {
        gsap.from(elem, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
}
