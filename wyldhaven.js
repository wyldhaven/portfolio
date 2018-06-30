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

WYLD.scrolling = {
        init: init
    };

    return WYLD;

}($, WYLD || {}));
