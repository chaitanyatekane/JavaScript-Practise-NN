// other ways to query the DOM

// get an element by their ID
const getID = document.getElementById('page-title');
console.log(getID); 
// <h1 id="page-title">The DOM</h1>


// get elements by their class name
const getEleByClaName = document.getElementsByClassName('error');
console.log(getEleByClaName);
// HTMLCollection(2) [p.error, div.error]


// get elements by their tag name
const getEleByTaNam = document.getElementsByTagName('p');
console.log(getEleByTaNam);
// HTMLCollection(3) [p, p, p.error]
console.log(getEleByTaNam[0]);
// <p>hello world</p>
console.log(getEleByTaNam[2]);
// <p class="error">first error message</p>