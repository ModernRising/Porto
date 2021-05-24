
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        speed: 800,
        draggable: false,
        rows: 2,
        slidesPerRow:2,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows:false,
              }
            }
        ]
            
    });
  });

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".banner__menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("banner__menu_active");
});

