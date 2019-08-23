
class Person {
    constructor(name = 'Anonymous', age = 0 ) {
        this.name = name; 
        this.age = age; 
    }
    getGreeting() {
        return `Hello ${this.name}`; 
    }
    getDescription () {
        return `${this.name} is ${this.age} year(s) old.`; 
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); 
        this.major = major; 
    } 
    hasMajor() {
        return !!this.major; 
    }
    getDescription() {
        let description = super.getDescription(); 
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description; 
    }
}

const me = new Student('Alexander G', 28, 'Computer Science'); 
console.log(me.hasMajor()); 

const you = new Student(); 
console.log(you.hasMajor()); 

//create a new subclass Traveler that extends Person class 
// Add support for homeLocation
// Override getGreeting
// 1.) Hi I am name. I'm visiting from homeLocation 
// 2.) if no home locations stick with Parent string

class Traveler extends Person {
    constructor(name, age , homeLocation) {
        super(name, age); 
        this.homeLocation = homeLocation; 
    }
    hasHomeLocation() {
        return !!this.homeLocation; 
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}`; 
        }
        return greeting; 
    }
}

const trav = new Traveler('Chuck Norris', 54, 'Dojo'); 
console.log(trav.getGreeting()); 

const nope = new Traveler(); 
console.log(nope.getGreeting()); 