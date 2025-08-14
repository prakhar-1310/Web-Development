const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// static file ko use karne ke liye we should render css file at every encounter(so we will use middleware 'app.use')
// middleware is a function which run on every incomming requests
// middleware is run between once the request is initiated and before the response
// middleware accept one callback function -> and this bb accept three argument req, res, next
// there can be many middleware, and any middleware can send the res and end the cycle or send the req to another middleware or the server 
app.use(express.static(path.join(__dirname,'public')));

// middleware can be used for authentication
// let password = 800;
// app.use((req,res,next)=>{  // this is for every path
//     if(password === 800){ // middleware is just like broker / dalla / namit
//         next();
//     }
//     else{
//         res.send("Sorry na ho payega")
//     }
// })


let password = 800;  
app.use('/home',(req,res,next)=>{  // this is for home path path
    if(password === 800){ 
        next();
    }
    else{
        res.send("Sorry na ho payega (dukhi andaaj m)")
    }
})


app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/home/bye', (req,res)=>{
    res.send("hello from root route")
})


app.listen(8080, ()=>{
    console.log("server connected at port 8080");
})