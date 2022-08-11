/**
 * Classes (ES6) Discussion
 */

// Life without classes... :(

const person1 = {
    name: 'Megan',
    favouriteLang: 'JavaScript',
    sayHello: () => console.log('Hello, I am: ' + person1.name + '\nMy favourite programming language is: ' + person1.favouriteLang)
};

const person2 = {
    name: 'Caitlin',
    favouriteLang: 'Python',
    sayHello: () => console.log('Hello, I am: ' + person2.name + '\nMy favourite programming language is: ' + person2.favouriteLang)
};

person1.sayHello();

// Life with classes... :)

class Person { // A blueprint... what should a person be!?
    constructor (name, favLang) {
        this.name = name;
        this.favouriteLang = favLang;
    }

    sayHello () {
        console.log(`My name is ${this.name} and my favourite language is: ${this.favouriteLang}`);
    }
}

const obj1 = new Person('Megan', 'JavaScript');
const obj2 = new Person('Caitlin', 'Python');

obj2.sayHello();

// Inheritance.

class Square {
    constructor (length) {
        this.length = length;
    }

    area () {
        return this.length * this.length;
    }
}

const mySquare1 = new Square(3);
console.log('Square Area:', mySquare1.area());

class Rectangle extends Square {
    constructor (length, width) {
        super(length); // Executes Square constructor.
        this.width = width;
    }

    area () {
        return this.length * this.width;
    }
}

const myRect = new Rectangle(2, 5);
console.log('Rectangle Area:', myRect.area());

class Triangle extends Rectangle {
    constructor(base, height) {
        super(base, height);
    }

    area() {
        return 0.5 * (this.length * this.width);
    }
}

const myTriangle = new Triangle(3, 4);
console.log('Triangle Area:', myTriangle.area());
