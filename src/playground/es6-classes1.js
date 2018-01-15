class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age
    }
    getGreeting() {
        return `Hi I am ${ this.name } welcome! you are ${this.age}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name,age)
        this.location = location
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.location) {
            greeting += ` Im visiting from ${this.location}`
        }
        return greeting
    }
}



const me = new Traveler('Collin Cavallo', 23, 'Houston');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());