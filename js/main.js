$(document).ready(function () {

    $('.start__anim').viewportChecker({      
      callbackFunction: function(elem, action){
          Anim(elem.attr('data-typeanim'),elem);
      }
    });  

});

  function Anim(type, obj) {
    obj.removeClass().addClass(type + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };