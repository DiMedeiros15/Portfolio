$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // animation script
    var typed = new Typed (".escrevendo",{
        strings: ["Programador","Desenvolvedor Web","Suporte"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed (".escrevendo-2",{
        strings: ["Programador","Desenvolvedor Web","Suporte"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    var arrow = document.querySelector('.arrow_skills');
    var close = document.querySelector('.close');

    arrow.addEventListener('click', function () {

        if (close.style.display === 'block') {
            close.style.display = 'none';
        } else {
            close.style.display = 'block';
        }
    });

// owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
