$(document).ready(function () {

    $('.tab-1').show();
    $('.tab-2').hide();
    $('.tab-3').hide();
    $('.tab-4').hide();
    $('.tab-5').hide();
    $('.tab-6').hide();
    $('.tab-7').hide();
    $('.tab-8').hide();
    $('.tab-9').hide();
    $('.tab-10').hide();

    $('.header-menu-item').mouseleave(function () {
        $('.header-dropdown-item').removeClass('active');
        $('.tab-list-1').addClass('active');
        $('.tab-1').show();
        $('.tab-2').hide();
        $('.tab-3').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();
    });

    $('.tab-list-1').mousemove(function () {
        $('.tab-1').show();
        $('.tab-2').hide();
        $('.tab-3').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();

    });
    $('.tab-list-2').mousemove(function () {
        $('.tab-2').show();
        $('.tab-1').hide();
        $('.tab-3').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();
    });
    $('.tab-list-3').mousemove(function () {
        $('.tab-3').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();
    });
    $('.tab-list-4').mousemove(function () {
        $('.tab-4').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.tab-3').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();
    });
    $('.tab-list-5').mousemove(function () {
        $('.tab-5').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.tab-4').hide();
        $('.tab-3').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();
    });
    $('.tab-list-6').mousemove(function () {
        $('.tab-6').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-3').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();
    });
    $('.tab-list-7').mousemove(function () {
        $('.tab-7').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-3').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();
    });
    $('.tab-list-8').mousemove(function () {
        $('.tab-8').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-3').hide();
        $('.tab-9').hide();
        $('.tab-10').hide();
    });
    $('.tab-list-9').mousemove(function () {
        $('.tab-9').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-3').hide();
        $('.tab-10').hide();
    });
    $('.tab-list-10').mousemove(function () {
        $('.tab-10').show();
        $('.tab-1').hide();
        $('.tab-2').hide();
        $('.tab-4').hide();
        $('.tab-5').hide();
        $('.tab-6').hide();
        $('.tab-7').hide();
        $('.tab-8').hide();
        $('.tab-9').hide();
        $('.tab-3').hide();
    });


    $('.header-dropdown-item').mousemove(function () {
        $('.header-dropdown-item').removeClass('active');
        $(this).addClass('active');
    })




    // add hien thi trong navbar 

    $('.shop-navbar-more').slideUp();
    $('.shop-navbar-btn').click(function () {
        $('.shop-navbar-more').slideDown();
        console.log('hello')
        $('.shop-navbar-btn').slideUp();
    })

    // filter shop

    $('.filter-item-view .icon').click(function () {
        $('.filter-item-view .icon').removeClass('active');
        $(this).addClass('active');
    })

    $('.filter-item-view .list').click(function () {
        $('.product-content .item ').removeClass('col-lg-3 col-sm-6 col-6 col-md-4 col-5');
        $('.product-content .item').addClass('col-lg-12 list');

    })

    $('.filter-item-view .square').click(function () {
        $('.product-content .item').removeClass('col-lg-12 list');
        $('.product-content .item').addClass('col-lg-3 col-sm-6 col-6 col-md-4 col-5');

    })

    // product type slider

    $('.product__detail-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,

        asNavFor: '.product__img-list'
    });
    $('.product__img-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__detail-img',
        dots: false,
        centerMode: true,
        responsive: [{
                breakpoint: 739,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //   quantity count 

    $('.quantity-input').each(function () {
        var $counter = $('.quantity-input');
        console.log('count', $counter.val())
        if ($counter.val() == 1) {
            $('.quantity-btn.prev').attr('disabled', 'disabled');
            $('.quantity-btn.prev').addClass('disabled');
        }
        console.log('value1', document.querySelector('.quantity-input').value)
        $('.quantity-btn.plus').click(function () {
            $counter.val(parseInt($counter.val()) + 1); // `parseInt` converts the `value` from a string to a number
            if ($counter.val() != 1) {
                $('.quantity-btn.prev').removeAttr('disabled', 'disabled');
                $('.quantity-btn.prev').removeClass('disabled');
            }
        });
        $('.quantity-btn.prev').click(function () {
            $counter.val(parseInt($counter.val()) - 1); // `parseInt` converts the `value` from a string to a number
            if ($counter.val() == 1) {
                $('.quantity-btn.prev').attr('disabled', 'disabled');
                $('.quantity-btn.prev').addClass('disabled');
            }
        });

    })

});

// hệ thống lựa chọn tình thành phố
$('.choose-item').click(function () {
    $(this).addClass('active');

});

$('.choose-item').on("click", function () {
    $('.about-dropdown').toggle();
})

$('.about-dropdown').hide();


// scroll height 
$(window).scroll(function () {
    var vitrihentai = $('html, body').scrollTop();
    var vitri1 = $('.content-tab1').offset().top;
    var vitri2 = $('.content-tab2').offset().top;
    var vitri3 = $('.content-tab3').offset().top;
    var vitri4 = $('.content-tab4').offset().top;
    var vitri5 = $('.content-tab5').offset().top;
    var vitri6 = $('.content-tab6').offset().top;
    var vitri7 = $('.content-tab7').offset().top;

    if (vitrihentai > vitri1 - 100) {
        $('.product-navbar-item.tab1').addClass('active');
        $('.product-navbar-item.tab2').removeClass('active');
        $('.product-navbar-item.tab3').removeClass('active');
        $('.product-navbar-item.tab4').removeClass('active');
        $('.product-navbar-item.tab5').removeClass('active');
        $('.product-navbar-item.tab6').removeClass('active');
        $('.product-navbar-item.tab7').removeClass('active');

    }
    if (vitrihentai > vitri2 - 100) {
        $('.product-navbar-item.tab1').removeClass('active');
        $('.product-navbar-item.tab3').removeClass('active');
        $('.product-navbar-item.tab4').removeClass('active');
        $('.product-navbar-item.tab5').removeClass('active');
        $('.product-navbar-item.tab6').removeClass('active');
        $('.product-navbar-item.tab7').removeClass('active');
        $('.product-navbar-item.tab2').addClass('active');

    }
    if (vitrihentai > vitri3 - 40) {
        $('.product-navbar-item.tab1').removeClass('active');
        $('.product-navbar-item.tab2').removeClass('active');
        $('.product-navbar-item.tab4').removeClass('active');
        $('.product-navbar-item.tab5').removeClass('active');
        $('.product-navbar-item.tab6').removeClass('active');
        $('.product-navbar-item.tab7').removeClass('active');
        $('.product-navbar-item.tab3').addClass('active');

    }
    if (vitrihentai > vitri4 - 40 ) {
        $('.product-navbar-item.tab1').removeClass('active');
        $('.product-navbar-item.tab2').removeClass('active');
        $('.product-navbar-item.tab3').removeClass('active');
        $('.product-navbar-item.tab5').removeClass('active');
        $('.product-navbar-item.tab6').removeClass('active');
        $('.product-navbar-item.tab7').removeClass('active');
        $('.product-navbar-item.tab4').addClass('active');
 
    }
    if (vitrihentai > vitri5 - 40) {
        $('.product-navbar-item.tab1').removeClass('active');
        $('.product-navbar-item.tab2').removeClass('active');
        $('.product-navbar-item.tab3').removeClass('active');
        $('.product-navbar-item.tab5').addClass('active');
        $('.product-navbar-item.tab4').removeClass('active');
        $('.product-navbar-item.tab6').removeClass('active');
        $('.product-navbar-item.tab7').removeClass('active');
    }
    if (vitrihentai > vitri6 - 40 ) {
        $('.product-navbar-item.tab1').removeClass('active');
        $('.product-navbar-item.tab2').removeClass('active');
        $('.product-navbar-item.tab3').removeClass('active');
        $('.product-navbar-item.tab6').addClass('active');
        $('.product-navbar-item.tab5').removeClass('active');
        $('.product-navbar-item.tab4').removeClass('active');
        $('.product-navbar-item.tab7').removeClass('active');
    }
    if (vitrihentai > vitri7 - 100) {
        $('.product-navbar-item.tab1').removeClass('active');
        $('.product-navbar-item.tab2').removeClass('active');
        $('.product-navbar-item.tab3').removeClass('active');
        $('.product-navbar-item.tab7').addClass('active');
        $('.product-navbar-item.tab5').removeClass('active');
        $('.product-navbar-item.tab6').removeClass('active');
        $('.product-navbar-item.tab4').removeClass('active');
    }

    //    console.log("vi tri", $('.content-tab1').offset().top);
    console.log("vi tri 7", $('.content-tab7').offset().top);
    console.log("vi tri hien tai", $('html, body').scrollTop());

});



// slide banner 
$('.banner-slide .owl-carousel').owlCarousel({
    items: 1,
    margin: 0,
    loop: false,
    stagePadding: 0,
    smartSpeed: 450,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<button type="button" class="btn banner-btn banner-btn-prev"> <i class="far fa-chevron-left"></i> </button>', '<button type="button" class="btn banner-btn banner-btn-next"><i class="far fa-chevron-right"></i> </button>'],
});

// product slide
$('.product-slide .owl-carousel').owlCarousel({
    items: 6,
    margin: 0,
    loop: true,
    stagePadding: 0,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1200: {
            items: 5
        },
        1400: {
            items: 6
        }
    }
});
$('.product__detail-slide .owl-carousel').owlCarousel({
    items: 5,
    margin: 0,
    loop: true,
    stagePadding: 0,
    smartSpeed: 450,
    nav: true,
    navText: ['<button type="button" class="btn banner-btn banner-btn-prev"> <i class="far fa-chevron-left"></i> </button>', '<button type="button" class="btn banner-btn banner-btn-next"><i class="far fa-chevron-right"></i> </button>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1200: {
            items: 5
        },
        1400: {
            items: 6
        }
    }
});