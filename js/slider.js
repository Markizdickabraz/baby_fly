$('.swiper-wrapper').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2, 
    slidesPerView: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesPerView: 1
            }
        }
    ]
});
