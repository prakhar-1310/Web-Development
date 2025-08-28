const express = require ('express');
const app = express();
const mongoose = require ('mongoose')
const seedDB = require('./seed')
const cors = require('cors');
const quoteRoutes = require('./apis/quoteRoutes')
mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(() =>{
    console.log('DB Connected!');
})
.catch((err)=>{
    console.log(err); 
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors({origin: ['http://localhost:3000']})); // before using quoteRoutes

app.get('/hello', (req,res)=>{
    res.status(200).json({msg:"Hello from quotes App developer"})
});

app.use(quoteRoutes);

// seedDB();


const port = process.env.Port || 8080;
app.listen(port,()=>{
    console.log("Server connected Successfully");
})
