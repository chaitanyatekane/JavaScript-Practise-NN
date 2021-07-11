// creating an object literals

let user = {
    name: 'sonu',
    age: 30,
    email: 'chaitanyatekne5@gmail.com',
    location: 'India',
    blogs: ['hello', 'world', 'why to study', 'javascript essentials']
};

console.log(user.name); // sonu
console.log(user.age); // 30
user.age = 40;
console.log(user.age); // 40
console.log(user['name']); // sonu
console.log(user['email']); // chaitanyatekne5@gmail.com
user['name'] = 'Chaitanya';
console.log(user['name']); // Chaitanya
const key = 'location';
console.log(user[key]); // India

console.log(typeof user); // object