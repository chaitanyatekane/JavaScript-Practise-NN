// Testing Regular Expression Patterns


const username = 'chaitanya';
const pattern = /^[a-z]{6,}$/;
let result = pattern.test(username);
if(result){
    console.log('SUCCESS');
}else{
    console.log('FAILED');
}
/*
here single word which contains lowercase alphabets from a to z
and they are at least 6 will be accepted
example :-
chaitanya     -> SUCCESS
tekane     -> SUCCESS
sonu     -> FAILED
chaitanya1     -> FAILED
chaitanya$     -> FAILED
chai tanya     -> FAILED
*/



const newUserName1 = 'chaitanya';
const newPattern = /^[a-z]{6,}$/;
let newResult1 = newUserName1.search(newPattern);
console.log(newResult1); // 0
/*
this will give integer as output, it will find that
particular word then it will give the position of word
and if not found match then it will give -1
*/

const newUserName2 = 'chaitanya1';
let newResult2 = newUserName2.search(newPattern);
console.log(newResult2); // -1

const newUserName3 = '1chaitanya';
let newResult3 = newUserName3.search(newPattern);
console.log(newResult3); // -1

const newUserName4 = '1chaitanya';
const newPattern1 = /[a-z]{6,}/;
let newResult4 = newUserName4.search(newPattern1);
console.log(newResult4); // 1

const newUserName5 = '132chaitanya23';
const newPattern2 = /[a-z]{6,}/;
let newResult5 = newUserName5.search(newPattern2);
console.log(newResult5); // 3

const newUserName6 = '132@!chaitanya23';
const newPattern3 = /[a-z]{6,}/;
let newResult6 = newUserName6.search(newPattern3);
console.log(newResult6); // 5


/*
there is difference between /[a-z]{6,}/ and /^[a-z]{6,}$/
*/