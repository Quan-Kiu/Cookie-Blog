
let toggle = document.querySelector('.main .navbar #toggle');

let menu = document.querySelector('.main .navbar .menu');

let active = document.querySelector('.main .navbar > .active');

toggle.onclick = function()
{
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
}


   window.addEventListener('scroll',function()
   {
    toggle.classList.remove('active');
    menu.classList.remove('active');
   })