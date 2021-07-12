// getting and setting attributes


const getAnchorTag = document.querySelector('a');
console.log(getAnchorTag.getAttribute('href'));
// https:// www.google.com

getAnchorTag.setAttribute('href', 'https://www.youtube.com'); // will reflect change in link on browser i.e. now it is linked to youTube previously it was linked to google
console.log(getAnchorTag.getAttribute('href'));
// https:// www.youtube.com
console.log(getAnchorTag.innerText);
// Link To Something Cool
getAnchorTag.innerText = 'YouTube Link'; // will reflect change on browser
console.log(getAnchorTag.innerText);
// YouTube Link


const getPTag = document.querySelector('p');
console.log(getPTag.getAttribute('class'));
// notgood

getPTag.setAttribute('class', 'allgood'); // will reflect change (will not directly on browser, but you can check by inspecting)
console.log(getPTag.getAttribute('class'));
// allgood
console.log(getPTag.innerText);
// Hello People
getPTag.innerText = 'Added New Class Called allgood'; // will reflect change on browser
console.log(getPTag.innerText);
// Added New Class Called allgood


/*
we can also add more attributes to an element 
*/
getPTag.setAttribute('style', 'color:red;'); // will reflect change on browser
console.log(getPTag.getAttribute('class'));
// allgood
console.log(getPTag.getAttribute('style'));
// color:red;