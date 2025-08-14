const express = require('express');  // returns a function
const app = express();  // return an object
// this app is an instance for entire application
// console.log(app);

const port = 8080; // server running on this port
// machine is called local host




// adding app.use
// app.use((req,res)=>{ // will run on every incoming request // accepts a callback function
//     // console.log(req);
//     // console.log(res);
//     // console.log("You made a request");
//     res.send('<h1>mmy meri sadi krdo may june july m</h1>')
// })



// app.use('/middleware',(req,res)=>{ // will run on specific incoming request // accepts a callback function
//     // console.log(req);
//     // console.log(res);
//     // console.log("You made a request");
//     res.send('<h1>i am at middleware</h1>')
// })
//http://localhost:8080/middleware




app.get('/',(req, res)=>{ // accepts path and a callback function as an argument
    res.send("welcome to root route")
})

app.get('/home', (req, res)=>{
    res.send('<h1>balle Balle hii<h1>')
})
//http://localhost:8080/home




// bad request ko handle
// always at last
app.use((req, res) => {
    res.status(404).send("you hit a bad request, try something else");
});



// ask server to listen to ur request
app.listen(port, ()=>{
    console.log(`server connected at port : ${port}`); 
})


// to kill the server ctrl+c