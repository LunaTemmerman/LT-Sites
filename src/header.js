import gsap from '../node_modules/gsap/gsap-core.js';
import { CSSPlugin } from '../node_modules/gsap/CSSPlugin.js';
gsap.registerPlugin(CSSPlugin);

const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const hambLines = document.querySelectorAll('.hamburger div');

if (screen.width < 800) {
  let open = false;
  hamburger.addEventListener('click', () => {
    !open ? openMenu() : closeMenu();
    open = !open;
  });

  function openMenu() {
    const tl = gsap.timeline();
    tl.to(hambLines[1], { duration: 0.4, opacity: 0 });
    tl.add('start');
    tl.to(hambLines[0], { duration: 0.2, rotate: 45, y: 8 }, 'start');
    tl.to(hambLines[2], { duration: 0.2, rotate: -45, y: -8 }, 'start');
    tl.to(nav, {
      duration: 0.2,
      height: '10rem',
      opacity: 1,
      display: 'block',
    });
  }
  function closeMenu() {
    const tl = gsap.timeline();
    tl.to(nav, { duration: 0.2, height: 0, opacity: 0, display: 'none' });
    tl.add('start');
    tl.to(hambLines[0], { duration: 0.2, rotate: 0, y: 0 }, 'start');
    tl.to(hambLines[2], { duration: 0.2, rotate: 0, y: 0 }, 'start');
    tl.to(hambLines[1], { duration: 0.4, opacity: 1 });
  }
}
