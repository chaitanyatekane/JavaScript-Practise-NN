// keyboard events


const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


// validation
form.addEventListener('submit', e => {
  e.preventDefault();

  const username =  form.username.value;

  if(usernamePattern.test(username)){
    feedback.textContent = 'that username is valid!'
  } else {
    feedback.textContent = 'username must contain only letters & be between 6 & 12 characters';
  }
});


// live feedback
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  if(usernamePattern.test(e.target.value)){
    //console.log('passed');
    form.username.setAttribute('class', 'success');
  } else {
    //console.log('failed');
    form.username.setAttribute('class', 'error');
  }
});

/*
Here when user will press key uptil 5 keys then the div will have
crimson border and when the characters becomes 6 and above 6 uptil 
12 then div will have border limegreen
here, we have used two event listeners
'submit' and 'keyup'

(for better understanding, revise and take reference from previous lesson)
*/