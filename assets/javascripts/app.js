$(document).ready(function(){
  var $buttonHide = $('#buttonHide');
  var $divHide = $('.divHide');
  var $readyStart = $('#readyStart');
  var $navAppear = $('.navAppear');
  var $yourChoice = $('#yourChoice');
  var $compChoice = $('#compChoice');
  var $makeChoices = $('.makeChoice');
  var $nameInput = $('#nameInput');
  var $rockImg = $('#rock');
  var $paperImg = $('#paper');
  var $scissorImg = $('#scissor');
  var choices = ['Rock', 'Paper', 'Scissor'];


  // $buttonHide.click(function() {
  //   $divHide.slideToggle();
  //   $navAppear.slideToggle();
  // });
  $('.toggler').click(function() {

    $divHide.slideToggle();
    $navAppear.slideToggle();
  });
  // alert for when name is undefined
  //
  $nameInput.keyup(function(e) {
    if(e.keyCode === 13){
      var nameValue = $nameInput.val();
      if(nameValue.length) {
        $readyStart.text("RockPaperScissorIt " +  nameValue);
        toggLer();
      } else {
        alert('You need to add a name!');
        $nameInput.addClass('error-border');
        $calc.slideUp();
        $readyStart.text('Calculator');
      }
    }
  });





  // how to click on navApper to have divHide re appear and navAppear to

  $makeChoices.click(function() {
    $('#yourChoice > img').addClass('no-display')
    $('#compChoice > img').addClass('no-display')
    var $button = $(this);
    var $buttonText = '#p-'+$button.text();
    $($buttonText).removeClass('no-display');
    var computerChoice = choices.sort(function () {
      return 0.5 - Math.random()
    });
  	var randomChoice = computerChoice[1];
    var compare = '#p-'+randomChoice
    switch(randomChoice) {
  	  case "Paper":
        $paperImg.removeClass('no-display');
        if(compare === $buttonText);

        break;
  	  case "Rock":
  	  	$rockImg.removeClass('no-display');
        break;
  	  case "Scissor":
  	  	$scissorImg.removeClass('no-display');
        break;
      default: "Select: Rock/Paper/Scissors.";
	   };

  });




  // $readyStart.text('Rock').fadeIn(1000).delay(800).fadeOut(1000);
  // $readyStart.text('Paper').fadeIn(1000).delay(800).fadeOut(1000);
  // $readyStart.text('Scissor').fadeIn(1000).delay(800).fadeOut(1000);


});
