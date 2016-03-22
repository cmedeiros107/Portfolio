var main = function() {
  //top caption
  $('#top-text').keyup(function(){  
    $('.top-caption').text($('#top-text').val());
  });

  //bottom caption
  $('#bottom-text').keyup(function(){ 
    $('.bottom-caption').text($('#bottom-text').val());
  });

  //image
  $('#image-url').keyup(function(){ 
    $('#image').attr('src', $('#image-url').val());
  });
}

$(document).ready(main);