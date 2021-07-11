// callback functions in action

// get a reference to the 'ul
const ul = document.querySelector('.people');
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html); //<li style="color: purple">mario</li><li style="color: purple">luigi</li><li style="color: purple">ryu</li><li style="color: purple">shaun</li><li style="color: purple">chun-li</li>
ul.innerHTML = html; 
// now you will see result of this in browser
