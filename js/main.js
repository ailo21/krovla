$(document).ready(function () {

    $(window).scroll(function () {
        ScrollsPage();
        //onScrollInit($('.os-animation'));
    })



    
 onScrollInit($('.os-animation'));
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );

});

function ScrollsPage() {

    //if ($('.os-animation').length > 0) {
    //    $('.os-animation').each(function () {
    //        var $obj = $(this);
    //        var TopHeight = $obj.offset().top-250;
    //        var bo = $("body").scrollTop();
    //        if (bo > TopHeight) {
    //            //onScrollInit($obj);
    //        }
    //    });
    //}



    //if ($('.os-animation').length > 0) {
    //    $('.os-animation').each(function () {
    //        var $obj = $(this);
    //        var TopHeight = $obj.offset().top;
    //        var bo = $("body").scrollTop();
    //        if (bo > TopHeight) {
    //            onScrollInit($obj);
    //        }
    //    });
    //}
}


function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '90%'
        });
  });
}