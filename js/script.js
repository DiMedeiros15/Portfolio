$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // animation script
  var typed = new Typed(".escrevendo", {
    strings: ["Desenvolvedor Web", "Analista de Suporte" , "Analista Drupal" ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".escrevendo-2", {
    strings: ["Desenvolvedor web", "Suporte", "Analista Drupal"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true, //true
    autoplay: true, //true
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

const chk = document.getElementById('ball')
const alt = document.querySelector('div #ball')
let ab = document.querySelector('.about')
let ptf = document.querySelector('.portfolio')

chk.addEventListener('click', () =>{
  alt.classList.toggle('active')
  ab.classList.toggle('dark')
  ab.style.transition = 'all 1s';
  ptf.classList.toggle('dark')

})

document.addEventListener('mouseenter', (event) => {
  const element = event.target;
  if (element?.classList?.contains('change-cursor')) {
      document.body.style.cursor = 'url(/img/cursor.png), auto';
  }
});

// Evento quando o cursor sai de um elemento
document.addEventListener('mouseleave', (event) => {
  document.body.style.cursor = 'url(/img/cursor.png), auto';
});
