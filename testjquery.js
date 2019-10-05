
function generate() 
{
    $('#number').text(Math.floor(Math.random() * 10000000) + 1);
    $('#number').hide(2000) ;
        $('#guessednumber').show() ;
            $('#lost').hide() ;
                $('#try').show() ;

  }
  function restart() 
{
    $('#lost').text('am sorry for you , the number was:');
                $('#lost').show() ;

    $('#number').show() ;
        $('#guessednumber').hide() ;
            $('#try').hide() ;
  }

  function compare ()
   
  {
  var x=parseInt($('#number').text());
  var y=$('#guessednumber').val()  ;
  if (x-y===0)
  {
  	alert('you win ') ;
  	onsubmit(alert('you made it , good visual memory  !! ')) ;  
  }
  else 
  {
  	alert('try again ') ;
  	onsubmit(restart()) ;  
  }

  }
  
  
