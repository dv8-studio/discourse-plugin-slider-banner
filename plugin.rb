# name: slider-banner
# about: Discourse slider banner
# version: 0.0.2
# authors: purple1007, DevKurka
# url: https://github.com/dv8-studio/discourse-plugin-slider-banner

register_asset "stylesheets/slick-custom.scss"
register_asset "javascripts/plugin/slick.js"
register_asset "javascripts/plugin/jquery.initialize.js"


enabled_site_setting :slider_banner_enabled
