// math object

console.log(Math); // Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.sqrt(16)); // 4
console.log(Math.max(90, 34, 144, 44)); // 144
console.log(Math.min(90, 34, 144, 44)); // 34

console.log(Math.round(7.7)); // 8
console.log(Math.round(7.5)); // 8
console.log(Math.round(7.4)); // 7


console.log(Math.floor(7.7)); // 7
console.log(Math.floor(7.5)); // 7
console.log(Math.floor(7.4)); // 7


console.log(Math.ceil(7.7)); // 8
console.log(Math.ceil(7.5)); // 8
console.log(Math.ceil(7.4)); // 8


console.log(Math.trunc(7.7)); // 7
console.log(Math.trunc(7.5)); // 7
console.log(Math.trunc(7.4)); // 7


console.log(Math.random()); // 0.7889325268756215
console.log(Math.random()); // 0.652920988825503
console.log(Math.random()); // 0.13767100526326215


console.log(Math.round(Math.random())); // 0
console.log(Math.round(Math.random())); // 0
console.log(Math.round(Math.random())); // 1
console.log(Math.round(Math.random())); // 0
console.log(Math.round(Math.random())); // 1


console.log("Hello, Code Testing😂");
let ranNum1 = Math.random();
console.log(Math.round(ranNum1*100)); // 66
let ranNum2 = Math.random();
console.log(Math.round(ranNum2*100)); // 98
let ranNum3 = Math.random();
console.log(Math.round(ranNum3*100)); // 1
let ranNum4 = Math.random();
console.log(Math.round(ranNum4*100)); // 23
let ranNum5 = Math.random();
console.log(Math.round(ranNum5*100)); // 89


console.log("Following code returns a random number between 1 and 100 (both included)");
const getRndInteger = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1) ) + min);
};

console.log(getRndInteger(1, 100)); // 55
console.log(getRndInteger(1, 100)); // 76
console.log(getRndInteger(1, 100)); // 1
console.log(getRndInteger(1, 100)); // 23
console.log(getRndInteger(1, 100)); // 100 
console.log(getRndInteger(1, 100)); // 45