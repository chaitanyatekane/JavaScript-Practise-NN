// function declaration
function greet(){
    console.log("Hello Chaitanya");
}
// calling or invoking  function
greet(); // Hello Chaitanya


// function expression
const sayHello = function(){
    console.log("Hello There");
};
// calling or invoking  function
sayHello(); // Hello There


/*
Hoisting works with function declaration but doesn't work with function expression
*/

// function declaration
newGreet(); // Hello Chaitanya
function newGreet(){
    console.log("Hello Chaitanya");
}


// function expression
// newSayHello(); // ReferenceError: Cannot access 'newSayHello' before initialization
const newSayHello = function(){
    console.log("Hello There");
};