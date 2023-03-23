/**
 * Classes (ES6) Discussion 
 */

/**
 * Life without classes :(
 */

const firstName = 'Andrew';
const lastName = 'Brown';
const favProgrammingLang = 'PHP';

console.log(`Hello, I am ${firstName} ${lastName} and I like programming in ${favProgrammingLang}!`);

const student = {
    firstName: 'Elshan',
    lastName: 'Magsudov',
    favProgrammingLang: 'Python',
    sayHello: function() {
        console.log(`Hello, I am ${this.firstName} ${this.lastName} and I like programming in ${this.favProgrammingLang}!`);
    }
};

// console.log(`Hello, I am ${student.firstName} ${student.lastName} and I like programming in ${student.favProgrammingLang}!`);
student.sayHello();

const student2 = {
    firstName: 'Anne-Marie',
    lastName: 'Champoux',
    favProgrammingLang: 'Swift',
    sayHello: function() {
        console.log(`Hello, I am ${this.firstName} ${this.lastName} and I like programming in ${this.favProgrammingLang}!`);
    }
};

student2.sayHello();

/**
 * Life with class :)
 * 
 * A class is: a template for an object.
 */

class Student {
    constructor(firstName, lastName, favProgrammingLang) { // Runs every time we make a new Student
        this.firstName = firstName;
        this.lastName = lastName;
        this.favProgrammingLang = favProgrammingLang;
    }

    sayHello() {
        console.log(`Hello, I am ${this.firstName} ${this.lastName} and I like programming in ${this.favProgrammingLang}!`);
    }
}

const student3 = new Student(
    'Zach',
    'Stephenson',
    'COBOL'
);

// console.log(`Hello, I am ${student3.firstName} ${student3.lastName} and I like programming in ${student3.favProgrammingLang}!`);
student3.sayHello();

const student4 = new Student(
    'Rebecca',
    'Kurtis',
    'React'
);

student4.sayHello();

/**
 * Inheritance.
 */

class Square {
    constructor(length) {
        this.length = Number(length);
    }

    area() {
        return this.length * this.length;
    }
}

const mySquare = new Square(5);
console.log(
    'mySquare\'s area is:',
    mySquare.area()
);

class Rectangle extends Square {
    constructor(length, width) {
        super(length); // super() will run the original constructor (from Square)
        this.width = Number(width);
    }

    area() {
        return this.length * this.width;
    }
}

const myRectangle = new Rectangle(2, 5); // Should have an area of 10
console.log(
    'myRectangle\'s area is:',
    myRectangle.area()
);

class Triangle extends Rectangle {
    area() {
        return 0.5 * (this.length * this.width);
    }
}

const myTriangle = new Triangle(2, 3);
console.log(
    'myTriangle\'s area is:',
    myTriangle.area() // Expected: 3
);
