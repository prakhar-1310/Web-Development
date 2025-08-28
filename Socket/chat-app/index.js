const express = require ('express')
const app = express();
const http = require('http'); // already present in node module dont need to install
const server = http.createServer(app); // accepts request listener
const path = require('path');


app.use('/', express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 3000;

app.listen(port, (req,res)=>{
    console.log("Server connected successfully");
})