/**
 * Created by johny on 08.01.16.
 */
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        {
            locations: ["06, 16, 26"],
            hits: ["", "", ""]
       },
        {
            locations: ["24, 34, 44"],
            hits: ["10", "11", "12"]
       },
        {
            locations: ["06, 16, 26"],
            hits: ["", "", ""]
       }
    ],
    fire: function (guess) {
        var i = 0, ship, index;
        for (i ; i < this.numShips; i++) {
            ship = this.ships[i];
            index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sunk my ship!!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed!!");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") return false;
        }
    }
};

var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var hit, location = parseGuess(guess);
        if (location) {
            this.guesses++;
            hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sunk all my ships in " + this.guesses + " trials!");
            }
        }
    }
};

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"], row, firstChar;
    if (guess === null || guess.length !== 2) {
      alert("Oops, please enter letter and digital");
    }
    else {
        firstChar = guess.charAt(0);
        row = alphabet.indexOf(firstChar);
        column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, this are not valid coordinates!");
        }
        else if (row < 0 || row >= model.boardSize || column < 0 || column >= boardSize) {
            alert("Oops, your guess is out of board!");
        }
        else {
            return row + column
        }
    }
    return null;
}

function init() {
    var fireBtn = document.getElementById("fireButton");
    fireBtn.onclick = handleFireButton;
}

function handleFireButton () {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
}

window.onload = init;