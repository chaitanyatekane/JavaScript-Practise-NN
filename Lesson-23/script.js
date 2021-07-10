// else and else if

const age = 15;
if(age>20){
    console.log("you are over 20");
}else{
    console.log("you are below 20");
}
// you are below 20

const arr = ['chaitanya', 'mario', 'harry'];
if(arr.length>3){
    console.log("great");
}else{
    console.log("must be greater than 3")
}
// must be greater than 3

const wordLen = 'password';
if(wordLen.length<=5){
    console.log("less than equal to 5");
}else if(wordLen.length<=8){
    console.log("less than equal to 8")
}else{
    console.log("greater than 8");
}
// less than equal to 8

const newWord = 'hello';
if(newWord.length<=2){
    console.log('less than equal to 2');
}else if(newWord.length<=4){
    console.log('less than equal to 4');
}else{
    console.log('greater than 4');
}
// greater than 4