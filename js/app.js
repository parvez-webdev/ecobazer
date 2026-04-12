$('.Products-imges').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  arrows: false,
  centerMode: false,
  variableWidth: true,
})
$('.ProductsImges').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  arrows: false,
  centerMode: false,
  variableWidth: true,
})
$('.Products-img').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  variableWidth: true,
})
var swiper = new Swiper(".welcome", {
  loop: true,
  autoplay: 2000,
});
// arrow control
$('.Prev-btn').click(function () {
  $('.Products-img').slick('slickPrev');
});

$('.Next-btn').click(function () {
  $('.Products-img').slick('slickNext');
});
$('.client').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  variableWidth: true,
})
$('.prev-btn').click(function () {
  $('.client').slick('slickPrev');
});

$('.next-btn').click(function () {
  $('.client').slick('slickNext');
});
