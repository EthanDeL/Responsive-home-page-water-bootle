// NAVBAR // 
const nav_links = document.querySelector('.nav-links'); 
const menu_hamburger = document.querySelector('.menu-hamburger')

menu_hamburger.addEventListener('click', () => {
    nav_links.classList.toggle('active');
});


