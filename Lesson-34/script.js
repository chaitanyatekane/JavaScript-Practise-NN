// Functions Vs Methods

/*
Functions :-
A block of code to do something that can be invoked/called when we run at anytime in our code
*/

// functions
const greet = () => 'Hello';
let resultOne = greet();
console.log(resultOne); // Hello

/*
Method :-
Method is invoked using dot notation
*/

// methods

const nameOne = 'sonu';
let resultTwo = nameOne.toUpperCase();
console.log(resultTwo); // SONU

/*
So methods are functions, but their functions are associated with an object or datatype. They are defined on object or datatype.
And our simple function is defined on its own not on any object or datatype.

Functions & Methods are essentially the same thing, just with the different name and the difference is how we call them and where they are defined.
*/