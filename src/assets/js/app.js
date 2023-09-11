(function ($) {
  "use strict";

  $(document).ready(function () {
    // Mobile Menu Dropdown
    const mobileNavToggler = document.querySelector(".nav--toggle");
    const body = document.querySelector("body");
    if (mobileNavToggler) {
      mobileNavToggler.addEventListener("click", function () {
        body.classList.toggle("nav-toggler");
      });
    }
    // Mobile Menu Dropdown End

    // Mobile Submenu
    $(".primary-menu__list.has-sub .primary-menu__link").on(
      "click",
      function (e) {
        e.preventDefault();
        body.classList.add("primary-submenu-toggler");
      }
    );
    $(".primary-menu__list.has-sub.active .primary-menu__link").on(
      "click",
      function (e) {
        e.preventDefault();
        body.classList.remove("primary-submenu-toggler");
      }
    );
    $(".primary-menu__list.has-sub").on("click", function () {
      $(this).toggleClass("active").siblings().removeClass("active");
    });
    // Mobile Submenu End

    // Hero Slider
    const heroSlider = $(".hero-slider");
    const heroSliderNav = $(".hero-nav");
    if (heroSlider && heroSliderNav) {
      heroSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".hero-nav",
      });
      heroSliderNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".hero-slider",
        dots: true,
        centerMode: true,
        focusOnSelect: true,
      });
    }
    // Hero Slider End

    // Animal List Slider
    const animalList = $(".animal-list__slider");
    if (animalList) {
      animalList.slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 374,
            settings: {
              slidesToShow: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
              arrows: true,
              prevArrow:
                '<button type="button" class="animal-list__btn animal-list__btn-prev"><i class="las la-angle-left"></i></button>',
              nextArrow:
                '<button type="button" class="animal-list__btn animal-list__btn-next"><i class="las la-angle-right"></i></button>',
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 5,
              arrows: true,
              prevArrow:
                '<button type="button" class="animal-list__btn animal-list__btn-prev"><i class="las la-angle-left"></i></button>',
              nextArrow:
                '<button type="button" class="animal-list__btn animal-list__btn-next"><i class="las la-angle-right"></i></button>',
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 6,
              arrows: true,
              prevArrow:
                '<button type="button" class="animal-list__btn animal-list__btn-prev"><i class="las la-angle-left"></i></button>',
              nextArrow:
                '<button type="button" class="animal-list__btn animal-list__btn-next"><i class="las la-angle-right"></i></button>',
            },
          },
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 7,
              arrows: true,
              prevArrow:
                '<button type="button" class="animal-list__btn animal-list__btn-prev"><i class="las la-angle-left"></i></button>',
              nextArrow:
                '<button type="button" class="animal-list__btn animal-list__btn-next"><i class="las la-angle-right"></i></button>',
            },
          },
        ],
      });
    }
    // Animal List Slider End

    // Search Popup
    var bodyOvrelay = $("#body-overlay");
    var searchPopup = $("#search-popup");

    $(document).on("click", "#body-overlay", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      searchPopup.removeClass("active");
    });
    $(document).on("click", ".search--toggler", function (e) {
      e.preventDefault();
      searchPopup.addClass("active");
      bodyOvrelay.addClass("active");
    });
    // Search Popup End

    // Filterizer
    var filterizd = $(".filter-container");
    if (filterizd.length) {
      filterizd.filterizr({
        //options object
        layout: "sameWidth",
        gutterPixels: 15,
      });
    }
    // Filterizer End

    // Magnific Popup
    var magPhoto = $(".show-img");
    if (magPhoto.length) {
      magPhoto.each(function () {
        $(this).magnificPopup({
          gallery: {
            enabled: true,
          },
          type: "image",
          delegate: 'a',
        });
      });
    }
    // Magnific Popup End

    // Counter Up by Odometer
    let counterUp = $(".counter-card");
    if (counterUp) {
      counterUp.each(function () {
        $(this).isInViewport(function (status) {
          if (status === "entered") {
            for (
              var i = 0;
              i < document.querySelectorAll(".odometer").length;
              i++
            ) {
              var el = document.querySelectorAll(".odometer")[i];
              el.innerHTML = el.getAttribute("data-odometer-final");
            }
          }
        });
      });
    }
    // Counter Up by Odometer End

    // Feedback Slider
    let feedbackSlider = $(".feedback-slider");
    if (feedbackSlider) {
      feedbackSlider.slick({
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 0,
        speed: 4000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      });
    }
    // Feedback Slider End

    // Counter Up by Odometer
    let counterList = $(".counter-list__card");
    if (counterList) {
      counterList.each(function () {
        $(this).isInViewport(function (status) {
          if (status === "entered") {
            for (
              var i = 0;
              i < document.querySelectorAll(".odometer").length;
              i++
            ) {
              var el = document.querySelectorAll(".odometer")[i];
              el.innerHTML = el.getAttribute("data-odometer-final");
            }
          }
        });
      });
    }
    // Counter Up by Odometer End

    // Feedback Slider
    let testimonialSlider = $(".testimonial-slider");
    if (testimonialSlider) {
      testimonialSlider.slick({
        mobileFirst: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        speed: 2000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: true,
              prevArrow:
                '<button type="button" class="testimonial-slider__btn testimonial-slider__btn-prev"><i class="las la-arrow-left"></i></button>',
              nextArrow:
                '<button type="button" class="testimonial-slider__btn testimonial-slider__btn-next"><i class="las la-arrow-right"></i></button>',
              slidesToShow: 1,
              autoplay: false,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              arrows: true,
              prevArrow:
                '<button type="button" class="testimonial-slider__btn testimonial-slider__btn-prev"><i class="las la-arrow-left"></i></button>',
              nextArrow:
                '<button type="button" class="testimonial-slider__btn testimonial-slider__btn-next"><i class="las la-arrow-right"></i></button>',
              autoplay: false,
            },
          },
        ],
      });
    }
    // Feedback Slider End

    // Upcoming Animal Slider
    let upcomingSlider = $(".upcoming-slider");
    if (upcomingSlider) {
      upcomingSlider.slick({
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow:
          '<button type="button" class="upcoming-slider__btn upcoming-slider__btn-prev"><i class="las la-angle-left"></i></button>',
        nextArrow:
          '<button type="button" class="upcoming-slider__btn upcoming-slider__btn-next"><i class="las la-angle-right"></i></button>',
      });
    }
    // Upcoming Animal Slider End

    // Client Slider
    let clientSlider = $(".client-slider");
    if (clientSlider) {
      clientSlider.slick({
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow:
          '<button type="button" class="client-slider__btn client-slider__btn-prev"><i class="las la-angle-left"></i></button>',
        nextArrow:
          '<button type="button" class="client-slider__btn client-slider__btn-next"><i class="las la-angle-right"></i></button>',
        responsive: [
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      });
    }
    // Client Slider End


    // Animal Details Slider
    let animalSlider = $(".animal-details-slider");
    if (animalSlider) {
      animalSlider.slick({
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow:
          '<button type="button" class="animal-details-slider__btn animal-details-slider__btn-prev"><i class="las la-angle-left"></i></button>',
        nextArrow:
          '<button type="button" class="animal-details-slider__btn animal-details-slider__btn-next"><i class="las la-angle-right"></i></button>',
      });
    }
    // Animal Details Slider End

    // Animate the scroll to top
    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 300);
    });
  });
})(jQuery);

// Header Fixed On Scroll
var bodySelector = document.querySelector("body");
const header = document.querySelector(".header-fixed");

if (bodySelector.contains(header)) {
  const headerTop = header.offsetTop;
  function fixHeader() {
    if (window.scrollY > headerTop) {
      document.body.classList.add("fixed-header");
    } else if (window.scrollY <= headerTop) {
      document.body.classList.remove("fixed-header");
    } else {
      document.body.classList.remove("fixed-header");
    }
  }
  $(window).on("scroll", function () {
    fixHeader();
  });
}

// Header Fixed On Scroll End
$(window).on("scroll", function () {
  var ScrollTop = $(".back-to-top");
  if ($(window).scrollTop() > 1200) {
    ScrollTop.fadeIn(1000);
  } else {
    ScrollTop.fadeOut(1000);
  }
});

$(window).on("load", function () {
  // Preloader
  var preLoder = $(".preloader");
  preLoder.fadeOut(1000);
});
