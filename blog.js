
/*
 * Open the drawer when the menu icon is clicked.
 */
var menu = document.querySelector('#menu');
var dropdown = document.querySelector('.dropdown');
var drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
menu.addEventListener('click', function () {
    drawer.classList.remove('open');
});

