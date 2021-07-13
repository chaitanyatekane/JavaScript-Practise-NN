// parents, children & siblings

const articleChildren = document.querySelector('article');
console.log(articleChildren.children);
// HTMLCollection(5) [h2, p, p, p, div]

/*
here we cannot use forEach directly because we have here HTMLCollection, 
we can use forEach only on array and on NodeList
so now first we need to convert this HTMLCollection into an array 
and then use forEach
*/ 

// converting HTMLCollection into Array
console.log(articleChildren.children);
// HTMLCollection(5) [h2, p, p, p, div]
console.log(Array.from(articleChildren.children));
// (5) [h2, p, p, p, div]

/*
now we have converted HTMLCollection into an Array 
note :- this doesn't alter an original value for example
*/
console.log(articleChildren.children); 
// HTMLCollection(5) [h2, p, p, p, div]


Array.from(articleChildren.children).forEach(eachEle => {
    eachEle.classList.add('added-new-class-to-each-tag-inside-article');
});
// will reflect change on browser

/*
what happened here is we have added new class to each and every 
tag inside article tag
*/


// parentElement
const title = document.querySelector('h2');
console.log(title.parentElement);
// <article>...</article>
console.log(title.parentElement.parentElement);
// <body cz-shortcut-listen="true">...</body>

// sibling relationship
console.log(title.nextElementSibling);
// <p>hello i am chaitanya tekane and i am second year student</p>
console.log(title.previousElementSibling);
// null
/*
because we don't have any sibling before h2 tag
*/
console.log(title.nextElementSibling.parentElement.children);
// HTMLCollection(5) [h2.added-new-class-to-each-tag-inside-article, p.added-new-class-to-each-tag-inside-article, p.added-new-class-to-each-tag-inside-article, p.added-new-class-to-each-tag-inside-article, div.added-new-class-to-each-tag-inside-article]