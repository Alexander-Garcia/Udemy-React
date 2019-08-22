// Arguments object - no longer bound with arrow function

const add = function(a, b) {
    // console.log(argumments); 
 return a + b; 
}; 
console.log(add(55,1)); 

// this keyword - no longer bound 

const user= {
    name: 'Alexander',
    cities: ['New york', 'Mexico', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); 
    }
};
console.log(user.printPlacesLived()); 

// Challenge area

const multiplier = {
    // numbers - array of numbers 
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    myNums: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.myNums.map((num) => num * 2); 
    }
}
console.log(multiplier.multiply()); 