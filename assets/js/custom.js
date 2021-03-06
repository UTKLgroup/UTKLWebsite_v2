/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US

    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION
            ======================================*/

            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });
            /*====================================
            VAGAS SLIDESHOW SCRIPTS
            ======================================*/
            $(function () {
                $.vegas('slideshow', {
                    delay: 10000,
                    timer: false,
                    shuffle: true,
                    firstTransition: 'fade',
                    firstTransitionDuration: 5000,
                    transition: 'slideDown2',
                    transitionDuration: 2000,
                    backgrounds: [
                      { src: 'assets/img/1.jpg', fade: 1000},
                      { src: 'assets/img/2.jpg', fade: 1000},
                      { src: 'assets/img/3.jpg', fade: 1000},
                      { src: 'assets/img/4.jpg', fade: 1000},
                      { src: 'assets/img/5.jpg', fade: 1000},
                      { src: 'assets/img/6.jpg', fade: 1000},
                      { src: 'assets/img/7.jpg', fade: 1000}
                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'assets/plugins/vegas/overlays/0.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });

            /*====================================
                NAV SCRIPTS
            ======================================*/
            $(window).bind('scroll', function () {
                var navHeight = $(window).height() - 70;
                if ($(window).scrollTop() > navHeight) {
                    $('nav').addClass('fixed');
                }
                else {
                    $('nav').removeClass('fixed');
                }
            });

            /*====================================
               WRITE YOUR SCRIPTS BELOW
           ======================================*/

        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });



    // CHECK VIEWPORT FOR ELEMENT ID (https://github.com/moagrius/isOnScreen)
    // Dungy added here
    $.fn.isOnScreen = function(test){

      var height = this.outerHeight();
      var width = this.outerWidth();

      if(!width || !height){
        return false;
      }

      var win = $(window);

      var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();

      var bounds = this.offset();
      bounds.right = bounds.left + width;
      bounds.bottom = bounds.top + height;

      var deltas = {
        top : viewport.bottom - bounds.top,
        left: viewport.right - bounds.left,
        bottom: bounds.bottom - viewport.top,
        right: bounds.right - viewport.left
      };

      if(typeof test == 'function') {
        return test.call(this, deltas);
      }

      return deltas.top > 0
        && deltas.left > 0
        && deltas.right > 0
        && deltas.bottom > 0;
    };

}(jQuery));
