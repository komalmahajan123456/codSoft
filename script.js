const heroImage = document.getElementById('heroImage');
const dishes = document.querySelectorAll('.dish');
const cartCount  = document.querySelector('.cart-count');
const addtocart= document.querySelectorAll('.add-to-cart');
const hamburgerbutton = document.getElementById('hamburger');
const navbar = document.getElementById('nav');


let cart =[];

//start spinng aniumation
window.addEventListener('load',()=>{
    heroImage.classList.add('spin');
})

dishes.forEach(dish => {
    dish.addEventListener('click',()=>{

const newImagesrc = dish.getAttribute('data-img');

heroImage.classList.remove('spin');

heroImage.src = newImagesrc;

void heroImage.offsetWidth;

heroImage.classList.add('spin');
    });
});

addtocart.forEach(button=>{
    button.addEventListener('click',(e)=>{

        e.stopPropagation();

    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute ('data-price'));
    cart.push ({name,price});
    updatecatCount();
    })
})

function updatecatCount(){
    cartCount.textContent =cart.length;
}

hamburgerbutton.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})