const container = document.querySelector('.container');
const showNav = document.querySelector('.show-nav');
const open = document.getElementById('open');
const close = document.getElementById('close');


open.addEventListener('click', () => {
    container.classList.add('show-nav');
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});
