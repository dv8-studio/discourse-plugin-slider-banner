import slider from '../plugin/slick'

export default {
  name: 'slider-banner',
  initialize() {
    $('.js-banner-slick').slick(
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      );
  }

}