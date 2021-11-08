"use strict";
// A variable that holds a name.
var fullName = "Rachel Parker";
// A constant that holds the number of states.
var numStates = 50;
// A variable that adds 4 and 5.
var sum = 4 + 5;
function sayHello() {
    alert("Hello World!");
}
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
/*checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);*/
var favFoods = ['Steak', 'Cheese Dip', 'Nerds', 'Lomo Saltado'];
for (var i = 0; i < favFoods.length; i++) {
    console.log(favFoods[i]);
}
var Pet = /** @class */ (function () {
    function Pet(theName, theBreed) {
        this.name = theName;
        this.breed = theBreed;
    }
    return Pet;
}());
var spooky = new Pet("Spooky", "Cat");
console.log(spooky.name);
console.log(spooky.breed);
var Character = /** @class */ (function () {
    function Character(theName, theAge) {
        this.name = theName;
        this.age = theAge;
    }
    Character.prototype.checkAge = function () {
        if (this.age < 21) {
            alert("Sorry " + this.name + ", you aren't old enough to view this page!");
        }
    };
    return Character;
}());
var paladin = new Character("Altair", 55);
var rogue = new Character("Rose", 30);
var warlock = new Character("Tycho", 18);
var warlock2 = new Character("Luma", 20);
var druid = new Character("Liranya", 58);
console.log(paladin.name, paladin.age);
warlock.checkAge();
/*function getLength (word: string) {
    return word.length;
}

let length = getLength('Hello World');

if (length % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}*/
var lengthReport = /** @class */ (function () {
    function lengthReport(message) {
        this.words = message;
    }
    lengthReport.prototype.getLength = function () {
        var length = this.words.length;
        if (length % 2 == 0) {
            console.log('The world is nice and even!');
        }
        else {
            console.log('The world is an odd place!');
        }
    };
    return lengthReport;
}());
var test = new lengthReport('Hello World');
test.getLength();
