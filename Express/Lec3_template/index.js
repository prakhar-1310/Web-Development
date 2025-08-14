const express = require('express')
const app = express();
const path = require('path');
// ejs -> use to view template
// ejs -> view engine
// view engine : with the help of this engine we can view our templates


app.set("view engine", "ejs"); // view engine to set kr dia hai taki templates dekh pao

app.set('views' , path.join(__dirname,'views'))


// root route
app.get('/',(req,res)=>{
    res.render('index');// views ke baad ka path
})

// random file route
// app.get('/random', (req,res)=>{
//     res.render('random');
// })

// Note: we will write least possible JS logic inside our ejs
// so  we will write our js logic in js file and then send it our ejs file so that it can be render(or show)

app.get('/random', (req,res)=>{
    let num = Math.floor(Math.random()*100);
    res.render('random',{num});
})



const todos = ['go to gym', 'study', 'drink water'];
app.get('/todo', (req,res)=>{
    res.render('todo', {todos})
    res.render('todo', {todos:todos})
})



app.listen(8080, ()=>{
    console.log("Server started at 8080 port");
})