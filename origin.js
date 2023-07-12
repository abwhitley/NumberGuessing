// Guess the Number Game

var guesses = 0;

const intro = () => {
    console.log("Welcome to the number guessing game.")
    console.log("Guess a number between 1-10.")
}

const generateRandomNumber = () => {
    var generatedNumber = Math.floor(Math.random() * 10) +1;
    console.log(generatedNumber);
    return generatedNumber;
} 

const guessNumber = (number) => {
    if(guesses == 3){
        return;
    }
    var guess = prompt("Enter your guess: ");
    if (isNaN(guess) == false){
        guesses++;
        checkIfCorrect(number, guess);
    }else{
        console.log("You did not input a number. Try again.")
        guessNumber(number);
    }
}

const checkIfCorrect = (number, guess) => {
    if(guess == number){
        console.log("You guessed correctly");
    }else{
        isHigherOrLower(number, guess);
        console.log("You guessed incorrectly. Try Again");
        guessNumber(number);
    }
}

const isHigherOrLower = (number, guess) => {
    if(number > guess){
        console.log("The number is higher");
    }else if (number < guess){
        console.log("The number is lower");
    }else{
        console.log("This should not show")
    }
}

const numberOfGuesses = (guesses) => {
    return guesses += 1;
}

intro();
var number = generateRandomNumber();
guessNumber(number);

