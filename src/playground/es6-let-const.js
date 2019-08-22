var nameVar = 'Alexander'; 
var nameVar = 'Mike'; 
console.log('nameVar' , nameVar); 

let nameLet = 'Jen'; 
nameLet = 'Julie'; 
console.log('nameLet', nameLet); 

const nameConst = 'Frank'; 
console.log('nameConst', nameConst); 

// Block scoping

const fullName = 'Jen Mead';
let firstname; 

if(fullName) {
    let firstname = fullName.split(' ')[0]; 
    console.log(firstName); 
}

console.log(firstName); 