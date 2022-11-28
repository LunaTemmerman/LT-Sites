import gsap from '../node_modules/gsap/gsap-core.js';
import { CSSPlugin } from '../node_modules/gsap/CSSPlugin.js';
import { ScrollTrigger } from '../node_modules/gsap/ScrollTrigger.js';

gsap.registerPlugin(CSSPlugin);

export function docAnimation(section, logo, hamburger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    section,
    {
      immediateRender: true,
      opacity: 0,
      y: 20,
    },
    {
      immediateRender: true,
      scrollTrigger: {
        trigger: section,
        toggleActions: 'restart none restart pause',
      },
      opacity: 1,
      y: 0,
    }
  );
  gsap
    .fromTo(
      logo,
      {
        immediateRender: true,
        opacity: 0,
        x: -20,
      },
      {
        immediateRender: true,
        opacity: 1,
        x: 0,
      }
    )
    .delay(0.5);
  const tl = gsap.timeline({ delay: 1 });
  tl.to(hamburger, { duration: 0.1, rotate: -10 });
  tl.to(hamburger, { duration: 0.1, rotate: 10 });
  tl.to(hamburger, { duration: 0.1, rotate: -10 });
  tl.to(hamburger, { duration: 0.1, rotate: 10 });
  tl.to(hamburger, { duration: 0.1, rotate: -10 });
  tl.to(hamburger, { duration: 0.1, rotate: 10 });
  tl.to(hamburger, { duration: 0.2, rotate: 0 });
}

export function cardsAnimation(cards) {
  let delay = 0;
  cards.forEach(card => {
    gsap
      .fromTo(
        card,
        {
          immediateRender: true,
          opacity: 0,
          x: 20,
        },
        {
          immediateRender: true,
          scrollTrigger: {
            trigger: card,
            toggleActions: 'restart none restart pause',
          },
          opacity: 1,
          x: 0,
          duration: 0.7,
        }
      )
      .delay(delay);
    const img = card.querySelector('figure');
    gsap
      .fromTo(
        img,
        {
          immediateRender: true,
          opacity: 0,
        },
        {
          immediateRender: true,
          scrollTrigger: {
            trigger: card,
            toggleActions: 'restart none restart pause',
          },
          opacity: 1,
          duration: 0.8,
        }
      )
      .delay(0.6 + delay);
    delay += 0.3;
  });
}
