// for loops

for(let i = 0; i < 5; i++){
    console.log("value of i is ", i);
}
// value of i is 0
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4

const arr = ['mario', 'julia', 'chaitanya', 'john', 'harry'];
for(let i = 0; i < arr.length ; i++){
    console.log("name is", arr[i]);
}
// name is mario
// name is julia
// name is chaitanya
// name is john
// name is harry

const newArr = ['mario', 'julia', 'chaitanya', 'john', 'harry'];
for(let i = 0; i < newArr.length ; i++){
    let html = `<h1>${newArr[i]}</h1>`;
    console.log(html);
}
// <h1>mario</h1>
// <h1>julia</h1>
// <h1>chaitanya</h1>
// <h1>john</h1>
// <h1>harry</h1>