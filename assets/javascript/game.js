// Letters Array
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Stat board for user
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 10;
var guessed = 0;

// Command for computer to pick a random letter to be guessed
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

console.log(computerChoice)

// When user presses a key it will run the function
document.onkeypress = function () {
    var userGuess = event.key;

    console.log(userGuess);

    if (userGuess === computerChoice) {
        wins++; guessed++;
    } else {
        guessesLeft--;
    }
    if (userGuess !== computerChoice) {
        guesses++; guessed++;
    }
    if (guesses === 10) {
        losses++;
    }
    if (losses === 1) {
        alert("You Lose :("); location.reload();
    }
    if (wins === 1) {
        alert("You Win!!"); location.reload();
    }


    document.getElementById("wins").innerHTML = "Wins:  " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guessedAlready").innerHTML = "Your Guesses So far: " + guessed;

}