$(document).ready(function () {

    //css animation scroll
    $('.start__anim').viewportChecker({      
      callbackFunction: function(elem, action){
          AnimCss(elem.attr('data-typeanim'),elem);
      }
    });  

    //parallx
    $('.parallax_on').each(function () {
        $(this).parallax({imageSrc: $(this).attr('data-image-src')});          
    });
    // numm anim
    $('.numb__anim').viewportChecker({      
      callbackFunction: function(elem, action){
          AnimTahom(elem);
      }
    });  

    //slider project
    var ActSlidStart=$('#myCarousel').find('.item.active');

    var s5_t1=$('#s5-t1');
    var s5_t2=$('#s5-t2');
    var s5_t3=$('#s5-t3');

    s5_t1.text(ActSlidStart.attr('data-t1'));
    s5_t2.text(ActSlidStart.attr('data-t2'));
    s5_t3.text(ActSlidStart.attr('data-t3'));
    
    $('#myCarousel').on('slide.bs.carousel', function () { 
      s5_t1.fadeOut();
      s5_t2.fadeOut();
      s5_t3.fadeOut();
      
    });
    $('#myCarousel').on('slid.bs.carousel', function () {

      var ActSlid=$('#myCarousel').find('.item.active');
      s5_t1.text(ActSlid.attr('data-t1'));
      s5_t2.text(ActSlid.attr('data-t2'));
      s5_t3.text(ActSlid.attr('data-t3'));

      s5_t1.fadeIn();
      s5_t2.fadeIn();
      s5_t3.fadeIn();
    });



    // 
    $('.left-col').mouseover(function(){
      $('.s-7').addClass('left-hover');
      
    });

    $('.left-col').mouseout(function(){
        $('.s-7').removeClass('left-hover');
    });

    $('.right-col').mouseover(function(){
      $('.s-7').addClass('right-hover');
      
    });

    $('.right-col').mouseout(function(){
        $('.s-7').removeClass('right-hover');
    });

    

});

  function AnimCss(type, obj) {
    obj.removeClass().addClass(type + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };

  function AnimTahom(obj){
    var StartNum=0,//obj.text()
    FinishNum=obj.attr('data-fin'),
    Id=obj.attr('id');
    FormNum(StartNum,FinishNum,Id);

  }
  function FormNum(StartNum,FinishNum,Iden){
    
    var t = 40; //t - время задержки в миллисекундах     
    var n = 8;
    var ish = document.getElementById(Iden);


    var i = 0;
    fade();

    function fade() {
        i++;
        ish.innerHTML = RndNumb();
        if (i < n) setTimeout(fade, t);
    }

    function RndNumb() {
        var finishPercent = i / n;
        var startPercent = 1 - finishPercent;
        var Numb = Math.floor(StartNum * startPercent + FinishNum * finishPercent);
        Numb = reverseStr(Numb);
        return Numb;
    }
}
function reverseStr(str) {
    var newStr = '', i = 0;
    for (i = str.toString().length - 1; i >= 0; i--) {
        var delenie = (str.toString().length - 1) % 3;
        if (delenie <= 0) {
            if (!(i % 3)) newStr += " " + str.toString().charAt(i);
            else newStr += str.toString().charAt(i);
        }
        if (delenie == 1) {
            if (!(i - 1 % 3)) newStr = newStr + " " + str.toString().charAt(i);
            else newStr += str.toString().charAt(i);
        }
        if (delenie == 2) {
            if (!(i % 3)) newStr += str.toString().charAt(i) + " ";
            else newStr += str.toString().charAt(i);
        }
    }
    newStr = newStr.split('').reverse().join('');

    return newStr;
}