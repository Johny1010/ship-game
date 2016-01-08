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
        var i = 0, ship, locations, index;
        for (; i < this.numShips; i ++) {
            ship = this.ships[i];
            locations = ship.locations;
            index = locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                return true;
            }
        }
        return false;
    }
};

view.displayMiss("00");
view.displayHit("34");
view.displayHit("11");
view.displayHit("10");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("jojo");