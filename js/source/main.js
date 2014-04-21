(function(){
'use strict';
// var pair;

var images = ['blastoise', 'charizard', 'electrode', 'gengar', 'mew', 'muk', 'pikachu', 'scyther', 'venasaur', 'zubat'];
var clock;
var timer;
var $matches = [];


var clone = images.slice(0);
console.log(clone);
for(var i = 0; i<10; i++){
  images.push(clone[i]);
}



$(document).ready(init);


function init(){

  $('#start').click(start);

 $('#game td').click(check);

}

function start(){
  randomImage();
  populate();
    clearInterval(timer);
    clock = $('#clock').data('time') * 1;
    timer = setInterval(updateClock, 1000);
  }



  function updateClock(){
    clock--;

    if(clock > 0 && clock < 10){
      warning();
    }else if(!clock){
      checkWin();
      clearInterval(timer);


    }
       $('#clock').text(clock);
  }



  function warning(){
    var opacity = $('body').css('opacity') * 1;
    opacity -= 0.1;
    $('body').css('opacity', opacity);
  }

function populate() {
  var $tds = $('#game > tbody > tr > td');


  for (var i = 0; i < images.length; i++){
     var pokemon = images[i];
     var $img = $('<img>');
     $img.attr('src','./media/' + pokemon + '.jpg');
     $tds.addClass('opacity');
     $($tds[i]).append($img);
  }

}

function randomImage(){
  var i = images.length, j, temp;
  while (--i) {
    j = Math.floor( Math.random() * (i - 1) );
      temp = images[i];
      images[i] = images[j];
      images[j] = temp;
  }
}


  function check() {
    $(this).addClass('reveal');

       $matches = $('.reveal');

        if($matches.length === 2){
          var td1 = $matches[0];

          var td2 = $matches[1];

          var img1 = $(td1).children().attr('src');
          var img2 = $(td2).children().attr('src');


          if(img1 === img2){
            $matches.addClass('frozen');
            $matches.off('click');
          }

            // setTimeout(function(){
            //   $(td1).removeClass('reveal');
            //   $(td2).removeClass('reveal');
            //   // $matches.removeClass('reveal');
            // }, 1000);


          setTimeout(function(){
            $matches.removeClass('reveal');
            $matches.addClass('table');
            $matches = [];
          }, 1000);


          if($('.frozen').length === 20){
            alert('Winner Winner Chicken Dinner!');
          }
        }


  }


  function checkWin() {
    if($('.frozen').length === 20){
      alert('Winner Winner Chicken Dinner!');
    }
      if($('.frozen').length < 20){
        alert('LOSER!!!');
      }
  }

    // var $first = pair[0];
    // var $second = pair[1];
    //
    // var src1 = $($first).attr('src');
    // var src2 = $($second).attr('src');
    //
    // if(src1 === src2){
    //   $($first).addClass('frozen');
    //   $($second).addClass('frozen');
    //
    //   $('img.frozen').off('click');
    // }









})();
