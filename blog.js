
/*
 * Open the drawer when the menu icon is clicked.
 */
var tinyNavBar = document.querySelector('#tinyNavBar');
var leftNavOffScreen = document.querySelector('#leftNavOffScreen');
var container = document.querySelector('#container');

tinyNavBar.addEventListener('click', function (e) {
    container.classList.toggle('open');
    e.stopPropagation();
});
leftNavOffScreen.addEventListener('click', function () {
    container.classList.remove('open');
});

