// adding and removing classes


const getPTag = document.querySelector('h4');
// getting all classes
console.log(getPTag.classList); 
// DOMTokenList ["error", value: "error"]


// adding class
getPTag.classList.add('fontSize'); // will reflect change on browser
/*
what we have done is added one more class called 
fontSize, now we have two classes for one element error and fontSize
*/

console.log(getPTag.classList);
// DOMTokenList(2) ["error", "fontSize", value: "error fontSize"]


// removing class
getPTag.classList.remove('fontSize'); // will reflect change on browser
/*
what we have done is, removed one class called fontSize, before it has two classes 
called fontSize and error, now have removed fontSize class and we are left with only class called error
*/

console.log(getPTag.classList);
// DOMTokenList ["error", value: "error"]

// adding class
getPTag.classList.add('success'); // will reflect change on browser



const getAllPTag = document.querySelectorAll('p');
getAllPTag.forEach(tag => {
    console.log(tag.innerHTML);
});
/*
lorem error ipsum
lorem success ipsum 
lorem ipsum lorem
lorem ipsum success
error lorem ipsum
lorem ipsum lorem
lorem ipsum error
success lorem ipsum
*/

console.log('Difference between innerHTML & innerText 😂');
getAllPTag.forEach(tag => {
    console.log(tag.textContent);
});
/*
lorem error ipsum
lorem success ipsum 
lorem ipsum lorem
lorem ipsum success
error lorem ipsum
lorem ipsum lorem
lorem ipsum error
success lorem ipsum
*/

/*
now we have got same console in above two scenarios, we have used innerText and innerContext,
still we got same console, why?
it's not same, lets understand how
if we use innerText then we will get all text which is visible
and if we use innerContext then we will get all text inside that particular tag
regardless it has style hidden or display none  
*/


// adding classes based on conditions
getAllPTag.forEach(tag => {
    if(tag.textContent.includes('error')){
        tag.classList.add('error'); // will reflect change on browser
    }
    if(tag.textContent.includes('success')){
        tag.classList.add('success'); // will reflect change on browser
    }
});
/*
what we have done above is added class error and success based on some certain condition
if our p tag's textContext includes error keyword then it will get added class as error
and if our p tag's textContext includes success keyword then it will get added class as success
and if our p tag's textContext does not include error and success then there will be no change
*/


// add class with help of toggle (toggling)
const getClassTitle = document.querySelector('.title');
getClassTitle.classList.toggle('test'); // will add class 'test' if it has no class 'test' before and if it has before class 'test' then it will remove class 'test' (in short toggling)
const getH5Tag = document.querySelector('h5');
console.log(getH5Tag.classList); 
// DOMTokenList(2) ["title", "test", value: "title test"]

getClassTitle.classList.toggle('test'); // will add class 'test' if it has no class 'test' before and if it has before class 'test' then it will remove class 'test' (in short toggling)
console.log(getH5Tag.classList); 
// DOMTokenList ["title", value: "title"]