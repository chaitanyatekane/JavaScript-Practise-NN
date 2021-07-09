// common string methods

let email = 'chaitanyatekne5@gmail.com';
let result = email.lastIndexOf('a');
console.log(result);

let firstName = 'Chaitanya';
let sliceName = firstName.slice(2,6);
console.log(sliceName);

let nameSubstr = email.substr(3,6);
console.log(nameSubstr);

let replaceMail = email.replace('c', 'v');
console.log(replaceMail);

let replaceA = email.replace('a', 'z');
console.log(replaceA);