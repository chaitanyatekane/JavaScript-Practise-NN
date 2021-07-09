// type conversion

let score = '100';
console.log(score+1); // 1001
console.log(typeof(score)); // string

score = Number(score);
console.log(score+1); // 101
console.log(typeof(score)); // number

let result  = Number('hello');
console.log(result); // NaN

let newStr = String(50);
console.log(newStr); // 50
console.log(typeof(newStr)); // string

let boolResult = Boolean(100);
console.log(boolResult); // true
console.log(typeof(boolResult)); // boolean

boolResult = Boolean(-100);
console.log(boolResult); // true
console.log(typeof(boolResult)); // boolean

boolResult = Boolean(0);
console.log(boolResult); // false
console.log(typeof(boolResult)); // boolean

boolResult = Boolean('50');
console.log(boolResult); // true
console.log(typeof(boolResult)); // boolean

boolResult = Boolean('');
console.log(boolResult); // false
console.log(typeof(boolResult)); // boolean