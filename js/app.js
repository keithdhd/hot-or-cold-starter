
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
  		newGame();
  	})

	$("#guessButton").click(function(){
		hotOrCold($("#userGuess").val().trim());
	});	

  	newGame(); 

});

var NUM_GUESSES = 0;
var ICE_COLD = 50;
var COLD = 30;
var WARM = 20;
var HOT = 10;
var VERY_HOT = 1;
var SECRET_NUMBER;

function newGame(){
	NUM_GUESSES = 0;
	SECRET_NUMBER = getSecretNumber();

	$("#count").text("0");
	$("#guessList").empty();
	$("#userGuess").val("");
	$("#feedback").text("Make your Guess!");
}

function getSecretNumber(){
	return Math.floor((Math.random() * 100) + 1);
}

function hotOrCold(currentGuess){	

	if( isNaN(currentGuess) || (currentGuess < 1 || currentGuess >100) || currentGuess % 1 != 0){
		alert("Please enter a whole number between 1 and 100");
	}
	else{
		incrementGuesses();		
		giveFeedback(currentGuess);
		$("#guessList").append("<li>" + currentGuess + "</li>");
		$("#count").text(NUM_GUESSES);
	}
}

function incrementGuesses(){
	NUM_GUESSES++;
}

function giveFeedback(currentGuess){
	var feedbackString;
	var difference = diff(SECRET_NUMBER, currentGuess);

	if(difference == 0){
		feedbackString = "Congratulations! Spot on."
	}
	else if(difference <= VERY_HOT){
		feedbackString = "Very hot!"
	}
	else if(difference <= HOT){
		feedbackString = "Hot"
	}
	else if(difference <= WARM){
		feedbackString = "You're warm."
	}
	else if(difference <= COLD){
		feedbackString = "You're cold!"
	}
	else if(difference <= ICE_COLD){
		feedbackString = "You are ICE cold!"
	}

	$("#feedback").text(feedbackString);
}

function diff(a,b){
 return Math.abs(a - b);
}