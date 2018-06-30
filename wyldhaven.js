var WYLD = (function($, WYLD) {

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
  scrollArrow = document.querySelector('.arrow');
  scrollCopy = document.querySelector('.scroll');
};

var animateIntro = function() {
  $(".arrow").delay(3500).animate({
        opacity: 1
    }, 2000, function() {
        $(".scroll").animate({
            opacity: 1
        }, 1000);
    });

};


var init = function() {
  setupValues();
  animateIntro();
};



WYLD.scrolling = {
        init: init
    };

    return WYLD;

}($, WYLD || {}));
