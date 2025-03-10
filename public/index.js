let x = 0;
let myvar = setInterval(() =>{
    let sliderImages = ["Reviews/1.png", "Reviews/2.png", "Reviews/3.png", "Reviews/4.png"];
    let img = document.getElementById('image');
    if (x < 4) {
        img.src = sliderImages[x];
        x++;
    }
    else {
        img.src = sliderImages[0];
        x = 0;
    }
}, 1500);

function left() {x-=2;}

function right() {
    if (x <= 4) {x++;}
    else {x = 0}
}

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
        });
    }
});
