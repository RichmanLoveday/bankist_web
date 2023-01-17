'use strict';

// selecting 
// console.log(document);
// console.log(document.documentElement);
// console.log(document.head);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);


document.getElementById('section--1');  // selecting by ID
const buttons = document.getElementsByTagName('button')     // selecting by tag name
// console.log(buttons);

// Creating and inserting elements
// creating programatically

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// // console.log(message);

// //


const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomColor = () => {
    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
}
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);

    // Stop propagation
    // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
});

const h1 = document.querySelector('h1');

// Going downward: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';


// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);



// Slider
const slides = document.querySelectorAll('.slide');

const slider = document.querySelector('.slider');
slider.style.transform = `scale(0.5) translateX(-740px)`;
slider.style.overflow = 'visible';

slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
});