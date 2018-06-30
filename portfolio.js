var GRAYSON = (function($, GRAYSON) {

$(document).ready(function() {
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {

            });
        }
    });
});



var setupValues = function() {
  myHeader = document.querySelector('.main-header');
  subHead = document.querySelector('.underbrow');
  scrollArrow = document.querySelector('.arrow');
};

var animateIntro = function() {
  $(".main-header").delay(700).animate({
        opacity: 1
    }, 1150, function() {
        $(".underbrow").animate({
            opacity: 1
        }, 1000);
    });

  $(".arrow").delay(1400).animate({
        opacity: 1
    });

};


var init = function() {
  setupValues();
  animateIntro();
};




GRAYSON.scrolling = {
        init: init
    };

    return GRAYSON;

}($, GRAYSON || {}));
