var scrollp=0;
(function ($) {
    $(document).ready(function(){
        $(function () {
            $(window).scroll(function () {
            // ask about the position of scroll 
                if ($(this).scrollTop() > scrollp) {
                    $('.navbar-fixed-top').fadeOut();
                    scrollp= $(this).scrollTop();
                } else {
                    $('.navbar-fixed-top').fadeIn();
                }
                scrollp= $(this).scrollTop();
            });
        });

    });
}(jQuery));
