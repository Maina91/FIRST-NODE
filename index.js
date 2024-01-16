const post = require('./post');

const  printMyName = (name) => {
    console.log(name)
}
const post1 = post.createPost('My first blog', 'This is my first blog');
console.log(post1)
printMyName('Japheth')
printMyName('Edu')