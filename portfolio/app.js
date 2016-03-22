$(document).ready(function(){
   
       
 var I=0;
    
$('.btn').mouseenter(function(){
   var path = $(this).find('img');
    $(path).attr('src','images/arrowYellow.png');
    
    });
    $('.btn').mouseleave(function(){
        var path = $(this).find('img');
        $(path).attr('src','images/icon-ios7-arrow-back-512.png');
    });


$('.social').mouseenter(function(){
  $(this).css('opacity','0');
    });
    
    $('.social').mouseleave(function(){
  $(this).css('opacity','1');
    });
  
//scroll left
    
    $('#button2').click(function(){
       var pic = $('#jumbotron').find('img');
        var title=$('#explanation').find('h3');
        var par=$('#explanation').find('p');
        
   $(pic).animate(
       {
       width:'0px'
       },function()
       {
           I=I-1;
           if(I<0){
           I=images.length-1;
           };
           $(pic).attr('src',images[I].image);
           $('#link').attr('href',images[I].link);
           $(title).replaceWith(images[I].title);
           $(par).replaceWith(images[I].descripton);
         
       })
   
        
    $(pic).animate(
        {
    width:'512px'
    },function(){
    
    })
    
    });
    
//scroll right 
    
    $('#button').click(function(){
       var pic = $('#jumbotron').find('img');
          var title=$('#explanation').find('h3');
        var par=$('#explanation').find('p');
   $(pic).animate(
       {
       width:'0px'
       },function(){
           I=I+1;
           if(I==images.length){
           I=0;
           };
      $(pic).attr('src',images[I].image); 
     $('#link').attr('href',images[I].link);
    
    $(title).replaceWith(images[I].title);  $(par).replaceWith(images[I].descripton
                                                                            );
       })
   
        
    $(pic).animate(
        {
    width:'512px'
    },function(){
    
    })
    });
});

//iframe
$()
$('#jumbotron').click(function(){
   $('#roundAbout').replaceWith('<iframe src='+images[I].link+'></iframe>');
});