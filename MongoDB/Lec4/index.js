const express = require ('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://prakharshahi9935:pDyQ0Uv2av0rbGZ9@cluster0.5ozgjut.mongodb.net/')
.then(()=>{
    console.log("Connected");
})
.catch((e)=>{
    console.log("Error:", e);
})


app.get('/', (req,res)=>{
    res.send
})




app.listen(8080, ()=>{
    console.log("server Connected successfully"); 
})