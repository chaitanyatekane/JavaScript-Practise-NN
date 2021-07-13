// creating and removing elements

/*
const ul = document.querySelector('ul');
ul.remove();
*/

/*
this will now remove ul tag from html DOM completely
*/



// removing li item form dom by clicking on li element
/*
const eachLiDelete = document.querySelectorAll('li');
eachLiDelete.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();
    });
});
*/

/*
here, whenever user will click on any of the li element
in html dom then that particular element will be deleted or removed 
from html dom
*/


// adding new li element on html dom by clicking on button on html dom
/*
const getUlTag = document.querySelector('ul');
const btnClick = document.querySelector('button');
btnClick.addEventListener('click', () => {
    getUlTag.innerHTML += '<li>New Item Added</li>';
});
*/

/*
here, when user will click on button, then new li element will be appear on html dom,
if user clicks two times on button then two li elements will be added
on html dom directly on browser
*/


/*
const getUlTag = document.querySelector('ul');
const btnClick = document.querySelector('button');
btnClick.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Added New Li Element';
    getUlTag.append(li); // append method
});
*/

/*
this is same as previous example but we have use here .createElement
which is good practice.
here when user will click on button then new li element will be added at end or from bottom side
note :- elements will be added at end because we have used here append method here
*/


const getUlTag = document.querySelector('ul');
const btnClick = document.querySelector('button');
btnClick.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Added New Li Element';
    getUlTag.prepend(li); // prepend method
});
/*
this is same as previous example only difference is we have added prepend method here instead of append
here, when user will click on button then new li element will be added at beginning or from top side
note :- elements will be added from top because we have used here prepend method here
*/