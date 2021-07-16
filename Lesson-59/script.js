// Submit Events

const form = document.querySelector('.signup-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.username.value);
});

/*
Here when user type something in input field and then submit that, then
the value or text they submitted gets consoled out
*/

/*
here we have used e.preventDefault()
this will not refresh page when we submit our form
if not written this then default behaviour is when we submit form
then the page gets refresh automatically
*/


/*
console.log(form.username.value);
here in form it will search for username and we have id username in form
so this is working
best case is to use directly by using form.(something) rather than again query selecting
(i.e. no need to use more steps e.g. consider below example)
*/


// same thing we are going to do but there will be one more step 
// don't do this, instead use upper method which we have used
// this is just for understanding purpose


/*
const newForm = document.querySelector('.signup-form');
const getUserName = document.querySelector('#username');
newForm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(getUserName.value);
});
*/

/*
this is also work because in form it will search for username and 
in name="username" it will find
so this is also working, but this takes one more step
so instead of this, upper method is good to use
*/