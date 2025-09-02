const express = require ('express')
const app = express();
const http = require('http'); // already present in node module dont need to install
const server = http.createServer(app); // accepts request listener
const path = require('path');
const socketio = require('socket.io'); // need to install first
const io = socketio(server); // this will create a web-socket
// this io is an object and have many methods
// io.on()-> accepts an event


app.use('/', express.static(path.join(__dirname, 'public')));

const users = {};

io.on('connection',(socket)=>{ // this establishes the connection
    console.log(`connection established ${socket.id}`);

    socket.on('send-msg',(data)=>{ // listen some event , jo client side se send hua tha
        // console.log(data);
        // socket.emit('received-msg',{ // client side acknowledgement send
        io.emit('received-msg',{ // used to see message of others too
            msg: data.msg,
            id: socket.id,
            username : users[socket.id]
        })
    })

    socket.on('login', (data)=>{
        users[socket.id]= data.username;//mapping the socketid with username
    })
})






const port = process.env.PORT || 3000;

server.listen(port, (req,res)=>{
    console.log("Server connected successfully");
})