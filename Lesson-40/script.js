// this keyword in javascript

let user = {
    name: 'sonu',
    age: 30,
    email: 'chaitanyatekne5@gmail.com',
    location: 'India',
    blogs: ['hello', 'world', 'why to study', 'javascript essentials'],
    login: function(){
        console.log('user logged in');
    },
    logout: function(){
        console.log('user logged out');
    },
    logBlogs1: function(){
        console.log(this);
    },
    logBlogs2: function(){
        console.log(this.blogs);
    },
    logBlogs3: function(){
        console.log("Now We Will Get Each Item!!");
        this.blogs.forEach(eachBlogItem => { // here we have used normal function, so we can use here this keyword and we get exactly what we want
            console.log(eachBlogItem);
        });
    }
};

 
console.log(this); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
user.logBlogs1(); // {name: "sonu", age: 30, email: "chaitanyatekne5@gmail.com", location: "India", blogs: Array(4), …}
user.logBlogs2(); // (4) ["hello", "world", "why to study", "javascript essentials"]
user.logBlogs3(); 
/*
Now We Will Get Each Item!!
hello
world
why to study
javascript essentials
*/


// arrow function works differently with 'this' keyword
// consider below example :- 
let newUser = {
    newName: 'Mario',
    email: 'mario@gmail.com',
    login: () => {
        console.log(this);
    }
};
newUser.login(); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// here don't use arrow function otherwise it will print window object
// we can use instead normal function like in previous example 


/*
instead of
login: function(){}
we can also use
login(){}
here we have removed only colon and 'function' keyword
for better understanding consider below example
*/

let newUser3 = {
    name1: 'sonu',
    age1: 30,
    email1: 'chaitanyatekne5@gmail.com',
    location1: 'India',
    blogs1: ['hello', 'world', 'why to study', 'javascript essentials'],
    newLogin(){
        console.log('user logged in');
    },
    newLogout(){
        console.log('user logged out');
    }
};
newUser3.newLogin(); // user logged in
newUser3.newLogout(); // user logged out