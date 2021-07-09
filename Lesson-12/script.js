// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
let concatWay = title + ' by ' + author + ' has ' + likes + ' likes';
console.log(concatWay);

// template string way
let templateWay = `${title} by ${author} has ${likes} likes`;
console.log(templateWay);

// creating html templates
let htmlTempWay = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(htmlTempWay);