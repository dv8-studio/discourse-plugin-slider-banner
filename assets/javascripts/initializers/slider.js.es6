export default {
  name: 'slider-banner',
  initialize() {
    var left_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="22.414" height="42.828" viewBox="0 0 22.414 42.828"><path id="chevron-left" d="M29,46,9,26,29,6" transform="translate(-8 -4.586)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>';
    var right_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="22.414" height="42.828" viewBox="0 0 22.414 42.828"><path id="chevron-right" d="M29,46,9,26,29,6" transform="translate(30.414 47.414) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></svg>';
    setTimeout(() => {
      $('.js-banner-slick').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      dots: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<span class="slick-prev">'+left_icon+'</span>',
      nextArrow: '<span class="slick-next">'+right_icon+'</span>',
    });
    }, 500)
  }
}
