var links = document.querySelectorAll('nav ul li a');
var content = document.querySelectorAll('div.content');
var border = document.querySelector('span');
var lis = document.querySelectorAll('nav ul li');

for (let i = 0; i < links.length; i++){
	links[i].addEventListener('click', function(e){
    e.preventDefault();
		var activLinks = document.querySelector('nav ul li a.activ');
		var activContent = document.querySelector('section>div.activ');

		activLinks.classList.remove('activ');
		activContent.classList.remove('activ');

		this.classList.add('activ');
		var attr = this.getAttribute('href');

		var activ = document.querySelector(attr);

		activ.classList.add('activ');

        var lisLength = lis.length;
        var lisWidth = 100 / lisLength;
        var position = i*lisWidth;
        border.style.left = position + '%';

	});
}
$('.my-work .work-list li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.my-work .work-list').toggleClass("active");
    // $('.menu-btn i').toggleClass("active");
});


$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// Testimonial slider
$(document).ready(function () {
    $('.my-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


// MY WORK

function prev(){
    document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
    document.getElementById('slider-container').scrollLeft += 270;
}
function prevButton(){
    document.getElementById('slider-container-1').scrollLeft -= 270;
}

function nextButoon()
{
    document.getElementById('slider-container-1').scrollLeft += 270;
}



// $(".slide img").on("click" , function(){
// $(this).toggleClass('zoomed');
// $(".overlay").toggleClass('active');
// })
