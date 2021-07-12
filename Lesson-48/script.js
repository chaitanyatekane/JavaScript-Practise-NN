// adding and changing page content

const firstPara = document.querySelector('p');
console.log(firstPara); 
// <p>hello world</p>
console.log(firstPara.innerText); 
// hello world


firstPara.innerText = 'Changed Text Here'; // // will change text and will reflect change on browser
console.log(firstPara.innerText);
// Changed Text Here


const allPTag = document.querySelectorAll('p');
allPTag.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' added new text'; // will reflect change on browser
});
// Changed Text Here
// chaitanya here
// first error message
// this is content


allPTag.forEach(para => {
    console.log(para.innerText);
});
// Changed Text Here added new text
// chaitanya here added new text
// first error message added new text
// this is content added new text


const getHTML = document.querySelector('.content');
console.log(getHTML); 
// NodeList [div.content]
console.log(getHTML.innerHTML);
// <p>this is content added new text</p>
getHTML.innerHTML = '<h3>I have changed content and html as well using innerHTML</h3>'; // will reflect change on browser
console.log(getHTML.innerHTML);
// <h3>I have changed content and html as well using innerHTML</h3>
console.log(getHTML.innerText);
// I have changed content and html as well using innerHTML


/*
+= is use to append
= is use to override
*/


const addUnOrderedList = document.querySelector('.adduol');
const listOfPeoples = ['Vaishnavi', 'Vrushali', 'Rajnandani', 'Sakshi']
listOfPeoples.forEach(person=>{
    addUnOrderedList.innerHTML += `<p>${person} Added</p>`; // will reflect change on browser 
});


console.log(addUnOrderedList.innerHTML);
/*
<h3>Unordered List of Different People</h3>
<p>Vaishnavi Added</p><p>Vrushali Added</p><p>Rajnandani Added</p><p>Sakshi Added</p>
*/