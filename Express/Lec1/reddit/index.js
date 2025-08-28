const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("root route h")
})

// app.get('/r/banana', (req,res)=>{
//     res.send("I am at banana page")
// })

// app.get('/r/apple', (req,res)=>{
//     res.send("I am at apple page")
// })




//->localhost:8080/r/some_data
// here starting part(subreddit) is same for all request
// request is also an object
// request contains path parameter and query parameter they are also an object
// localhost8080/r/:  <-- this colon show subreddit
// we get subreddit from request object (path parameter)
// path parameter means params object
// from params we get subreddit



app.get('/r/:subreddit',(req,res)=>{
    // console.log(req.params);
    let {subreddit} = req.params;
    res.send(`<h2>my route was ${subreddit} </h2>`)
})


app.listen(8080, ()=>{
    console.log("Server started at port 8080");
})