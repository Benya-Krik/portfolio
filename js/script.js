'use strict'

// typewriter from intro

const text = [
    "Hello! I'm Ilya.",
    "I'm a junior software developer.",
    "Welcome to my site.",
    "Here you can see my projects.",
];

let i = 0;
let El = 0;
let speed = 100;
let pause = 1500;
let result = "";
let caret = '<span class="intro__caret">|</span>';

function typeIntro() {
    if (El < text[i].length) {
        result += text[i][El];
        document.getElementById("hello").innerHTML = result + caret; 
        El++
        setTimeout(typeIntro, speed);
    }
    else {
        setTimeout(typeLine, pause)
    }
}

function typeLine() {
    i++;
    El = 0;
    result = "";
    if (i == text.length) i = 0;
    typeIntro ();
}

typeIntro();

// scroll to anchor link

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 156;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// scrolling animation

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
            change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.35] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  // burger menu

const iconBurger = document.querySelector('.header__button');
  
iconBurger.onclick = getBurger;

let closeMenu = [...document.querySelectorAll('.menu__item')].forEach(item => { 
  item.addEventListener('click', ()=> getBurger());
});

function getBurger() {
  const headerLogo = document.querySelector('.header__logo');
  const burgerMenu = document.querySelector('.menu');
  const icon = document.querySelector('.header__burger');
  
  icon.classList.toggle('header__burger--active');
  headerLogo.classList.toggle('hide');
  burgerMenu.classList.toggle('active');

  setTimeout(()=> burgerMenu.classList.toggle('animate'), 1);
};