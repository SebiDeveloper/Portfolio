const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

new WOW().init();



//
//const selector = document.querySelector('.skills__items')
//selector.classList.add('magictime', 'puffIn')
//
//function myFunction() {
//    const selector = document.querySelector('.skills__items')
//    selector.classList.add('magictime', 'puffIn')
//}
//setTimeout(myFunction, 5000);