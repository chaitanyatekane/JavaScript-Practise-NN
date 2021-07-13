// event basics (click events)

/*
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('User Clicked Me!');
});
*/

/*
here, when user will click on button then,
each time 'User Clicked Me!' will be consoled out
*/

/*
const allLiTags = document.querySelectorAll('li');
allLiTags.forEach(eachLi => {
    eachLi.addEventListener('click', () => {
        console.log('User Clicked On One Li Tag');
    });
});
*/

/*
here whenever user will click on li element/tag
(li tag item) then 'User Clicked On One Li Tag' will be 
consoled out
but we know here are 4 li tags, and we don't know 
that user is clicking on exactly which li tag
so for this consider below example
*/

/*
const allLiTagsWithMoreInfo = document.querySelectorAll('li');
allLiTagsWithMoreInfo.forEach(eachLi => {
    eachLi.addEventListener('click', e => {
        console.log(e.target);
        // console.log(eachLi); // this will also work
    });
});
*/

/*
here, whenever user will click on li element then we
will get direct location or we understand which li is clicked
and in console we will get that element which is clicked
for example :
when user clicked on first li element then in console 
<li>buy milk</li>
will be consoled out
*/

const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', e => {
        e.target.style.textDecoration = 'line-through';
    });
});
/*
here whenever user will click on li element then that style will be
applied to that particular element (here style is 'line-through' i.e. when user will
click on li element then that li element get style of 
'line-thorough')
*/