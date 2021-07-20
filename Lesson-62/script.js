// basic form validations

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        // feedback good info
        feedback.textContent = 'Valid Username';
    }else{
        // feedback help info
        feedback.textContent = 'Invalid Username';
    }
});

/*
here when user will type valid username 
i.e. [single word which contains uppercase or lowercase characters and it should between
i.e. total number of characters should be between 6 to 12 (including 6 and 12) then it is valid]
and now if user click on submit button then if it is valid then
"Valid Username" will come below submit button because we have use their textContent and if
it is not valid then "Invalid Username" will come below submit button
Below submit button means in div which has class="feedback" (.feedback)
*/