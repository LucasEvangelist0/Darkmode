const h1 = document.querySelector('h1'); 
const main = document.querySelector('main');
const toggle = document.getElementById('toggle');

toggle.onclick = function () {
    toggle.classList.toggle('active');
    main.classList.toggle('active');
    h1.classList.toggle('active');
}
