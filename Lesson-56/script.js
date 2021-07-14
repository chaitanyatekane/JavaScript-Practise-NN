// more dom events - copy event, mousemove event, wheel event


// copy event
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('OI, My Content Is CopyRight');
});
/*
what happens here is,
when user copies the content present in tag of class="copy-me" then in
console "OI, My Content Is CopyRight" gets printed/consoled out
*/


// mousemove event
const box =document.querySelector('.box');
box.addEventListener('mousemove', e => {
    box.textContent = `x position - ${e.offsetX} 
                       y position - ${e.offsetY}`;
                       // offsetX is the position in pixels of the mouse cursor from left of the container/box
                       // offsetX is the position in pixels of the mouse cursor from top of the container/box
});
/*
what happens here is,
when user move the mouse over the tag of class ".box" then the value of
offsetX and offsetY replaces over the content of that tag (change we can see on browser directly when moving our mouse)
instead of "Move The Mouse Around This Box"
x position - 219 y position - 22
will be in box (on html dom on browser)
*/


// wheel event
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY); // this is same as offsetX and offsetY but now pageX and pageY is relative to whole page while offset was relative to box/container
});
/*
what happens here is,
when we scroll by using mouse wheel on our html dom document (i.e. on browser)
then we will get the values of 'e.pageX' and 'e.pageY' in console
example :- 405 389
*/