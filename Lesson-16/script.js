// loose Vs strict comparison

// loose comparison (different types can still be equal)
// strict comparison (different types cannot be equal)

let age = 25;
console.log(age==25); // true
console.log(age!=25); // false
console.log(age!='25'); // false
console.log(age=='25'); // true
console.log(age===25); // true
console.log(age==='25'); // false
console.log(age!==25); // false
console.log(age!=='25'); // true

// mostly use strict comparison