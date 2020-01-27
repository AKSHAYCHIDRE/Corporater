
// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link ");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//  slideshow JS here
$('.slideshow').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000
  });
  
  //  animation JS here
  AOS.init({
    duration: 1500,
  })


  //  Scroll top-bar css here
  
  
  ;(function($){
    'use strict';

    var defaults = {
        topOffset: 50, //px - offset to switch of fixed position
        hideDuration: 150, //ms
        stickyClass: 'is-fixed'
    };

    $.fn.stickyPanel = function(options){
        if(this.length == 0) return this; // returns the current jQuery object

        var self = this,
            settings,
            isFixed = false, //state of panel
            stickyClass,
            animation = {
                normal: self.css('animationDuration'), //show duration
                reverse: '', //hide duration
                getStyle: function (type) {
                    return {
                        animationDirection: type,
                        animationDuration: this[type]
                    };
                }
            };

        // Init carousel
        function init(){
            settings = $.extend({}, defaults, options);
            animation.reverse = settings.hideDuration + 'ms';
            stickyClass = settings.stickyClass;
            $(window).on('scroll', onScroll).trigger('scroll');
        }

        // On scroll
        function onScroll() {
            if ( window.pageYOffset > settings.topOffset){
                if (!isFixed){
                    isFixed = true;
                    self.addClass(stickyClass)
                        .css(animation.getStyle('normal'));
                }
            } else {
                if (isFixed){
                    isFixed = false;

                    self.removeClass(stickyClass)
                        .each(function (index, e) {
                            // restart animation
                            // https://css-tricks.com/restart-css-animation/
                            void e.offsetWidth;
                        })
                        .addClass(stickyClass)
                        .css(animation.getStyle('reverse'));

                    setTimeout(function () {
                        self.removeClass(stickyClass);
                    }, settings.hideDuration);
                }
            }
        }

        init();

        return this;
    }
})(jQuery);


//run
$(function () {
    $('#fixed').stickyPanel();
});





// Mobile view scroll bar 




  //  Scroll top-bar css here
  
  
  ;(function($){
    'use strict';

    var defaults = {
        topOffset: 50, //px - offset to switch of fixed position
        hideDuration: 150, //ms
        stickyClass: 'is-fixed'
    };

    $.fn.stickyPanel = function(options){
        if(this.length == 0) return this; // returns the current jQuery object

        var self = this,
            settings,
            isFixed = false, //state of panel
            stickyClass,
            animation = {
                normal: self.css('animationDuration'), //show duration
                reverse: '', //hide duration
                getStyle: function (type) {
                    return {
                        animationDirection: type,
                        animationDuration: this[type]
                    };
                }
            };

        // Init carousel
        function init(){
            settings = $.extend({}, defaults, options);
            animation.reverse = settings.hideDuration + 'ms';
            stickyClass = settings.stickyClass;
            $(window).on('scroll', onScroll).trigger('scroll');
        }

        // On scroll
        function onScroll() {
            if ( window.pageYOffset > settings.topOffset){
                if (!isFixed){
                    isFixed = true;
                    self.addClass(stickyClass)
                        .css(animation.getStyle('normal'));
                }
            } else {
                if (isFixed){
                    isFixed = false;

                    self.removeClass(stickyClass)
                        .each(function (index, e) {
                            // restart animation
                            // https://css-tricks.com/restart-css-animation/
                            void e.offsetWidth;
                        })
                        .addClass(stickyClass)
                        .css(animation.getStyle('reverse'));

                    setTimeout(function () {
                        self.removeClass(stickyClass);
                    }, settings.hideDuration);
                }
            }
        }

        init();

        return this;
    }
})(jQuery);
    

//run
$(function () {
    $('#topbar-fixed').stickyPanel();
});