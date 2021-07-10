// arguments & parameters

const speak = function(name){ 
    console.log(`Good Day ${name}`);
}
speak("Chaitanya"); // Good Day Chaitanya
/*
name is parameter
Chaitanya is argument
*/


const greet = function(day, time){
    console.log(`${day} and ${time}`);
}
greet('Monday', '10AM'); // Monday and 10AM
greet('12AM', 'Tuesday'); // 12AM and Tuesday
// order plays important role here


const saySomething = function(first='DefaultChaitanya', second='DefaultValueSecond'){
    console.log(`${first} and ${second}`);
}
saySomething(); // DefaultChaitanya and DefaultValueSecond
saySomething('Hello Man'); // Hello Man and DefaultValueSecond
saySomething('Cricket', 'Football'); // Cricket and Football