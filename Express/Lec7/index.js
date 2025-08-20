const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const {v4:uuid}= require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})); // for form we use this, it is the middleware
app.use(express.json()) ; // for json
app.use(methodOverride('_method')); // method overriding for post to patch


// dummy array instead of DB
var blogs = [
    {
        //id:1,
        id : uuid(),// return id of string
        author : "Samarth  Vohra",
        comment : "Kamaega tabhi khaega"
    },
    {
        // id :2,
        id : uuid(),
        author : "Yuvi",
        comment : "Thala for a reason"
    },
    {
        // id :3,
        id : uuid(),
        author : "Priyanshu",
        comment : "Level sabka niklega"
    },
    {
        // id :4,
        id : uuid(),
        author : "Durgesh",
        comment : "aaja meri jaan"
    },
    {
        // id :5,
        id : uuid(),
        author : "Nillu",
        comment : "cycle tutega"
    }
]



// task 1: display all blogs read
app.get('/blogs',(req,res)=>{
    res.render('blogs/index', {blogs})
})


// task 2: show form to make new blog
// create
// form
app.get('/blog/new', (req,res)=>{
    res.render('blogs/new')
})

// task 3: to add a new blog in the database
app.post('/blogs', (req,res)=>{
    console.log(req.body);// undefined
    
    let {author,comment} = req.body;
    blogs.push({id:uuid(),author,comment})
    // res.send("blog created successfully")
    res.redirect('/blogs')// no need to create new page redirect to any old page
                        // redirect ke time pr address dena padta h /blogs
                        // render ke time pr sirf file name index or blogs
                        // render se get request hit hoti h
})

// task 4: to show info about 1 particular blog
// dynamic routing is a process & pathpara
app.get('/blogs/:id', (req,res)=>{
    let {id} = req.params;// string
    let found = blogs.find((blog)=> {
       return blog.id === id;
    })
    //console.log(found);
    res.render('blogs/show',{found})
})


// task 5: edit page for the paricular blog
app.get('/blogs/:id/edit', (req,res)=>{
    let {id} = req.params;
    let found = blogs.find( (blogs)=> blogs.id === id)
    res.render('blogs/edit', {found});
})


// task 6 :- actually editing the blog using patch, not put
// in editing name/author never change
// means partial change therfore we use patch
// in editing we have to also provide previous comment
app.patch('/blogs/:id', (req,res)=>{
    let {id} = req.params;
    let found = blogs.find( (blogs)=> blogs.id == id)
    let {comment} = req.body;
    found.comment= comment;// changing already present comment
    res.redirect('/blogs');
})

// task 7:- Delete particular blog
// to delete we have to use Delete method 
// to use Delete method we have to convert Post to Delete using method-overriding
// since this Post is present in form so we have to use form to delete a particular blog



app.delete('/blogs/:id', (req,res)=>{
    let {id} = req.params;
    
    // blogs.pop(found); // this will delete last element
    let newArray = blogs.filter(blog=> blog.id != id)
    blogs = newArray;
    res.redirect('/blogs')
})


// let arr3 =[10,25,35,40,50];
// let ret3=arr3.filter(function(item,index){ 
//     if (item % 10==0){
//         return true;// it can only return true,false
//     }
//     return false;
// })
// console.log(ret3);



app.get('/', (req,res)=>{
    //res.send("welcome to home route");
    res.render('blogs/root')
})


app.listen(8080, ()=>{
    console.log("server connected at port 8080");
})