$(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        nextArrow: ' <img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        prevArrow: ' <img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        asNavFor: '.slider-dots'
    })
    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    })

    $('.serf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: ' <img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        prevArrow: ' <img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        asNavFor: '.slider-map',
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.serf-slider',
        focusOnSelect: true
    })
    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        nextArrow: ' <img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        prevArrow: ' <img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    })

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity-button').on('click', function(){
        let sumn = $('.night').val() * $('.sum').data('night') 
        + $('.guests').val() * $('.sum').data('guests') ;
    $('.sum').html('$ '+ sumn);
    });

    let sumn = $('.night').val() * $('.sum').data('night') 
        + $('.guests').val() * $('.sum').data('guests') ;
    $('.sum').html('$ '+ sumn);

    $('.surfboard-box__circle').on('click', function(){
      $(this).toggleClass('active')
    })
})