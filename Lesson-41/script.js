// objects in arrays

const blogs = [
    {title: 'javascript essentials', likes: 60},
    {title: 'python essentials', likes: 90}
];
console.log(blogs); // (2) [{…}, {…}]
console.log(blogs[0]); // {title: "javascript essentials", likes: 60}
console.log(blogs[1]); // {title: "python essentials", likes: 90}
console.log(blogs[0].title); // javascript essentials
console.log(blogs[1].likes); // 90


// use-case below :- 
let user = {
    name: 'sonu',
    age: 30,
    email: 'chaitanyatekne5@gmail.com',
    location: 'India',
    blogs: [
        {title: 'machine learning essentials', likes: 100},
        {title: 'artificial intelligence', likes: 200}
    ],
    logBlogs3: function(){
        console.log("Now We Will Get Each Item!!");
        this.blogs.forEach(eachBlogItem => { 
            console.log(eachBlogItem.title, eachBlogItem.likes);
        });
    }
};
user.logBlogs3();
/* 
Now We Will Get Each Item!!
machine learning essentials 100
artificial intelligence 200
*/