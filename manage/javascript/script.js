

const menuButton=document.getElementById('menu-btn');
const nav=document.getElementById('menu');
menuButton.addEventListener('click', ()=> {
    menuButton.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
});