const express = require('express');
const app = express();
const path = require('path');

app.set ('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/user',(req,res)=>{
    console.log(req.query);
    let {author , comment} = req.query;
    console.log(author,comment);
    
    res.send("Added successfully")
})


app.listen(8080, ()=>{
    console.log("Server connected at port 8080");
})