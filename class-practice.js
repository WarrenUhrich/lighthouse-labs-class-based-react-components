const schoolName = 'LighthouseLabs';
const currentSchoolYear = 2024;
const bootcamps = ['web', 'cyber security', 'data'];


console.log(`This is ${schoolName}, the year is ${currentSchoolYear}, and we teach:`, bootcamps);

const school = {
    name: 'Lighthouse Labs',
    currentYear: 2024,
    bootcamps: ['web', 'cyber', 'data']
};

console.log(`This is ${school.name}, the year is ${school.currentYear}, and we teach:`, school.bootcamps);

/**
 * Using a Class (blueprint)
 * Constructor Functions were the older way
 */

// class Pet {}

// Constructor Function
// function Pet(name, age) { // Will begin with a capital letter!
//     this.name = name;
//     this.age = age;
//     this.intro = function() { console.log(`Hi! My name is ${this.name}, I am ${this.age} years old.`); };
// }

// const pet1 = new Pet('Quorra', 3);
// const pet2 = new Pet('Barley', 17);

// pet1.intro();
// pet2.intro();

// Classes are syntactical sugar for Constructor Functions
class Square {
    constructor(side) {
        this.side = Number(side);
    }

    area() {
        return this.side * this.side;
    }
}

const mySquare = new Square(11);
console.log('mySquare:', mySquare, 'area:', mySquare.area());


const myOtherSquare = new Square(50);
console.log('myOtherSquare:', myOtherSquare, 'area:', myOtherSquare.area());

/**
 * Inheritance
 */

class Rectangle extends Square {
    constructor(side, width) {
        super(side);
        this.width = Number(width);
    }

    area() {
        return this.side * this.width;
    }
}

const myRectangle = new Rectangle(11, 22);
console.log('myRectangle:', myRectangle, 'area:', myRectangle.area());


const myOtherRectangle = new Rectangle(2, 20);
console.log('myOtherRectangle:', myOtherRectangle, 'area:', myOtherRectangle.area());
