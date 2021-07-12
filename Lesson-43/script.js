// primitive vs reference types

/*
Primitive Types :-
numbers
strings
booleans
null
undefined
symbols
*/

/*
Reference Types :-
-> all types of objects
   object literals
   arrays
   functions
   dates
   all other objects
*/

/*
when we create a primitive value like new string or a new number or boolean and assign it to a variable, that value is stored in stack
*/

/*
when we create a reference type like object literal or an array, that is stored in heap */

/*
stack has limited space while heap has more space available
but primitive types are more quicker while reference types are slower
*/

/*
when we make copies of primitive values like strings, numbers and booleans, we make a new copy of value on the stack
and when we try to make a copy of reference type, we only make a copy of the pointer on stack which points to the same data on heap, we don't make the copy of actual data, so then when we change copies then it does have effect on original value and vice-versa
*/

// primitive type example :-
let scoreOne = 50;
let scoreTwo = 50;
console.log(`scoreOne:- ${scoreOne} and scoreTwo:- ${scoreTwo}`); // scoreOne:- 50 and scoreTwo:- 50
scoreOne = 100;
console.log(`scoreOne:- ${scoreOne} and scoreTwo:- ${scoreTwo}`); // scoreOne:- 100 and scoreTwo:- 50

/*
here in above example,
when we make a copy of primitive values and afterwards we change one of them then it doesn't affect other
*/



// reference type example :-
const newUserOne = { name: 'ryu', age: 30 };
const newUserTwo = newUserOne;
console.log(newUserOne, newUserTwo); // {name: "ryu", age: 30} {name: "ryu", age: 30}
newUserOne.age = 40;
newUserOne.name = 'chaitanya';
console.log(newUserOne, newUserTwo); // {name: "chaitanya", age: 40} {name: "chaitanya", age: 40}

/*
here in above example,
it is stored only once in heap and when we change the value it changes on heap and they both refer to same object. so when, we update one, it automatically updates the other
*/