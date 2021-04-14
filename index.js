
// set the variables
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.nav-links');

function toggleMenu(){

    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}


window.addEventListener('scroll', () => { // listen for the webpage being scrolled vertically

    let nav = document.querySelector('nav'); // set a variable called header as our html header element

    nav.classList.toggle('sticky', window.scrollY > 0); // when web page is scrolled down we attach the class "sticky" to the header
})


