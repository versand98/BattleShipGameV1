//Random number between 0 and 4 (inclusive)
function getRandomNo() {
    return Math.floor(Math.random()*5); //Generating a random number between 0 and 4 (inclusive) and rounding down
}
// The regular expression ^\d+$ ensures that the entire string consists of one or more digits. 
//If there are any non-digit characters in the string or if the digits are not at the start and end of the string, the pattern won't match
let numberPattern = /^\d+$/; 

let guesses = 0;
let hits = 0;
let isSunk = false;
// let guessTxt;
let guess;
let accuracy;
let roundAccuracy;

while(isSunk === false) {
    //Setting the locations of the ship (3 slots big)
    const location1 = getRandomNo();
    const location2 = location1 + 1;
    const location3 = location2 + 1;
    guess = prompt("Get ready to fire! Enter a number between 0-6"); //Ask user for number input
    //The first if statement tests whether the user entered a number or not and if the number is bewteen 0-6 (inclusive)
    if (numberPattern.test(guess) && guess >= 0 && guess <= 6) {
        console.log("Number!");
        guesses += 1; //Adds one more to the guesses variable only if the if conditions above are true
        console.log("Guess: " + guess + " Guesses: " + guesses);
        //Tests if the user input is NOT similar to the ships 3 random locations generated above (line 19-21)
        if (guess != location1 && guess != location2 && guess != location3) {
            alert("Miss! Try again");
        } 
        //If the user input is equal to one of the ship's three locations a hit message is displayed and the hit variable is updated 
        else {
            alert("Hit!");
            hits += 1;
            //Checking if the hit variable is strictly equal to 3. If yes, then the while loop becomes true and breaks
            if (hits === 3) {
                isSunk = true;
                alert("You sank the battleship!")
            }
        }   
    } 
    //If the user input is a number below 0 or above 6, the user gets a reminder to enter a number between 0-6 
    else if (guess < 0 || guess > 6 && guess) {
        alert("Enter a number between 0-6");
    } 
    //An alert is displayed if the user input is not a number
    else {
        alert("Not a number!")
    }
    //Defining the accuracy variable
    accuracy = (hits / guesses) * 100;
    roundAccuracy = parseFloat(accuracy).toFixed(2);

}
console.log("Guesses: " + guesses + ", Accuracy: " + roundAccuracy + "%")
alert("Guesses: " + guesses + ", Accuracy: " + roundAccuracy + "%")
