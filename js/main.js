$(function () {
    $('.rateYo').rateYo({
        rating: 5,
        ratedFill: "#fbc729",
        starWidth: "17px",
        fullStar: true,
        normalFill: "#C4C4C4",
        spacing: "4px",
    });

    $(".trending-product__favorite").on("click", function () {
        $(this).toggleClass("trending-product__favorite--active");
        $($(this).closest('.trending-product__list-item')).toggleClass("trending-product__list-item--favorite");
    });

    $(".tab").on("click", function (e) {
        e.preventDefault();
        $('.filter__item-link').removeClass('tab--active');
        $('.trending-product__list').removeClass('tabs-content--active');
        $(this).addClass("tab--active");
        $($(this).attr("href")).addClass("tabs-content--active");
    });

    $('.mobile-menu__btn').on('click', function () {
        $(this).toggleClass('mobile-menu__btn--active');
        $('.mobile-menu').toggleClass('mobile-menu--active');
    })

    var mainAlert = function () {
        alert('Активные вкладки: Home, About, Contact');
    }
    setTimeout(mainAlert, 3000);
});