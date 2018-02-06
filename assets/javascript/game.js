var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
				'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
				'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

document.onkeyup = function(event) {
	var gameGuess = letterArray[Math.floor(Math.random() * letterArray.length)];

	var userGuess = event.key;

	var userGuessPrint = document.getElementById("guesses-so-far-area");
	var newGuess = document.createElement("span");
	
	if (letterArray.indexOf(userGuess) > -1) {
		newGuess.innerHTML = event.key + " ";
		userGuessPrint.appendChild(newGuess);
	}

	if (letterArray.indexOf(userGuess) > -1) {
		if (userGuess === gameGuess) {
			wins += 1;
			guessesLeft = 10;
			document.getElementById("guesses-so-far-area").innerHTML = "";
		}
		else {
			guessesLeft -= 1;
		}
		
		if (guessesLeft === 0) {
			losses += 1;
			guessesLeft = 10;
			document.getElementById("guesses-so-far-area").innerHTML = "";
		}	
	}

	document.getElementById("wins-area").innerHTML = wins;
	document.getElementById("losses-area").innerHTML = losses;
	document.getElementById("guesses-left-area").innerHTML = guessesLeft;
}


