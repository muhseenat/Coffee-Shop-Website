let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =() =>{
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
    cartItems.classList.remove('active');
}


let searchBar = document.querySelector('.search-forms');

document.querySelector('#search-btn').onclick =() =>{
    searchBar.classList.toggle('active');
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
}


let cartItems = document.querySelector('.cart-container');

document.querySelector('#cart-btn').onclick =() =>{
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove('active')
}

window.onscroll=() =>{
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
    cartItems.classList.remove('active');
}