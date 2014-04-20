(function(){
  'use strict';

  var images = ['blastoise', 'charizard', 'electrode', 'gengar', 'mew', 'muk', 'pikachu', 'scyther', 'venasaur', 'zubat'];
  console.log(images);


  //var select;
  var clock;
  var timer;
  var clone = images.slice(0);
  for(var i = 0; i < clone.length; i++){
    images.push(clone[i]);
  }


  $(document).ready(init);

  function init(){
    $('#start').click(start);
    $('.box').click(boardClick);

  }

  function shuffleImages(images) {
    for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = images[i];
        images[i] = images[j];
        images[j] = temp;
    }
        return images;
  }

  function srcImages(){

    var $td = $('#game > tbody > tr > td');

  for (var i = 0; i < images.length; i++){
    var pokemon = images[i];
    var $img = $('<img>');
    $img.attr('src', './media/' + pokemon + '.jpg');
    $td.addClass('hidden');
    $($td[i]).append($img);
    }

}

  /*  function compare(one, two){
      var pair = [];
      pair.push(select);
      var one = pair[0];
      var two = pair[1];
      if ( one === two){
        $(one).addClass('freeze');
        $(two).addClass('freeze');
      } */



   function boardClick(){
    var select = $(this);
    $(this).toggleClass('hidden');

  //  compare();
    reHide(select);

  }

  function reHide(image){
    setTimeout(function(){
    image.toggleClass('hidden');
    },500);
  }

  function countdown(){
    clock--;

    if(clock > 0 && clock < 10) {
      warning();
    } else if (!clock){
      clearInterval(timer);
      //results();
    }

    $('#clock').text(clock);

   }


 function warning(){
   $('clock').css('color', 'red');

  }

  function start(){
    clearInterval(timer);
    clock = $('#clock').data('time') * 1;
    timer = setInterval(countdown, 1000);
    shuffleImages(images);
    console.log(images);
    srcImages();


  }



})();
