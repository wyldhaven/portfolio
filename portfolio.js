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
  scrollArrow = document.querySelector('.arrow-wrapper');
};

var animateIntro = function() {
  $(".main-header").delay(200).animate({
        opacity: 1
    }, 1400, function() {
        $(".underbrow").animate({
            opacity: 1
        }, 1200);
    });

  $(".arrow-wrapper").delay(3700).animate({
        opacity: .7
    }, 1000);

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
