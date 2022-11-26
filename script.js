let navbar = document.querySelector('.navbar');
let cartItem = document.querySelector('.cart-items-container');
let search = document.querySelector('.search-form');
let menuBtn = document.querySelector('#menu-btn');
let cartBtn = document.querySelector('#cart-btn');
let searchBtn = document.querySelector('#search-btn');

menuBtn.onclick = ()=> {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    search.classList.remove('active');
};
cartBtn.onclick = ()=> {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
};
searchBtn.onclick = ()=> {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};

window.onscroll = ()=> {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    search.classList.remove('active');
}

