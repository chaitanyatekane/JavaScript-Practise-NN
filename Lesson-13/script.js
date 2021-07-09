// arrays
let ninjas = ['shaun', 'ryu', 'chaitanya'];
console.log(ninjas);
console.log(ninjas[0]);
console.log(ninjas[2]);

ninjas[0] = 'hello'; // override
console.log(ninjas[0]);
console.log(ninjas);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['world', 34, true, 'cricket'];
console.log(random);

console.log(random.length); // length

// array methods
let result = random.join('-'); // join
console.log(result);

let index = random.indexOf('cricket'); // indexOf
console.log(index);

let concatArr = random.concat(['football', 55, 'hockey']); // concat 
console.log(concatArr);

let pushEle = concatArr.push('badminton'); // push
console.log(pushEle);

let popEle = concatArr.pop(); // pop
console.log(popEle);


let newArr = [22, 45, 44, 33, 88];
console.log(newArr.pop());
console.log(newArr);
console.log(newArr.shift());
console.log(newArr);
console.log(newArr.unshift(100));
console.log(newArr);



/*
(1). pop() -> Removes an item from end of array and returns removed item
(2). push() -> Add item to end of array and returns new array length
(3). unshift() -> Add item to the beginning of array and returns new array length
(4). shift() -> Removes an item from the beginning of array and returns removed item
*/