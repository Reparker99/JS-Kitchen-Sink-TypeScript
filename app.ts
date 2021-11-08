// A variable that holds a name.
var fullName: string = "Rachel Parker";

// A constant that holds the number of states.
const numStates: number = 50;

// A variable that adds 4 and 5.
let sum: number = 4 + 5;

function sayHello () {
    alert("Hello World!");
}

function checkAge(name: string, age: number) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

/*checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);*/

const favFoods = ['Steak', 'Cheese Dip', 'Nerds', 'Lomo Saltado'];

for (let i = 0; i < favFoods.length; i++) {
    console.log(favFoods[i]);
}

class Pet {
    name: string;
    breed: string;

    constructor(theName: string, theBreed: string) {
        this.name = theName;
        this.breed = theBreed;
    }
}
let spooky = new Pet("Spooky", "Cat");
console.log(spooky.name);
console.log(spooky.breed);

class Character {
    name: string;
    age: number;

    constructor (theName: string, theAge: number) {
        this.name = theName;
        this.age = theAge;
    }
    
    checkAge() {
        if (this.age < 21) {
            alert("Sorry " + this.name + ", you aren't old enough to view this page!");
        }
    }
}

let paladin = new Character("Altair", 55);
let rogue = new Character("Rose", 30);
let warlock = new Character("Tycho", 18);
let warlock2 = new Character("Luma", 20);
let druid = new Character("Liranya", 58);

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

class lengthReport {
    words: string;
    
    constructor(message: string) {
        this.words = message;
    }

    getLength() {
        let length = this.words.length;
        if (length % 2 == 0) {
            console.log('The world is nice and even!');
        } else {
            console.log('The world is an odd place!');
        }
    }
}

let test = new lengthReport('Hello World');

test.getLength();