/**
 * Classes (ES6) Discussion
 */

// Life without classes...

const myPerson = {
    name: 'Warren',
    age: 28,
    sayHello: () => console.log('Hello, my name is' + myPerson.name)
};

const mySecondPerson = {
    name: 'Abby',
    age: 20,
    sayHello: () => console.log('Hello, my name is' + mySecondPerson.name)
};

// mySecondPerson.sayHello();

// Life WITH classes!

class Person {
    constructor(name, age) { // Constructors run when a new instance of this class is created.
        this.name = name; // A property "name", accepting an argument from constructor.
        this.age = age; // A property "age", accepting an argument from constructor.
    }
    sayHello() {
        console.log('Hello, my name is ' + this.name);
    }
}

// Think of classes as blueprints that our objects can follow!
const warren = new Person('Warren', 28); // "new" keyword is used to tell JS we are making a new INSTANCE of this class of object.
console.log('warren Person', warren);
warren.sayHello();

// Saves a lot of time, removes margin for error, ensures consistency.
const abby = new Person('Abby', 20);
abby.sayHello();

/**
 * Inheritance
 */

class Square {
    constructor(length){
        this.length = length;
    }
    area(){
        return this.length * this.length;
    }
}

const mySquare = new Square(3);
console.log('Square Area is: ', mySquare.area());

class Rectangle extends Square { // Extends is used to borrow from a "parent class"
    constructor(length, width){
        super(length); // super runs the parent class constructor
        this.width = width;
    }
    area(){
        return this.length * this.width;
    }
}

const myRectangle = new Rectangle(3, 5);
console.log('Rectangle Area is: ', myRectangle.area());
