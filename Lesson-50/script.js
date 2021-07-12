// changing css styles


const getH1Tag = document.querySelector('h1');
getH1Tag.setAttribute('style','margin:50px;'); // will reflect change
/*
what happened here is, style property get overwrites, i.e. color property now we don't have
we have now only margin property in style
and we don't want this to be happened
so now what we can do
so that is why style property comes into picture
*/


const getH2Tag = document.querySelector('h2');
console.log(getH2Tag.style);
// CSSStyleDeclaration {0: "color", additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …}
console.log(getH2Tag.style.color);
// red

// adding css styles without overwriting
getH2Tag.style.margin = '50px'; // will reflect change on browser
/*
so what happened here is, now we have one more css style property called margin
and now we also have previous css style property i.e. color as red
so here now we have not overwritten
so this is the best way to add or change css style properties
*/


// adding css styles with one overwrite value of color and add new style property called fontSize
const getH3Tag = document.querySelector('h3');
getH3Tag.style.color = ' orange'; // will overwrite previous color red to now orange, will reflect change on browser
getH3Tag.style.fontSize = '40px'; // added one more css style property called fontSize, will reflect change on browser


/*
note :-
in css we write font-size but 
in javascript we need to use camelCasing and remove that hypen symbol
so we write in js as fontSize
*/


// now what if you want to delete any css style property then
// in this case pass empty string
const getH4Tag = document.querySelector('h4');
getH4Tag.style.margin = '100px'; // here we are adding new css style property called margin 
getH4Tag.style.fontSize = '30px'; // here we are adding new css style property called fontSize
getH4Tag.style.color = 'gray'; // here we are overwriting css style property called color, first color was red and now we have overwritten and set it as gray
console.log(getH4Tag.style); 
// CSSStyleDeclaration {0: "color", 1: "margin-top", 2: "margin-right", 3: "margin-bottom", 4: "margin-left", 5: "font-size", additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …}
getH4Tag.style.margin = ''; // we have passed empty string here because we want to remove this css style property called margin, first we added then now we are removing, now we don't have css style property called margin
console.log(getH4Tag.style);
// CSSStyleDeclaration {0: "color", 1: "font-size", additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …}