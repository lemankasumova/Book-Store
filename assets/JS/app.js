searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener("click", () => {
    searchForm.classList.toggle('activeform');
})

let loginForm=document.querySelector('.login-form-container');
document.querySelector('#login-btn').addEventListener("click", ()=>{
    loginForm.classList.add('openForm')
} )

document.querySelector('#close-login-btn').addEventListener("click", ()=>{
    loginForm.classList.remove('openForm')
} )

window.onscroll = () => {

    searchForm.classList.remove('activeform');

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () => {

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fade ();
}  

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay:9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay:9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  function loader() {
    let loaderImg=document.querySelector(".loader-container").classList.add("start");
  }
  function fade () {
    setTimeout (loader, 4000);
  }
  

