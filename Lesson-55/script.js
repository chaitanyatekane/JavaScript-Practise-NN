// event bubbling and event delegation 


/*
const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Added New Li Element';
    ul.prepend(li); 
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        console.log('event in LI');
        e.target.remove();
    });
});

ul.addEventListener('click', e => {
    console.log('event in UL');
});
*/

/*
so what happens here is whenever user will click on li element then that 
particular li element will be removed from html dom and in console following will be consoled out
event in LI
event in UL
and this is called event bubbling
*/




/*
const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Added New Li Element';
    ul.prepend(li); 
});

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        console.log('event in LI');
        e.stopPropagation(); // stopPropagation method used here to prevent event bubbling
        e.target.remove();
    });
});

ul.addEventListener('click', e => {
    console.log('event in UL');
});
*/

/*
now what happens here is, when user click on li element then that particular
li element will be removed from html dom and in console following will be consoled
event in LI

Here we have used stopPropagation, so event bubbling has stopped now
so that is why we did not see or get 'event in UL' in console
*/




const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Added New Li Element';
    ul.prepend(li); 
});

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    };
});

/*
what happens here is,
whenever user click on button then new li element called 'Added New Li Element'
gets added and when user click on any li element then that particular li element
also gets removed, and also the li element which you have added just now by clicking
on button, that element also gets removed or deleted from html dom when you
click on that particular li element.
*/




/*
EVENT BUBBLING :-
event bubbling is a method of event propagation in html dom api when an event is in 
an element inside another element, and both elements have registered a handle to that 
event.
it is a process that starts with the element that triggered the event and then bubbles
up to the containing elements in the hierarchy. 
in event bubbling, the event is first captured and handled by the innermost elements
and then propagated to outer elements.


EVENT DELEGATION :-
event delegation is basically a pattern to handle events efficiently. Instead of adding
an event listener to each and every similar element, we can add event listener to a parent
element and call a event on a particular target using (target) property of event object
*/