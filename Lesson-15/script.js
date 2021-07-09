// booleans and comparisons
console.log(true, false, 'true', 'false');

let email = 'chaitanyatekne@gmail.com';
let result = email.includes('@'); // includes
console.log(result); //true
let newResult = email.includes('!');
console.log(newResult); //false

let arr = ['hello', 'chaitanya', 'mario'];
let arrResult = arr.includes('chaitanya');
console.log(arrResult); // true
let newArrResult = arr.includes('luigi');
console.log(newArrResult); // false

console.log(24==24); // == // true
console.log(24==25); // == // false
console.log(22!=22); // != // false
console.log(89>22); // > // true
console.log(89<22); // < // false
console.log(89<=89); // <= // true
console.log(89>=89); // >= // true

console.log('For Numbers :- ');
console.log('shaun'=='shaun'); // true
console.log('shaun'=='Shaun'); // false
console.log('Shaun'>'shaun'); // false
console.log('shaun'>'Shaun'); // true
console.log('shaun'>'crystal'); // true
console.log('shaun'>'Crystal'); // true
// lowercase letters are greater than uppercase