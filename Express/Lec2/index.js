const express = require('express');
const app = express();


// url = localhost:8080/search?search=movies+game

app.get('/search', (req,res)=>{
    // console.log(req.query); //[Object: null prototype] { search: 'movies game' }
    // console.log(req.query.search); //movies game
    let {search} = req.query; // destructure
    console.log(search);// movies game
    // res.send(search);
    res.send(req.query.search)

})




app.listen(8080 , ()=>{
    console.log("Server connected at port 8080");
})