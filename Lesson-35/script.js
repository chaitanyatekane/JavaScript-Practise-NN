// forEach method and callback function

// callback function

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}
myFunc(function(value){
    console.log(value);
}); // 50

// arrow function representation of above 
const newMyFunc = (newCallbackFunc) => {
    let newValue = 50;
    newCallbackFunc(newValue);
}
newMyFunc(newValue => {
    console.log(newValue);
}); // 50



// forEach method

let people = ['mario', 'sonu', 'chaitanya', 'luigi', 'ryu'];

people.forEach(function(){
    console.log('For Each Element of Array!');
});
// For Each Element of Array!
// For Each Element of Array!
// For Each Element of Array!
// For Each Element of Array!
// For Each Element of Array!

people.forEach(function(nameOfPerson){
    console.log(nameOfPerson);
}); 
// mario
// sonu
// chaitanya
// luigi
// ryu


// using arrow function
people.forEach(nameOfPerson => {
    console.log(nameOfPerson);
});
// mario
// sonu
// chaitanya
// luigi
// ryu


// two parameters
people.forEach((nameOfPerson, index) => {
    console.log(nameOfPerson, index);
});
// mario 0
// sonu 1
// chaitanya 2
// luigi 3
// ryu 4


const logPerson = (nameOfPerson, index) => {
    console.log(`${index} - Hi ${nameOfPerson}`);
};
people.forEach(logPerson);
// 0 - Hi mario
// 1 - Hi sonu
// 2 - Hi chaitanya
// 3 - Hi luigi
// 4 - Hi ryu