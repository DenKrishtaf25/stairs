$('[data-open-block').on('click', function () {
    const activeCls = 'is-active';

    $('[data-content]').removeClass(activeCls);
    $(`[data-content="${$(this).data('open-block')}"`).addClass(activeCls);
});


$('.mask-phone').mask('9 (999) 999-99-99');



// $(function () {
//     var Accordion = function (el, multiple) {
//         this.el = el || {};
//         // more then one submenu open?
//         this.multiple = multiple || false;

//         var dropdownlink = this.el.find('.dropdownlink');
//         dropdownlink.on('click', { el: this.el, multiple: this.multiple },
//             this.dropdown);
//     };

//     Accordion.prototype.dropdown = function (e) {
//         var $el = e.data.el,
//             $this = $(this),
//             $next = $this.next();

//         $next.slideToggle();
//         $this.parent().toggleClass('open');
//     }

//     var accordion = new Accordion($('.accordion-menu'), false);
// })



// $("#navToggle").click(function () {
//     $(this).toggleClass("active");
//     $(".overlay").toggleClass("open");
//     // this line ▼ prevents content scroll-behind
//     $("body").toggleClass("locked");
// });

// $(".overlay a").click(function () {
//     $("#navToggle").toggleClass("active");
//     $(".overlay").toggleClass("open");
//     $("body").toggleClass("locked");
// });

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 1) {
//         $('header').addClass("sticky");
//     } else {
//         $('header').removeClass("sticky");
//     }
// });


// var $page = $('html, body');
// $('a[href*="#"]').click(function () {
//     $page.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });


// $('.components__slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: document.querySelector('#arrow-next'),
//     prevArrow: document.querySelector('#arrow-prev'),
//     adaptiveHeight: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });


