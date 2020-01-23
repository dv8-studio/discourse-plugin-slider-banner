# discourse-plugin-slider-banner

* Discourse 外掛：slider-banner
* Author：Debby
* 使用的套件：[slick](http://kenwheeler.github.io/slick/)



![discourse-plugin-slider-banner](https://i.imgur.com/cqNs4NM.png)


## How to use

關於安裝此 plugin 可以參考 Disourse 文件教學：
* [Install Plugins in Discourse](https://meta.discourse.org/t/install-plugins-in-discourse/19157)

</br>

### HTML 
slick HTML 需要加入 class 必需要使用 `.js-banner-slick` `.banner-slick` 。
```
<div class="js-banner-slick banner-slick">
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>
```

</br>

### JS
如要修改 banner 速度或是樣式，可以參考 [slick](http://kenwheeler.github.io/slick/) API 然後下載此 git , 然後改成你想要的外掛 push 到你的 github 在安裝到你的 discrouse。
以下為 JS 檔案 `slider.js.es6` 位置：
`discourse-plugin-slider-slick / assets / javascripts / initializers / slider.js.es6`

**slider.js.es6**

```
export default {
  name: 'slider-banner',
  initialize() {
    var left_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"/></svg>';
    var right_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"/></svg>';
    setTimeout(() => {
    
      // custom API 
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
```

</br>

### CSS / Style

你可以根據以下的 SCSS 檔案，修改此 plugin 樣式。

以下為 SCSS 檔案 `slick-custom.scss` 位置：
`discourse-plugin-slider-slick / assets / stylesheets / slick-custom.scss `


---

此 Plugin 使用於 [濡沫 discourse](https://community.lezismore.org/) 上。
