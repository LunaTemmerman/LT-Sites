import { docAnimation } from './animations.js';
import { cardsAnimation } from './animations.js';

const sections = document.querySelectorAll('section');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const cards = document.querySelectorAll('ul.cards li');

sections.forEach(section => {
  docAnimation(section, logo, hamburger);
});

cardsAnimation(cards);
