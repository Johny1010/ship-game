/**
 * Created by johny on 20.12.15.
 */
var location1 = Math.floor(Math.random() * 5),
    location2 = location1 + 1,
    location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false) {
    guess = prompt("Ready, aim, fire! (Write number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please input a valid number!");
    }
    else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits = hits + 1;


            if (hits == 3) {
                isSunk = true;
                alert("You sank my ship!")
            }
        }
        else {
            alert("Miss!");
        }
    }
}

var stats = "You needed " + guesses + " hits, to sank my ship, " + "so your efficiency is: " + (3/guesses) + ".";
alert(stats);