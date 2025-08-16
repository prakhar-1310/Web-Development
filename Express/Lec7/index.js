const express = require('express');
const app = express();
const path = require('path');

const blogs = [
    {
        id:1,
        author : "Samarth  Vohra",
        comment : "Kamaega tabhi khaega"
    },
    {
        id :2,
        author : "Yuvi",
        comment : "Thala for a reason"
    },
    {
        id :3,
        author : "Priyanshu",
        comment : "Level sabka niklega"
    },
    {
        id :4,
        author : "Durgesh",
        comment : "aaja meri jaan"
    },
    {
        id :5,
        author : "Nillu",
        comment : "cycle tutega"
    }
]

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})); // for form we use this, it is the middleware
app.use(express.json()) ; // for json

// task 1: display all blogs read
app.get('/blogs',(req,res)=>{
    res.render('blogs/index', {blogs})
})


// task 2: show form to make new blog
// create
// form
app.get('/blogs/new', (req,res)=>{
    res.render('blogs/new')
})


// to add a new blog in the database
app.post('/blogs', (req,res)=>{
    console.log(req.body);// undefined
    
    let {author,comment} = req.body;
    blogs.push({id:blogs.length+1,author,comment})
    // res.send("blog created successfully")
    res.redirect('/blogs')// no need to create new page redirect to any old page
})



app.get('/', (req,res)=>{
    res.send("welcome to home route");
})


app.listen(8080, ()=>{
    console.log("server connected at port 8080");
})