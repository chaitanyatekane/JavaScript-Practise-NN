// the query selector

const para = document.querySelector('p');
console.log(para); // <p>Hello, World</p>

const para1 = document.querySelector('.error');
console.log(para1); // <p class="error">this is an error message</p>

const para3 = document.querySelector('div.error');
console.log(para3); // <div class="error">this is another error</div>

const para4 = document.querySelectorAll('p');
console.log(para4); // NodeList(3) [p, p, p.error]
console.log(para4[0]); // <p>Hello, World</p>
console.log(para4[1]); // <p>I am Chaitanya</p>
console.log(para4[2]); // <p class="error">this is an error message</p>


console.log('foreach testing 😂')
const eachPTag = document.querySelectorAll('p');
eachPTag.forEach(element => {
    console.log(element);
});
/*
<p>Hello, World</p>
<p>I am Chaitanya</p>
<p class="error">this is an error message</p>
*/


const errorEle = document.querySelectorAll('.error');
console.log(errorEle); // NodeList(2) [p.error, div.error]