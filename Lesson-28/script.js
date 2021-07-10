// variables & block scope

let age = 30;
if(true){
    console.log('inside if block and value is', age);
}
console.log('outside if block and value is', age);
// inside if block and value is 30
// outside if block and value is 30

let newAge = 30;
if(true){
    newAge = 40;
    console.log('inside if block and value is', newAge);
}
console.log('outside if block and value is', newAge);
// inside if block and value is 40
// outside if block and value is 40


// let errAge = 80;
// let errAge = 90; 
// console.log(errAge); // SyntaxError: Identifier 'errAge' has already been declared


let newAgeValue = 30;
if(true){
    let newAgeValue = 40;
    console.log('inside if block and value is', newAgeValue);
}
console.log('outside if block and value is', newAgeValue);
// inside if block and value is 40
// outside if block and value is 30


if(true){
    let name = 'shaun';
    console.log(name); // shaun
}
// console.log(name); // will not give shaun


console.log('Hello');
let newValue = 60;
if(true){
    let newValue = 90;
    console.log(newValue); // 90
    if(true){
        let newValue = 100;
        console.log(newValue); // 100
    }
    console.log(newValue); // 90
}
console.log(newValue); // 60


console.log('secondValue');
const secondValue = 60;
if(true){
    const secondValue = 90;
    console.log(secondValue); // 90
    if(true){
        const secondValue = 100;
        console.log(secondValue); // 100
    }
    console.log(secondValue); // 90
}
console.log(secondValue); // 60

// this works same with both let and const
// this will not work same with var
// always use let and const, only if needed use var

console.log('thirdValue');
var thirdValue = 60;
console.log(thirdValue); // 60
if(true){
    var thirdValue = 90;
    console.log(thirdValue); // 90
    if(true){
        var thirdValue = 100;
        console.log(thirdValue); // 100
    }
    console.log(thirdValue); // 100
}
console.log(thirdValue); // 100
// here because of var scoping doesn't work
// always use let and const, only if needed use var