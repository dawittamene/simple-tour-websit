let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () => {
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
searchbtn.addEventListener('click',() =>{

    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');


});



menu.addEventListener('click',() =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');


});


formbtn.addEventListener('click',() =>{

    loginForm.classList.toggle('active');


});

formClose.addEventListener('click',() =>{

    loginForm.classList.remove('active');


});