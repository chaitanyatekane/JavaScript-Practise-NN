// Numbers

let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// math operators +, -, *, /, **, %

console.log(10/2);
console.log(radius%3);
console.log(pi*radius**2);

// order of operation - B I D M A S
// B - brackets
// I - indexes

let result = 5 * (10-3)**2;
console.log(result);

let likes = 10;
likes = likes + 1;
likes += 1;
likes++;
console.log(likes);

likes --;
likes -= 2;
console.log(likes);

likes += 10;
likes -= 10;
likes *= 2;
console.log(likes);
likes /= 2;
console.log(likes);

// NaN - not a number
console.log(5/'hello'); // NaN
console.log(5*'hello'); // NaN

let greetMe = 'Good';
let final = greetMe + ' Morning, Chaitanya';
console.log(final);