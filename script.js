let btnMenu = document.querySelector('.menu');

btnMenu.addEventListener('click', (e)=>{
    let nav = document.querySelector('.nav');
    nav.classList.toggle('nav_active');
    btnMenu.classList.toggle('menu_active');
});

let btnNotify = document.querySelector('.header__notify-icon');

btnNotify.addEventListener('click', (e)=>{
    e.target.classList.toggle('header__notify-icon_active');
});