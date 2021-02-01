const hambergerBtn = document.querySelector('.navbar_hambergerBtn');
const menu = document.querySelector('.navbar_items');
const icons = document.querySelector('.navbar_icons');

hambergerBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})